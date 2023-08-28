<script lang="ts" setup>
const { data }: any = useAsyncData("banner", () =>
  queryContent("blogs").where({ banner: true }).sort({ date: -1 }).findOne()
);
</script>
<template>
  <ContentRenderer :value="data" class="">
    <div
      class="flex flex-col-reverse md:flex-row justify-between items-center h-screen-md"
    >
      <div class="basis-2/2 md:basis-1/2 flex-col justify-start items-center">
        <div class="items-center flex gap-3">
          <h2 class="">
            <NuxtLink :external="true" :to="data?._path" class="">
              {{ data?.title }}
            </NuxtLink>
          </h2>
        </div>

        <p>
          {{ data?.description }}
        </p>
        <ul class="flex flex-row mt-0 list-none items-center">
          <li key="category" class="text-lg">
            {{ data?.category }}
            <span class="font-bold text-sm">،</span>
          </li>
          <li key="link" class="text-lg">
            <NuxtLink :external="true" :to="data?._path" class="underline">
              بیشتر
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="basis-2/2 md:basis-1/2 flex justify-end items-center">
        <nuxt-img
          v-if="data?.thumbnail"
          preload
          loading="lazy"
          sizes="sm:100vw md:50vw lg:400px"
          class="flex"
          :src="data?.thumbnail"
          :alt="data?.title"
          height="auto"
        />
      </div>
    </div>
  </ContentRenderer>
</template>
