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
              <nuxt-img class="flex max-h-[30rem]" :src="doc?.thumbnail" />
            </div>
          </div>
          <div class="flex relative mx-3 md:m-0">
            <ContentRenderer :value="doc" />
          </div>
        </section>
      </template>
    </ContentDoc>
  </section>
</template>
