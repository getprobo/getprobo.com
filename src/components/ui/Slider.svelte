<script lang="ts">
  import EmblaCarousel, {type EmblaCarouselType} from 'embla-carousel'
  import {onDestroy, onMount} from "svelte";
  import clsx from "clsx";
  import Autoplay from "embla-carousel-autoplay";

  const {children, theme = "light"} = $props()
  let root: HTMLDivElement
  let snaps = $state([] as number[])
  let currentPage = $state(0)
  let duration = $state(0)
  let emblaApi: EmblaCarouselType

  onMount(() => {
    emblaApi = EmblaCarousel(root.querySelector('.embla')!, {
      loop: false,
      duration: 30
    }, [
      Autoplay({playOnInit: true, delay: 5000})
    ])
    snaps = emblaApi.scrollSnapList()
    emblaApi
      .on('select', () => {
        currentPage = emblaApi.selectedScrollSnap()
      })
      .on('autoplay:timerset', startTimer)
      .on('autoplay:timerstopped', stopTimer)
    startTimer()
  })

  onDestroy(() => {
    emblaApi?.destroy()
  })

  const startTimer = () => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    duration = autoplay.timeUntilNext() ?? 0
  }

  const stopTimer = () => {
     duration = 0
  }

  const play = () => {
    emblaApi?.plugins()?.autoplay.play()
  }

  const pause = () => {
    emblaApi?.plugins()?.autoplay.stop()
  }

</script>

<div bind:this={root} onpointerover={pause} onpointerleave={play}>
    {@render children()}

    <div class="w-max px-2 h-9 rounded-full bg-highlight flex items-center mx-auto mt-12">
        {#each snaps as snap, i}
            <button aria-label={`Page ${i + 1}`} class="p-2" onclick={() => emblaApi?.scrollTo(i)}>
                <span class={clsx("h-2 bg-border-mid rounded-full block transition-all overflow-hidden", i === currentPage && duration ? "w-8" : "w-2")}>
                    {#key duration}
                        {#if i === currentPage}
                        <span class="block w-full h-2 bg-tertiary-foreground animate-scaleX origin-left" style={`animation-duration:${duration}ms`}></span>
                        {/if}
                    {/key}
                </span>
            </button>
        {/each}
    </div>
</div>
