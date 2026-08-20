import { getConsent } from "@probo/cookie-banner/consent";
import type { BannerConfig } from "@probo/cookie-banner";
import type { PostHogInterface } from "posthog-js";

const ANALYTICS_CATEGORY = "analytics";
let posthog: PostHogInterface | null = null;
let initialization: Promise<PostHogInterface> | null = null;

export function configurePosthogFromBanner(_config: BannerConfig) {
  const consent = getConsent();
  const analyticsAllowed = consent.getAll()[ANALYTICS_CATEGORY] === true;

  if (analyticsAllowed) {
    void initializePosthog().catch(() => {});
  }

  consent.subscribe((data) => {
    if (data[ANALYTICS_CATEGORY]) {
      void initializePosthog()
        .then((client) => {
          client.opt_in_capturing();
          identifyStableAnonId(client);
        })
        .catch(() => {});
    } else {
      posthog?.opt_out_capturing();
    }
  });
}

async function initializePosthog() {
  if (posthog) {
    return posthog;
  }
  if (initialization) {
    return initialization;
  }

  initialization = import("posthog-js")
    .then(({ default: client }) => {
      client.init(import.meta.env.PUBLIC_POSTHOG_API_KEY, {
        api_host: "https://t.probo.com",
        ui_host: "https://us.posthog.com",
        defaults: "2026-01-30",
        cookieless_mode: "on_reject",
        opt_out_capturing_by_default: false,
        person_profiles: "identified_only",
        capture_pageview: true,
        autocapture: true,
        capture_heatmaps: true,
        respect_dnt: true,
        debug: import.meta.env.DEV,
      });
      posthog = client;
      identifyStableAnonId(client);
      loadToolbarFromCache();
      return client;
    })
    .catch((error) => {
      initialization = null;
      throw error;
    });

  return initialization;
}

export function capturePosthogEvent(
  eventName: string,
  properties?: Record<string, string>,
) {
  posthog?.capture(eventName, properties);
}

// Stable anonymous distinct_id for feature-flag consistency.
// Consent-gated: only reads/writes localStorage once analytics is allowed,
// since localStorage access is terminal-equipment access under GDPR/ePrivacy.
function identifyStableAnonId(client: PostHogInterface) {
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
  client.identify(id);
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
  if (!posthog || !toolbarPayload) return;
  posthog.loadToolbar(JSON.parse(toolbarPayload));
}
