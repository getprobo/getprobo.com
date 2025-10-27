<script lang="ts">
  import Splide from "@splidejs/splide";
  import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
  import { Intersection } from "@splidejs/splide-extension-intersection";

  import { onMount } from "svelte";
  import { useWindowSize } from "../../lib/runes/useWindowSize.svelte.ts";

  let slider: HTMLDivElement | null = null;
  let sliderReversed = $state<HTMLDivElement | null>(null);
  let windowSize = useWindowSize();
  let isMobile = $derived(windowSize.width < 640);

  const options = {
    type: "loop",
    fixedWidth: 270,
    gap: 16,
    focus: "center",
    arrows: false,
    pagination: false,
    mediaQuery: "min",
    breakpoints: {
      640: {
        fixedWidth: 350,
      },
    },
  } as const;

  // Main slider scrolling from left to right
  onMount(() => {
    if (!slider) {
      return;
    }
    slider
      .querySelector("astro-slot")!
      .setAttribute("class", "splide__list items-start block");
    const s = new Splide(slider, options).mount({ AutoScroll, Intersection });
    return () => {
      s.destroy();
    };
  });

  // Secondary slider, only visible on desktop
  $effect(() => {
    if (!sliderReversed || isMobile) {
      return;
    }
    const slot = sliderReversed.querySelector("astro-slot") as HTMLSlotElement;
    slot.setAttribute("class", "splide__list items-start block");
    const s = new Splide(sliderReversed, {
      ...options,
      start: slot.children.length / 2,
      autoScroll: {
        speed: -1,
      },
    }).mount({ AutoScroll, Intersection });
    return () => {
      s.destroy();
    };
  });

  const props = $props();
</script>

<div class="space-y-12">
  <div class="splide" bind:this={slider}>
    <div class="splide__track">
      {@render props.children()}
    </div>
  </div>
  {#if !isMobile}
    <div class="splide mb-12" bind:this={sliderReversed}>
      <div class="splide__track">
        {@render props.children()}
      </div>
    </div>
  {/if}
</div>
