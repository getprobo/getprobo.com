export type ChangelogEntry = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type MonthGroup = {
  key: string;
  label: string;
  entries: ChangelogEntry[];
};

export const CHANGELOG_SEO = {
  title: "Changelog: Product Updates",
  description:
    "Every change we ship to Probo, in plain language. Access review connectors, compliance portals, cookie banners, document exports, and console releases.",
};

export function isVideoMedia(url: string): boolean {
  return /\.(mp4|webm)(\?|#|$)/i.test(url);
}

export function isLogoAsset(url: string): boolean {
  if (isVideoMedia(url)) return false;
  return (
    /\.svg(\?|#|$)/i.test(url) ||
    /google\.com\/s2\/favicons/i.test(url) ||
    /favicon/i.test(url)
  );
}

export function isRasterImage(url: string): boolean {
  return !isVideoMedia(url) && !/\.svg(\?|#|$)/i.test(url);
}

export function splitChangelogMedia(
  urls: string[],
  layout: "logos" | "stacked",
): { logos: string[]; media: string[] } {
  if (layout === "logos") {
    return { logos: urls, media: [] };
  }
  const logos: string[] = [];
  const media: string[] = [];
  for (const url of urls) {
    if (isLogoAsset(url)) logos.push(url);
    else media.push(url);
  }
  return { logos, media };
}

export function mediaAlt(
  title: string,
  options: {
    layout: "logos" | "stacked";
    index: number;
    total: number;
    isVideo?: boolean;
  },
): string {
  if (options.layout === "logos") {
    return options.total > 1
      ? `${title} logo ${options.index + 1}`
      : `${title} logo`;
  }
  if (options.isVideo) {
    return `${title} product demo`;
  }
  return options.total > 1
    ? `${title} screenshot ${options.index + 1}`
    : `${title} screenshot`;
}

export const TAG_PILL =
  "inline-flex h-fit shrink-0 items-center rounded-full border border-border-mid px-2 py-[3px] text-[11px] leading-none font-medium whitespace-nowrap text-muted-foreground";

export function tagClass(_tag?: string): string {
  return TAG_PILL;
}

export function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function parseUtcDate(iso: string): Date {
  const [year, month, day] = iso.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function groupByMonth(entries: ChangelogEntry[]): MonthGroup[] {
  const monthFmt = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const groups: MonthGroup[] = [];
  const index = new Map<string, number>();

  for (const entry of entries) {
    const key = entry.date.slice(0, 7);
    let groupIndex = index.get(key);
    if (groupIndex === undefined) {
      groupIndex = groups.length;
      index.set(key, groupIndex);
      groups.push({
        key,
        label: monthFmt.format(parseUtcDate(entry.date)),
        entries: [],
      });
    }
    groups[groupIndex].entries.push(entry);
  }

  return groups;
}

export function uniqueTagsByFrequency(entries: { tags: string[] }[]): string[] {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    for (const tag of entry.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);
}

export function changeCountLabel(count: number): string {
  return `${count} ${count === 1 ? "change" : "changes"}`;
}
