<template>
  <div class="app-shell">
    <header class="site-header">
      <a class="brand" href="#/" aria-label="Vue Bits 中文图鉴首页" @click="closeDetail">
        <span class="brand-mark" aria-hidden="true">V</span>
        <span>
          <strong>Vue Bits 中文图鉴</strong>
          <small>COMPONENT FIELD GUIDE</small>
        </span>
      </a>
      <nav class="header-nav" aria-label="页面导航">
        <a href="#catalog">组件图鉴</a>
        <a href="#method">迁移方法</a>
        <a href="https://github.com/DavidHDev/vue-bits" target="_blank" rel="noreferrer">
          官方源码
          <Github :size="16" aria-hidden="true" />
        </a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <div class="hero-label"><span></span> 面向国内 Vue 3 项目的动效组件手册</div>
          <h1>先把组件<span>读懂</span>，<br />再交给 AI 实现。</h1>
          <p>
            基于 React Bits 与官方 Vue Bits 源码生成的中文图鉴。逐个梳理用途、参数、依赖、样式结构和实现原理，
            每个组件都附一段可直接复制的中文 AI 提示词。
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="#catalog">
              浏览全部组件
              <ArrowDown :size="17" aria-hidden="true" />
            </a>
            <button class="secondary-action" type="button" @click="focusSearch">
              <Search :size="17" aria-hidden="true" />
              搜索组件
              <kbd>/</kbd>
            </button>
          </div>
        </div>

        <div class="hero-index" aria-label="图鉴统计">
          <div class="index-top">
            <span>INDEX / 2026</span>
            <span>VUE 3 + VITE</span>
          </div>
          <div class="hero-orbit" aria-hidden="true">
            <div class="orbit-ring ring-one"></div>
            <div class="orbit-ring ring-two"></div>
            <div class="orbit-core"><span>{{ components.length }}</span><small>COMPONENTS</small></div>
            <i class="orbit-dot dot-one"></i>
            <i class="orbit-dot dot-two"></i>
          </div>
          <dl class="index-stats">
            <div><dt>分类</dt><dd>04</dd></div>
            <div><dt>源码行数</dt><dd>{{ compactNumber(totalSourceLines) }}</dd></div>
            <div><dt>AI 提示词</dt><dd>{{ components.length }}</dd></div>
          </dl>
        </div>
      </section>

      <section id="method" class="method-strip">
        <div>
          <span>01</span>
          <p><strong>看效果</strong>本地托管预览素材，不依赖海外 CDN。</p>
        </div>
        <div>
          <span>02</span>
          <p><strong>读源码</strong>自动提取 props、依赖和实现路径。</p>
        </div>
        <div>
          <span>03</span>
          <p><strong>交给 AI</strong>提示词补齐中文、移动端和性能约束。</p>
        </div>
      </section>

      <section id="catalog" class="catalog-section">
        <div class="catalog-heading">
          <div>
            <p class="section-label">COMPONENT INDEX</p>
            <h2>组件图鉴</h2>
          </div>
          <p>当前显示 <strong>{{ filteredComponents.length }}</strong> / {{ components.length }} 个组件</p>
        </div>

        <div class="catalog-tools">
          <label class="search-box">
            <Search :size="19" aria-hidden="true" />
            <input
              ref="searchInput"
              v-model.trim="query"
              type="search"
              placeholder="搜索组件名、中文用途或依赖…"
              autocomplete="off"
            />
            <kbd>/</kbd>
          </label>
          <div class="category-filters" role="group" aria-label="组件分类">
            <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              :class="{ active: activeCategory === category.id }"
              @click="activeCategory = category.id"
            >
              {{ category.label }}
              <span>{{ category.count }}</span>
            </button>
          </div>
          <button
            class="favorites-filter"
            type="button"
            :class="{ active: favoritesOnly }"
            @click="favoritesOnly = !favoritesOnly"
          >
            <Heart :size="17" :fill="favoritesOnly ? 'currentColor' : 'none'" aria-hidden="true" />
            我的收藏
            <span>{{ favorites.size }}</span>
          </button>
        </div>

        <div v-if="filteredComponents.length" class="component-grid">
          <ComponentCard
            v-for="entry in filteredComponents"
            :key="entry.id"
            :entry="entry"
            :favorite="favorites.has(entry.slug)"
            @select="openDetail"
            @favorite="toggleFavorite"
          />
        </div>
        <div v-else class="empty-state">
          <SearchX :size="32" aria-hidden="true" />
          <h3>没有匹配的组件</h3>
          <p>换个关键词，或清空分类和收藏筛选。</p>
          <button type="button" @click="resetFilters">重置筛选</button>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <span class="brand-mark small" aria-hidden="true">V</span>
        <p><strong>Vue Bits 中文图鉴</strong><br />中文分析、选型与 AI 提示词</p>
      </div>
      <p class="footer-license">
        本站为独立中文分析项目。React Bits / Vue Bits 版权归原作者所有，遵循 MIT + Commons Clause，
        不提供第三方组件源码再分发。
      </p>
      <a href="https://github.com/DavidHDev/vue-bits/blob/main/LICENSE.md" target="_blank" rel="noreferrer">
        查看许可
        <ArrowUpRight :size="15" aria-hidden="true" />
      </a>
    </footer>

    <Transition name="detail">
      <DetailView
        v-if="selected"
        :entry="selected"
        :favorite="favorites.has(selected.slug)"
        @close="closeDetail"
        @favorite="toggleFavorite"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Heart,
  Search,
  SearchX,
} from "lucide-vue-next";
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";
import ComponentCard from "./components/ComponentCard.vue";
import DetailView from "./components/DetailView.vue";
import { components } from "./data/catalog.generated";
import type { ComponentEntry } from "./types";

const CATEGORY_LABELS: Record<string, string> = {
  TextAnimations: "文字动画",
  Animations: "交互动效",
  Components: "界面组件",
  Backgrounds: "动态背景",
};

const query = ref("");
const activeCategory = ref("all");
const favoritesOnly = ref(false);
const selected = ref<ComponentEntry | null>(null);
const favorites = ref(new Set<string>());
const searchInput = useTemplateRef<HTMLInputElement>("searchInput");

const totalSourceLines = components.reduce((sum, entry) => sum + entry.sourceLines, 0);
const categories = computed(() => [
  { id: "all", label: "全部", count: components.length },
  ...Object.keys(CATEGORY_LABELS).map(id => ({
    id,
    label: CATEGORY_LABELS[id],
    count: components.filter(entry => entry.category === id).length,
  })),
]);

const filteredComponents = computed(() => {
  const keywords = query.value.toLowerCase().split(/\s+/).filter(Boolean);
  return components.filter(entry => {
    if (activeCategory.value !== "all" && entry.category !== activeCategory.value) return false;
    if (favoritesOnly.value && !favorites.value.has(entry.slug)) return false;
    if (!keywords.length) return true;
    const haystack = [
      entry.name,
      entry.nameCn,
      entry.description,
      entry.descriptionCn,
      entry.categoryCn,
      ...entry.dependencies,
      ...entry.useCases,
    ]
      .join(" ")
      .toLowerCase();
    return keywords.every(keyword => haystack.includes(keyword));
  });
});

function compactNumber(value: number) {
  return new Intl.NumberFormat("zh-CN", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function saveFavorites() {
  localStorage.setItem("vue-bits-cn:favorites", JSON.stringify([...favorites.value]));
}

function toggleFavorite(slug: string) {
  const next = new Set(favorites.value);
  if (next.has(slug)) next.delete(slug);
  else next.add(slug);
  favorites.value = next;
  saveFavorites();
}

function openDetail(entry: ComponentEntry) {
  selected.value = entry;
  history.pushState({ component: entry.slug }, "", `#/component/${entry.slug}`);
}

function closeDetail() {
  selected.value = null;
  if (location.hash.startsWith("#/component/")) history.pushState({}, "", "#/");
}

function syncFromHash() {
  const slug = location.hash.match(/^#\/component\/([^/]+)/)?.[1];
  selected.value = slug ? components.find(entry => entry.slug === slug) ?? null : null;
}

function focusSearch() {
  location.hash = "#catalog";
  nextTick(() => searchInput.value?.focus());
}

function resetFilters() {
  query.value = "";
  activeCategory.value = "all";
  favoritesOnly.value = false;
}

function handleKeydown(event: KeyboardEvent) {
  const target = event.target as HTMLElement;
  if (
    event.key === "/" &&
    !selected.value &&
    !["INPUT", "TEXTAREA"].includes(target.tagName) &&
    !target.isContentEditable
  ) {
    event.preventDefault();
    focusSearch();
  }
}

onMounted(() => {
  const stored = localStorage.getItem("vue-bits-cn:favorites");
  if (stored) favorites.value = new Set(JSON.parse(stored) as string[]);
  syncFromHash();
  window.addEventListener("hashchange", syncFromHash);
  window.addEventListener("popstate", syncFromHash);
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("hashchange", syncFromHash);
  window.removeEventListener("popstate", syncFromHash);
  window.removeEventListener("keydown", handleKeydown);
});
</script>
