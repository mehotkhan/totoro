<script setup lang="ts"></script>
<template>
  <section class="flex flex-col justify-center content-center pb-10">
    <ContentDoc>
      <template #default="{ doc }">
        <section class="flex flex-col node-page">
          <div
            class="flex flex-col-reverse md:flex-row justify-between items-center h-screen-sm border-b md:border-0"
          >
            <div
              class="basis-2/2 md:basis-1/2 flex-col justify-start items-center"
            >
              <h2>
                {{ doc?.title }}
              </h2>
              <p>
                {{ doc?.description }}
              </p>
              <ul class="flex flex-row mt-0 list-none items-center gap-1">
                <li key="category" class="text-lg">
                  {{ doc?.category }}
                </li>
              </ul>
            </div>
            <div class="basis-2/2 md:basis-1/2 flex justify-end items-center">
              <nuxt-img
                preload
                loading="lazy"
                sizes="sm:100vw md:50vw lg:400px"
                class="flex max-h-[30rem]"
                :src="doc?.thumbnail"
                :alt="doc?.title"
              />
            </div>
          </div>
          <div class="flex relative justify-between md:m-0">
            <div class="relative hidden md:block basis-2/12">
              <div class="left-0 sticky top-[7rem] w-full">
                <LazyBaseContentToc :post="doc" />
              </div>
            </div>
            <div class="basis-12/12 md:basis-10/12 md:mr-10">
              <ContentRenderer :value="doc" class="content mb-10" />
              <LazyGiscus v-if="doc?.comment" />
            </div>
          </div>
        </section>
      </template>
    </ContentDoc>
  </section>
</template>
<style lang="scss">
.content {
  h1,
  h2,
  h3,
  h4 {
    scroll-margin-top: 7rem;
  }
}
</style>
