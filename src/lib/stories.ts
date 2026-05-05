import type { CollectionEntry } from "astro:content";

const AHREFS_STORY_ID = "ahrefs-iso";

export function sortStoriesForListing(
  entries: CollectionEntry<"stories">[],
): CollectionEntry<"stories">[] {
  return [...entries].sort((a, b) => {
    if (a.id === AHREFS_STORY_ID && b.id !== AHREFS_STORY_ID) return -1;
    if (b.id === AHREFS_STORY_ID && a.id !== AHREFS_STORY_ID) return 1;
    return b.data.date.valueOf() - a.data.date.valueOf();
  });
}
