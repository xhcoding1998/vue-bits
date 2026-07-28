<script setup lang="ts">
import SearchDialog from '@/components/common/SearchDialog.vue';
import SiteBrand from '@/components/common/SiteBrand.vue';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import './Navbar.css';

const { showDocs = false } = defineProps<{ showDocs?: boolean }>();
const emit = defineEmits<{ hamburger: [] }>();

const NAV_LINKS = [{ label: '组件展示', to: '/get-started/index', match: '/get-started' }] as const;

const route = useRoute();

const scrolled = ref(false);
const menuOpen = ref(false);
const searchOpen = ref(false);
const prefsOpen = ref(false);

const navbarInnerEl = ref<HTMLElement | null>(null);
const linksEl = ref<HTMLElement | null>(null);
const highlightEl = ref<HTMLElement | null>(null);

let prefsCloseTimer: ReturnType<typeof setTimeout> | null = null;

// ── active ────────────────────────────────────────────────────────────────────
const isActive = (match: string) => route.path.startsWith(match);

// ── highlight ─────────────────────────────────────────────────────────────────
function positionHighlight(el: HTMLElement | null) {
  if (!el || !highlightEl.value || !linksEl.value) return;
  const linkRect = el.getBoundingClientRect();
  const containerRect = linksEl.value.getBoundingClientRect();
  highlightEl.value.style.width = `${linkRect.width}px`;
  highlightEl.value.style.height = `${linkRect.height}px`;
  highlightEl.value.style.transform = `translateX(${linkRect.left - containerRect.left}px)`;
  highlightEl.value.style.opacity = '1';
}

function getActiveEl(): HTMLElement | null {
  return linksEl.value?.querySelector('.ln-navbar-link-active') ?? null;
}

function handleLinkHover(e: MouseEvent) {
  positionHighlight(e.currentTarget as HTMLElement);
}

function handleLinksLeave() {
  const active = getActiveEl();
  if (active) positionHighlight(active);
  else if (highlightEl.value) highlightEl.value.style.opacity = '0';
}

watch(
  () => route.path,
  () => {
    nextTick(() =>
      requestAnimationFrame(() => {
        const active = getActiveEl();
        if (active) positionHighlight(active);
      })
    );
  }
);

// ── scroll ────────────────────────────────────────────────────────────────────
function onScroll() {
  scrolled.value = window.scrollY > 50;
}

// ── search ────────────────────────────────────────────────────────────────────
function closeSearch() {
  searchOpen.value = false;
}
function toggleSearch() {
  searchOpen.value = !searchOpen.value;
}

// ── prefs ─────────────────────────────────────────────────────────────────────
function handlePrefsEnter() {
  if (prefsCloseTimer) clearTimeout(prefsCloseTimer);
  prefsOpen.value = true;
}
function handlePrefsLeave() {
  prefsCloseTimer = setTimeout(() => {
    prefsOpen.value = false;
  }, 150);
}

// ── hamburger ─────────────────────────────────────────────────────────────────
function handleHamburger() {
  if (showDocs) emit('hamburger');
  else menuOpen.value = !menuOpen.value;
}

// ── body scroll lock ──────────────────────────────────────────────────────────
watch(menuOpen, open => {
  document.body.style.overflow = open ? 'hidden' : '';
});

// ── outside click closes landing mobile menu ──────────────────────────────────
function onPointerDown(e: PointerEvent) {
  if (showDocs || !menuOpen.value) return;
  const target = e.target;
  if (target instanceof Node && navbarInnerEl.value?.contains(target)) return;
  menuOpen.value = false;
}

// ── keyboard ──────────────────────────────────────────────────────────────────
function handleKeyDown(e: KeyboardEvent) {
  if (e.key !== 'Escape') return;
  if (menuOpen.value) menuOpen.value = false;
  if (prefsOpen.value) prefsOpen.value = false;
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('pointerdown', onPointerDown);
  nextTick(() =>
    requestAnimationFrame(() => {
      const active = getActiveEl();
      if (active) positionHighlight(active);
    })
  );
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('pointerdown', onPointerDown);
  document.body.style.overflow = '';
});
</script>

<template>
  <header class="ln-navbar" :class="{ 'ln-navbar-scrolled': scrolled, 'ln-navbar-docs': showDocs }">
    <div ref="navbarInnerEl" class="ln-navbar-inner">
      <!-- Left -->
      <div class="ln-navbar-left">
        <RouterLink to="/" class="ln-navbar-logo" aria-label="动效工坊首页">
          <SiteBrand />
        </RouterLink>

        <span class="ln-navbar-divider">/</span>

        <nav ref="linksEl" class="ln-navbar-links" @mouseleave="handleLinksLeave">
          <div ref="highlightEl" class="ln-navbar-link-highlight" />
          <RouterLink
            v-for="{ label, to, match } in NAV_LINKS"
            :key="to"
            class="ln-navbar-link"
            :class="{ 'ln-navbar-link-active': isActive(match) }"
            :to="to"
            @mouseenter="handleLinkHover"
          >
            {{ label }}
          </RouterLink>
        </nav>
      </div>

      <!-- Right -->
      <div class="ln-navbar-right">
        <!-- Search -->
        <button type="button" class="ln-navbar-search" aria-label="搜索组件" @click="toggleSearch">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span>搜索</span>
          <kbd>/</kbd>
        </button>

        <!-- Prefs (docs only) -->
        <div
          v-if="showDocs"
          class="ln-navbar-prefs-wrapper"
          role="presentation"
          @mouseenter="handlePrefsEnter"
          @mouseleave="handlePrefsLeave"
        >
          <button type="button" class="ln-navbar-icon-btn ln-navbar-prefs-trigger" aria-label="个人设置">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <Transition name="prefs">
            <div v-if="prefsOpen" class="ln-navbar-prefs-menu">
              <RouterLink to="/favorites" class="ln-navbar-prefs-fav" @click="prefsOpen = false">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
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
                我的收藏
              </RouterLink>
            </div>
          </Transition>
        </div>

        <!-- Hamburger -->
        <button
          type="button"
          class="ln-navbar-hamburger"
          :class="{ open: menuOpen }"
          :aria-expanded="menuOpen"
          aria-label="菜单"
          @click="handleHamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <!-- Mobile menu (landing only) -->
      <div v-if="menuOpen && !showDocs" class="ln-navbar-mobile-menu">
        <RouterLink
          v-for="{ label, to } in NAV_LINKS"
          :key="to"
          class="ln-navbar-mobile-link"
          :to="to"
          @click="menuOpen = false"
        >
          {{ label }}
        </RouterLink>
      </div>
    </div>
  </header>

  <SearchDialog :is-open="searchOpen" @close="closeSearch" @toggle="toggleSearch" />
</template>
