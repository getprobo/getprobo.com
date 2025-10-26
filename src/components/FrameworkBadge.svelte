<div bind:this={intersection.ref} class={className} aria-label={`Badge ${name}`}></div>

<script lang="ts">
import lottie, {type AnimationItem} from 'lottie-web';
import {onDestroy, onMount} from "svelte";
import {useIntersectionObserver} from "../lib/runes/useIntersectionObserver.svelte.ts";

const {name, class: className}: {name: string, class?: string} = $props();
let animation: AnimationItem | null = null;
let intersection = useIntersectionObserver()

$effect(() => {
  // Load the animation when the element is in the viewport.
  if (intersection.observed && !animation && intersection.ref) {
    animation = lottie.loadAnimation({
      container: intersection.ref,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: `/frameworks/${name.replaceAll(' ', '')}.json`
    });
    animation.addEventListener('complete', () => {
      if (!animation) {
        return;
      }
      animation?.goToAndPlay(300, true);
    })
    return
  }

  if (!animation) {
    return;
  }

  if (!intersection.observed) {
    animation.stop()
    return;
  }

  if (intersection.observed) {
    animation.play();
    return;
  }
})

onDestroy(() => {
  animation?.destroy();
})
</script>
