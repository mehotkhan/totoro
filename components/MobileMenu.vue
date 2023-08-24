<script setup lang="ts">
const appConfig = useAppConfig();
const { data }: any = useAsyncData("pages", () => queryContent("pages").find());
const items = computed(() => {
  const menus: any[] = [];
  appConfig.menuItems.forEach((menu: any) => {
    menus.push([
      {
        label: menu.title,
        click: () => navigateTo(menu.to),
      },
    ]);
  });
  data.value.forEach((menu: any) => {
    menus.push([
      {
        label: menu.title,
        click: () => navigateTo(menu._path),
      },
    ]);
  });
  return menus;
});
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <IconUil:align-justify class="text-md flex" aria-hidden="true" />
  </UDropdown>
</template>
