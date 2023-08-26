<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();
const { data }: any = useAsyncData("pages", () =>
  queryContent("pages").where({ menu: true }).find()
);
</script>

<template>
  <ul class="list-none flex mt-8">
    <li v-for="menu in appConfig.menuItems" :key="menu.to">
      <NuxtLink
        :to="menu.to"
        class="hover:text-black py-1 px-5"
        :class="
          menu.to !== '/' && route.path == menu.to ? 'router-link-active' : ''
        "
        >{{ menu.title }}</NuxtLink
      >
    </li>
    <li v-for="page in data" :key="page._path">
      <NuxtLink
        :to="page._path"
        class="hover:text-black py-1 px-5 break-keep"
        :class="
          page.to !== '/' && route.path == page._path
            ? 'router-link-active'
            : ''
        "
        >{{ page.title.trim() }}</NuxtLink
      >
    </li>
  </ul>
</template>
<style lang="scss" scoped>
a {
  text-wrap: nowrap;
}
.router-link-active {
  background: #454545e1;
  color: white;
  border-radius: 3px;
  // text-decoration: underline;
}
</style>
