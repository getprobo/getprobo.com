// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import faroUploader from '@grafana/faro-rollup-plugin';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  prefetch: false,
  trailingSlash: 'never',
  redirects: {
    '/blog/page/1': {
      status: 301,
      destination: '/blog'
    }
  },
  build: {
    format: 'file',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks (id) {
            if (id.includes('node_modules/svelte') || id.includes('lib/runes') || id.includes('node_modules/runed')) {
              return 'svelte';
            }

            if (id.includes('@splide')) {
              return 'splide';
            }

            return null;
          }
        }
      }
    },
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
