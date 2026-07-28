<template>
  <div class="detail-shell" role="presentation" @mousedown.self="$emit('close')">
    <article ref="dialog" class="detail-panel" role="dialog" aria-modal="true" :aria-labelledby="titleId">
      <header class="detail-header">
        <button class="back-button" type="button" @click="$emit('close')">
          <ArrowLeft :size="18" aria-hidden="true" />
          返回图鉴
        </button>
        <div class="detail-actions">
          <button
            class="icon-button"
            type="button"
            :aria-label="favorite ? '取消收藏' : '收藏'"
            @click="$emit('favorite', entry.slug)"
          >
            <Heart :size="18" :fill="favorite ? 'currentColor' : 'none'" aria-hidden="true" />
          </button>
          <a class="official-link" :href="entry.docsUrl" target="_blank" rel="noreferrer">
            官方文档
            <ExternalLink :size="15" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section class="detail-hero">
        <VideoPreview :src="entry.video" :alt="entry.nameCn" />
        <div class="detail-identity">
          <div class="eyebrow">
            <span>{{ entry.categoryCn }}</span>
            <span>复杂度 · {{ entry.complexity }}</span>
          </div>
          <h1 :id="titleId">{{ entry.nameCn }}</h1>
          <p class="detail-english">{{ entry.name }}</p>
          <p class="detail-description">{{ entry.descriptionCn }}</p>
          <div class="dependency-row">
            <span v-for="dependency in entry.dependencies" :key="dependency">{{ dependency }}</span>
            <span v-if="!entry.dependencies.length">Vue 3 · 零额外依赖</span>
          </div>
        </div>
      </section>

      <nav class="detail-tabs" aria-label="组件详情">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </nav>

      <div class="detail-content">
        <section v-if="activeTab === 'guide'" class="tab-section">
          <div class="section-grid">
            <div class="content-block">
              <p class="block-label">适用场景</p>
              <ul class="usecase-list">
                <li v-for="item in entry.useCases" :key="item">
                  <Check :size="16" aria-hidden="true" />
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="content-block metrics-block">
              <p class="block-label">源码快照</p>
              <dl>
                <div><dt>源码行数</dt><dd>{{ entry.sourceLines }}</dd></div>
                <div><dt>可配置项</dt><dd>{{ entry.props.length }}</dd></div>
                <div><dt>直接依赖</dt><dd>{{ entry.dependencies.length }}</dd></div>
              </dl>
            </div>
          </div>

          <div class="content-block">
            <div class="block-heading">
              <p class="block-label">参数速查</p>
              <span>从官方 Vue 单文件组件提取</span>
            </div>
            <div v-if="entry.props.length" class="props-table-wrap">
              <table class="props-table">
                <thead><tr><th>参数</th><th>类型</th><th>默认值</th></tr></thead>
                <tbody>
                  <tr v-for="prop in entry.props" :key="prop.name">
                    <td><code>{{ prop.name }}</code></td>
                    <td>{{ prop.type }}</td>
                    <td>{{ prop.defaultValue ?? "—" }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p v-else class="empty-note">这个组件通过插槽或固定结构使用，没有公开 props 类型。</p>
          </div>
        </section>

        <section v-else-if="activeTab === 'build'" class="tab-section">
          <div class="analysis-column">
            <div class="content-block">
              <p class="block-label">如何实现</p>
              <ol class="analysis-list">
                <li v-for="(item, index) in entry.implementation" :key="item">
                  <span>{{ String(index + 1).padStart(2, "0") }}</span>
                  <p>{{ item }}</p>
                </li>
              </ol>
            </div>
            <div class="content-block">
              <p class="block-label">样式结构</p>
              <ol class="analysis-list style-list">
                <li v-for="(item, index) in entry.style" :key="item">
                  <span>{{ String(index + 1).padStart(2, "0") }}</span>
                  <p>{{ item }}</p>
                </li>
              </ol>
            </div>
            <div class="practice-note">
              <ShieldCheck :size="20" aria-hidden="true" />
              <p>国内项目建议将字体、视频和模型资源放到自有 CDN；WebGL 组件需提供静态降级图，并在低端设备上限制 DPR。</p>
            </div>
          </div>
        </section>

        <section v-else-if="activeTab === 'usage'" class="tab-section">
          <div class="code-toolbar">
            <div>
              <p class="block-label">Vue 3 用法骨架</p>
              <span>参数值需要按业务替换</span>
            </div>
            <button class="copy-button" type="button" @click="copy(entry.usage, 'usage')">
              <Check v-if="copied === 'usage'" :size="16" aria-hidden="true" />
              <Copy v-else :size="16" aria-hidden="true" />
              {{ copied === "usage" ? "已复制" : "复制代码" }}
            </button>
          </div>
          <pre class="code-block"><code>{{ entry.usage }}</code></pre>
          <div class="license-note">
            <Scale :size="19" aria-hidden="true" />
            <p>原项目采用 MIT + Commons Clause：可以在产品中使用，但不能把组件源码重新打包、销售或作为移植组件库分发。本站只提供分析和官方安装入口。</p>
          </div>
        </section>

        <section v-else class="tab-section">
          <div class="prompt-header">
            <div>
              <p class="block-label">AI 提示词</p>
              <h2>把需求完整交给 Cursor、Codex 或其他编程 AI</h2>
            </div>
            <button class="copy-button primary" type="button" @click="copy(entry.aiPrompt, 'prompt')">
              <Check v-if="copied === 'prompt'" :size="16" aria-hidden="true" />
              <Copy v-else :size="16" aria-hidden="true" />
              {{ copied === "prompt" ? "已复制" : "复制提示词" }}
            </button>
          </div>
          <div class="prompt-card">{{ entry.aiPrompt }}</div>
          <p class="prompt-tip">提示：再补充品牌色、组件所在页面、参考截图和真实数据，AI 生成结果会更稳定。</p>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  Heart,
  Scale,
  ShieldCheck,
} from "lucide-vue-next";
import { nextTick, onBeforeUnmount, onMounted, ref, useId, useTemplateRef, watch } from "vue";
import type { ComponentEntry } from "../types";
import VideoPreview from "./VideoPreview.vue";

const props = defineProps<{
  entry: ComponentEntry;
  favorite: boolean;
}>();

const emit = defineEmits<{
  close: [];
  favorite: [slug: string];
}>();

const tabs = [
  { id: "guide", label: "用法与参数" },
  { id: "build", label: "样式与原理" },
  { id: "usage", label: "接入代码" },
  { id: "prompt", label: "AI 提示词" },
] as const;

type TabId = (typeof tabs)[number]["id"];
const activeTab = ref<TabId>("guide");
const copied = ref<"usage" | "prompt" | "">("");
const dialog = useTemplateRef<HTMLElement>("dialog");
const titleId = useId();
let copyTimer: number | undefined;

async function copy(text: string, type: "usage" | "prompt") {
  await navigator.clipboard.writeText(text);
  copied.value = type;
  window.clearTimeout(copyTimer);
  copyTimer = window.setTimeout(() => (copied.value = ""), 1800);
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") emit("close");
}

onMounted(() => {
  document.body.classList.add("detail-open");
  window.addEventListener("keydown", handleKeydown);
  nextTick(() => dialog.value?.focus());
});

watch(
  () => props.entry.slug,
  () => {
    activeTab.value = "guide";
    copied.value = "";
  },
);

onBeforeUnmount(() => {
  document.body.classList.remove("detail-open");
  window.removeEventListener("keydown", handleKeydown);
  window.clearTimeout(copyTimer);
});
</script>
