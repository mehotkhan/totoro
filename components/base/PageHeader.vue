<script lang="ts" setup>
const props = defineProps({
  data: { type: Object, required: true, default: {} },
});
</script>
<template>
  <ContentRenderer :value="props.data">
    <div
      class="flex flex-col-reverse md:flex-row justify-between items-center h-screen-md"
    >
      <div class="basis-2/2 md:basis-1/2 flex-col justify-start items-center">
        <div class="items-center flex gap-3">
          <h2 class="">
            {{ data?.title }}
          </h2>
        </div>

        <p>
          {{ data?.description }}
        </p>
      </div>
      <div class="basis-2/2 md:basis-1/2 flex justify-end items-center">
        <nuxt-img
          v-if="data?.thumbnail"
          preload
          loading="lazy"
          sizes="sm:100vw md:50vw lg:400px"
          class="flex max-h-[20rem]"
          :src="data?.thumbnail"
          :alt="data?.title"
        />
      </div>
    </div>
  </ContentRenderer>
</template>
