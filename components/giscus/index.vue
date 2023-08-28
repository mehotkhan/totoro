<script setup lang="ts">
const appConfig = useAppConfig();
</script>
<template>
  <div v-if="appConfig.app.giscus">
    <h3>
      <a href="#comments"> دیدگاه‌ها </a>
    </h3>

    <GiscusComments
      id="comments"
      :repo="appConfig?.app.giscus_repo"
      :term="appConfig?.app.giscus_term"
      :repo-id="appConfig?.app.giscus_repo_id"
      :category="appConfig?.app.giscus_category"
      :category-id="appConfig?.app.giscus_category_id"
      :mapping="appConfig?.app.giscus_mapping"
      :theme="appConfig?.app.giscus_theme"
      :reactions-enabled="appConfig?.app.giscus_reaction"
      strict="0"
      loading="lazy"
      input-position="top"
      lang="fa"
      emit-metadata="0"
    />
  </div>
</template>
