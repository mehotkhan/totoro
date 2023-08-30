<script setup lang="ts">
import { Ref } from "vue";
const props = defineProps({
  post: { type: Object, required: true, default: Function },
});

const currentSection = ref<null | string>("");
const nuxtContent = ref(null);
const observer: Ref<IntersectionObserver | null | undefined> = ref(null);
const observerOptions = reactive({
  root: nuxtContent.value,
  threshold: 0,
});
const router = useRouter();

const tocLinksH2: Ref<Array<HTMLElement>> = ref([]);
const tocLinksH3: Ref<Array<HTMLElement>> = ref([]);

const items = computed(() => {
  const tocLinks: any[] = [];
  props?.post?.body.toc.links.forEach((item: any) => {
    tocLinks.push({
      label: item.text,
      id: item.id,
      children: item.children,
    });
  });
  return tocLinks;
});

const onClick = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    router.push({ hash: `#${id}` });
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    currentSection.value = id;
  }
};
onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        currentSection.value = id;
      }
    });
  }, observerOptions);
  document
    .querySelectorAll(".content h2[id],.content h3[id],.content h4[id] ")
    .forEach((section) => {
      observer.value?.observe(section);
    });
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <div class="px-3 md:p-0 mb-5">
    <h3 class="text-bold">سرفصل‌ها</h3>
    <UAccordion
      default-open
      multiple
      :items="items"
      :ui="{ wrapper: 'flex flex-col w-full', item: { size: 'text-md' } }"
    >
      <template #default="{ item, open }">
        <UButton
          ref="tocLinksH2"
          color="gray"
          variant="ghost"
          class="flex w-full text-right"
          :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
          :class="{
            'font-bold': item.id === currentSection,
          }"
        >
          <span class="whitespace-nowrap" @click="onClick(item.id)">{{
            item.label
          }}</span>

          <template v-if="item.children" #trailing>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
            />
          </template>
        </UButton>
      </template>
      <template #item="{ item }">
        <ul v-if="item.children" class="mr-3 my-2">
          <li
            v-for="{ id: childId, text: childText } in item.children"
            :id="`toc-${childId}`"
            :key="childId"
            ref="tocLinksH3"
            class="cursor-pointer list-none ml-0 mb-2 last:mb-0"
            :class="{
              'font-bold': childId === currentSection,
            }"
            @click.stop="onClick(childId)"
          >
            <span class="whitespace-nowrap text-sm">
              {{ childText }}
            </span>
          </li>
        </ul>
      </template>
    </UAccordion>
    <li
      v-if="props.post?.comment"
      class="cursor-pointer pb-3 mb-2 last:mb-0 mx-3"
      @click.stop="onClick('comments')"
    >
      <span>دیدگاه ها</span>
    </li>
  </div>
</template>
