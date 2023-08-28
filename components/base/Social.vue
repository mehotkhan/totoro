<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
<template>
  <div>
    <div class="flex items-center gap-2 text-xl">
      <a
        v-if="appConfig.app.github"
        :href="appConfig.app.github"
        target="_blank"
      >
        <IconUil:github-alt class="ml-3" />
      </a>
      <a
        v-if="appConfig.app.linkedin"
        :href="appConfig.app.linkedin"
        target="_blank"
      >
        <IconUil:linkedin-alt class="ml-3" />
      </a>
      <a
        v-if="appConfig.app.twitter"
        :href="appConfig.app.twitter"
        target="_blank"
      >
        <IconUil:twitter-alt class="ml-3" />
      </a>
    </div>
  </div>
</template>
