<script lang="ts" setup>
useHead({
  title: "صفحه نخست",
});
</script>
<template>
  <section class="flex flex-col">
    <BaseIntroPost />
    <h3 class="border-b pb-3">جدیدترین ورودی‌ها</h3>
    <LazyBaseLatestItems />
  </section>
</template>
