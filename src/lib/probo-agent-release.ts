const RELEASES_URL =
  "https://api.github.com/repos/getprobo/probo/releases?per_page=30";
const AGENT_TAG_PREFIX = /^probo-agent\/v/;

export type AgentOs = "macos" | "linux" | "windows" | "freebsd" | "unknown";
export type AgentArch = "x86_64" | "arm64" | "unknown";

export type DetectedPlatform = {
  os: AgentOs;
  arch: AgentArch;
};

export type ReleaseAsset = {
  name: string;
  url: string;
  size: number;
};

export type ProboAgentRelease = {
  tag: string;
  version: string;
  htmlUrl: string;
  assets: ReleaseAsset[];
};

type GithubReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GithubRelease = {
  tag_name: string;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  assets: GithubReleaseAsset[];
};

type NavigatorUAData = {
  platform: string;
  getHighEntropyValues: (
    hints: string[],
  ) => Promise<{ architecture?: string; bitness?: string }>;
};

function isBinaryAsset(name: string): boolean {
  if (!name.startsWith("probo-agent")) {
    return false;
  }

  // Prefer the universal macOS installer; hide arch-specific Darwin archives.
  if (/^probo-agent_Darwin_(x86_64|arm64)\.tar\.gz$/.test(name)) {
    return false;
  }

  return (
    name.endsWith(".pkg") || name.endsWith(".tar.gz") || name.endsWith(".zip")
  );
}

export function listBinaryAssets(release: ProboAgentRelease): ReleaseAsset[] {
  return release.assets.filter((asset) => isBinaryAsset(asset.name));
}

export async function fetchLatestProboAgentRelease(): Promise<ProboAgentRelease> {
  const response = await fetch(RELEASES_URL, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub releases request failed (${response.status})`);
  }

  const releases = (await response.json()) as GithubRelease[];
  const release = releases.find(
    (item) =>
      AGENT_TAG_PREFIX.test(item.tag_name) && !item.draft && !item.prerelease,
  );

  if (!release) {
    throw new Error("No probo-agent release found");
  }

  const version = release.tag_name.replace(/^probo-agent\/v/, "");

  return {
    tag: release.tag_name,
    version,
    htmlUrl: release.html_url,
    assets: release.assets.map((asset) => ({
      name: asset.name,
      url: asset.browser_download_url,
      size: asset.size,
    })),
  };
}

function normalizeArch(
  value: string | undefined,
  bitness?: string,
): AgentArch {
  if (!value) return "unknown";
  const normalized = value.toLowerCase();

  // Client Hints report "x86"/"arm" with width in bitness (not "x86_64").
  if (normalized === "x86") return bitness === "64" ? "x86_64" : "unknown";
  if (normalized === "arm") return bitness === "64" ? "arm64" : "unknown";

  if (normalized.includes("arm64") || normalized.includes("aarch64")) {
    return "arm64";
  }
  if (
    normalized.includes("x86_64") ||
    normalized.includes("amd64") ||
    normalized.includes("x64") ||
    normalized.includes("win64") ||
    normalized.includes("wow64") ||
    normalized.includes("intel")
  ) {
    return "x86_64";
  }
  // "Win32" (common navigator.platform on 64-bit Windows) intentionally misses.
  return "unknown";
}

function detectOsFromString(value: string): AgentOs {
  const normalized = value.toLowerCase();
  if (normalized.includes("mac") || normalized.includes("darwin")) {
    return "macos";
  }
  if (normalized.includes("win")) {
    return "windows";
  }
  if (normalized.includes("freebsd")) {
    return "freebsd";
  }
  if (normalized.includes("linux") || normalized.includes("cros")) {
    return "linux";
  }
  return "unknown";
}

export async function detectPlatform(): Promise<DetectedPlatform> {
  if (typeof navigator === "undefined") {
    return { os: "unknown", arch: "unknown" };
  }

  const uaData = (navigator as Navigator & { userAgentData?: NavigatorUAData })
    .userAgentData;

  let hintsArch: AgentArch = "unknown";
  if (uaData) {
    try {
      const { architecture, bitness } = await uaData.getHighEntropyValues([
        "architecture",
        "bitness",
      ]);
      hintsArch = normalizeArch(architecture, bitness);
    } catch {
      // Fall through to UA parsing.
    }
  }

  const os = detectOsFromString(
    uaData?.platform || navigator.platform || navigator.userAgent,
  );

  let arch =
    [
      hintsArch,
      normalizeArch(navigator.userAgent),
      normalizeArch(navigator.platform),
    ].find((value) => value !== "unknown") ?? "unknown";

  // Last resort: the shipped Windows agent is x86_64.
  if (os === "windows" && arch === "unknown") {
    arch = "x86_64";
  }

  return { os, arch };
}

function osAssetLabel(os: AgentOs): string | null {
  switch (os) {
    case "macos":
      return "Darwin";
    case "linux":
      return "Linux";
    case "windows":
      return "Windows";
    case "freebsd":
      return "Freebsd";
    default:
      return null;
  }
}

export function resolvePrimaryAsset(
  release: ProboAgentRelease,
  platform: DetectedPlatform,
): ReleaseAsset | null {
  if (platform.os === "macos") {
    const pkg = release.assets.find(
      (asset) =>
        asset.name === `probo-agent_${release.version}_darwin.pkg` ||
        (asset.name.startsWith("probo-agent_") &&
          asset.name.endsWith("_darwin.pkg")),
    );
    return pkg ?? null;
  }

  const osLabel = osAssetLabel(platform.os);
  if (!osLabel || platform.arch === "unknown") {
    return null;
  }

  const extension = platform.os === "windows" ? "zip" : "tar.gz";
  const expected = `probo-agent_${osLabel}_${platform.arch}.${extension}`;
  return release.assets.find((asset) => asset.name === expected) ?? null;
}

export function platformLabel(platform: DetectedPlatform): string {
  const osLabels: Record<AgentOs, string> = {
    macos: "macOS",
    linux: "Linux",
    windows: "Windows",
    freebsd: "FreeBSD",
    unknown: "your platform",
  };

  if (platform.os === "macos" || platform.arch === "unknown") {
    return osLabels[platform.os];
  }

  return `${osLabels[platform.os]} (${platform.arch})`;
}

export function describeAsset(name: string): string {
  if (name.endsWith("_darwin.pkg")) {
    return "macOS (.pkg installer)";
  }

  const match = name.match(
    /^probo-agent_(Darwin|Linux|Windows|Freebsd)_(x86_64|arm64)\.(tar\.gz|zip)$/,
  );
  if (!match) {
    return name;
  }

  const [, os, arch] = match;

  if (os === "Windows") {
    return `Windows (.msi ${arch})`;
  }

  const osMap: Record<string, string> = {
    Darwin: "macOS",
    Linux: "Linux",
    Freebsd: "FreeBSD",
  };

  return `${osMap[os]} (${arch})`;
}
