import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import viteCompression from "vite-plugin-compression";
import IconsResolver from "unplugin-icons/resolver";
import { GenerateRoutes } from "./tools/contentRoutes";

export default defineNuxtConfig({
  css: [
    "@/assets/scss/base.scss",
    "@/node_modules/vazirmatn/Vazirmatn-Variable-font-face.css",
  ],
  modules: ["@nuxt/image", "@nuxthq/ui", "@nuxt/content"],
  vite: {
    plugins: [
      viteCompression({ algorithm: "brotliCompress" }),
      Components({
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
      Icons(),
    ],
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: GenerateRoutes(["blogs", "pages"]),
    },
  },
  experimental: {
    payloadExtraction: false,
    treeshakeClientOnly: false,
  },
});
