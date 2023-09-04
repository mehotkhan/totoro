<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>
<template>
  <h1 class="flex text-2xl items-center ml-5">
    <NuxtLink :external="false" to="/">
      <div class="flex items-baseline">
        <div class="font-hairline">
          {{ runtimeConfig.app.titleFirst + "" }}
        </div>
        <div class="font-bold">
          {{ runtimeConfig.app.titleSecond }}
        </div>
        <div class="font-hairline text-xl">://</div>
        <div class="font-hairline text-xl">
          {{ " " + runtimeConfig.app.description }}
        </div>
      </div>
    </NuxtLink>
  </h1>
</template>
