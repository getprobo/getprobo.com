<script lang="ts">
  import Button from "./ui/Button.svelte";
  import {fly} from 'svelte/transition'
  import { useCookie } from "../lib/runes/useCookie.svelte.ts";

  type States = "unknown" | "accepted" | "denied" | "essential";

  const consentState = useCookie("cookie-consent", "unknown" as States);

  $effect(() => {
    switch (consentState.value) {
      case "unknown":
      case "denied":
        return;
      case "essential":
        console.log("essential cookie loading");
        // TODO : assign logic when cookie are essential
        return;
      case "accepted":
        console.log("all cookie accepted");
        // TODO : assign logic when cookie are accepted
        return;
    }
  });
</script>

{#if consentState.value === 'unknown'}
  <div
    out:fly={{duration: 300, y: 50}}
    class="shadow-mid p-6 transition-all bg-level-1 fixed bottom-0 left-0 right-0 z-100 sm:right-12 sm:bottom-12 sm:max-w-[450px] sm:left-auto sm:rounded-2xl animate-perspective-in">
    <h6 class="text-lg font-medium mb-2 sm:hidden">Manage your consent preferences</h6>
    <p class="text-sm text-muted-foreground mb-6 sm:mb-4">
      {consentState.value} We use cookies to enhance your user experience, provide personalised content and analyse
      traffic. <a class="text-foreground underline" href="/privacy">Privacy Policy</a>
    </p>
    <div class="flex flex-col gap-3 sm:flex-row">
      <Button type="button" onclick={() => consentState.value = 'accepted'}>Accept all</Button>
      <Button type="button" onclick={() => consentState.value = 'essential'} variant="highlight">Only essentials</Button>
      <Button type="button" onclick={() => consentState.value = 'denied'} variant="highlight">Deny all</Button>
    </div>
  </div>
{/if}
