import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.svg", "logo-192.png", "logo-512.png"],
      manifest: {
        name: "Sandra's Portfolio",
        short_name: "Sandra",
        description:
          "The personal portfolio of Sandra Ighoyivwi – a passionate frontend developer showcasing projects, skills, and experience.",
        start_url: "/",
        display: "standalone",
        background_color: "#4F46E5",
        theme_color: "#4F46E5",
        orientation: "portrait",
        icons: [
          {
            src: "/logo-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
