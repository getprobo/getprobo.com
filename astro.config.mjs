// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import faroUploader from '@grafana/faro-rollup-plugin';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  prefetch: false,
  vite: {
    plugins: [
      tailwindcss(),
      faroUploader({
        appName: "site",
        endpoint: "https://faro-collector-prod-us-west-0.grafana.net/collect/bc771c773d3690b642ccf001af91958a",
        apiKey: "",
        appId: "",
        stackId: "",
        gzipContents: true,
      }),
    ],
  },

  integrations: [mdx(), svelte()],
});
