<script lang="ts" setup>
const appConfig = useAppConfig();

useHead({
  title: appConfig.app.titleFirst + appConfig.app.titleSecond,
  titleTemplate: appConfig.app.titleTemplate,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: appConfig.app.color },
    {
      hid: "description",
      name: "description",
      content: appConfig.app.description,
    },
  ],

  link: [
    { rel: "icon", type: "image/x-icon", href: appConfig.app.favicon },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: appConfig.app.icon,
    },
  ],
});
</script>
<template>
  <Html dir="rtl">
    <Body>
      <NuxtLayout>
        <UContainer>
          <NuxtPage />
        </UContainer>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="scss"></style>
