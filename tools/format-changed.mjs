import { execFileSync, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { extname, resolve } from "node:path";

const supportedExtensions = new Set([
  ".astro",
  ".cjs",
  ".css",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".svelte",
  ".ts",
  ".yaml",
  ".yml",
]);

const tracked = gitFiles(["diff", "--name-only", "--diff-filter=ACMR", "HEAD"]);
const untracked = gitFiles(["ls-files", "--others", "--exclude-standard"]);
const files = [...new Set([...tracked, ...untracked])].filter(
  (file) =>
    supportedExtensions.has(extname(file)) &&
    extname(file) !== ".mdx" &&
    existsSync(file),
);

if (files.length === 0) {
  console.log("No changed files supported by Prettier.");
  process.exit(0);
}

const executable = resolve(
  "node_modules/.bin",
  process.platform === "win32" ? "prettier.cmd" : "prettier",
);
const result = spawnSync(executable, ["--write", ...files], {
  stdio: "inherit",
});

if (result.error) throw result.error;
process.exitCode = result.status ?? 1;

function gitFiles(args) {
  return execFileSync("git", args, { encoding: "utf8" })
    .split("\n")
    .filter(Boolean);
}
