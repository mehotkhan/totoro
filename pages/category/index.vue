<script setup lang="ts">
useHead({
  title: "یادداشت‌ها",
});
const { data }: any = useAsyncData("category", () =>
  queryContent("category").find()
);
</script>
<template>
  <section class="flex mt-5">
    <div class="w-full grid grid-cols-3 gap-10 align-middle">
      <UCard
        v-for="cat in data"
        :key="cat._path"
        class="w-full max-h-[30rem]"
        :ui="{
          base: '',
          ring: 'ring-1',
          divide: 'divide-y divide-gray-200 dark:divide-gray-700',
          header: { padding: 'p-0' },
          body: {
            padding: 'sm:px-10',
            base: ' divide-gray-200 dark:divide-gray-700 text-s',
          },
          footer: { padding: 'p-4' },
        }"
      >
        <template #header>
          <div class="flex">
            <nuxt-img
              v-if="cat?.thumbnail"
              class="flex max-h-[10rem]"
              :src="cat?.thumbnail"
              lazy
            />
            <div>
              <h3
                class="font-semibold text-md text-gray-900 dark:text-white leading-tight"
              >
                <NuxtLink :to="cat._path">
                  {{ cat.title }}
                </NuxtLink>
              </h3>

              <p
                class="font-thin text-md text-gray-900 dark:text-white leading-tight"
              >
                <ContentRenderer :value="cat" class="content" />
              </p>
            </div>
          </div>
        </template>
        <LatestItems :category="cat.name" />
      </UCard>
    </div>
    <!-- <IntroPost /> -->
  </section>
</template>
