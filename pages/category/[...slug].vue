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
          <div
            class="flex relative justify-between mx-3 md:m-0"
            :class="doc?.dir === 'ltr' ? '  flex-row-reverse' : 'flex-row'"
          >
            <div
              class="basis-4/4 md:basis-3/4"
              :class="doc?.dir === 'ltr' ? 'ltr md:mr-10' : 'rtl md:ml-10'"
            >
              <ContentRenderer :value="doc" class="content" />
              <Comments />
            </div>
            <div
              class="relative hidden md:block basis-1/4"
              :class="doc?.dir === 'ltr' ? 'ml-10' : 'mr-10'"
            >
              <div class="left-0 sticky top-[7rem]">
                <Cart v-if="doc?.service == 'market'" />
                <ContentToc :post="doc" />
              </div>
            </div>
          </div>
        </section>
      </template>
    </ContentDoc>
  </section>
</template>
