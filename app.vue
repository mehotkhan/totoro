<script lang="ts" setup>
import { useDark } from "@vueuse/core";

const runtimeConfig = useRuntimeConfig();
const isDark = useDark();

useHead({
  title: runtimeConfig.app.title,
  titleTemplate: `%s - ${runtimeConfig.app.title}:// ${runtimeConfig.app.description} `,

  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: runtimeConfig.app.color },
    {
      hid: "description",
      name: "description",
      content: runtimeConfig.app.description,
    },
  ],

  link: [
    { rel: "icon", type: "image/x-icon", href: runtimeConfig.app.favicon },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: runtimeConfig.app.icon,
    },
  ],
});
</script>
<template>
  <Html dir="rtl" lang="fa" :class="isDark ? 'dark' : 'light'">
    <Body class="dark:bg-slate-800">
      <NuxtLayout>
        <SeoKit />
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
