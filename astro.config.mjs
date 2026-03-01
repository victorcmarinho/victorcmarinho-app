// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
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
        { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-256x256.png", sizes: "256x256", type: "image/png" },
        { src: "/icon-384x384.png", sizes: "384x384", type: "image/png" },
        { src: "/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
      ]
    },
    workbox: {
      globDirectory: 'dist',
      globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
      navigateFallback: '/'
    }
  })]
});