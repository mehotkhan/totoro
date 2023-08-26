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
