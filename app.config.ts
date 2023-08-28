export default defineAppConfig({
  app: {
    titleFirst: "تو",
    titleSecond: "تورو",
    description: "جم‌استک استارتر ",
    favicon: "/favicon.ico",
    icon: "/icons.png",
    color: "#e5e7eb",
    github: "https://github.com/mehotkhan/totoro",
    linkedin: "",
    twitter: "",
    giscus: true, // enable  giscus comment systems
    giscus_term: "به توتورو خوش آمدید :)",
    giscus_category: "General",
    giscus_repo: "mehotkhan/totoro",
    giscus_repo_id: "R_kgDOKK9Djw",
    giscus_category_id: "DIC_kwDOKK9Dj84CY100",
    giscus_mapping: "title",
    giscus_theme: "light",
    giscus_reaction: "1",
  },
  ui: {
    primary: "gray",
    gray: "cool",
    icons: "all",
  },
  menuItems: [
    {
      title: "صفحه‌نخست",
      to: "/",
    },
    {
      title: "بلاگ",
      to: "/blogs",
    },
    {
      title: "دسته‌بندی‌ها",
      to: "/category",
    },
  ],
});
