<script lang="ts">
  import { onMount } from "svelte";
  import {
    changeCountLabel,
    groupByMonth,
    tagClass,
    type ChangelogEntry,
  } from "../lib/changelog.ts";

  let {
    entries,
    tags,
  }: {
    entries: ChangelogEntry[];
    tags: string[];
  } = $props();

  let activeTag = $state("all");

  let filtered = $derived(
    activeTag === "all"
      ? entries
      : entries.filter((entry) => entry.tags.includes(activeTag)),
  );
  let groups = $derived(groupByMonth(filtered));

  const dayFmt = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  function chipClass(selected: boolean) {
    return selected
      ? "bg-primary text-primary-foreground border-transparent"
      : "text-muted-foreground border-border-mid hover:bg-highlight bg-transparent";
  }

  function selectTag(tag: string) {
    activeTag = tag;
    const url = new URL(window.location.href);
    if (tag === "all") {
      url.searchParams.delete("tag");
    } else {
      url.searchParams.set("tag", tag);
    }
    history.replaceState({}, "", url);
  }

  onMount(() => {
    const tag = new URLSearchParams(window.location.search).get("tag");
    if (tag && (tag === "all" || tags.includes(tag))) {
      activeTag = tag;
    }
  });
</script>

<div class="mb-7 flex flex-wrap gap-1.5">
  <button
    type="button"
    aria-pressed={activeTag === "all"}
    class="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors {chipClass(
      activeTag === 'all',
    )}"
    onclick={() => selectTag("all")}
  >
    All
  </button>
  {#each tags as tag (tag)}
    <button
      type="button"
      aria-pressed={activeTag === tag}
      class="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors {chipClass(
        activeTag === tag,
      )}"
      onclick={() => selectTag(tag)}
    >
      {tag}
    </button>
  {/each}
</div>

{#if groups.length === 0}
  <p class="text-muted-foreground text-sm">No changes in that product.</p>
{:else}
  <div class="flex flex-col gap-8">
    {#each groups as group (group.key)}
      <section>
        <div class="mb-1 flex items-baseline gap-2.5">
          <h2 class="text-[16px] font-medium tracking-[-0.02em]">
            {group.label}
          </h2>
          <span class="bg-border-low h-px min-w-4 flex-1"></span>
          <span class="text-tertiary-foreground text-xxs shrink-0">
            {changeCountLabel(group.entries.length)}
          </span>
        </div>

        <div class="flex flex-col">
          {#each group.entries as entry (entry.id)}
            <a
              href={`/changelog/${entry.id}`}
              class="group grid grid-cols-[1fr_auto] items-start gap-x-3 gap-y-1 border-b py-3.5 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:gap-x-4"
            >
              <time
                datetime={entry.date}
                class="text-tertiary-foreground text-xxs col-start-1 row-start-1 pt-0.5"
              >
                {dayFmt.format(new Date(`${entry.date}T00:00:00Z`))}
              </time>
              <div
                class="col-span-2 row-start-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1"
              >
                <h3
                  class="text-[15px] font-medium tracking-[-0.01em] group-hover:opacity-80"
                >
                  {entry.title}
                </h3>
                <p
                  class="text-muted-foreground mt-0.5 line-clamp-2 text-[13px] leading-snug"
                >
                  {entry.description}
                </p>
              </div>
              {#if entry.tags.length > 0}
                <div
                  class="col-start-2 row-start-1 flex flex-wrap items-start justify-end gap-1 self-start sm:col-start-3 sm:pt-0.5"
                >
                  {#each entry.tags as tag (tag)}
                    <span class={tagClass(tag)}>{tag}</span>
                  {/each}
                </div>
              {/if}
            </a>
          {/each}
        </div>
      </section>
    {/each}
  </div>
{/if}
