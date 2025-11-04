<script lang="ts">
  import { onMount } from "svelte";

  let el: HTMLDivElement
  const offsetRange = 0.5;
  const randomStart = () => Math.random() * offsetRange;
  const randomEnd = (start: number) => 0.2 + Math.random() + start;
  const randomDuration = () =>
    Math.round(2000 + Math.random() * 1000);
  const toPercent = (n: number) => `${(n * 100).toFixed(2)}%`;

  let timer: ReturnType<typeof setTimeout> | null = null;
  const tick = (baseDuration?: number) => {
    const start = randomStart();
    const end = randomEnd(start);
    const duration = baseDuration ?? randomDuration();
    timer = setTimeout(tick, duration);
    el.animate([
      {'--start': toPercent(start), '--end': toPercent(end), 'opacity': 1},
    ], {duration: duration, fill: 'both', delay: 0, easing: 'ease-in-out'})
  };

  onMount(() => {
    tick(Math.random() * 500 + 1000);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  });
</script>

<div class="h-full slice transition-all" bind:this={el}></div>

<style>
    @property --start {
        syntax: "<percentage>";
        initial-value: 100%;
        inherits: false;
    }
    @property --end {
        syntax: "<percentage>";
        initial-value: 100%;
        inherits: false;
    }
    .slice {
        z-index: 1;
        opacity: 0;
        background: linear-gradient(180deg, #fffffb var(--start), var(--color) var(--end));
    }
</style>
