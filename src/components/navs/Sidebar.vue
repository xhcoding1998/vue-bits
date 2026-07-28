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
const sidebarRef = ref<HTMLElement | null>(null);

function isActive(cat: string, sub: string) {
  return slug(cat) === activeCategory.value && slug(sub) === activeSub.value;
}

let hasPositionedActiveItem = false;

function positionActiveItem() {
  const behavior: ScrollBehavior = hasPositionedActiveItem ? 'smooth' : 'auto';
  hasPositionedActiveItem = true;

  nextTick(() => {
    const sidebar = sidebarRef.value;
    const activeItem = sidebar?.querySelector<HTMLElement>('.sidebar-item.active');
    if (!sidebar || !activeItem || sidebar.clientHeight === 0) return;

    const sidebarRect = sidebar.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    const safeTop = sidebarRect.top + 112;
    const safeBottom = sidebarRect.bottom - 48;

    if (activeRect.top >= safeTop && activeRect.bottom <= safeBottom) return;

    const targetTop =
      sidebar.scrollTop + activeRect.top - sidebarRect.top - (sidebar.clientHeight - activeRect.height) / 2;

    sidebar.scrollTo({
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
});
onBeforeUnmount(() => {
  window.removeEventListener('favorites:updated', loadSaved);
  window.removeEventListener('storage', onStorage);
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
  <aside ref="sidebarRef" class="sidebar" aria-label="组件文档导航">
    <div class="sidebar-inner">
      <div class="sidebar-cat-list">
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
    </div>
  </aside>
</template>
