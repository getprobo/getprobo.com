<script lang="ts">
  import { onDestroy } from "svelte";
  import type { AnimationItem } from "lottie-web";
  import { useIntersectionObserver } from "../lib/runes/useIntersectionObserver.svelte.ts";

  type Props = {
    src: string;
    label: string;
    class?: string;
    loop?: boolean;
  };

  const { src, label, class: className, loop = true }: Props = $props();

  let animation = $state<AnimationItem | null>(null);
  let loadingPromise: Promise<void> | null = null;
  let reducedMotion = $state(false);
  const intersection = useIntersectionObserver({ threshold: 0.2 });

  const loadAnimation = async () => {
    const { default: lottie } = await import("lottie-web");

    if (!intersection.ref || animation) {
      return;
    }

    animation = lottie.loadAnimation({
      container: intersection.ref,
      renderer: "svg",
      loop,
      autoplay: intersection.observed && !reducedMotion,
      path: src,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });
  };

  $effect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      reducedMotion = mediaQuery.matches;
      if (reducedMotion) {
        animation?.pause();
      } else if (intersection.observed) {
        animation?.play();
      }
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  });

  $effect(() => {
    if (!intersection.ref) {
      return;
    }

    if (reducedMotion || !intersection.observed) {
      animation?.pause();
      return;
    }

    if (animation) {
      animation.play();
      return;
    }

    loadingPromise ??= loadAnimation();
  });

  onDestroy(() => {
    animation?.destroy();
  });
</script>

<div
  bind:this={intersection.ref}
  class={className}
  role="img"
  aria-label={label}
></div>
