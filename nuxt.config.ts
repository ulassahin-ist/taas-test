// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/taas-test/",
    cdnURL: "/taas-test/",
    buildAssetsDir: "/_nuxt/",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
  nitro: {
    preset: "static",
  },
  ssr: false,
});
