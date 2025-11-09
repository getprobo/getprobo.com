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
      if (step < 5) {
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
    class="text-lg text-muted-foreground text-center intersect-once intersect:animate-slide-in motion-delay-100 mb-10 sm:mb-16"
  >
    Our experts handle the entire compliance journey - from setup to audit - so you can stay focused on building.
  </p>
  <div class="flex flex-col sm:flex-row sm:gap-8" bind:this={intersection.ref}>
    <ComplianceTrackItem
      active={step >= 1}
      position="01"
      duration="From 30 minutes to the time you need"
      title="Kickoff with our experts"
    >
    We start by understanding your setup - where you’re strong, where the gaps are, and what matters most for your business. No fluff, just a clear path to readiness.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 2}
      position="02"
      duration="Less than 24 hours"
      title="Design your compliance program"
      >
      We design the right security and compliance framework for you - real policies and controls that fit how your company actually works, not generic templates.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 3}
      position="03"
      duration="Up to you"
      title="Integrate your systems"
    >
    You stay in control of your systems - we never need production access. Our team helps connect your tools, automate evidence collection, and make compliance effortless.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 4}
      position="04"
      duration="Varies with each framework"
      title="Audit, handled."
    >
    You’ll meet directly with the auditor - it’s your company being assessed, after all. We handle everything else: selecting the right auditor, managing the process, and keeping the communication smooth so you can focus on your work.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 5}
      position="05"
      duration="1 year"
      title="Stay compliant, effortlessly."
    >
    Once live, we keep your compliance current behind the scenes - monitoring, updating, and improving continuously so you’re always ready for the next audit.
    </ComplianceTrackItem>
  </div>
  <br /><br />
  <p
    class="text-lg text-muted-foreground text-center intersect-once intersect:animate-slide-in motion-delay-100 mb-10 sm:mb-16"
  >
  From kickoff to continuous monitoring, Probo keeps you compliant, transparent, and audit-ready at all time.
  </p>
</section>
