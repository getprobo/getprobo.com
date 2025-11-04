<script lang="ts">
  import ComplianceTrackItem from "../ui/ComplianceTrackItem.svelte";
  import { useIntersectionObserver } from "../../lib/runes/useIntersectionObserver.svelte.ts";
  let intersection = useIntersectionObserver({once: true});

  let step = $state(0);

  $effect(() => {
    if (!intersection.observed) {
      return;
    }
    step = 0;
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      step++;
      if (step < 4) {
        timer = setTimeout(tick, 2000);
      }
    };
    timer = setTimeout(tick, 1000);
    return () => clearInterval(timer);
  });
</script>

<section class="py-10 sm:py-20 container animate-fade-in animation-delay-500">
  <h2
    class="text-h3 sm:text-h2 mb-3 font-medium text-center intersect-once intersect:animate-slide-in"
  >
    Fast track to compliance
  </h2>
  <p
    class="text-lg text-muted-foreground text-center intersect-once intersect:animate-slide-in motion-delay-100 mb-10 sm:mb-16"
  >
    Get onboarded with compliance experts.
  </p>
  <div class="flex flex-col sm:flex-row sm:gap-16" bind:this={intersection.ref}>
    <ComplianceTrackItem
      active={step >= 1}
      position="01"
      duration="1-week average"
      title="Designed Around You"
    >
      Tell us how you work — no prep, no pressure. We adapt everything to fit
      your flow.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 2}
      position="02"
      duration="2-week average"
      title="Designed Around You"
      >We craft every document to reflect how your business actually operates.
      No templates. No wasted time.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 3}
      position="03"
      duration="4-week average"
      title="Audits, Without the Stress"
    >
      We manage the entire audit for you — finding the right auditor, handling
      the process, and keeping you focused.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 4}
      position="04"
      duration="4-week average"
      title="Compliance That Runs Itself"
    >
      We keep your compliance current behind the scenes, so you’re always ready
      — and always improving.
    </ComplianceTrackItem>
  </div>
</section>
