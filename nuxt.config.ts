import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import viteCompression from "vite-plugin-compression";
import IconsResolver from "unplugin-icons/resolver";
import { GenerateRoutes } from "./tools/contentRoutes";

export default defineNuxtConfig({
  ssr: true,
  target: "static",
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
  },
  image: {
    format: ["webp"],
    provider: "ipx",
  },
});
