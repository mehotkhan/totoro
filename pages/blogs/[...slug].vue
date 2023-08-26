<template>
  <section class="flex flex-col justify-center content-center">
    <ContentDoc>
      <template #default="{ doc }">
        <section class="flex flex-col">
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
              />
            </div>
          </div>
          <div class="flex relative justify-between md:m-0">
            <div class="basis-4/4 md:basis-3/4 md:ml-10">
              <ContentRenderer :value="doc" class="content" />
              <LazyComments />
            </div>
            <div class="relative hidden md:block basis-1/4">
              <div class="left-0 sticky top-[7rem]">
                <ContentToc :post="doc" />
              </div>
            </div>
          </div>
        </section>
      </template>
    </ContentDoc>
  </section>
</template>
