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
          <BaseLatestItems :category="doc.name" class="mx-[4rem]" />
        </section>
      </template>
    </ContentDoc>
  </section>
</template>
