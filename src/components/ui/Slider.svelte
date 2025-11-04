<script lang="ts">
  import Splide, { type Options } from "@splidejs/splide";
  import clsx from "clsx";

  let slider = $state<HTMLDivElement | null>(null);
  const props = $props<{
    children: () => any;
    options: Options;
    // Display elements on the side
    withOverflow?: boolean;
    // Clicking on a slide navigate to it
    navigateOnClick?: boolean
  }>();

  $effect(() => {
    if (!slider) {
      return;
    }
    const root = slider.querySelector("astro-slot")! as HTMLElement;
    root.setAttribute("class", "splide__list block");
    Array.from(root.children).forEach((node) =>
      (node as HTMLDivElement).classList.add("splide__slide"),
    );
    const s = new Splide(slider, props.options).mount();

    s.on('click', (slide, e) => {
      // Clicking on the side, should focus the right item
      if (props.navigateOnClick && slide.index !== s.index) {
          e.preventDefault()
          s.go(slide.index)
      }
    })

    return () => {
      s.destroy();
    };
  });
</script>

<div class="splide" bind:this={slider}>
  <div class={clsx("splide__track", props.withOverflow && "overflow-visible")}>
    {@render props.children()}
  </div>
</div>
