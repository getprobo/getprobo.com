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
      if (step < 3) {
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
    From chaos to confidence
  </h2>
  <p
    class="text-lg text-muted-foreground text-center intersect-once intersect:animate-slide-in motion-delay-100 mb-10 sm:mb-16 max-w-140 mx-auto"
  >
    Our experts handle the entire compliance journey - from setup to audit - so you can stay focused on building.
  </p>
  <div class="flex flex-col sm:flex-row gap-6 sm:gap-16" bind:this={intersection.ref}>
    <ComplianceTrackItem
      active={step >= 1}
      position="01"
      title="Set up and plan"
    >
    We start by understanding your current setup, identifying gaps, and defining the right path for your business. Then we create a compliance framework tailored to how you actually operate - real policies, no boilerplate.</ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 2}
      position="02"
      title="Implementation & audit"
      >
      Our team helps you integrate your systems, automate evidence collection, and coordinate everything with your auditor. You’ll still join the call but there’s no pressure. We make sure you’re ready.</ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 3}
      position="03"
      title="Stay compliant"
    >
    Once compliant, we keep your compliance running in the background - monitoring, updating, and improving continuously so you’re always ready for the next audit.
    </ComplianceTrackItem>
  </div>
  <br /><br />
  <p
    class="text-lg text-muted-foreground text-center intersect-once intersect:animate-slide-in motion-delay-100 mb-10 sm:mb-16"
  >
  From kickoff to continuous monitoring, Probo keeps you compliant, transparent, and audit-ready at all time.
  </p>
</section>
