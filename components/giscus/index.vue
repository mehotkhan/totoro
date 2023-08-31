<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>
<template>
  <div v-if="runtimeConfig.app.giscus">
    <h3>
      <a href="#comments"> دیدگاه‌ها </a>
    </h3>

    <GiscusComments
      id="comments"
      :repo="runtimeConfig?.app.giscus_repo"
      :term="runtimeConfig?.app.giscus_term"
      :repo-id="runtimeConfig?.app.giscus_repo_id"
      :category="runtimeConfig?.app.giscus_category"
      :category-id="runtimeConfig?.app.giscus_category_id"
      :mapping="runtimeConfig?.app.giscus_mapping"
      :theme="runtimeConfig?.app.giscus_theme"
      :reactions-enabled="runtimeConfig?.app.giscus_reaction"
      :lang="runtimeConfig?.app.giscus_locale"
      strict="0"
      loading="lazy"
      input-position="top"
      emit-metadata="0"
    />
  </div>
</template>
