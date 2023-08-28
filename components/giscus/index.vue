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
      reactions-enabled="1"
      emit-metadata="0"
      repo-id="R_kgDOKK9Djw"
      category="General"
      category-id="DIC_kwDOKK9Dj84CY100"
      mapping="title"
      strict="0"
      reactionsenabled="1"
      theme="light"
      loading="lazy"
      input-position="top"
      lang="fa"
    />
  </div>
</template>
