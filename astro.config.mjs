import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";
import compressor from "astro-compressor";
import serviceWorker from "astrojs-service-worker";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown(), sitemap(), playformCompress(), robotsTxt(), compressor(), purgecss(), serviceWorker()],
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'pt', 'en'],
    routing: {
      redirectToDefaultLocale: true,
    }
  },
  site: "https://victorcmarinho.app",
  output: "server",
  adapter: vercel(),
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: "avatars.githubusercontent.com"
    }, {
      protocol: 'https',
      hostname: "raw.githubusercontent.com"
    }]
  }
});