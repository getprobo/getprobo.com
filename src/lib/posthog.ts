import posthog from "posthog-js";
import { getConsent } from "@probo/cookie-banner/consent";
import type { BannerConfig } from "@probo/cookie-banner";

export { posthog };

let initialized = false;
const ANALYTICS_CATEGORY = "analytics";

export function configurePosthogFromBanner(_config: BannerConfig) {
  if (initialized) return;
  initialized = true;

  const consent = getConsent();
  const analyticsAllowed = consent.getAll()[ANALYTICS_CATEGORY] === true;

  posthog.init(import.meta.env.PUBLIC_POSTHOG_API_KEY, {
    api_host: "https://t.probo.com",
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
    cookieless_mode: analyticsAllowed ? "on_reject" : "always",
    opt_out_capturing_by_default: !analyticsAllowed,
    person_profiles: "identified_only",
    capture_pageview: true,
    autocapture: true,
    capture_heatmaps: true,
    respect_dnt: true,
    debug: import.meta.env.DEV,
  });

  if (analyticsAllowed) identifyStableAnonId();

  consent.subscribe((data) => {
    if (data[ANALYTICS_CATEGORY]) {
      posthog.opt_in_capturing();
      identifyStableAnonId();
    } else {
      posthog.opt_out_capturing();
    }
  });

  loadToolbarFromCache();
}

// Stable anonymous distinct_id for feature-flag consistency.
// Consent-gated: only reads/writes localStorage once analytics is allowed,
// since localStorage access is terminal-equipment access under GDPR/ePrivacy.
function identifyStableAnonId() {
  const KEY = "probo_distinct_id";
  let id: string | null = null;
  try {
    id = localStorage.getItem(KEY);
    if (!id) {
      id = "anon-" + crypto.randomUUID();
      localStorage.setItem(KEY, id);
    }
  } catch {
    return;
  }
  posthog.identify(id);
}

// PostHog Toolbar persistence across Astro ClientRouter view transitions.
// The `#__posthog=...` payload only exists on the first full load; cache it and
// re-inject after each body swap, since the swap destroys the toolbar overlay.
let toolbarPayload: string | null = null;

export function captureToolbarPayloadFromHash() {
  const fromHash = new URLSearchParams(window.location.hash.substring(1)).get(
    "__posthog",
  );
  if (fromHash) toolbarPayload = fromHash;
}

export function loadToolbarFromCache() {
  if (!initialized || !toolbarPayload) return;
  posthog.loadToolbar(JSON.parse(toolbarPayload));
}
