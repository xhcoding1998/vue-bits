<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSavedComponents } from '@/utils/favorites';
import { componentNameZh } from '@/i18n/componentNames';
import { CATEGORIES, NEW, UPDATED, categoryLabel } from '../../constants/Categories';

const emit = defineEmits<{ navigate: [] }>();

const route = useRoute();
const router = useRouter();

const slug = (str: string) => str.replace(/\s+/g, '-').toLowerCase();

const activeCategory = computed(() => (route.params.category as string) ?? '');
const activeSub = computed(() => (route.params.subcategory as string) ?? '');
const scrollAreaRef = ref<HTMLElement | null>(null);
const scrollbarTrackRef = ref<HTMLElement | null>(null);
const scrollbarThumbHeight = ref(44);
const scrollbarThumbOffset = ref(0);
const scrollbarValue = ref(0);
const scrollbarMax = ref(0);
const isScrollbarVisible = ref(false);

const scrollbarThumbStyle = computed(() => ({
  height: `${scrollbarThumbHeight.value}px`,
  transform: `translateY(${scrollbarThumbOffset.value}px)`
}));

function isActive(cat: string, sub: string) {
  return slug(cat) === activeCategory.value && slug(sub) === activeSub.value;
}

let hasPositionedActiveItem = false;
let resizeObserver: ResizeObserver | null = null;
let dragStartY = 0;
let dragStartScrollTop = 0;

function updateScrollbar() {
  const scrollArea = scrollAreaRef.value;
  const track = scrollbarTrackRef.value;
  if (!scrollArea || !track) return;

  const maxScroll = Math.max(0, scrollArea.scrollHeight - scrollArea.clientHeight);
  const trackHeight = track.clientHeight;
  const thumbHeight =
    maxScroll > 0 ? Math.max(44, trackHeight * (scrollArea.clientHeight / scrollArea.scrollHeight)) : trackHeight;
  const thumbTravel = Math.max(0, trackHeight - thumbHeight);

  isScrollbarVisible.value = maxScroll > 1;
  scrollbarThumbHeight.value = Math.min(trackHeight, thumbHeight);
  scrollbarValue.value = Math.round(scrollArea.scrollTop);
  scrollbarMax.value = Math.round(maxScroll);
  scrollbarThumbOffset.value = maxScroll > 0 ? (scrollArea.scrollTop / maxScroll) * thumbTravel : 0;
}

function onThumbPointerDown(event: PointerEvent) {
  const scrollArea = scrollAreaRef.value;
  if (!scrollArea) return;

  dragStartY = event.clientY;
  dragStartScrollTop = scrollArea.scrollTop;
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
}

function onThumbPointerMove(event: PointerEvent) {
  const thumb = event.currentTarget as HTMLElement;
  if (!thumb.hasPointerCapture(event.pointerId)) return;

  const scrollArea = scrollAreaRef.value;
  const track = scrollbarTrackRef.value;
  if (!scrollArea || !track) return;

  const maxScroll = Math.max(0, scrollArea.scrollHeight - scrollArea.clientHeight);
  const thumbTravel = Math.max(1, track.clientHeight - scrollbarThumbHeight.value);
  scrollArea.scrollTop = dragStartScrollTop + ((event.clientY - dragStartY) / thumbTravel) * maxScroll;
}

function onThumbPointerEnd(event: PointerEvent) {
  const thumb = event.currentTarget as HTMLElement;
  if (thumb.hasPointerCapture(event.pointerId)) thumb.releasePointerCapture(event.pointerId);
}

function onTrackPointerDown(event: PointerEvent) {
  if (event.target !== event.currentTarget) return;

  const scrollArea = scrollAreaRef.value;
  const track = scrollbarTrackRef.value;
  if (!scrollArea || !track) return;

  const maxScroll = Math.max(0, scrollArea.scrollHeight - scrollArea.clientHeight);
  const thumbTravel = Math.max(1, track.clientHeight - scrollbarThumbHeight.value);
  const targetThumbTop = event.clientY - track.getBoundingClientRect().top - scrollbarThumbHeight.value / 2;
  scrollArea.scrollTo({
    top: (Math.max(0, Math.min(thumbTravel, targetThumbTop)) / thumbTravel) * maxScroll,
    behavior: 'smooth'
  });
}

function onScrollbarKeydown(event: KeyboardEvent) {
  const scrollArea = scrollAreaRef.value;
  if (!scrollArea) return;

  const pageStep = scrollArea.clientHeight * 0.8;
  const keySteps: Partial<Record<string, number>> = {
    ArrowUp: -56,
    ArrowDown: 56,
    PageUp: -pageStep,
    PageDown: pageStep
  };

  if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    scrollArea.scrollTo({ top: event.key === 'Home' ? 0 : scrollArea.scrollHeight, behavior: 'smooth' });
    return;
  }

  const step = keySteps[event.key];
  if (step === undefined) return;
  event.preventDefault();
  scrollArea.scrollBy({ top: step, behavior: 'smooth' });
}

function positionActiveItem() {
  const behavior: ScrollBehavior = hasPositionedActiveItem ? 'smooth' : 'auto';
  hasPositionedActiveItem = true;

  nextTick(() => {
    const scrollArea = scrollAreaRef.value;
    const activeItem = scrollArea?.querySelector<HTMLElement>('.sidebar-item.active');
    if (!scrollArea || !activeItem || scrollArea.clientHeight === 0) return;

    const scrollAreaRect = scrollArea.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    const safeTop = scrollAreaRect.top + 24;
    const safeBottom = scrollAreaRect.bottom - 24;

    if (activeRect.top >= safeTop && activeRect.bottom <= safeBottom) return;

    const targetTop =
      scrollArea.scrollTop + activeRect.top - scrollAreaRect.top - (scrollArea.clientHeight - activeRect.height) / 2;

    scrollArea.scrollTo({
      top: Math.max(0, targetTop),
      behavior
    });
  });
}

watch([activeCategory, activeSub], positionActiveItem, {
  immediate: true,
  flush: 'post'
});

// ── saved set ─────────────────────────────────────────────────────────────────
const savedSet = ref(new Set(getSavedComponents()));

function loadSaved() {
  savedSet.value = new Set(getSavedComponents());
}
const onStorage = (e: StorageEvent) => {
  if (!e.key || e.key === 'savedComponents') loadSaved();
};

onMounted(() => {
  loadSaved();
  window.addEventListener('favorites:updated', loadSaved);
  window.addEventListener('storage', onStorage);
  window.addEventListener('resize', updateScrollbar);
  nextTick(() => {
    updateScrollbar();
    if (scrollAreaRef.value && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateScrollbar);
      resizeObserver.observe(scrollAreaRef.value);
    }
  });
});
onBeforeUnmount(() => {
  window.removeEventListener('favorites:updated', loadSaved);
  window.removeEventListener('storage', onStorage);
  window.removeEventListener('resize', updateScrollbar);
  resizeObserver?.disconnect();
});

// ── navigation ────────────────────────────────────────────────────────────────
async function navigate(path: string) {
  emit('navigate');
  if (route.path === path) return;
  await router.push(path);
  window.scrollTo(0, 0);
}
</script>

<template>
  <aside class="sidebar" aria-label="组件文档导航">
    <div class="sidebar-inner">
      <div ref="scrollAreaRef" class="sidebar-cat-list" @scroll="updateScrollbar">
        <div v-for="cat in CATEGORIES" :key="cat.name">
          <p :id="`sidebar-${slug(cat.name)}`" class="category-name">{{ categoryLabel(cat.name) }}</p>
          <div class="sidebar-stack" role="list" :aria-labelledby="`sidebar-${slug(cat.name)}`">
            <a
              v-for="sub in cat.subcategories"
              :key="sub"
              class="sidebar-item"
              :class="{
                active: isActive(cat.name, sub)
              }"
              :href="`/${slug(cat.name)}/${slug(sub)}`"
              :aria-current="isActive(cat.name, sub) ? 'page' : undefined"
              role="listitem"
              @click.prevent="navigate(`/${slug(cat.name)}/${slug(sub)}`)"
            >
              <span class="sidebar-item-names">
                <strong>{{ componentNameZh(sub) }}</strong>
                <small>{{ sub }}</small>
              </span>
              <svg
                v-if="savedSet.has(`${cat.name}/${sub}`)"
                class="favorite-sidebar-icon"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
              <span v-if="(NEW as string[]).includes(sub)" class="new-tag">新</span>
              <span v-else-if="(UPDATED as string[]).includes(sub)" class="updated-tag">更新</span>
            </a>
          </div>
        </div>
      </div>
      <div
        ref="scrollbarTrackRef"
        class="sidebar-scrollbar"
        :data-visible="isScrollbarVisible"
        role="scrollbar"
        aria-label="组件列表滚动条"
        :aria-hidden="!isScrollbarVisible"
        aria-orientation="vertical"
        :aria-valuemin="0"
        :aria-valuemax="scrollbarMax"
        :aria-valuenow="scrollbarValue"
        :tabindex="isScrollbarVisible ? 0 : -1"
        @pointerdown="onTrackPointerDown"
        @keydown="onScrollbarKeydown"
      >
        <span
          class="sidebar-scrollbar-thumb"
          :style="scrollbarThumbStyle"
          @pointerdown.stop.prevent="onThumbPointerDown"
          @pointermove.prevent="onThumbPointerMove"
          @pointerup="onThumbPointerEnd"
          @pointercancel="onThumbPointerEnd"
        />
      </div>
    </div>
  </aside>
</template>
