export type ChangelogEntry = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type WeekBar = {
  count: number;
  start: string;
  end: string;
};

export type MonthGroup = {
  key: string;
  label: string;
  entries: ChangelogEntry[];
};

export const CHANGELOG_SEO = {
  title: "Changelog: Product Updates",
  description:
    "Every change we ship to Probo, in plain language. New access review connectors, compliance portal updates, cookie banner improvements, document exports, and console releases.",
};

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
  "inline-flex h-fit shrink-0 items-center rounded-full px-2.5 py-[3px] text-[11px] leading-none font-medium whitespace-nowrap";

const TAG_STYLES: Record<string, string> = {
  "Access Review": "bg-[#D9E4F5] text-[#163A6B]",
  "Compliance Portal": "bg-[#D4EFE6] text-[#04342C]",
  "Compliance Page": "bg-[#D4EFE6] text-[#04342C]",
  Console: "bg-[#EBE8DF] text-[#2C2C2A]",
  "Cookie Banner": "bg-[#F5DED6] text-[#4A1B0C]",
  Documents: "bg-[#E3E1F8] text-[#26215C]",
  IAM: "bg-[#D7EAF6] text-[#0C3A4A]",
  MCP: "bg-[#D5EBD9] text-[#1B4332]",
  CLI: "bg-[#E8E8E8] text-[#1F2937]",
  n8n: "bg-[#F6D5E6] text-[#831843]",
  "Open-source": "bg-active text-success",
  Integrations: "bg-[#DDE3F8] text-[#312E81]",
};

export function tagClass(tag: string): string {
  return `${TAG_PILL} ${TAG_STYLES[tag] ?? "bg-highlight text-primary"}`;
}

export function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function parseUtcDate(iso: string): Date {
  const [year, month, day] = iso.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function mondayOf(date: Date): Date {
  const day = date.getUTCDay();
  const diff = day === 0 ? 6 : day - 1;
  const monday = new Date(date);
  monday.setUTCDate(monday.getUTCDate() - diff);
  return monday;
}

export function buildWeekBars(
  dates: string[],
  weeks = 9,
  now = new Date(),
): WeekBar[] {
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  const thisMonday = mondayOf(today);
  const bars: WeekBar[] = [];

  for (let i = weeks - 1; i >= 0; i--) {
    const start = new Date(thisMonday);
    start.setUTCDate(start.getUTCDate() - i * 7);
    const end = new Date(start);
    end.setUTCDate(end.getUTCDate() + 6);
    const startIso = toIsoDate(start);
    const endIso = toIsoDate(end);
    const count = dates.filter(
      (date) => date >= startIso && date <= endIso,
    ).length;
    bars.push({ count, start: startIso, end: endIso });
  }

  return bars;
}

export function formatWeekRange(start: string, end: string): string {
  const startDate = parseUtcDate(start);
  const endDate = parseUtcDate(end);
  const monthDay = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  const day = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    timeZone: "UTC",
  });

  if (startDate.getUTCMonth() === endDate.getUTCMonth()) {
    return `${monthDay.format(startDate)}–${day.format(endDate)}`;
  }

  return `${monthDay.format(startDate)} – ${monthDay.format(endDate)}`;
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
