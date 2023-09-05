<script setup>
useHead({
  title: "بلاگ",
});
</script>
<template>
  <section class="flex flex-col">
    <ContentDoc v-slot="{ doc }" path="/pages/blogs">
      <LazyBasePageIntro :data="doc" />
    </ContentDoc>
    <LazyBaseLatestItems />
  </section>
</template>
