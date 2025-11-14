<script lang="ts">
  import type { Snippet } from "svelte";
  import { useWindowSize } from "../../lib/runes/useWindowSize.svelte.ts";
  import { clsx } from "clsx";
  import AnimatedHeroSlice from "./AnimatedHeroSlice.svelte";

  let props: { class: string; children: Snippet } = $props();
  let windowSize = useWindowSize();
  const sliceWidth = 72
  let slices = $derived(Math.floor(windowSize.width / sliceWidth));
  let duration = $derived(0.015 * windowSize.width);
</script>

<div class={clsx(props.class, "relative hero overflow-hidden")}>
  <div class="container max-w-[830px]">
    {@render props.children()}
  </div>

  <div class="absolute inset-0 flex -z-1 overflow-hidden hero-bg">
    <div class="w-[200%] h-full flex absolute inset-0 hero-curve z-1 items-end" style={`--duration: ${duration.toFixed(2)}s;`}>
    </div>
    {#each Array(slices) as _, i}
      <div class="min-w-0 w-full bg-linear-to-l from-[#FFFFFF3D] to-[#FFFFFB03] backdrop-blur-[100px] relative z-2"></div>
    {/each}
  </div>

</div>

<style>
  .hero {
    --color: #D6F1AF;
    isolation: isolate;
  }
  .hero-bg {
      animation: heroAppear 1s ease-in both;
  }
  .hero-curve {
      background:url(/curve.webp) bottom left / 50% 100% repeat-x;
      animation: heroSlide var(--duration) linear infinite;
  }
  @keyframes heroAppear {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
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
