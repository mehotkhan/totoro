<template>
  <section class="flex flex-col justify-center content-center">
    <ContentDoc>
      <template #default="{ doc }">
        <section class="flex flex-col">
          <LazyBasePageHeader :data="doc" />
          <div class="flex relative mx-3 md:m-0">
            <ContentRenderer :value="doc" />
          </div>
        </section>
      </template>
    </ContentDoc>
  </section>
</template>
