const defaultCount = 829 // Default value if the github api is down
let count = 0; // Cached count value (to avoid multiple API calls)

const formatter = new Intl.NumberFormat('en-US');

export async function getStarsCount(): Promise<string> {
  // To prevent reaching the GitHub API limit during development, return a default value
  if (import.meta.env.DEV) {
    return formatter.format(defaultCount)
  }
  // Use the cached value
  if (count) {
    return formatter.format(count);
  }

  const r = await fetch('https://api.github.com/repos/getprobo/probo')
  if (!r.ok) {
    count = defaultCount
    return formatter.format(count)
  }
  const json = await r.json()
  count = json.stargazers_count
  return formatter.format(count)
}
