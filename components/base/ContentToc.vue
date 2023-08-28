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
  threshold: 1,
});
const router = useRouter();
const sliderHeight = useState("sliderHeight", () => 0);
const sliderTop = useState("sliderTop", () => 0);
const tocLinksH2: Ref<Array<HTMLElement>> = ref([]);
const tocLinksH3: Ref<Array<HTMLElement>> = ref([]);

const tocLinks = computed(() => props?.post?.body.toc.links ?? []);

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
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
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
  <div class="px-3 md:p-0 mb-5 text-md">
    <h3 class="text-bold">
      {{ "سرفصل‌ها" }}
    </h3>
    <nav class="flex">
      <div class="relative">
        <div
          class="absolute right-0 w-full transition-all duration-200 rounded bg-red-500"
          :style="{ height: `${sliderHeight}px`, top: `${sliderTop}px` }"
        ></div>
      </div>
      <ul class="max-h-150 overflow-auto">
        <li
          v-for="{ id, text, children } in tocLinks"
          :id="`toc-${id}`"
          :key="id"
          ref="tocLinksH2"
          class="cursor-pointer pb-3 mb-2 last:mb-0 mx-5"
          :class="{
            'font-bold': id === currentSection,
          }"
          @click="onClick(id)"
        >
          <span class="whitespace-nowrap">
            {{ text }}
          </span>
          <ul v-if="children" class="mr-3 my-2">
            <li
              v-for="{ id: childId, text: childText } in children"
              :id="`toc-${childId}`"
              :key="childId"
              ref="tocLinksH3"
              class="cursor-pointer list-none ml-0 mb-2 last:mb-0"
              :class="{
                'font-bold': childId === currentSection,
              }"
              @click.stop="onClick(childId)"
            >
              <span class="whitespace-nowrap">
                {{ childText }}
              </span>
            </li>
          </ul>
        </li>
        <li
          v-if="props.post?.comment"
          class="cursor-pointer pb-3 mb-2 last:mb-0 mx-5"
          @click.stop="onClick('comments')"
        >
          <span>دیدگاه ها</span>
        </li>
      </ul>
    </nav>
  </div>
</template>
