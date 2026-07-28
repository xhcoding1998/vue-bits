<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import './CTA.css';

const innerEl = ref<HTMLDivElement | null>(null);

const visible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!innerEl.value) return;

  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visible.value = true;

          observer?.disconnect();
        }
      }
    },
    {
      threshold: 0.1,
      rootMargin: '-60px'
    }
  );

  observer.observe(innerEl.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section class="ln-cta-section">
    <div class="ln-cta-glow"></div>

    <div
      ref="innerEl"
      :class="[
        'ln-cta-inner',
        {
          'is-visible': visible
        }
      ]"
    >
      <div class="ln-cta-card-wrapper">
        <div class="ln-cta-card-border"></div>

        <div class="ln-cta-card">
          <h2 class="ln-cta-headline">不用再从零手写动效。</h2>

          <p class="ln-cta-sub">精致的 Vue 动效组件，可直接放进任何项目；实时预览、完整源码与 AI 提示词一应俱全。</p>

          <div class="ln-cta-buttons">
            <a href="/get-started/index" class="ln-cta-btn ln-cta-btn--primary">
              浏览全部组件

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />

                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <RouterLink to="/backgrounds/aurora" class="ln-cta-btn ln-cta-btn--secondary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m12 3 1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8L12 3Z" stroke="currentColor" />
                <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" stroke="currentColor" />
              </svg>
              查看 AI 复刻示例
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
