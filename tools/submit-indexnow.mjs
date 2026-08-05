import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const SITE = "https://www.probo.com";
const HOST = new URL(SITE).host;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

if (!INDEXNOW_KEY) {
  throw new Error("INDEXNOW_KEY environment variable is not set");
}

async function readKeyFile() {
  const keyFile = resolve(root, "public", `${INDEXNOW_KEY}.txt`);
  const content = (await readFile(keyFile, "utf8")).trim();

  if (content !== INDEXNOW_KEY) {
    throw new Error(`${keyFile} content does not match INDEXNOW_KEY`);
  }
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1].trim(),
  );
}

async function loadXml(distDir, loc) {
  if (existsSync(resolve(distDir, "sitemap-index.xml"))) {
    const pathname = new URL(loc).pathname.replace(/^\//, "");
    return readFile(resolve(distDir, pathname), "utf8");
  }

  const response = await fetch(loc);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${loc}: ${response.status}`);
  }
  return response.text();
}

async function collectSitemapUrls() {
  const distDir = resolve(root, "dist");
  const indexSource = existsSync(resolve(distDir, "sitemap-index.xml"))
    ? resolve(distDir, "sitemap-index.xml")
    : `${SITE}/sitemap-index.xml`;

  const indexXml = existsSync(indexSource)
    ? await readFile(indexSource, "utf8")
    : await (await fetch(indexSource)).text();

  const sitemapLocs = extractLocs(indexXml);
  const urls = new Set();

  for (const loc of sitemapLocs) {
    const xml = await loadXml(distDir, loc);
    for (const url of extractLocs(xml)) {
      urls.add(url);
    }
  }

  return [...urls];
}

async function submitToIndexNow(urlList) {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `IndexNow submission failed: ${response.status} ${response.statusText} ${body}`,
    );
  }
}

await readKeyFile();
const urls = await collectSitemapUrls();

if (urls.length === 0) {
  throw new Error("No URLs found in sitemap");
}

console.log(`Submitting ${urls.length} URLs to IndexNow...`);
await submitToIndexNow(urls);
console.log("IndexNow accepted the submission.");
