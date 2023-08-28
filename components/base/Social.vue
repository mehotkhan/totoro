<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
<template>
  <div>
    <div class="flex items-center gap-2 text-xl">
      <a
        v-if="appConfig.app.github"
        :href="appConfig.app.github"
        aria-label="github"
        target="_blank"
        rel="noopener"
      >
        <IconUil:github-alt class="ml-3" />
      </a>
      <a
        v-if="appConfig.app.linkedin"
        :href="appConfig.app.linkedin"
        aria-label="Linkedin"
        target="_blank"
        rel="noopener"
      >
        <IconUil:linkedin-alt class="ml-3" />
      </a>
      <a
        v-if="appConfig.app.twitter"
        :href="appConfig.app.twitter"
        aria-label="Twitter"
        target="_blank"
        rel="noopener"
      >
        <IconUil:twitter-alt class="ml-3" />
      </a>
    </div>
  </div>
</template>
