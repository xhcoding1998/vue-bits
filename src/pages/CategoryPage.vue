<script setup lang="ts">
import { computed, ref, watch, defineAsyncComponent, shallowRef } from 'vue';
import { useRoute } from 'vue-router';
import { decodeLabel } from '../utils/utils';
import { componentMap } from '../constants/Components';
import { componentNameEnglish, componentNameZh } from '@/i18n/componentNames';

const route = useRoute();

const sub = computed(() => (route.params.subcategory as string) ?? '');
const englishName = computed(() => componentNameEnglish(decodeLabel(sub.value)));
const chineseName = computed(() => componentNameZh(englishName.value));

const loadedSlug = ref('');
const PageComponent = shallowRef<ReturnType<typeof defineAsyncComponent> | null>(null);
const loading = ref(false);

watch(
  sub,
  slug => {
    const load = componentMap[slug as keyof typeof componentMap];
    loadedSlug.value = slug;
    PageComponent.value = null;

    if (!load) {
      loading.value = false;
      return;
    }

    loading.value = true;
    load().then(module => {
      if (loadedSlug.value !== slug) return;
      PageComponent.value = defineAsyncComponent(() => Promise.resolve(module));
      loading.value = false;
    });
  },
  { immediate: true }
);

watch(
  [chineseName, englishName],
  ([localizedName, technicalName]) => {
    if (localizedName) document.title = `${localizedName}｜${technicalName}｜动效工坊`;
  },
  { immediate: true }
);
</script>

<template>
  <div class="category-page">
    <header v-if="englishName && sub !== 'index'" class="component-page-heading">
      <h1>{{ chineseName }}</h1>
      <p>{{ englishName }}</p>
    </header>
    <component :is="PageComponent" v-if="PageComponent" :key="loadedSlug" />
    <p v-else-if="loading" class="component-page-loading">组件加载中…</p>
    <p v-else class="component-page-loading">暂未找到该组件。</p>
  </div>
</template>
