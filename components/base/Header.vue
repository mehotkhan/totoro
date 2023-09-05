<template>
  <header
    class="fixed w-full top-0 bg-gray-200 z-10 border-b-1 border-gray-200 dark:bg-slate-900 dark:border-slate-100"
  >
    <div class="flex container justify-between items-center py-4">
      <div class="flex items-center">
        <BaseLogoArea />
        <BaseMainMenu class="text-md hidden md:text-sm lg:contents" />
      </div>
      <BaseToolsMenu />
    </div>
  </header>
</template>
