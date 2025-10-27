<script>
  const props = $props();
  let innerWidth = $state(0);
  let speed = $derived(Math.min(innerWidth, 1080) * 0.02);
</script>

<div class={props.class} style="animation-duration: {speed}s;">
  {@render props.children()}
  {@render props.children()}
</div>
<div
  class="absolute top-0 right-0 h-full w-60 bg-linear-to-l from-[#FFFFFB] to-[#FFFFFB]/0"
/>
<div
  class="absolute top-0 left-0 h-full w-60 bg-linear-to-r from-[#FFFFFB] to-[#FFFFFB]/0"
/>
<svelte:window bind:innerWidth />
