import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
// https://docs.astro.build/en/guides/deploy/cloudflare/ 
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: cloudflare({
    mode: "advanced",
  }),
});