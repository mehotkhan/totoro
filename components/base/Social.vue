<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>
<template>
  <div>
    <div class="flex items-center gap-2">
      <a
        v-if="runtimeConfig.app.github"
        :href="runtimeConfig.app.github"
        aria-label="github"
        target="_blank"
        rel="noopener"
      >
        <IconUil:github-alt />
      </a>
      <a
        v-if="runtimeConfig.app.linkedin"
        :href="runtimeConfig.app.linkedin"
        aria-label="Linkedin"
        target="_blank"
        rel="noopener"
      >
        <IconUil:linkedin-alt />
      </a>
      <a
        v-if="runtimeConfig.app.twitter"
        :href="runtimeConfig.app.twitter"
        aria-label="Twitter"
        target="_blank"
        rel="noopener"
      >
        <IconUil:twitter-alt />
      </a>
    </div>
  </div>
</template>
