<template>
  <article class="component-card" :data-category="entry.category">
    <button class="card-main" type="button" @click="$emit('select', entry)" :aria-label="`查看 ${entry.nameCn}`">
      <VideoPreview :src="entry.video" :alt="entry.nameCn" />
      <div class="card-copy">
        <div class="card-kicker">
          <span>{{ entry.categoryCn }}</span>
          <span class="complexity">{{ entry.complexity }}</span>
        </div>
        <div class="card-title-row">
          <div>
            <h2>{{ entry.nameCn }}</h2>
            <p class="english-name">{{ entry.name }}</p>
          </div>
          <ArrowUpRight :size="19" aria-hidden="true" />
        </div>
        <p class="card-description">{{ entry.descriptionCn }}</p>
        <div class="card-meta">
          <span>{{ entry.props.length }} 个参数</span>
          <span>{{ entry.sourceLines }} 行源码</span>
          <span v-if="entry.dependencies[0]" class="dependency">{{ entry.dependencies[0] }}</span>
          <span v-else class="dependency">零依赖</span>
        </div>
      </div>
    </button>
    <button
      class="favorite-button"
      type="button"
      :class="{ active: favorite }"
      :aria-label="favorite ? `取消收藏 ${entry.nameCn}` : `收藏 ${entry.nameCn}`"
      @click="$emit('favorite', entry.slug)"
    >
      <Heart :size="17" :fill="favorite ? 'currentColor' : 'none'" aria-hidden="true" />
    </button>
  </article>
</template>

<script setup lang="ts">
import { ArrowUpRight, Heart } from "lucide-vue-next";
import type { ComponentEntry } from "../types";
import VideoPreview from "./VideoPreview.vue";

defineProps<{
  entry: ComponentEntry;
  favorite: boolean;
}>();

defineEmits<{
  select: [entry: ComponentEntry];
  favorite: [slug: string];
}>();
</script>
