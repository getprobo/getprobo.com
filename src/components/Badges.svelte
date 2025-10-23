<div class={className}>
    {#each visibleFrameworks as framework, index (index)}
        <div class="text-center grid place-items-center overflow-hidden mix-blend-multiply"
        >
            {#key framework.badge}
            <div
                class="transition-all duration-1000 col-1 row-1 space-y-3 size-25 aspect-square"
                 transition:scale={{duration: 750}}
            >
                <framework-badge name={framework.badge} class="block size-16 mx-auto"/>
                <div class="whitespace-nowrap text-xxs">{framework.label}</div>
            </div>
            {/key}
        </div>
    {/each}
</div>
<svelte:window bind:innerWidth />


<script lang="ts">
  import { scale } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import { frameworks } from '../data/frameworks.ts'
  import {windowWidth} from "../lib/window.ts";
  import('../components/FrameworkBadge.ts')

  let {count, className, countMobile}: { count: number, countMobile?: number, className: string } = $props();
  let timer: ReturnType<typeof setTimeout> | null = null
  let innerWidth = $state(windowWidth());
  let isMobile = $derived(innerWidth < 640);
  $effect(() => {
    visibleFrameworks = frameworks.slice(0, isMobile && countMobile ? countMobile : count)
  })
  let visibleFrameworks = $state(frameworks.slice(0, count));

  // TODO : Stop the timer when the component is not visible

  onMount(() => {
    timer = setInterval(() => {
      // Pick one random available framework
      const availableFrameworks = frameworks.filter(framework => !visibleFrameworks.map(f => f.badge).includes(framework.badge));
      if (availableFrameworks.length === 0 ){
        return;
      }
      const randomFramework = availableFrameworks[Math.floor(Math.random() * availableFrameworks.length)];
      const randomIndex = Math.floor(Math.random() * count);
      visibleFrameworks[randomIndex] = randomFramework;
    }, 5000)
  })

  onDestroy(() => {
    clearInterval(timer)
  })

</script>
