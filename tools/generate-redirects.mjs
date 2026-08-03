import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cloudflareRedirectLines, redirects } from "../src/lib/redirects.mjs";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const lines = [...cloudflareRedirectLines(), "/fr/* /:splat 301", ""];

await writeFile(resolve(root, "public/_redirects"), lines.join("\n"));
console.log(
  `Generated ${Object.keys(redirects).length + 1} Cloudflare redirects.`,
);
