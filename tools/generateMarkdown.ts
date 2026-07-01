import type { AstroIntegration } from "astro";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  statSync,
  copyFileSync,
  existsSync,
} from "node:fs";
import { join, dirname, relative, basename } from "node:path";

/**
 * Convert an MDX file to clean markdown by stripping frontmatter,
 * imports, and Astro/Starlight components.
 */
function mdxToMarkdown(content: string): string {
  let lines = content.split("\n");

  // Extract title from frontmatter
  let title = "";
  if (lines[0]?.trim() === "---") {
    const endIdx = lines.indexOf("---", 1);
    if (endIdx > 0) {
      const frontmatter = lines.slice(1, endIdx).join("\n");
      const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m);
      if (titleMatch) {
        title = titleMatch[1];
      }
      lines = lines.slice(endIdx + 1);
    }
  }

  let md = lines
    // Remove import statements
    .filter((line) => !line.match(/^\s*import\s+/))
    .join("\n");

  // Replace <LinkCard title="X" description="Y" href="Z" /> with markdown link
  md = md.replace(
    /<LinkCard\s+title="([^"]+)"\s+description="([^"]+)"\s+href="([^"]+)"\s*\/>/g,
    "- [$1]($3) — $2",
  );

  // Also handle different attribute order
  md = md.replace(
    /<LinkCard\s+title="([^"]+)"\s+href="([^"]+)"\s+description="([^"]+)"\s*\/>/g,
    "- [$1]($2) — $3",
  );

  // Remove <CardGrid> / </CardGrid> wrappers
  md = md.replace(/<\/?CardGrid>/g, "");

  // Remove any remaining JSX/HTML-like component tags (self-closing and open/close)
  md = md.replace(/<\/?[A-Z][a-zA-Z]*[^>]*\/?>/g, "");

  // Add title as H1
  if (title) {
    md = `# ${title}\n${md}`;
  }

  // Clean up excessive blank lines
  md = md.replace(/\n{3,}/g, "\n\n").trim() + "\n";

  return md;
}

/**
 * Convert a built HTML page to clean markdown by extracting text content
 * from the <main> element and converting HTML structures to markdown.
 */
function htmlToMarkdown(html: string): string {
  // Extract title from <title> tag
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const rawTitle = titleMatch?.[1]?.replace(/\s*\|\s*Probo$/, "").trim() || "";

  // Extract the main content area — try <main>, then <article>, then <body>
  let content = "";
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (mainMatch) {
    content = mainMatch[1];
  } else {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
    content = bodyMatch?.[1] || html;
  }

  // Remove <script> and <style> blocks
  content = content.replace(/<script[\s\S]*?<\/script>/gi, "");
  content = content.replace(/<style[\s\S]*?<\/style>/gi, "");

  // Remove <nav>, <header>, <footer> blocks (navigation, not content)
  content = content.replace(/<nav[\s\S]*?<\/nav>/gi, "");
  content = content.replace(/<footer[\s\S]*?<\/footer>/gi, "");

  // Remove SVG elements
  content = content.replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // Remove image tags
  content = content.replace(/<img[^>]*>/gi, "");
  content = content.replace(/<picture[\s\S]*?<\/picture>/gi, "");

  // Convert headings
  content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n");
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n");
  content = content.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n");
  content = content.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n#### $1\n");

  // Convert links
  content = content.replace(
    /<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,
    "[$2]($1)",
  );

  // Convert strong/bold
  content = content.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**");

  // Convert em/italic
  content = content.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*");

  // Convert list items
  content = content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");

  // Remove remaining list wrappers
  content = content.replace(/<\/?(ul|ol)[^>]*>/gi, "\n");

  // Convert paragraphs
  content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n");

  // Convert <br> to newline
  content = content.replace(/<br\s*\/?>/gi, "\n");

  // Convert table elements
  content = content.replace(/<th[^>]*>([\s\S]*?)<\/th>/gi, "| $1 ");
  content = content.replace(/<td[^>]*>([\s\S]*?)<\/td>/gi, "| $1 ");
  content = content.replace(/<\/tr>/gi, "|\n");
  content = content.replace(/<tr[^>]*>/gi, "");
  content = content.replace(/<\/?(table|thead|tbody)[^>]*>/gi, "\n");

  // Strip all remaining HTML tags
  content = content.replace(/<[^>]+>/g, "");

  // Remove leftover attribute strings (e.g. class="..." that survived tag stripping)
  content = content.replace(/\s*class="[^"]*"/g, "");

  // Decode common HTML entities
  content = content.replace(/&amp;/g, "&");
  content = content.replace(/&lt;/g, "<");
  content = content.replace(/&gt;/g, ">");
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&#39;/g, "'");
  content = content.replace(/&nbsp;/g, " ");
  content = content.replace(/&mdash;/g, "—");
  content = content.replace(/&ndash;/g, "–");
  content = content.replace(/&rarr;/g, "→");

  // Add title as H1 if not already present
  if (rawTitle && !content.trim().startsWith("# ")) {
    content = `# ${rawTitle}\n${content}`;
  }

  // Clean up excessive whitespace
  content = content.replace(/[ \t]+/g, " ");
  content = content.replace(/\n /g, "\n");
  content = content.replace(/\n{3,}/g, "\n\n");
  content = content.trim() + "\n";

  return content;
}

/**
 * Recursively find all files matching an extension in a directory.
 */
function findFiles(dir: string, ext: string): string[] {
  const results: string[] = [];
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      // Skip underscore-prefixed files and directories, matching Astro's
      // convention for partials/templates that are not published pages.
      if (entry.startsWith("_")) continue;
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        results.push(...findFiles(fullPath, ext));
      } else if (entry.endsWith(ext)) {
        results.push(fullPath);
      }
    }
  } catch {
    // Directory doesn't exist, return empty
  }
  return results;
}

/**
 * Astro integration that generates markdown versions of all pages
 * into dist/md/ at build time.
 */
export function generateMarkdown(): AstroIntegration {
  return {
    name: "generate-markdown",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const distDir = dir.pathname;
        const mdDir = join(distDir, "md");
        const rootDir = join(dirname(new URL(import.meta.url).pathname), "..");

        // Process docs MDX files
        const docsDir = join(rootDir, "src/content/docs/docs");
        const docsFiles = findFiles(docsDir, ".mdx");
        for (const file of docsFiles) {
          const relPath = relative(docsDir, file).replace(/\.mdx$/, ".md");
          const outPath = join(mdDir, "docs", relPath);
          const content = readFileSync(file, "utf-8");
          const md = mdxToMarkdown(content);
          mkdirSync(dirname(outPath), { recursive: true });
          writeFileSync(outPath, md);
        }

        const blogDir = join(rootDir, "src/content/blog");
        const blogFiles = findFiles(blogDir, ".mdx");
        for (const file of blogFiles) {
          const slug = basename(file, ".mdx");
          const outPath = join(mdDir, "blog", `${slug}.md`);
          const content = readFileSync(file, "utf-8");
          const md = mdxToMarkdown(content);
          mkdirSync(dirname(outPath), { recursive: true });
          writeFileSync(outPath, md);
        }

        const storiesDir = join(rootDir, "src/content/stories");
        const storyFiles = findFiles(storiesDir, ".mdx");
        for (const file of storyFiles) {
          const slug = basename(file, ".mdx");
          const outPath = join(mdDir, "stories", `${slug}.md`);
          const content = readFileSync(file, "utf-8");
          const md = mdxToMarkdown(content);
          mkdirSync(dirname(outPath), { recursive: true });
          writeFileSync(outPath, md);
        }

        // Process hub pages from built HTML
        const hubDir = join(distDir, "hub");
        if (existsSync(hubDir)) {
          const hubFiles = findFiles(hubDir, ".html");
          for (const file of hubFiles) {
            const slug = basename(file, ".html");
            const outPath = join(mdDir, "hub", `${slug}.md`);
            const content = readFileSync(file, "utf-8");
            const md = htmlToMarkdown(content);
            mkdirSync(dirname(outPath), { recursive: true });
            writeFileSync(outPath, md);
          }
        }

        // Copy hand-written marketing page markdowns
        const marketingDir = join(rootDir, "src/content/markdown");
        try {
          const marketingFiles = findFiles(marketingDir, ".md");
          for (const file of marketingFiles) {
            const relPath = relative(marketingDir, file);
            const outPath = join(mdDir, relPath);
            mkdirSync(dirname(outPath), { recursive: true });
            copyFileSync(file, outPath);
          }
        } catch {
          // No marketing markdown directory yet
        }

        console.log(`[generate-markdown] Generated markdown files in ${mdDir}`);
      },
    },
  };
}
