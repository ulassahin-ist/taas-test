export default defineNuxtConfig({
  app: {
    baseURL: "/taas-test/",
    cdnURL: "/taas-test/",
    buildAssetsDir: "/assets/",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
  nitro: {
    preset: "static",
  },
  ssr: false,
});
