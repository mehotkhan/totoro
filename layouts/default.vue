<script setup>
import "vazirmatn/Vazirmatn-Variable-font-face.css";
</script>
<template>
  <div class="flex-col flex">
    <slot name="app-before" />
    <div id="app-before"></div>
    <BaseHeader />
    <main class="flex min-h-screen mt-20">
      <div class="container">
        <div class="prose dark:prose-invert leading-10 text-justify">
          <slot />
        </div>
      </div>
      <slot name="app-after" />
      <div id="app-after"></div>
    </main>
  </div>
</template>
