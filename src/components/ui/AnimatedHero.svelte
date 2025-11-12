<script lang="ts">
  import type { Snippet } from "svelte";
  import { useWindowSize } from "../../lib/runes/useWindowSize.svelte.ts";
  import { clsx } from "clsx";
  import AnimatedHeroSlice from "./AnimatedHeroSlice.svelte";

  const desktopSlices = [307, 112, 372, 402, 111, 307, 307];
  const mobileSlices = [25, 101, 100, 38, 62, 25, 25];

  let props: { class: string; children: Snippet } = $props();
  let windowSize = useWindowSize();
  let isMobile = $derived(windowSize.width < 640);
  let slices = $derived(isMobile ? mobileSlices : desktopSlices);
</script>

<div class={clsx(props.class, "relative hero overflow-hidden")}>
  <div class="container max-w-[830px]">
    {@render props.children()}
  </div>
  <div
    class="absolute inset-0 pointer-events-none grid -z-1"
    style={`grid-template-columns: ${slices.map((v) => `${v}fr`).join(" ")}`}
  >
    {#each slices as slice, k}
      <AnimatedHeroSlice />
    {/each}
  </div>
</div>

<style>
  .hero {
    --color: #D6F1AF;
    isolation: isolate;
  }
</style>
