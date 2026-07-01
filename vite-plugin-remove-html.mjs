import { readFile, writeFile, readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

/**
 * Astro integration to remove .html extensions from links
 */
export function removeHtmlExtension() {
  return {
    name: "remove-html-extension",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        console.log("Removing .html extensions from links...");

        const htmlFiles = [];
        async function findHtmlFiles(directory) {
          const entries = await readdir(directory, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = join(directory, entry.name);
            if (entry.isDirectory()) {
              await findHtmlFiles(fullPath);
            } else if (entry.name.endsWith(".html")) {
              htmlFiles.push(fullPath);
            }
          }
        }

        await findHtmlFiles(fileURLToPath(dir));
        console.log(`Found ${htmlFiles.length} HTML files to process`);

        let processedCount = 0;
        for (const filePath of htmlFiles) {
          try {
            let content = await readFile(filePath, "utf-8");
            const before = content.length;

            // Remove .html from href, value, and content attributes
            // This handles links, canonical URLs, og:url meta tags, etc.
            content = content.replace(
              /(href|value|content)=(["'])([^"']*?)\.html\2/g,
              "$1=$2$3$2",
            );

            const after = content.length;
            if (before !== after) {
              await writeFile(filePath, content, "utf-8");
              processedCount++;
            }
          } catch (err) {
            console.warn(`Could not process ${filePath}:`, err.message);
          }
        }

        console.log(
          `✓ Processed ${processedCount} files, removed .html extensions`,
        );
      },
    },
  };
}
