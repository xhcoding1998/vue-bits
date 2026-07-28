<script setup lang="ts">
import { SITE_NAME } from '@/config/site';
</script>

<template>
  <span class="site-brand" :aria-label="SITE_NAME">
    <svg class="site-brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#111713" />
      <path d="M8 9.5 16 24 24 9.5h-5.1L16 15l-2.9-5.5H8Z" fill="#00ffa9" />
      <circle cx="23.5" cy="8.5" r="2.5" fill="#fff" />
    </svg>
    <span class="site-brand-name">{{ SITE_NAME }}</span>
  </span>
</template>

<style scoped>
.site-brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #fff;
  white-space: nowrap;
}

.site-brand-mark {
  width: 27px;
  height: 27px;
  flex: none;
}

.site-brand-name {
  font-family: 'Geist', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 15px;
  font-weight: 650;
  letter-spacing: 0.04em;
}
</style>
