<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const props = defineProps({
  cat: {
    type: String,
    required: false,
    default: undefined,
  },
});
const query: QueryBuilderParams = {
  path: "/blogs",
  limit: 10,
  sort: [{ date: -1 }],
  where: props.cat ? [{ category: props.cat }] : undefined,
};
</script>
<template>
  <ContentList v-slot="{ list }" :query="query" class="nuxt-content">
    <div class="latest mr-5 md:m-0">
      <ul>
        <li
          v-for="{ _path: slug, title, date, category } in list"
          :key="slug"
          class="mb-2"
        >
          <NuxtLink :to="slug">
            {{ title }}
            <span v-if="!props.cat" class="font-thin"> / {{ category }} </span>
            <span class="font-thin"> / {{ JalaliDate(date) }} </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </ContentList>
</template>
