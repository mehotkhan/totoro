<script setup lang="ts">
useHead({
  title: "تغییرات",
});
const { data }: any = useAsyncData("changes", () =>
  queryContent("changes").sort({ date: 1 }).find(),
);

const currentVersion = computed(() =>
  data.value.find((item: any) => new Date(item.date) < new Date()),
);
</script>
<template>
  <section class="flex flex-col mb-20">
    <LazyBasePageHeader :data="currentVersion" />

    <div class="flex flex-col md:grid grid-cols-12 text-black">
      <div v-for="change in data" :key="change._path" class="flex md:contents">
        <div class="col-start-1 col-end-2 ml-10 md:mx-auto relative">
          <div class="h-full w-6 flex items-center justify-center">
            <div
              class="h-full w-1 pointer-events-none"
              :class="
                new Date(change.date) > new Date()
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              "
            ></div>
          </div>
          <div
            class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow text-center"
            :class="
              new Date(change.date) > new Date()
                ? 'bg-yellow-500'
                : ' bg-green-500 '
            "
          >
            <IconUil:check class="ml-3 text-white" />
          </div>
        </div>
        <div
          class="bg-gray-100 col-start-2 col-end-12 px-5 py-1 my-4 mr-auto w-full"
        >
          <div class="flex items-center">
            <span class="font-semibold text-xl mt-3">
              {{ change.title }}
            </span>
            <UBadge :label="change.status" color="gray" class="mr-3" />
          </div>
          <p class="leading-tight font-normal text-justify w-full text-md">
            {{ change.description }}
          </p>
          <p class="leading-tight font-hairline text-justify w-full text-sm">
            تاریخ انتشار : {{ JalaliDate(change.date) }}
          </p>
          <ContentRenderer :value="change" class="content font-thin" />
        </div>
      </div>
    </div>
  </section>
</template>
