export default defineNuxtConfig({
  app: {
    baseURL: "/taas-test/",
    cdnURL: "/taas-test/",
    buildAssetsDir: "/assets/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/taas-test/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/taas-test/favicon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/taas-test/favicon-512x512.png",
        },
        { rel: "apple-touch-icon", href: "/taas-test/apple-touch-icon.png" },
        { rel: "manifest", href: "/taas-test/manifest.json" },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
  nitro: {
    preset: "static",
  },
  ssr: false,
});
