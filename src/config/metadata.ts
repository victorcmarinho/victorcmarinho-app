import type { SEOProps } from "astro-seo";

export const metadataConfig: SEOProps = {
  titleDefault: "Victor Marinho - Fullstack Developer",
  title: "Victor Marinho - Fullstack Developer",
  description:
    "Portfólio de Victor Marinho, Fullstack Developer com experiência em Next.js, Astro, React, Angular, Node.js e Flutter.",
  languageAlternates: [
    {
      href: "https://victorcmarinho.app/en",
      hrefLang: "en",
    },
    {
      href: "https://victorcmarinho.app/pt",
      hrefLang: "pt",
    },
    {
      href: "https://victorcmarinho.app/pt-br",
      hrefLang: "pt-br",
    },
  ],
  charset: "utf-8",
  openGraph: {
    basic: {
      title: "Victor Marinho - Fullstack Developer",
      image: "/icon-192x192.png",
      type: "profile",
      url: "https://victorcmarinho.app",
    },
    optional: {
      siteName: "https://victorcmarinho.app",
      description:
        "Portfólio de Victor Marinho, Fullstack Developer com experiência em Next.js, Astro, React, Angular, Node.js e Flutter.",
      locale: "pt-br",
      localeAlternate: ["pt-br", "pt", "en"],
    },
  },
  extend: {
    link: [
      {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },
      {
        rel: "apple-mobile-web-app-icon",
        href: "/icon-192x192.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/icon-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "apple-touch-icon",
        href: "/icon-256x256.png",
        sizes: "256x256",
      },
      {
        rel: "apple-touch-icon",
        href: "/icon-384x384.png",
        sizes: "384x384",
      },
      {
        rel: "apple-touch-icon",
        href: "/icon-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        href: "/icon-512x512.png",
        sizes: "512x512",
      },
    ],
    meta: [
      {
        name: "keywords",
        content:
          "Victor Marinho, victorcmarinho, Fullstack Developer, Next.js, React, Angular, Node.js, Flutter, desenvolvimento web, desenvolvimento mobile",
      },
      {
        name: "application-name",
        content: "victorcmarinho",
      },
      {
        name: "creator",
        content: "Victor Marinho",
      },
      {
        name: "theme-color",
        content: "#4070F4",
      },
      {
        name: "viewport",
        content: "device-width, initial-scale=1",
      },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#4070F4" },
      {
        name: "apple-mobile-web-app-title",
        content: "Victor Marinho - Fullstack Developer",
      },
    ],
  },
};
