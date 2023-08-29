import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import { GenerateRoutes } from "./tools/contentRoutes";
import viteCompression from "vite-plugin-compression";

export default defineNuxtConfig({
  ssr: true,
  target: "static",
  css: [
    "@/assets/scss/base.scss",
    "@/node_modules/vazirmatn/Vazirmatn-Variable-font-face.css",
  ],
  modules: ["@nuxt/image-edge", "@nuxthq/ui", "@nuxt/content"],
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
    build: {
      watch: {},
      sourcemap: false,
      minify: true,
      rollupOptions: { treeshake: false },
    },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: false,
      routes: GenerateRoutes(["blogs", "pages", "category"]),
    },
  },
  experimental: {
    payloadExtraction: false,
    treeshakeClientOnly: false,
    inlineSSRStyles: false,
  },
  image: {
    format: ["webp"],
    provider: "ipx",
  },
});
