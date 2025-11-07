<script lang="ts">
  import clsx from "clsx";

  const {
    url,
    title,
    class: className,
  }: { url: string; title: string; class?: string; } = $props();

  let copied = $state(false);

  const openWindow = (shareUrl: string) => {
    if (typeof window === "undefined") return;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const shareFacebook = () => {
    const share = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    openWindow(share);
  };

  const shareX = () => {
    const share = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    openWindow(share);
  };

  const shareEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${title}\n\n${url}`);
    const mailto = `mailto:?subject=${subject}&body=${body}`;
    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (e) {
      console.error("Failed to copy link:", e);
    }
  };
</script>

<aside class={clsx("text-center flex flex-col gap-4 items-center", className)}>
  <div class="text-xs font-medium">Share article</div>
  <div
    class="flex items-center  text-muted-foreground justify-center gap-2"
    aria-label="Share this page"
    role="group"
  >
    <button
      class="hover:text-foreground transition-colors"
      type="button"
      title="Share on X"
      aria-label="Share on X"
      onclick={shareX}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
        <path fill="currentColor" d="M13.6 2.24h2.45L10.7 8.37 17 16.7h-4.94L8.2 11.65 3.77 16.7H1.32l5.73-6.56L1 2.25h5.06l3.5 4.61 4.04-4.62Zm-.86 13h1.36L5.32 3.64H3.86l8.88 11.6Z"/>
      </svg>
    </button>
    <button
      class="hover:text-foreground transition-colors"
      type="button"
      title="Share by email"
      aria-label="Share by email"
      onclick={shareEmail}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M15 6.15v5.7h1.5v-5.7H15Zm-1.65 7.35h-8.7V15h8.7v-1.5ZM3 11.85v-5.7H1.5v5.7H3ZM4.65 4.5h8.7V3h-8.7v1.5Zm0 9c-.43 0-.71 0-.92-.02a.86.86 0 0 1-.32-.06l-.68 1.33c.28.15.58.2.87.23.3.02.64.02 1.05.02v-1.5ZM1.5 11.85c0 .4 0 .76.02 1.05.03.3.08.59.22.87l1.34-.68a.85.85 0 0 1-.06-.32c-.02-.2-.02-.49-.02-.92H1.5Zm1.9 1.57a.75.75 0 0 1-.32-.33l-1.34.68c.22.42.56.77.99.98l.68-1.33ZM15 11.85c0 .43 0 .71-.02.92a.86.86 0 0 1-.06.32l1.33.68c.15-.28.2-.58.23-.87.02-.3.02-.64.02-1.05H15ZM13.35 15c.4 0 .76 0 1.05-.02.3-.03.59-.08.87-.23l-.68-1.33a.86.86 0 0 1-.32.06c-.2.02-.49.02-.92.02V15Zm1.57-1.9a.75.75 0 0 1-.33.32l.68 1.33c.42-.21.77-.56.98-.98l-1.33-.68Zm1.58-6.95c0-.4 0-.76-.02-1.05a2.3 2.3 0 0 0-.23-.87l-1.33.68c.02.04.04.11.06.32.02.2.02.49.02.92h1.5ZM13.35 4.5c.43 0 .71 0 .92.02.2.01.28.04.32.06l.68-1.33a2.3 2.3 0 0 0-.87-.23C14.1 3 13.76 3 13.35 3v1.5Zm2.9-.27a2.25 2.25 0 0 0-.98-.98l-.68 1.33c.14.07.26.19.33.33l1.33-.68ZM3 6.15c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32l-1.34-.68c-.14.28-.2.58-.22.87-.02.3-.02.64-.02 1.05H3ZM4.65 3c-.4 0-.76 0-1.05.02-.3.03-.59.08-.87.23l.68 1.33a.85.85 0 0 1 .32-.06c.2-.02.49-.02.92-.02V3ZM3.08 4.91a.75.75 0 0 1 .33-.33l-.68-1.33c-.43.21-.77.56-.99.98l1.34.68Zm12.2-1.26-5.8 4.74.94 1.16 5.8-4.74-.95-1.16ZM8.51 8.39l-5.8-4.74-.95 1.16 5.8 4.74.95-1.16Zm.95 0a.75.75 0 0 1-.95 0l-.95 1.16c.83.68 2.03.68 2.85 0L9.47 8.4Z"/></svg>
    </button>
    <button
      class="hover:text-foreground transition-colors"
      type="button"
      title={copied ? "Copied!" : "Copy link"}
      aria-label={copied ? "Copied!" : "Copy link"}
      onclick={copyLink}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.5 14.25-.13.13a3 3 0 0 1-4.24 0l-.26-.26a3 3 0 0 1 0-4.24l2.5-2.5a3 3 0 0 1 4.25 0l.26.25c.49.49.77 1.1.85 1.74"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.27 9.37c.08.64.36 1.26.85 1.75l.26.26a3 3 0 0 0 4.24 0l2.5-2.5a3 3 0 0 0 0-4.25l-.25-.26a3 3 0 0 0-4.24 0l-.13.13"/></svg>
    </button>
  </div>
</aside>
