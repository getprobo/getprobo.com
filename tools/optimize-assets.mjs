import { createHash } from "node:crypto";
import {
  mkdir,
  readFile,
  readdir,
  rename,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const SETTINGS_VERSION = 1;
const CHECK_MODE = process.argv.includes("--check");
const CACHE_PATH = path.resolve(".cache/asset-optimization.json");
const ROOTS = [
  { directory: "public", maxWidth: 1600, maxBytes: 500 * 1024 },
  { directory: "src/assets", maxWidth: 2400, maxBytes: 1.5 * 1024 * 1024 },
];
const SUPPORTED_EXTENSIONS = new Set([
  ".avif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);
const MINIMUM_SAVINGS_RATIO = 0.03;

const cache = CHECK_MODE ? {} : await readCache();
const files = [];

for (const root of ROOTS) {
  await collectImages(root.directory, root, files);
}

let optimizedCount = 0;
let skippedCount = 0;
let savedBytes = 0;
const violations = [];

for (const { file, root } of files) {
  const result = await inspectImage(file, root);

  if (CHECK_MODE) {
    violations.push(...result.violations);
    continue;
  }

  const digest = await hashFile(file);
  if (
    cache[file]?.digest === digest &&
    cache[file]?.settingsVersion === SETTINGS_VERSION
  ) {
    skippedCount += 1;
    continue;
  }

  if (!result.shouldOptimize) {
    cache[file] = { digest, settingsVersion: SETTINGS_VERSION };
    skippedCount += 1;
    continue;
  }

  const optimization = await optimizeImage(file, result);
  if (optimization.replaced) {
    optimizedCount += 1;
    savedBytes += optimization.savedBytes;
    console.log(
      `${file}: ${formatBytes(optimization.before)} → ${formatBytes(optimization.after)}`,
    );
  } else {
    skippedCount += 1;
  }

  cache[file] = {
    digest: await hashFile(file),
    settingsVersion: SETTINGS_VERSION,
  };
}

if (CHECK_MODE) {
  if (violations.length > 0) {
    console.error("Asset validation failed:");
    for (const violation of violations) {
      console.error(`- ${violation}`);
    }
    process.exitCode = 1;
  } else {
    console.log(`Checked ${files.length} images; no oversized assets found.`);
  }
} else {
  await mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await writeFile(CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`);
  console.log(
    `Optimized ${optimizedCount} images, skipped ${skippedCount}, saved ${formatBytes(savedBytes)}.`,
  );
}

async function collectImages(directory, root, output) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectImages(file, root, output);
    } else if (
      SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    ) {
      output.push({ file, root });
    }
  }
}

async function inspectImage(file, root) {
  const fileStat = await stat(file);
  const metadata = await sharp(file, { limitInputPixels: false }).metadata();
  const isOpenGraph = isOpenGraphImage(file);
  const maxWidth = isRetinaImage(file) ? root.maxWidth * 2 : root.maxWidth;
  const dimensionsInvalid = isOpenGraph
    ? metadata.width !== 1200 || metadata.height !== 630
    : (metadata.width ?? 0) > maxWidth;
  const fileOversized = fileStat.size > root.maxBytes;
  const violations = [];

  if (dimensionsInvalid) {
    violations.push(
      isOpenGraph
        ? `${file} must be 1200×630 (currently ${metadata.width}×${metadata.height})`
        : `${file} is ${metadata.width}px wide (maximum ${maxWidth}px)`,
    );
  }
  if (fileOversized) {
    violations.push(
      `${file} is ${formatBytes(fileStat.size)} (maximum ${formatBytes(root.maxBytes)})`,
    );
  }

  return {
    before: fileStat.size,
    dimensionsInvalid,
    extension: path.extname(file).toLowerCase(),
    isOpenGraph,
    maxWidth,
    shouldOptimize:
      dimensionsInvalid || fileStat.size >= 100 * 1024 || fileOversized,
    violations,
  };
}

async function optimizeImage(file, options) {
  const temporaryFile = `${file}.opt-${process.pid}${options.extension}`;
  let pipeline = sharp(file, { limitInputPixels: false }).rotate();

  if (options.isOpenGraph) {
    pipeline = pipeline.resize(1200, 630, {
      fit: "cover",
      position: "attention",
    });
  } else if (options.dimensionsInvalid) {
    pipeline = pipeline.resize({
      width: options.maxWidth,
      withoutEnlargement: true,
    });
  }

  if (options.extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      effort: 10,
      palette: true,
      quality: 90,
    });
  } else if (options.extension === ".avif") {
    pipeline = pipeline.avif({ effort: 6, quality: 55 });
  } else if (options.extension === ".webp") {
    pipeline = pipeline.webp({ alphaQuality: 90, effort: 6, quality: 82 });
  } else {
    pipeline = pipeline.jpeg({ mozjpeg: true, quality: 82 });
  }

  try {
    await pipeline.toFile(temporaryFile);
    const outputStat = await stat(temporaryFile);
    const savingsRatio = (options.before - outputStat.size) / options.before;
    const shouldReplace =
      options.dimensionsInvalid || savingsRatio >= MINIMUM_SAVINGS_RATIO;

    if (!shouldReplace) {
      await unlink(temporaryFile);
      return { replaced: false, savedBytes: 0 };
    }

    await rename(temporaryFile, file);
    return {
      after: outputStat.size,
      before: options.before,
      replaced: true,
      savedBytes: Math.max(0, options.before - outputStat.size),
    };
  } catch (error) {
    await unlink(temporaryFile).catch(() => {});
    throw error;
  }
}

function isRetinaImage(file) {
  return /(?:-2x|@2x)\./i.test(path.basename(file));
}

function isOpenGraphImage(file) {
  return (
    file.startsWith(`public${path.sep}`) &&
    /(?:^|[-_])og(?:[-_.]|$)|story_og/i.test(path.basename(file))
  );
}

async function hashFile(file) {
  const contents = await readFile(file);
  return createHash("sha256").update(contents).digest("hex");
}

async function readCache() {
  try {
    return JSON.parse(await readFile(CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KiB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MiB`;
}
