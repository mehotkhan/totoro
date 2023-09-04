<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const props = defineProps({
  category: {
    type: String,
    required: false,
    default: undefined,
  },
});
const query: QueryBuilderParams = {
  path: "/blogs",
  limit: 10,
  sort: [{ date: -1 }],
  where: props.category ? [{ category: props.category }] : undefined,
};
</script>
<template>
  <ContentList :query="query" class="nuxt-content">
    <template #default="{ list }">
      <div class="latest mr-5 md:m-0">
        <ul>
          <li
            v-for="{ _path: slug, title, date, category } in list"
            :key="slug"
            class="mb-2"
          >
            <NuxtLink
              :external="false"
              :to="slug"
              class=""
            >
              {{ title }}
              <span v-if="!props.category" class="font-thin">
                / {{ category }}
              </span>
              <span class="font-thin"> / {{ JalaliDate(date) }} </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
    <template #not-found>
      <p>هیچی نیست :)</p>
    </template>
  </ContentList>
</template>
