<script setup lang="ts">
import { onMounted, ref, type ComponentPublicInstance } from 'vue';

import AITerminal from './AITerminal.vue';
import CategorySelector from './CategorySelector.vue';
import ComponentMarquee from './ComponentMarquee.vue';
import StarCard from './StarCard.vue';
import VariantTabs from './VariantTabs.vue';

import './Features.css';

type CardKey = 'marquee' | 'orbit' | 'variants' | 'ai' | 'stars';

interface Card {
  key: CardKey;
  title: string;
  desc: string;
  span: 7 | 5 | 4 | 3;
}

const CARDS: Card[] = [
  {
    key: 'marquee',
    title: '130+ 完整组件',
    desc: '动态背景、文字特效、交互动效与 UI 模式。每个组件都包含可直接运行的完整源码。',
    span: 7
  },
  {
    key: 'orbit',
    title: '分类清晰',
    desc: '按文字动画、交互动效、UI 组件和动态背景分类，快速找到需要的效果。',
    span: 5
  },
  {
    key: 'variants',
    title: 'Vue 3 + TypeScript',
    desc: '基于 Vue 3、Vite 与 TypeScript，每个组件保留完整类型、样式和依赖说明。',
    span: 4
  },
  {
    key: 'ai',
    title: 'AI 提示词就绪',
    desc: '可选择 Vue、React、Next.js、Nuxt、Svelte、Angular 或原生 Web，提示词会同步源码分析、颜色和当前参数。',
    span: 5
  },
  {
    key: 'stars',
    title: '持续更新',
    desc: '持续补充可直接体验的真实组件、中文实现分析和可复用的 AI 复刻提示词。',
    span: 3
  }
];

const visible = ref<boolean[]>(Array(CARDS.length).fill(false));

const cardEls = ref<(HTMLElement | null)[]>(Array(CARDS.length).fill(null));

function setCardRef(el: Element | ComponentPublicInstance | null, index: number) {
  cardEls.value[index] = el as HTMLElement | null;
}

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    visible.value = visible.value.map(() => true);
    return;
  }

  const io = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const i = cardEls.value.indexOf(entry.target as HTMLElement);

        if (i === -1) continue;

        visible.value[i] = true;

        io.unobserve(entry.target);
      }
    },
    {
      rootMargin: '-60px 0px'
    }
  );

  for (const el of cardEls.value) {
    if (el) {
      io.observe(el);
    }
  }
});
</script>

<template>
  <section class="ln-features-section">
    <div class="ln-features-inner">
      <h2 class="ln-features-title">这里有什么</h2>

      <div class="ln-features-grid">
        <div
          v-for="(card, i) in CARDS"
          :key="card.key"
          :ref="el => setCardRef(el, i)"
          :class="[
            'ln-features-card',
            `ln-features-card--span-${card.span}`,
            {
              'is-visible': visible[i]
            }
          ]"
          :style="{
            transitionDelay: `${i * 70}ms`
          }"
        >
          <div class="ln-features-card-visual">
            <ComponentMarquee v-if="card.key === 'marquee'" />

            <CategorySelector v-else-if="card.key === 'orbit'" />

            <VariantTabs v-else-if="card.key === 'variants'" />

            <AITerminal v-else-if="card.key === 'ai'" />

            <StarCard v-else-if="card.key === 'stars'" />
          </div>

          <div class="ln-features-card-body">
            <h3>
              {{ card.title }}
            </h3>

            <p>
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
