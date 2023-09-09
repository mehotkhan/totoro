export default defineAppConfig({
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
      title: "بایگانی",
      to: "/category",
    },
  ],
});
