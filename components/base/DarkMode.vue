<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <div class="flex items-center">
    <UButton variant="ghost" @click="toggleDark()">
      <IconUil:moon v-if="isDark" class="cursor-pointer" />
      <IconUil:sun v-else class="cursor-pointer" />
    </UButton>
  </div>
</template>
