<aside class={clsx("text-center flex flex-col gap-4 items-center", className)}>
    <div class="text-xs font-medium">Share article</div>
    <div class={clsx("flex items-center  text-muted-foreground justify-center", `gap-${gap}`)} aria-label="Share this page" role="group">
        <button class="hover:text-foreground transition-colors" type="button" title="Share on Facebook" aria-label="Share on Facebook" onclick={shareFacebook}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" aria-hidden="true"
                 focusable="false">
                <path fill="currentColor"
                      d="M1.75 0h10.5C13.22 0 14 .78 14 1.75v10.5c0 .97-.78 1.75-1.75 1.75H8.79V8.55h1.82l.28-2.1h-2.1V5.1c0-.6.16-1.03 1.05-1.03h1.1V2.18c-.53-.06-1.08-.08-1.62-.08A2.55 2.55 0 0 0 6.6 4.9v1.57H4.78v2.1H6.6V14H1.75C.78 14 0 13.22 0 12.25V1.75C0 .78.78 0 1.75 0Z"/>
            </svg>
        </button>
        <button class="hover:text-foreground transition-colors" type="button" title="Share on X" aria-label="Share on X" onclick={shareX}>
            <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                 focusable="false">
                <path d="M10.4898 7.62738L17.0515 0H15.4966L9.79908 6.62275L5.24853 0H0L6.88133 10.0148L0 18.0132H1.55499L7.57167 11.0194L12.3774 18.0132H17.6259L10.4898 7.62738ZM8.36005 10.103L7.66282 9.10575L2.11527 1.17057H4.50364L8.98058 7.57452L9.6778 8.57176L15.4973 16.8959H13.1089L8.36005 10.103Z"
                      fill="currentColor"/>
            </svg>
        </button>
        <button class="hover:text-foreground transition-colors" type="button" title="Share by email" aria-label="Share by email" onclick={shareEmail}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"
                 focusable="false">
                <path fill="currentColor" d="m0 1.88 8 4 8-4A2 2 0 0 0 14 0H2a2 2 0 0 0-2 1.88Z"/>
                <path fill="currentColor" d="m16 4.12-8 4-8-4V10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4.12Z"/>
            </svg>
        </button>
        <button class="hover:text-foreground transition-colors" type="button" title={copied ? 'Copied!' : 'Copy link'} aria-label={copied ? 'Copied!' : 'Copy link'}
                onclick={copyLink}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" aria-hidden="true"
                 focusable="false">
                <path fill="currentColor"
                      d="M9.26 2.26a1.75 1.75 0 1 1 2.48 2.48L9.1 7.36c-.68.69-1.79.69-2.47 0A.87.87 0 1 0 5.4 8.6a3.5 3.5 0 0 0 4.95 0l2.63-2.63a3.5 3.5 0 0 0-4.95-4.94L6.7 2.33a.88.88 0 1 0 1.24 1.25l1.31-1.32Z"/>
                <path fill="currentColor"
                      d="M4.89 6.64c.68-.69 1.79-.69 2.47 0A.88.88 0 1 0 8.6 5.4a3.5 3.5 0 0 0-4.95 0L1.03 8.03a3.5 3.5 0 0 0 4.94 4.94l1.32-1.3a.88.88 0 0 0-1.24-1.25l-1.31 1.32a1.75 1.75 0 0 1-2.48-2.48L4.9 6.64Z"/>
            </svg>
        </button>
    </div>
</aside>

<script lang="ts">
  import clsx from "clsx";

  const {url, title, class: className, gap = 6}: { url: string, title: string, class?: string, gap?:number } = $props();

  let copied = $state(false);

  const openWindow = (shareUrl: string) => {
    if (typeof window === 'undefined') return;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
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
    if (typeof window !== 'undefined') {
      window.location.href = mailto;
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (e) {
      console.error('Failed to copy link:', e);
    }
  };
</script>
