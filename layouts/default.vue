<template>
  <div class="flex-col flex">
    <slot name="app-before" />
    <div id="app-before"></div>
    <header
      class="fixed w-full top-0 bg-gray-200 z-10 border-b-1 border-gray-200"
    >
      <div class="flex container justify-between items-center py-4">
        <div class="flex items-center">
          <BaseLogoArea />
          <BaseMainMenu class="text-md hidden md:text-sm lg:contents" />
        </div>
        <div class="flex gap-3">
          <BaseMobileMenu class="text-md lg:hidden" />
          <BaseSocial class="items-center hidden md:flex" />
        </div>
      </div>
    </header>
    <main class="bg-white flex min-h-screen mt-20">
      <div class="container">
        <div class="prose leading-10 text-justify">
          <slot />
        </div>
      </div>
      <slot name="app-after" />
      <div id="app-after"></div>
    </main>
  </div>
</template>
