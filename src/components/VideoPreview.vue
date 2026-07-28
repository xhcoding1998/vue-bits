<template>
  <div ref="container" class="video-preview" :class="{ 'is-ready': ready }">
    <div class="video-placeholder" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <video
      v-if="ready"
      :src="src"
      :aria-label="`${alt} 效果预览`"
      muted
      loop
      autoplay
      playsinline
      preload="metadata"
    />
    <div class="preview-grid" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";

defineProps<{
  src: string;
  alt: string;
}>();

const container = useTemplateRef<HTMLElement>("container");
const ready = ref(false);
let observer: IntersectionObserver | undefined;

onMounted(() => {
  if (!container.value || !("IntersectionObserver" in window)) {
    ready.value = true;
    return;
  }

  observer = new IntersectionObserver(
    entries => {
      if (!entries[0]?.isIntersecting) return;
      ready.value = true;
      observer?.disconnect();
    },
    { rootMargin: "220px" },
  );
  observer.observe(container.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>
