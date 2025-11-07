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
    From chaos to compliance
  </h2>
  <p
    class="text-lg text-muted-foreground text-center intersect-once intersect:animate-slide-in motion-delay-100 mb-10 sm:mb-16"
  >
    Experts manage your compliance program end to end to ensure success.
  </p>
  <div class="flex flex-col sm:flex-row sm:gap-16" bind:this={intersection.ref}>
    <ComplianceTrackItem
      active={step >= 1}
      position="01"
      duration="From 30 minutes to the time you need"
      title="Talk to our engineers and internal auditors"
    >
      We help you assess your current posture, understand your weak spots and opportunities.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 2}
      position="02"
      duration="Less than 24 hours"
      title="Creation of your program"
      >
      We design the appropriate security and compliance posture for you - policies and procedures that reflect how your business actually operates. 
      No fluff
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 3}
      position="03"
      duration="Up to you"
      title="Manage the tech side"
    >
      We don't want production access (and you don't want us there) - so we let you manage things there with our support while we build everything else needed for compliance.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 4}
      position="04"
      duration="Varies with each framework"
      title="We manage your audit"
    >
      You will talk to the auditor (your company is being audited!), but we find the right auditor, handle the process and the back and forth while you stay focus on your business. 
      We keep your compliance current behind the scenes, so you’re always ready
      — and always improving.
    </ComplianceTrackItem>
    <ComplianceTrackItem
      active={step >= 5}
      position="05"
      duration="1 year"
      title="Your compliance runs"
    >
      We keep your compliance current behind the scenes, in adherence to all appropriate frameworks, so you’re always ready
      — and always improving. We provide ongoing guidance and support.
    </ComplianceTrackItem>
  </div>
</section>
