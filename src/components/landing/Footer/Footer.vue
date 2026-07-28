<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import SiteBrand from '@/components/common/SiteBrand.vue';
import { SITE_NAME } from '@/config/site';
import './Footer.css';

const year = new Date().getFullYear();

const innerEl = ref<HTMLDivElement | null>(null);
const visible = ref(false);

let io: IntersectionObserver | null = null;

onMounted(() => {
  if (!innerEl.value) return;
  io = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visible.value = true;
          io?.disconnect();
        }
      }
    },
    { threshold: 0.1, rootMargin: '-60px' }
  );
  io.observe(innerEl.value);
});

onBeforeUnmount(() => io?.disconnect());
</script>

<template>
  <footer class="ln-footer">
    <div class="ln-footer-glow" />
    <div class="ln-footer-separator" />

    <div ref="innerEl" class="ln-footer-inner" :class="{ 'is-visible': visible }">
      <div class="ln-footer-top">
        <div class="ln-footer-brand">
          <SiteBrand class="ln-footer-logo" />
          <p class="ln-footer-tagline">面向 Vue 3 的动效组件与完整源码。</p>
        </div>

        <nav class="ln-footer-nav">
          <div class="ln-footer-col">
            <span class="ln-footer-col-title">产品</span>
            <RouterLink to="/get-started/index" class="ln-footer-link">组件展示</RouterLink>
            <RouterLink to="/backgrounds/aurora" class="ln-footer-link">AI 复刻示例</RouterLink>
          </div>

          <div class="ln-footer-col">
            <span class="ln-footer-col-title">探索</span>
            <RouterLink to="/text-animations/falling-text" class="ln-footer-link">文字动画</RouterLink>
            <RouterLink to="/animations/click-spark" class="ln-footer-link">交互动效</RouterLink>
            <RouterLink to="/components/spotlight-card" class="ln-footer-link">界面组件</RouterLink>
          </div>
        </nav>
      </div>

      <div class="ln-footer-bottom">
        <p class="ln-footer-attribution">实时预览 · 中文解析 · 完整源码 · AI 从零复刻</p>
        <p class="ln-footer-copy">© {{ year }} {{ SITE_NAME }}</p>
      </div>
    </div>
  </footer>
</template>
