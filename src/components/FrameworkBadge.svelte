<script lang="ts">
  import type { AnimationItem } from "lottie-web";
  import { onDestroy } from "svelte";
  import { useIntersectionObserver } from "../lib/runes/useIntersectionObserver.svelte.ts";

  const { name, class: className }: { name: string; class?: string } = $props();
  const staticName = name.replace(/_dark$/, "");
  const isDark = name.endsWith("_dark");
  const intersection = useIntersectionObserver({ threshold: 0.2 });
  let animationContainer = $state<HTMLDivElement | null>(null);
  let animation = $state<AnimationItem | null>(null);
  let loadingPromise: Promise<void> | null = null;
  let reducedMotion = $state(false);
  let animationReady = $state(false);

  const loadAnimation = async () => {
    const { default: lottie } =
      await import("lottie-web/build/player/lottie_light");

    if (!animationContainer || animation) {
      return;
    }

    animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: `/frameworks/${name.replaceAll(" ", "")}.json`,
    });
    animation.addEventListener("DOMLoaded", () => {
      animationReady = true;
      animationContainer
        ?.querySelectorAll("[aria-label]")
        .forEach((element) => element.removeAttribute("aria-label"));
      animationContainer
        ?.querySelector("svg")
        ?.setAttribute("aria-hidden", "true");
    });
    animation.addEventListener("complete", () => {
      animation?.goToAndPlay(300, true);
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
  class={`${className ?? ""} relative`}
  role="img"
  aria-label={`Badge ${name}`}
>
  <img
    src={`/frameworks/${staticName}.svg`}
    alt=""
    width="60"
    height="60"
    aria-hidden="true"
    class:invert={isDark}
    class="size-full transition-opacity duration-200"
    class:opacity-0={animationReady}
  />
  <div
    bind:this={animationContainer}
    aria-hidden="true"
    class="absolute inset-0 size-full"
    class:opacity-0={!animationReady}
  ></div>
</div>
