/**
 * Canonical URL for the public English site. Strips `/fr` so meta matches
 * edge redirects (French URLs redirect to the same path without prefix).
 */
export function getCanonicalUrl(url: URL): string {
  const baseUrl = url.origin;
  let pathname = url.pathname;

  // Remove trailing .html if present
  pathname = pathname.replace(/\.html$/, "");

  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    pathname = pathname.slice(3) || "/";
  }

  return `${baseUrl}${pathname}`;
}
