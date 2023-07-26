import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

const metadataConfig: Metadata = {
  title: "Victor Marinho - Fullstack Developer",
  description:
    "Portfólio de Victor Marinho, Fullstack Developer com experiência em Next.js, React, Angular, Node.js e Flutter.",
  keywords:
    "Victor Marinho, victorcmarinho, Fullstack Developer, Next.js, React, Angular, Node.js, Flutter, desenvolvimento web, desenvolvimento mobile",
  applicationName: "victorcmarinho",
  creator: "Victor Marinho",
  themeColor: "#4070F4",
  robots: "index.html, follow",
  openGraph: {
    type: "profile",
    countryName: "Brazil",
    siteName: "https://victorcmarinho.app",
  },
  viewport: { width: "device-width", initialScale: 1 },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "victorcmarinho",
    statusBarStyle: "default",
    startupImage: "/icon-192x192.png",
  },
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/icon-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "apple-touch-icon",
      url: "/icon-256x256.png",
      sizes: "256x256",
    },
    {
      rel: "apple-touch-icon",
      url: "/icon-384x384.png",
      sizes: "384x384",
    },
    {
      rel: "apple-touch-icon",
      url: "/icon-512x512.png",
      sizes: "512x512",
    },
    {
      rel: "icon",
      url: "/icon-512x512.png",
      sizes: "512x512",
    },
  ],
};

export const metadata: Metadata = {
  ...metadataConfig,
  openGraph: {
    ...metadataConfig.openGraph,
    description: metadataConfig.description!,
    title: metadataConfig.title!,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
