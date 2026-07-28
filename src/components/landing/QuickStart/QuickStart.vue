<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import './QuickStart.css';

const AI_PROMPT_EXAMPLE = `请从零实现 Aurora 动态背景，并适配我当前项目使用的技术栈。
不要因为参考源码使用 Vue 就默认输出 Vue；如果无法判断框架，请先询问我。
禁止导入本站组件、现成同类组件库或远程实现。
使用 OGL 与 GLSL Shader 实时渲染，保持极光颜色混合、速度、振幅和响应式尺寸行为一致。
输出目标框架对应的完整组件、公共参数类型、资源清理逻辑和可运行示例。`;

const headerEl = ref<HTMLDivElement | null>(null);
const terminalEl = ref<HTMLDivElement | null>(null);
const headerVisible = ref(false);
const terminalVisible = ref(false);
const copied = ref(false);

let observers: IntersectionObserver[] = [];
let copyTimeout: ReturnType<typeof setTimeout> | null = null;

function observe(el: HTMLElement | null, setVisible: () => void) {
  if (!el || typeof IntersectionObserver === 'undefined') {
    setVisible();
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setVisible();
        observer.disconnect();
      }
    },
    { threshold: 0.1, rootMargin: '-60px' }
  );

  observer.observe(el);
  observers.push(observer);
}

async function copyPrompt() {
  await navigator.clipboard.writeText(AI_PROMPT_EXAMPLE);
  copied.value = true;

  if (copyTimeout) clearTimeout(copyTimeout);
  copyTimeout = setTimeout(() => {
    copied.value = false;
  }, 2000);
}

onMounted(() => {
  observe(headerEl.value, () => (headerVisible.value = true));
  observe(terminalEl.value, () => (terminalVisible.value = true));
});

onBeforeUnmount(() => {
  observers.forEach(observer => observer.disconnect());
  observers = [];
  if (copyTimeout) clearTimeout(copyTimeout);
});
</script>

<template>
  <section class="ln-qs-section">
    <div class="ln-qs-inner">
      <div ref="headerEl" class="ln-qs-header" :class="{ 'is-visible': headerVisible }">
        <h2 class="ln-qs-title">看效果，然后让 AI 从零实现</h2>
        <p class="ln-qs-subtitle">
          用户不需要安装本站组件库。每个详情页都会根据真实源码和当前参数，生成适用于不同前端框架的中文复刻提示词。
        </p>
      </div>

      <div ref="terminalEl" class="ln-qs-terminal-wrap" :class="{ 'is-visible': terminalVisible }">
        <div class="ln-qs-glow" />

        <div class="ln-qs-terminal">
          <div class="ln-qs-tab-bar">
            <div class="ln-qs-tabs">
              <button type="button" class="ln-qs-tab ln-qs-tab--active">
                <span class="prompt-tab-icon">✦</span>
                <span>AI 复刻提示词</span>
              </button>
            </div>

            <div class="ln-qs-tab-bar-right">
              <span class="prompt-language">Vue · React · Next.js · 更多</span>
            </div>
          </div>

          <div class="ln-qs-cmd-area prompt-example-area">
            <div class="ln-qs-cmd-line">
              <span class="ln-qs-prompt">›</span>
              <code class="ln-qs-cmd-text prompt-example">{{ AI_PROMPT_EXAMPLE }}</code>
            </div>

            <button
              type="button"
              class="ln-qs-copy"
              :class="{ 'ln-qs-copy--done': copied }"
              :aria-label="copied ? '已复制提示词' : '复制 AI 提示词'"
              @click="copyPrompt"
            >
              <svg
                v-if="copied"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <svg
                v-else
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </div>

        <p class="ln-qs-hint">
          <strong class="ln-qs-hint-strong">浏览组件</strong>
          →
          <strong class="ln-qs-hint-strong">实时调参</strong>
          →
          <strong class="ln-qs-hint-strong">复制提示词</strong>
          →
          <strong class="ln-qs-hint-strong">AI 生成独立源码</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prompt-tab-icon {
  color: var(--pro-base, #00ffa9);
  font-size: 0.95rem;
}

.prompt-language {
  color: rgba(255, 255, 255, 0.45);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.72rem;
}

.prompt-example-area {
  min-height: 190px;
  align-items: flex-start;
}

.prompt-example-area .ln-qs-cmd-line {
  align-items: flex-start;
}

.prompt-example {
  max-width: calc(100% - 3rem);
  white-space: pre-wrap !important;
  word-break: break-word;
  line-height: 1.85 !important;
}

@media (max-width: 640px) {
  .prompt-language {
    display: none;
  }

  .prompt-example-area {
    min-height: 230px;
  }
}
</style>
