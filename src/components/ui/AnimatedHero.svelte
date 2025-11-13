<script lang="ts">
  import type { Snippet } from "svelte";
  import { useWindowSize } from "../../lib/runes/useWindowSize.svelte.ts";
  import { clsx } from "clsx";
  import AnimatedHeroSlice from "./AnimatedHeroSlice.svelte";

  let props: { class: string; children: Snippet } = $props();
  let windowSize = useWindowSize();
  const sliceWidth = 72
  let slices = $derived(Math.floor(windowSize.width / sliceWidth));
  let duration = $derived(0.008 * windowSize.width);
</script>

<div class={clsx(props.class, "relative hero overflow-hidden")}>
  <div class="container max-w-[830px]">
    {@render props.children()}
  </div>

  <div class="absolute inset-0 flex -z-1 overflow-hidden">
    <!--
        <div class="w-[200%] h-full object-cover absolute inset-0 image"></div>
    -->
    <div class="w-[200%] h-full flex absolute inset-0 image z-1 items-end blur-[100px]" style={`--duration: ${duration.toFixed(2)}s`}>
    {#each {length: 2}, k}
      <svg preserveAspectRatio="none" class="h-full w-full" width="1940" height="499" viewBox="0 0 1940 499" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path filter="url(#blur)" d="M409 285C164.5 285 113.5 0 0 0V499H1939.5V0C1825 0 1818 184 1659 184C1500 184 1295 356 1180 356C1065 356 877.5 251.5 753 251.5C628.5 251.5 653.5 285 409 285Z" fill="#E4F7C7"/>
      </svg>
      {/each}
    </div>
    {#each Array(slices) as _, i}
      <div class="min-w-0 w-full bg-linear-to-l from-[#FFFFFF3D] to-[#FFFFFB03] relative z-2"></div>
    {/each}
  </div>

</div>

<style>
  .hero {
    --color: #D6F1AF;
    isolation: isolate;
  }
  .image {
      animation: heroSlide var(--duration) linear infinite;
  }
  @keyframes heroSlide {
      0% {
          transform: translateX(0%);
      }
      100% {
          transform: translateX(-50%);
      }
  }
</style>
