<script setup lang="ts">
import { LIVE_CUSTOMIZATION_KEY } from '@/composables/liveCustomization';
import { computed, inject } from 'vue';
import CodeBlock from './CodeBlock.vue';

type Props = {
  slug: string;
  usage: string;
  source: string;
  utility?: string;
};

const props = defineProps<Props>();
const liveCustomization = inject(LIVE_CUSTOMIZATION_KEY, null);
const displayedUsage = computed(() => liveCustomization?.currentUsage.value ?? props.usage);
const currentParameters = computed(() => liveCustomization?.currentParameters.value ?? []);
</script>

<template>
  <div class="source-note">
    <div>
      <span>REFERENCE SOURCE</span>
      <strong>参考源码，无需安装组件库</strong>
    </div>
    <p>上方使用示例会实时同步预览参数；下方保留通用组件实现，通过 Props 接收这些值。AI 提示词也会使用当前参数。</p>
  </div>
  <div class="live-code-heading">
    <h3 class="demo-title-extra">当前参数使用示例</h3>
    <span v-if="currentParameters.length > 0">已同步 {{ currentParameters.length }} 项预览参数</span>
  </div>
  <CodeBlock :code="displayedUsage" language="html" />
  <h3 class="demo-title-extra">完整组件源码</h3>
  <CodeBlock :code="source" language="html" />
  <template v-if="utility">
    <h3 class="demo-title-extra">工具源码</h3>
    <CodeBlock :code="utility" language="ts" />
  </template>
</template>

<style scoped>
.source-note {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin: 1rem 0 2rem;
  padding: 1.15rem 1.25rem;
  border: 1px solid rgba(94, 255, 76, 0.18);
  border-radius: 12px;
  background: rgba(94, 255, 76, 0.05);
}

.source-note div {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 0.25rem;
}

.source-note span {
  color: var(--color-accent);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.source-note strong {
  color: var(--text-primary);
  font-size: 0.92rem;
}

.source-note p {
  max-width: 42rem;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.86rem;
  line-height: 1.65;
}

.live-code-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.live-code-heading span {
  color: var(--color-accent);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.68rem;
}

@media (max-width: 680px) {
  .source-note {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
