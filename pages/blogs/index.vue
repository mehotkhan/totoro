<script setup>
useHead({
  title: "یادداشت‌ها",
});
</script>
<template>
  <section class="flex flex-col">
    <ContentDoc v-slot="{ doc }" path="/pages/blogs">
      <PageHeader :data="doc" />
    </ContentDoc>
    <LatestItems />
  </section>
</template>
