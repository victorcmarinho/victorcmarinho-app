// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://victorcmarinho.app",
  image: {
    domains: ["ghchart.rshah.org"],
  },
  vite: {
    plugins: [
      // @ts-expect-error - mismatch de tipagem de versões do Vite entre o Tailwind e o Astro
      tailwindcss()
    ]
  },
  integrations: [AstroPWA({
    registerType: 'autoUpdate',
    manifest: {
      name: "Victor Marinho",
      short_name: "victorcmarinho",
      description: "Portfólio de Victor Marinho, Fullstack Developer",
      theme_color: "#4070F4",
      background_color: "#fff",
      display: "standalone",
      icons: [
        { src: "/icon-192x192.webp", sizes: "192x192", type: "image/webp" },
        { src: "/icon-256x256.webp", sizes: "256x256", type: "image/webp" },
        { src: "/icon-384x384.webp", sizes: "384x384", type: "image/webp" },
        { src: "/icon-512x512.webp", sizes: "512x512", type: "image/webp", purpose: "any maskable" }
      ]
    },
    workbox: {
      globDirectory: 'dist',
      globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
      navigateFallback: '/'
    }
  })]
});