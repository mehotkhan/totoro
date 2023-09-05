<script setup>
const { sidebarEnabled, toggleSidebar } = useSidebar();
</script>
<template>
  <div class="flex gap-1 text-md items-center">
    <BaseSocial class="items-center hidden md:flex" />
    <BaseDarkMode class="items-center" />
    <UButton
      v-if="sidebarEnabled"
      variant="ghost"
      @click="toggleSidebar"
      class="p-0"
    >
      <IconUil:list-ul aria-hidden="true" class="text-[1.1rem]" />
    </UButton>
    <BaseMobileMenu class="text-md lg:hidden" />
  </div>
</template>
