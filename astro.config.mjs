// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  prefetch: false,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), svelte()],
});
