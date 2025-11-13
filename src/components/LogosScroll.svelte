<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import clsx from "clsx";
  import Splide from "@splidejs/splide";
  import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
  import { Intersection } from "@splidejs/splide-extension-intersection";

  const props: { children: Snippet; class?: string } = $props();
  let slider: HTMLDivElement | null = null;
  const options = {
    type: "loop",
    gap: 16,
    arrows: false,
    autoWidth: true,
    pagination: false,
    mediaQuery: "min",
    autoScroll: {
      pauseOnFocus: false,
      speed: 0.7,
      pauseOnHover: false,
    },
  } as const;

  onMount(() => {
    if (!slider) {
      return;
    }
    const slot = slider.querySelector("astro-slot") as HTMLElement;
    slot.setAttribute("class", "splide__list items-center block");
    Array.from(slot.children).forEach((child) => {
      child.classList.add("splide__slide");
    });
    const s = new Splide(slider, options).mount({ AutoScroll, Intersection });
    return () => {
      s.destroy();
    };
  });
</script>

<div class={clsx(props.class, "splide")} bind:this={slider}>
  <div class="splide__track">
    {@render props.children()}
  </div>
</div>
