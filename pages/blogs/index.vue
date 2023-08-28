<script setup>
useHead({
  title: "بلاگ",
});
</script>
<template>
  <section class="flex flex-col">
    <ContentDoc v-slot="{ doc }" path="/pages/blogs">
      <BasePageHeader :data="doc" />
    </ContentDoc>
    <BaseLatestItems />
  </section>
</template>
