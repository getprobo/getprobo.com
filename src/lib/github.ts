const defaultCount = 829; // Default value if the github api is down
let count = 0; // Cached count value (to avoid multiple API calls)

// Mimics GitHub's star count formatting: 999, 1k, 1.1k, 10k, 1.1M
function formatStars(value: number): string {
  if (value < 1000) {
    return value.toString();
  }
  if (value < 1_000_000) {
    const k = value / 1000;
    const rounded = k >= 10 ? Math.round(k) : Math.round(k * 10) / 10;
    return `${rounded}k`;
  }
  const m = value / 1_000_000;
  const rounded = m >= 10 ? Math.round(m) : Math.round(m * 10) / 10;
  return `${rounded}M`;
}

export async function getStarsCount(): Promise<string> {
  // To prevent reaching the GitHub API limit during development, return a default value
  if (import.meta.env.DEV) {
    return formatStars(defaultCount);
  }
  // Use the cached value
  if (count) {
    return formatStars(count);
  }

  const r = await fetch("https://api.github.com/repos/getprobo/probo");
  if (!r.ok) {
    count = defaultCount;
    return formatStars(count);
  }
  const json = await r.json();
  count = json.stargazers_count;
  return formatStars(count);
}
