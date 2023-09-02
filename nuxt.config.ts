import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import viteCompression from "vite-plugin-compression";
import { GenerateRoutes } from "./tools/contentRoutes";

export default defineNuxtConfig({
  ssr: true,
  css: ["@/assets/scss/base.scss", "@/assets/scss/extra.scss"],
  modules: ["@nuxt/image", "@nuxthq/ui", "@nuxt/content"],
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    app: {
      title: process.env.SITE_NAME,
      description: process.env.SITE_DESCRIPTIONS,
      titleFirst: process.env.SITE_TITLE_FIRST,
      titleSecond: process.env.SITE_TITLE_SECOND,
      github: process.env.GITHUB,
      linkedin: process.env.LINKEDIN,
      twitter: process.env.TWITTER,
      giscus: process.env.GISCUS,
      giscus_term: process.env.GISCUS_TERM,
      giscus_category: process.env.GISCUS_CATEGORY,
      giscus_category_id: process.env.GISCUS_CATEGORY_ID,
      giscus_repo: process.env.GISCUS_REPO,
      giscus_repo_id: process.env.GISCUS_REPO_ID,
      giscus_mapping: process.env.GISCUS_MAPPING,
      giscus_theme: process.env.GISCUS_THEME,
      giscus_reaction: process.env.GISCUS_REACTION,
      giscus_locale: process.env.APP_LOCALE,
      favicon: "/favicon.ico",
      icon: "/icons.png",
      color: "#e5e7eb",
    },
    public: {
      siteUrl: process.env.PUBLIC_SITE_URL,
      siteName: process.env.SITE_NAME,
      siteDescription: process.env.SITE_DESCRIPTIONS,
      language: process.env.SITE_LANGUAGE,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "in-out" },
  },
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
    static: true,
    compressPublicAssets: true,
    minify: true,
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
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["giscus-widget"].includes(tag),
    },
  },
});
