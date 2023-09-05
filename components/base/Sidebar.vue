<script setup lang="ts">
const props = defineProps({
  post: { type: Object, required: true, default: Function },
});
const { toggleSidebar, sidebarIsOpen } = useSidebar();
</script>
<template>
  <div class="w-full">
    <USlideover
      v-model="sidebarIsOpen"
      side="left"
      :transition="false"
      :ui="{
        width: 'w-10 max-w-[70%] md:max-w-md',
      }"
    >
      <div class="flex flex-col p-5">
        <div class="flex w-full relative justify-between px-3">
          <span>
            {{ props.post.title }}
          </span>
          <UButton
            label="بستن"
            class="top-0 text-black z-50 absolute left-0 w-10"
            variant="ghost"
            @click="toggleSidebar()"
          />
        </div>
        <div class="mt-5 border-t pt-5">
          <LazyBaseContentToc :post="props.post" />
        </div>
      </div>
    </USlideover>
  </div>
</template>
