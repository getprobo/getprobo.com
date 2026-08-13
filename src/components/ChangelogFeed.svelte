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
  let scroller: HTMLDivElement | undefined;
  let fadeStart = $state(false);
  let fadeEnd = $state(false);

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

  function syncOverflow() {
    const el = scroller;
    if (!el) return;
    fadeStart = el.scrollLeft > 2;
    fadeEnd = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
  }

  function selectTag(tag: string, node: HTMLElement) {
    activeTag = tag;
    const url = new URL(window.location.href);
    if (tag === "all") {
      url.searchParams.delete("tag");
    } else {
      url.searchParams.set("tag", tag);
    }
    history.replaceState({}, "", url);
    node.scrollIntoView({
      inline: "nearest",
      block: "nearest",
      behavior: "smooth",
    });
  }

  onMount(() => {
    const tag = new URLSearchParams(window.location.search).get("tag");
    if (tag && (tag === "all" || tags.includes(tag))) {
      activeTag = tag;
    }

    const el = scroller;
    if (!el) return;

    const observer = new ResizeObserver(syncOverflow);
    observer.observe(el);
    requestAnimationFrame(() => {
      el.querySelector<HTMLElement>('[aria-pressed="true"]')?.scrollIntoView({
        inline: "center",
        block: "nearest",
      });
      syncOverflow();
    });

    return () => observer.disconnect();
  });
</script>

<div class="relative mb-7">
  {#if fadeStart}
    <div
      class="from-level-0 pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r to-transparent"
      aria-hidden="true"
    ></div>
  {/if}
  <div
    bind:this={scroller}
    role="group"
    aria-label="Filter by product"
    onscroll={syncOverflow}
    class="scrollbar-none flex gap-1.5 overflow-x-auto overscroll-x-contain"
  >
    <button
      type="button"
      aria-pressed={activeTag === "all"}
      class="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors {chipClass(
        activeTag === 'all',
      )}"
      onclick={(event) => selectTag("all", event.currentTarget)}
    >
      All
    </button>
    {#each tags as tag (tag)}
      <button
        type="button"
        aria-pressed={activeTag === tag}
        class="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors {chipClass(
          activeTag === tag,
        )}"
        onclick={(event) => selectTag(tag, event.currentTarget)}
      >
        {tag}
      </button>
    {/each}
  </div>
  {#if fadeEnd}
    <div
      class="from-level-0 pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l to-transparent"
      aria-hidden="true"
    ></div>
  {/if}
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
