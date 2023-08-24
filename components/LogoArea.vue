<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
<template>
  <div class="flex justify-center flex-col w-full px-4">
    <div class="flex items-center justify-center">
      <h1 class="flex text-2xl items-center">
        <NuxtLink to="/">
          <span class="font-thin"> {{ appConfig.app.titleFirst }} </span>
          <span class="font-bold"> {{ appConfig.app.titleSecond }} </span>
          <span class="font-thin text-lg"
            >://{{ " " + appConfig.app.description }}</span
          >
        </NuxtLink>
      </h1>
    </div>
  </div>
</template>
