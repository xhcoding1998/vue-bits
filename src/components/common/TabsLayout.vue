<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, provide, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

import { Check, Clipboard, RotateCcw, Sparkles, X } from 'lucide-vue-next';
import { FiCode, FiEye } from 'vue-icons-plus/fi';

import { dependenciesForSlug } from '@/constants/componentDependencies';
import { messages, translatePropDescription } from '@/i18n';
import { componentNameEnglish, componentNameZh } from '@/i18n/componentNames';
import { LIVE_CUSTOMIZATION_KEY, type LiveControlValue, type LiveParameter } from '@/composables/liveCustomization';
import { buildLiveUsage } from '@/utils/liveUsage';
import { useToast } from 'primevue/usetoast';
import Dependencies from './Dependencies.vue';

type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

type ModalName = 'code' | 'prompt';
type PromptTargetId = 'auto' | 'vue' | 'react' | 'next' | 'nuxt' | 'svelte' | 'angular' | 'vanilla';
type PromptTarget = {
  id: PromptTargetId;
  label: string;
  projectLabel: string;
  requirements: string[];
  deliveryLabel: string;
  exampleLabel: string;
  verificationLabel: string;
};

const PROMPT_TARGET_STORAGE_KEY = 'motion-lab-prompt-target';
const PROMPT_TARGETS: readonly PromptTarget[] = [
  {
    id: 'auto',
    label: '自动适配',
    projectLabel: '用户现有项目的技术栈',
    requirements: [
      '不要因为参考源码是 Vue 而默认输出 Vue；优先沿用用户现有项目的框架、语言、样式组织和构建工具。',
      '如果上下文没有说明技术栈，先询问用户；无法追问时，交付原生 HTML、CSS 与 JavaScript 的可复用实现。',
      '把 Props、事件、插槽和生命周期映射为目标技术栈对应的公共参数、回调、内容组合和资源清理机制。'
    ],
    deliveryLabel: '与用户项目匹配的完整组件、样式和必要工具文件',
    exampleLabel: '与用户项目入口匹配的可运行使用示例',
    verificationLabel: '输出代码可在用户现有项目中直接运行且没有框架混用'
  },
  {
    id: 'vue',
    label: 'Vue 3',
    projectLabel: 'Vue 3 + TypeScript',
    requirements: [
      '使用 Composition API 与 <script setup lang="ts">。',
      '提供完整 Props 类型、默认值、事件与插槽定义。',
      '在 onUnmounted 中清理动画帧、Observer、事件监听、定时器和渲染资源。'
    ],
    deliveryLabel: '完整 .vue 组件文件及其必要样式或工具文件',
    exampleLabel: '可直接运行的 App.vue 使用示例',
    verificationLabel: 'TypeScript 无错误，可在 Vue 3 项目中直接运行'
  },
  {
    id: 'react',
    label: 'React',
    projectLabel: 'React + TypeScript',
    requirements: [
      '使用函数组件、Hooks 与严格的 Props 类型，不得输出 Vue SFC 或 Composition API。',
      '将 Vue 的响应式状态和生命周期映射为 React state、refs、effects 与 cleanup。',
      '样式可使用 CSS Modules 或独立 CSS 文件，但必须保持原始选择器关系、视觉层级和响应式行为。'
    ],
    deliveryLabel: '完整 .tsx 组件、样式文件及必要工具文件',
    exampleLabel: '可直接运行的 App.tsx 使用示例',
    verificationLabel: 'TypeScript 无错误，可在 React 项目中直接运行'
  },
  {
    id: 'next',
    label: 'Next.js',
    projectLabel: 'Next.js App Router + TypeScript',
    requirements: [
      '按 App Router 组织文件；只有实际使用浏览器 API、交互状态或生命周期的组件才添加 "use client"。',
      '不得在服务端渲染阶段访问 window、document、Canvas 或 WebGL；必要时使用客户端边界或动态加载。',
      '使用 React 函数组件与 Hooks，并完整清理 effects 中创建的动画和渲染资源。'
    ],
    deliveryLabel: '完整 Next.js 组件、样式文件及必要客户端边界',
    exampleLabel: '可直接放入 app/page.tsx 的使用示例',
    verificationLabel: '通过 Next.js 构建，不产生 hydration 或服务端浏览器 API 错误'
  },
  {
    id: 'nuxt',
    label: 'Nuxt 3',
    projectLabel: 'Nuxt 3 + TypeScript',
    requirements: [
      '使用 Vue 3 Composition API 与 <script setup lang="ts">，并遵循 Nuxt 目录和自动导入约定。',
      '浏览器专属渲染需要使用合适的客户端边界，避免服务端访问 window、document、Canvas 或 WebGL。',
      '提供完整 Props、事件和插槽类型，并在组件卸载时清理所有动画与渲染资源。'
    ],
    deliveryLabel: '完整 Nuxt 组件、样式文件及必要客户端包装',
    exampleLabel: '可直接放入 pages/index.vue 的使用示例',
    verificationLabel: '通过 Nuxt 构建且不会出现 SSR 或 hydration 错误'
  },
  {
    id: 'svelte',
    label: 'Svelte',
    projectLabel: 'Svelte + TypeScript',
    requirements: [
      '输出 Svelte 组件与 TypeScript 脚本，不得保留 Vue 模板指令、SFC API 或 React Hooks。',
      '把 Props、派生状态、事件和插槽语义映射为 Svelte 对应能力。',
      '在组件销毁时清理动画帧、Observer、事件监听、定时器以及 Canvas/WebGL 资源。'
    ],
    deliveryLabel: '完整 .svelte 组件、样式和必要工具文件',
    exampleLabel: '可直接运行的 Svelte 页面使用示例',
    verificationLabel: 'TypeScript 无错误，可在 Svelte 项目中直接运行'
  },
  {
    id: 'angular',
    label: 'Angular',
    projectLabel: 'Angular + TypeScript',
    requirements: [
      '使用 standalone component、严格类型、模板和组件样式，不得输出 Vue SFC 或 React Hooks。',
      '把 Props、事件和内容插槽映射为 Inputs、Outputs 与内容投影。',
      '在组件销毁阶段清理动画帧、订阅、Observer、事件监听和 Canvas/WebGL 资源。'
    ],
    deliveryLabel: '完整 Angular 组件、模板、样式及必要工具文件',
    exampleLabel: '可直接运行的 Angular 页面使用示例',
    verificationLabel: '通过 Angular 类型检查和构建'
  },
  {
    id: 'vanilla',
    label: '原生 Web',
    projectLabel: '原生 HTML + CSS + JavaScript',
    requirements: [
      '不得依赖 Vue、React、Svelte、Angular 或其他前端框架。',
      '使用可复用 ES Module、Custom Element 或清晰的初始化/销毁 API，而不是只写一次性的页面脚本。',
      '把组件参数映射为属性、配置对象和自定义事件，并提供明确的 destroy 清理方法。'
    ],
    deliveryLabel: '完整 HTML、CSS、JavaScript 模块及必要工具文件',
    exampleLabel: '可直接在浏览器打开运行的使用示例',
    verificationLabel: '无需框架即可运行，初始化、参数更新和销毁行为正常'
  }
];

const props = withDefaults(
  defineProps<{
    className?: string;
    componentName?: string;
    usage?: string;
    source?: string;
    propsTable?: PropRow[];
    hasChanges?: boolean;
    onreset?: () => void;
  }>(),
  {
    usage: '',
    source: '',
    propsTable: () => [],
    hasChanges: false
  }
);

const toast = useToast();
const route = useRoute();

const copied = ref(false);
const activeModal = ref<ModalName | null>(null);
const modalRef = ref<HTMLElement | null>(null);
const selectedPromptTargetId = ref<PromptTargetId>('auto');
const liveControls = reactive(new Map<string, { label: string; value: LiveControlValue }>());
let previouslyFocused: HTMLElement | null = null;
let previousDocumentOverflow = '';
let previousDocumentPaddingRight = '';
let documentScrollLocked = false;

const subcategory = computed(() => route.params.subcategory as string);

const promptComponentName = computed(() => {
  if (props.componentName) return props.componentName;

  return subcategory.value
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
});

const componentTitle = computed(() =>
  (subcategory.value ?? '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
);

const componentEnglishTitle = computed(() =>
  componentNameEnglish(componentTitle.value || promptComponentName.value || '')
);
const componentChineseTitle = computed(() => componentNameZh(componentEnglishTitle.value));
const selectedPromptTarget = computed(
  () => PROMPT_TARGETS.find(target => target.id === selectedPromptTargetId.value) ?? PROMPT_TARGETS[0]
);

const liveCodeState = computed(() => buildLiveUsage(props.usage, props.propsTable, [...liveControls.values()]));
const liveUsage = computed(() => liveCodeState.value.usage);
const currentParameters = computed<LiveParameter[]>(() => liveCodeState.value.parameters);

provide(LIVE_CUSTOMIZATION_KEY, {
  registerControl(label, value) {
    liveControls.set(label, { label, value });
  },
  currentUsage: liveUsage,
  currentParameters
});

const categoryGuide = computed(() => {
  const category = route.params.category as string;
  const guides: Record<string, { label: string; intro: string; scenarios: string; fallbackInteraction: string }> = {
    'text-animations': {
      label: '文字动画',
      intro: '用于强化标题、数字或文案的视觉节奏，在不改变内容语义的前提下增加注意力和反馈感。',
      scenarios: '首屏标题、产品卖点、数据变化、加载反馈、滚动叙事',
      fallbackInteraction: '由文本内容、播放时机和动画参数共同驱动，可根据视口或用户操作触发。'
    },
    animations: {
      label: '交互动效',
      intro: '用于为页面增加跟随、过渡、反馈或空间运动，让鼠标、触控和滚动操作获得更明确的视觉响应。',
      scenarios: '悬停反馈、鼠标跟随、页面转场、滚动触发、品牌动效',
      fallbackInteraction: '通过组件 Props 和浏览器事件驱动状态变化，并将状态映射到视觉动画。'
    },
    components: {
      label: 'UI 组件',
      intro: '可直接用于业务界面的独立交互模块，重点保留结构、状态、动效和响应式布局之间的完整关系。',
      scenarios: '导航、卡片、列表、画廊、表单流程、内容展示',
      fallbackInteraction: '通过 Props、插槽和组件内部状态控制交互，适配鼠标、键盘与触控操作。'
    },
    backgrounds: {
      label: '动态背景',
      intro: '用于首屏、活动页或内容区的沉浸式视觉背景，可在不干扰主体内容的前提下提供持续动态。',
      scenarios: '官网首屏、活动专题、登录页、数据大屏、品牌视觉背景',
      fallbackInteraction: '持续动画由时间和尺寸参数驱动，可选地响应鼠标、触控或窗口变化。'
    }
  };

  return (
    guides[category] ?? {
      label: '交互组件',
      intro: '用于在前端项目中实现可复用的视觉与交互效果。',
      scenarios: '网站、应用、活动页与交互原型',
      fallbackInteraction: '由公共参数和组件状态共同驱动。'
    }
  );
});

const hasPrompt = computed(() => Boolean(promptComponentName.value && props.source));
const dependencyList = computed(() => dependenciesForSlug(route.params.subcategory as string));

function stripHeader(source: string) {
  return source.replace(/^['"][^'"]+['"];\s*/gm, '').trim();
}

const detectedColors = computed(() => {
  const matches =
    props.source.match(/#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)|(?:var\()?(--[\w-]+)\)?/g) ?? [];

  return [...new Set(matches)].slice(0, 16);
});

const canRenderColorToken = (color: string) => /^(?:#|rgb|hsl|var\()/.test(color);

const detectedTechniques = computed(() => {
  const source = props.source;
  const techniques: string[] = [];
  const add = (label: string, pattern: RegExp) => {
    if (pattern.test(source)) techniques.push(label);
  };

  add('Canvas 2D 绘制', /<canvas|CanvasRenderingContext2D|getContext\(['"]2d/);
  add('WebGL / Three.js', /\bthree\b|THREE\.|WebGLRenderer|ShaderMaterial/);
  add('OGL / GLSL Shader', /\bogl\b|gl_FragColor|fragmentShader|vertexShader/);
  add('GSAP 动画', /\bgsap\b|fromTo\(|timeline\(/);
  add('Motion for Vue', /motion-v|useMotion|animate\(/);
  add('组件作用域样式（参考源码为 Vue scoped CSS）', /<style[^>]*\bscoped\b/);
  add('CSS 自定义变量', /var\(--|--[\w-]+\s*:/);
  add('Flexbox / Grid 布局', /display:\s*(?:flex|grid)|\bflex\b|\bgrid\b/);
  add('CSS 关键帧动画', /@keyframes|animation:/);
  add('CSS transform / 3D', /transform:|translate3d|perspective:|rotate[XYZ]?\(/);
  add('滤镜与毛玻璃', /backdrop-filter|filter:/);
  add('CSS 渐变', /linear-gradient|radial-gradient|conic-gradient/);
  add('SVG 图形', /<svg|<path|<filter/);
  add('requestAnimationFrame 动画循环', /requestAnimationFrame/);
  add('IntersectionObserver 可视区监听', /IntersectionObserver/);
  add('ResizeObserver 尺寸监听', /ResizeObserver/);
  add('Pointer / Mouse 交互', /pointermove|mousemove|touchmove|MouseEvent|PointerEvent/);

  return techniques.length > 0 ? techniques : ['组件响应式状态', 'CSS 布局与视觉样式'];
});

const sourceLineCount = computed(() => stripHeader(props.source).split(/\r?\n/).length);

const implementationOverview = computed(() => {
  const techniques = detectedTechniques.value.slice(0, 5).join('、');
  const deps =
    dependencyList.value.length > 0 ? `底层依赖使用 ${dependencyList.value.join('、')}` : '不依赖外部动画组件库';
  return `核心由 ${techniques} 组合实现；${deps}。`;
});

const interactionOverview = computed(() => {
  const source = props.source;
  const parts: string[] = [];

  if (/pointermove|mousemove|touchmove|MouseEvent|PointerEvent/.test(source)) {
    parts.push('会读取鼠标或触控位置并实时更新视觉状态');
  }
  if (/requestAnimationFrame/.test(source)) {
    parts.push('使用逐帧动画循环保持运动连续');
  }
  if (/IntersectionObserver/.test(source)) {
    parts.push('进入可视区域后触发或恢复动画');
  }
  if (/ResizeObserver|addEventListener\(['"]resize/.test(source)) {
    parts.push('容器尺寸变化时会重新计算布局或渲染尺寸');
  }

  return parts.length > 0 ? `${parts.join('；')}。` : categoryGuide.value.fallbackInteraction;
});

const stylingOverview = computed(() => {
  const colorsFound = detectedColors.value.length > 0 ? detectedColors.value.slice(0, 8).join('、') : '父级主题颜色';
  return `样式与渲染代码保留在组件内部，主要颜色为 ${colorsFound}；可通过公共参数或 CSS 变量继续定制。`;
});

function buildZeroToOnePrompt() {
  const sourceShown = stripHeader(props.source);
  const deps = dependencyList.value.length > 0 ? dependencyList.value.join(', ') : '无';
  const colorSummary = detectedColors.value.length > 0 ? detectedColors.value.join('、') : '未写死颜色，跟随父级主题';
  const target = selectedPromptTarget.value;
  const targetRequirements = target.requirements.map(requirement => `- ${requirement}`).join('\n');
  const currentParameterSummary =
    currentParameters.value.length > 0
      ? currentParameters.value
          .map(parameter => `- ${parameter.propName}（${parameter.label}）：${JSON.stringify(parameter.value)}`)
          .join('\n')
      : '- 当前组件没有可调参数，沿用源码默认值。';

  let prompt = `# 任务：使用${target.label}从 0 到 1 复刻${componentChineseTitle.value}（${componentEnglishTitle.value}）

你是一名资深前端动效工程师。请在${target.projectLabel}中，从空文件开始实现一个可复用的“${componentEnglishTitle.value}”组件或模块，使视觉效果、动画节奏、鼠标/触控反馈、参数行为和响应式表现与参考效果一致。

参考源码使用 Vue 3 编写，但它只用于说明结构、算法、样式和交互，不代表最终输出必须使用 Vue。最终代码必须严格采用当前选择的目标技术栈，不得混入其他框架语法。

## 最重要的限制
- 禁止安装或导入本站组件、任何已经包含该组件实现的 UI/动效组件库或远程实现。
- 禁止用 iframe、网页嵌入、远程组件、截图、GIF 或视频冒充真实交互。
- 必须输出自包含、可维护的本地源码，让组件在用户自己的项目中独立运行。
- 只允许使用下面列出的兼容底层依赖。若某个依赖仅适用于 Vue，必须映射为目标技术栈的等价底层方案或使用浏览器原生 API 重写，不能因此继续输出 Vue。

## 目标技术栈
- 当前选择：${target.label}
- 项目环境：${target.projectLabel}
${targetRequirements}

## 目标组件
- 中文名称：${componentChineseTitle.value}
- 英文名称：${componentEnglishTitle.value}
- 建议组件名：${promptComponentName.value}
- 分类：${categoryGuide.value.label}
- 适用场景：${categoryGuide.value.scenarios}
- 参考源码底层依赖：${deps}
- Vue 参考源码规模：约 ${sourceLineCount.value} 行

## 当前预览参数
以下数值来自用户刚刚在“实时预览”中调整的状态，生成代码时必须作为默认使用示例：
${currentParameterSummary}

## 已分析出的实现方式
- ${implementationOverview.value}
- ${interactionOverview.value}
- ${stylingOverview.value}
- 识别到的颜色 / CSS 变量：${colorSummary}

## 必须保持的技术特征
${detectedTechniques.value.map(item => `- ${item}`).join('\n')}

## 跨框架实现要求
- 把参考源码中的 Props、事件、插槽、响应式状态和生命周期转换成目标技术栈的标准写法，不要机械复制 Vue API。
- 保留 CSS 变量、渐变、滤镜、混合模式、Canvas、WebGL、GLSL、动画算法和原始视觉层级，不得擅自换成另一种近似效果。
- 支持桌面端和移动端；源码涉及指针时同时处理鼠标与触控。
- 处理容器尺寸变化、高 DPR 屏幕和页面不可见状态，避免重复创建动画循环。
- 在目标技术栈对应的销毁阶段清理 requestAnimationFrame、Observer、事件监听、定时器、WebGL Context 和其他资源。
- 支持 prefers-reduced-motion 或提供合理的低动态降级。
`;

  if (props.propsTable.length > 0) {
    prompt += `
## 必须实现的公共参数
下面名称来自参考组件。请保留参数语义和默认值，并映射为目标技术栈的 Props、Inputs、attributes 或配置对象。

| 参数 | 类型 | 默认值 | 中文说明 |
|------|------|--------|----------|
${props.propsTable
  .map(
    prop =>
      `| ${prop.name} | ${prop.type} | ${prop.default || '—'} | ${translatePropDescription(prop.name, prop.description)} |`
  )
  .join('\n')}
`;
  }

  prompt += `
## Vue 3 技术参考源码
下面源码只用于准确理解结构、算法、样式和交互。最终答案必须翻译为“${target.label}”实现，输出完整的独立代码，不能要求用户安装或导入本组件库，也不能因为参考源码是 Vue 就继续返回 Vue。

\`\`\`vue
${sourceShown}
\`\`\`

## 你必须交付
1. 简要说明 DOM/Canvas/WebGL 分层、状态流、动画算法、交互映射、CSS 技法和颜色体系。
2. 给出建议的文件目录。
3. 给出底层依赖的 npm 安装命令；没有额外依赖时明确写“无需安装额外依赖”。
4. 输出${target.deliveryLabel}，禁止省略 style、类型、Shader、工具函数和关键帧，禁止使用“其余代码不变”。
5. 输出${target.exampleLabel}，覆盖主要公共参数。
6. 标出颜色、尺寸、速度、强度和交互范围等可调位置。
7. 给出资源清理、移动端和性能注意事项。

## 验收标准
- 不导入任何现成 Bits 组件或同类组件库。
- 组件不是静态图片或视频，所有动画和交互都由本地代码实时产生。
- 默认外观与参考一致，修改公共参数后实时更新。
- 鼠标、触控、尺寸变化和组件卸载行为正常。
- ${target.verificationLabel}。
`;

  return prompt;
}

const generatedPrompt = computed(buildZeroToOnePrompt);

function selectPromptTarget(targetId: PromptTargetId) {
  selectedPromptTargetId.value = targetId;
  copied.value = false;

  try {
    window.localStorage.setItem(PROMPT_TARGET_STORAGE_KEY, targetId);
  } catch {
    // 本地存储不可用时仍保留当前会话内的选择。
  }
}

const handleCopyPrompt = async () => {
  if (!hasPrompt.value) return;

  await navigator.clipboard.writeText(generatedPrompt.value);
  copied.value = true;

  toast.add({
    severity: 'success',
    summary: '复制成功',
    detail: 'AI 提示词已复制到剪贴板',
    life: 2500
  });

  setTimeout(() => {
    copied.value = false;
  }, 2000);
};

function lockDocumentScroll() {
  if (documentScrollLocked) return;

  previousDocumentOverflow = document.documentElement.style.overflow;
  previousDocumentPaddingRight = document.documentElement.style.paddingRight;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflow = 'hidden';
  if (scrollbarWidth > 0) document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
  documentScrollLocked = true;
}

function unlockDocumentScroll() {
  if (!documentScrollLocked) return;

  document.documentElement.style.overflow = previousDocumentOverflow;
  document.documentElement.style.paddingRight = previousDocumentPaddingRight;
  documentScrollLocked = false;
}

function openModal(modal: ModalName) {
  if (modal === 'prompt' && !hasPrompt.value) return;

  previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  activeModal.value = modal;
  lockDocumentScroll();

  nextTick(() => modalRef.value?.focus({ preventScroll: true }));
}

function closeModal() {
  if (!activeModal.value) return;

  activeModal.value = null;
  unlockDocumentScroll();

  nextTick(() => {
    previouslyFocused?.focus({ preventScroll: true });
    previouslyFocused = null;
  });
}

function getModalFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter(element => element.tabIndex !== -1);
}

function handleModalKey(event: KeyboardEvent) {
  if (!activeModal.value || !modalRef.value) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeModal();
    return;
  }

  if (event.key !== 'Tab') return;

  const focusable = getModalFocusable(modalRef.value);
  if (focusable.length === 0) {
    event.preventDefault();
    modalRef.value.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (!modalRef.value.contains(document.activeElement)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleDialogWheel(event: WheelEvent) {
  if (event.ctrlKey || event.deltaY === 0) return;

  const panel = event.currentTarget;
  if (!(panel instanceof HTMLElement)) return;

  let candidate = event.target instanceof Element ? event.target : null;

  while (candidate && panel.contains(candidate)) {
    if (candidate instanceof HTMLElement) {
      const overflowY = window.getComputedStyle(candidate).overflowY;
      const maxScrollTop = candidate.scrollHeight - candidate.clientHeight;
      const isScrollable = /^(auto|scroll|overlay)$/.test(overflowY) && maxScrollTop > 1;
      const canScroll =
        isScrollable &&
        ((event.deltaY > 0 && candidate.scrollTop < maxScrollTop - 1) || (event.deltaY < 0 && candidate.scrollTop > 1));

      if (canScroll) {
        const delta =
          event.deltaMode === 1
            ? event.deltaY * 16
            : event.deltaMode === 2
              ? event.deltaY * candidate.clientHeight
              : event.deltaY;

        event.preventDefault();
        candidate.scrollTop = Math.max(0, Math.min(maxScrollTop, candidate.scrollTop + delta));
        return;
      }
    }

    if (candidate === panel) break;
    candidate = candidate.parentElement;
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleModalKey);

  try {
    const savedTarget = window.localStorage.getItem(PROMPT_TARGET_STORAGE_KEY) as PromptTargetId | null;
    if (savedTarget && PROMPT_TARGETS.some(target => target.id === savedTarget)) {
      selectedPromptTargetId.value = savedTarget;
    }
  } catch {
    // 无法读取本地存储时使用“自动适配”。
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleModalKey);
  unlockDocumentScroll();
});
</script>

<template>
  <div class="w-full" :class="className">
    <section class="component-guide">
      <div class="component-guide-head">
        <div>
          <p class="component-guide-eyebrow">{{ messages.componentGuide.eyebrow }} · {{ categoryGuide.label }}</p>
          <h2>
            {{ componentChineseTitle }} 是什么？
            <span class="component-guide-title-en">{{ componentEnglishTitle }}</span>
          </h2>
          <p class="component-guide-intro">
            {{ componentChineseTitle }}（{{ componentEnglishTitle }}）是一个{{ categoryGuide.label }}组件。{{
              categoryGuide.intro
            }}
          </p>
        </div>

        <div class="component-guide-source">
          <span>{{ messages.componentGuide.aiRebuild }}</span>
          <strong>{{ sourceLineCount }} 行参考源码</strong>
          <small>{{ dependencyList.length ? `${dependencyList.length} 个底层依赖` : '无外部依赖' }}</small>
        </div>
      </div>

      <div class="component-guide-grid">
        <article>
          <span>01</span>
          <h3>{{ messages.componentGuide.implementation }}</h3>
          <p>{{ implementationOverview }}</p>
        </article>
        <article>
          <span>02</span>
          <h3>{{ messages.componentGuide.interaction }}</h3>
          <p>{{ interactionOverview }}</p>
        </article>
        <article>
          <span>03</span>
          <h3>{{ messages.componentGuide.styling }}</h3>
          <p>{{ stylingOverview }}</p>
        </article>
        <article>
          <span>04</span>
          <h3>{{ messages.componentGuide.scenarios }}</h3>
          <p>{{ categoryGuide.scenarios }}</p>
        </article>
      </div>
    </section>

    <section class="component-demo-shell">
      <div class="component-demo-toolbar">
        <div class="component-demo-label">
          <span>
            <FiEye :size="15" />
            LIVE PREVIEW
          </span>
          <strong>实时预览与参数调节</strong>
        </div>

        <div class="component-demo-actions">
          <button v-if="onreset && hasChanges" type="button" class="demo-tool-button" @click="onreset">
            <RotateCcw :size="15" />
            重置参数
          </button>
          <button type="button" class="demo-tool-button" @click="openModal('code')">
            <FiCode :size="16" />
            完整源码
          </button>
          <button
            v-if="hasPrompt"
            type="button"
            class="demo-tool-button demo-tool-button-primary"
            @click="openModal('prompt')"
          >
            <Sparkles :size="16" />
            AI 提示词
          </button>
        </div>
      </div>

      <div class="component-preview-content">
        <slot name="preview" />
        <slot name="customize" />
        <slot name="propTable" />
        <Dependencies :dependency-list="dependencyList" />
      </div>
    </section>
  </div>

  <Teleport to="body">
    <Transition name="source-dialog">
      <div v-if="activeModal" class="source-dialog-backdrop" role="presentation" @click.self="closeModal">
        <section
          ref="modalRef"
          class="source-dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="
            activeModal === 'code' ? `${componentChineseTitle}完整源码` : `${componentChineseTitle}AI 提示词`
          "
          tabindex="-1"
        >
          <header class="source-dialog-header">
            <div class="source-dialog-title">
              <span>{{ activeModal === 'code' ? 'SOURCE CODE' : 'READY FOR AI' }}</span>
              <h2>
                {{
                  activeModal === 'code'
                    ? `${componentChineseTitle} · 完整源码`
                    : `从 0 到 1 复刻${componentChineseTitle}`
                }}
              </h2>
              <p v-if="activeModal === 'code'">使用示例会同步当前预览参数，组件实现保持完整并可直接复制使用。</p>
              <p v-else>
                先选择目标技术栈；提示词会把 Vue 参考源码转换为对应框架，并同步当前参数、交互、颜色与验收标准。
              </p>
            </div>

            <div class="source-dialog-actions">
              <button
                v-if="activeModal === 'prompt'"
                type="button"
                class="dialog-copy-button"
                @click="handleCopyPrompt"
              >
                <Check v-if="copied" :size="16" />
                <Clipboard v-else :size="16" />
                {{ copied ? '已复制完整提示词' : '复制完整提示词' }}
              </button>
              <button type="button" class="dialog-close-button" aria-label="关闭弹窗" @click="closeModal">
                <X :size="20" />
              </button>
            </div>
          </header>

          <div class="source-dialog-body" @wheel.capture="handleDialogWheel">
            <div v-if="activeModal === 'code'" class="source-dialog-code">
              <slot name="code" />
            </div>

            <div v-else class="prompt-panel">
              <section class="prompt-target-picker" aria-labelledby="prompt-target-title">
                <div class="prompt-target-copy">
                  <p id="prompt-target-title">目标技术栈</p>
                  <span>参考源码是 Vue，但 AI 最终输出不受 Vue 限制；选择后提示词和复制内容会立即更新。</span>
                </div>
                <div class="prompt-target-options" role="group" aria-label="选择 AI 输出的目标技术栈">
                  <button
                    v-for="target in PROMPT_TARGETS"
                    :key="target.id"
                    type="button"
                    class="prompt-target-button"
                    :class="{ active: selectedPromptTargetId === target.id }"
                    :aria-pressed="selectedPromptTargetId === target.id"
                    @click="selectPromptTarget(target.id)"
                  >
                    {{ target.label }}
                  </button>
                </div>
              </section>

              <div class="prompt-analysis-grid">
                <section>
                  <p class="prompt-analysis-label">目标栈与底层依赖</p>
                  <div class="prompt-meta">
                    <span class="prompt-target-meta">{{ selectedPromptTarget.label }}</span>
                    <span v-for="dependency in dependencyList" :key="dependency">{{ dependency }}</span>
                    <span v-if="dependencyList.length === 0">无外部依赖</span>
                  </div>
                </section>

                <section>
                  <p class="prompt-analysis-label">样式与动效实现</p>
                  <div class="prompt-meta">
                    <span v-for="technique in detectedTechniques" :key="technique">{{ technique }}</span>
                  </div>
                </section>

                <section>
                  <p class="prompt-analysis-label">源码颜色与 CSS 变量</p>
                  <div class="prompt-meta color-meta">
                    <span v-for="color in detectedColors" :key="color">
                      <i v-if="canRenderColorToken(color)" class="color-dot" :style="{ background: color }" />
                      {{ color }}
                    </span>
                    <span v-if="detectedColors.length === 0">跟随父级主题</span>
                  </div>
                </section>
              </div>

              <pre class="prompt-source">{{ generatedPrompt }}</pre>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.component-demo-shell {
  min-width: 0;
  overflow-anchor: none;
}

.component-demo-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.8rem 0.9rem;
  border: 1px solid var(--border-secondary);
  border-radius: 14px;
  background:
    radial-gradient(circle at 100% 0, rgba(94, 255, 76, 0.075), transparent 22rem), rgba(255, 255, 255, 0.018);
}

.component-demo-label {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.18rem;
}

.component-demo-label span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-accent);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.11em;
}

.component-demo-label strong {
  color: var(--text-primary);
  font-size: 0.88rem;
  font-weight: 650;
}

.component-demo-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.55rem;
}

.demo-tool-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.48rem;
  min-height: 40px;
  padding: 0.58rem 0.85rem;
  border: 1px solid var(--border-secondary);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--text-primary);
  font-size: 0.8rem;
  font-weight: 650;
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    color 0.18s ease,
    transform 0.18s ease;
}

.demo-tool-button:hover {
  border-color: rgba(94, 255, 76, 0.34);
  background: rgba(94, 255, 76, 0.075);
  color: var(--color-accent);
  transform: translateY(-1px);
}

.demo-tool-button-primary {
  border-color: rgba(94, 255, 76, 0.3);
  background: rgba(94, 255, 76, 0.11);
  color: var(--color-accent);
}

.component-preview-content {
  min-width: 0;
}

.source-dialog-backdrop {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: grid;
  place-items: center;
  padding: clamp(0.75rem, 2.5vw, 2rem);
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(14px);
}

.source-dialog {
  display: flex;
  width: min(1180px, 100%);
  height: min(900px, calc(100dvh - clamp(1.5rem, 5vw, 4rem)));
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(160, 255, 188, 0.2);
  border-radius: 20px;
  outline: none;
  background: radial-gradient(circle at 100% 0, rgba(94, 255, 76, 0.09), transparent 32rem), #0b0d0b;
  box-shadow:
    0 32px 100px rgba(0, 0, 0, 0.65),
    0 0 0 1px rgba(255, 255, 255, 0.025) inset;
}

.source-dialog:focus-visible {
  box-shadow:
    0 32px 100px rgba(0, 0, 0, 0.65),
    0 0 0 2px rgba(160, 255, 188, 0.24);
}

.source-dialog-header {
  display: flex;
  flex: 0 0 auto;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.15rem 1.25rem;
  border-bottom: 1px solid var(--border-secondary);
  background: rgba(5, 7, 5, 0.84);
}

.source-dialog-title {
  min-width: 0;
}

.source-dialog-title > span {
  color: var(--color-accent);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.64rem;
  font-weight: 750;
  letter-spacing: 0.13em;
}

.source-dialog-title h2 {
  margin: 0.25rem 0;
  color: var(--text-primary);
  font-size: clamp(1.1rem, 2vw, 1.42rem);
}

.source-dialog-title p {
  max-width: 50rem;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.82rem;
  line-height: 1.55;
}

.source-dialog-actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.55rem;
}

.dialog-copy-button,
.dialog-close-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(94, 255, 76, 0.25);
  border-radius: 10px;
  background: rgba(94, 255, 76, 0.09);
  color: var(--color-accent);
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    transform 0.18s ease;
}

.dialog-copy-button {
  gap: 0.5rem;
  min-height: 40px;
  padding: 0.6rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 650;
}

.dialog-close-button {
  width: 40px;
  height: 40px;
  border-color: var(--border-secondary);
  background: rgba(255, 255, 255, 0.025);
  color: var(--text-muted);
}

.dialog-copy-button:hover,
.dialog-close-button:hover {
  border-color: rgba(94, 255, 76, 0.45);
  background: rgba(94, 255, 76, 0.14);
  color: var(--color-accent);
  transform: translateY(-1px);
}

.source-dialog-body {
  min-height: 0;
  flex: 1 1 auto;
  padding: clamp(1rem, 2vw, 1.5rem);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

.source-dialog-code {
  min-width: 0;
}

.source-dialog-code :deep(.source-note) {
  margin-top: 0;
}

.source-dialog-enter-active,
.source-dialog-leave-active {
  transition: opacity 0.2s ease;
}

.source-dialog-enter-active .source-dialog,
.source-dialog-leave-active .source-dialog {
  transition:
    transform 0.22s ease,
    opacity 0.18s ease;
}

.source-dialog-enter-from,
.source-dialog-leave-to {
  opacity: 0;
}

.source-dialog-enter-from .source-dialog,
.source-dialog-leave-to .source-dialog {
  opacity: 0;
  transform: translateY(12px) scale(0.985);
}

.component-guide {
  overflow: hidden;
  margin: 0 0 2rem;
  border: 1px solid var(--border-secondary);
  border-radius: 16px;
  background: radial-gradient(circle at 0 0, rgba(94, 255, 76, 0.08), transparent 28rem), rgba(255, 255, 255, 0.018);
}

.component-guide-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem;
}

.component-guide-eyebrow {
  margin: 0 0 0.55rem;
  color: var(--color-accent);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.component-guide h2 {
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(1.2rem, 2vw, 1.6rem);
}

.component-guide-title-en {
  margin-left: 0.5rem;
  color: var(--text-muted);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.68em;
  font-weight: 500;
  letter-spacing: 0;
}

.component-guide-intro {
  max-width: 51rem;
  margin: 0.65rem 0 0;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.7;
}

.component-guide-source {
  flex: 0 0 auto;
  display: flex;
  min-width: 9.5rem;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(94, 255, 76, 0.16);
  border-radius: 11px;
  background: rgba(94, 255, 76, 0.05);
}

.component-guide-source span {
  color: var(--color-accent);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.component-guide-source strong {
  color: var(--text-primary);
  font-size: 0.86rem;
}

.component-guide-source small {
  color: var(--text-muted);
  font-size: 0.72rem;
}

.component-guide-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--border-secondary);
}

.component-guide-grid article {
  min-width: 0;
  padding: 1.15rem 1.25rem 1.3rem;
  border-right: 1px solid var(--border-secondary);
}

.component-guide-grid article:last-child {
  border-right: 0;
}

.component-guide-grid article > span {
  color: var(--color-accent);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.65rem;
  font-weight: 700;
}

.component-guide-grid h3 {
  margin: 0.45rem 0;
  color: var(--text-primary);
  font-size: 0.82rem;
}

.component-guide-grid p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.78rem;
  line-height: 1.62;
}

.prompt-panel {
  overflow: hidden;
  border: 1px solid var(--border-secondary);
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 100% 0, rgba(94, 255, 76, 0.08), transparent 30rem), var(--bg-elevated);
}

.prompt-target-picker {
  display: grid;
  grid-template-columns: minmax(12rem, 0.72fr) minmax(0, 1.28fr);
  gap: 1.25rem;
  align-items: center;
  padding: 1.1rem 1.5rem;
  border-bottom: 1px solid var(--border-secondary);
  background: rgba(94, 255, 76, 0.025);
}

.prompt-target-copy p {
  margin: 0;
  color: var(--text-primary);
  font-size: 0.82rem;
  font-weight: 700;
}

.prompt-target-copy span {
  display: block;
  margin-top: 0.35rem;
  color: var(--text-muted);
  font-size: 0.72rem;
  line-height: 1.55;
}

.prompt-target-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.45rem;
}

.prompt-target-button {
  min-height: 34px;
  padding: 0.42rem 0.72rem;
  border: 1px solid var(--border-secondary);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--text-secondary);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.72rem;
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    color 0.18s ease,
    transform 0.18s ease;
}

.prompt-target-button:hover {
  border-color: rgba(94, 255, 76, 0.32);
  color: var(--text-primary);
  transform: translateY(-1px);
}

.prompt-target-button.active {
  border-color: rgba(94, 255, 76, 0.48);
  background: rgba(94, 255, 76, 0.12);
  color: var(--color-accent);
  box-shadow: inset 0 0 0 1px rgba(94, 255, 76, 0.06);
}

.prompt-analysis-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--border-secondary);
  border-bottom: 1px solid var(--border-secondary);
}

.prompt-analysis-grid section {
  min-width: 0;
  padding: 1rem 1.5rem;
  background: rgba(11, 11, 11, 0.72);
}

.prompt-analysis-label {
  margin: 0 0 0.75rem;
  color: var(--text-primary);
  font-size: 0.78rem;
  font-weight: 650;
}

.prompt-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.prompt-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid rgba(94, 255, 76, 0.16);
  border-radius: 7px;
  background: rgba(94, 255, 76, 0.05);
  color: var(--color-accent-muted);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.75rem;
}

.prompt-meta .prompt-target-meta {
  border-color: rgba(94, 255, 76, 0.4);
  background: rgba(94, 255, 76, 0.12);
  color: var(--color-accent);
}

.color-dot {
  width: 0.65rem;
  height: 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}

.prompt-source {
  margin: 0;
  padding: 1.5rem;
  overflow: visible;
  touch-action: pan-y;
  color: #d8e6da;
  background: rgba(0, 0, 0, 0.2);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  line-height: 1.65;
  white-space: pre-wrap;
  word-break: break-word;
}

@media (max-width: 760px) {
  .component-guide-head {
    flex-direction: column;
  }

  .component-guide-source {
    width: 100%;
  }

  .component-guide-grid {
    grid-template-columns: 1fr 1fr;
  }

  .component-guide-grid article:nth-child(2) {
    border-right: 0;
  }

  .component-guide-grid article:nth-child(-n + 2) {
    border-bottom: 1px solid var(--border-secondary);
  }

  .component-demo-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .component-demo-actions {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.2rem;
  }

  .component-demo-actions button {
    flex: 0 0 auto;
  }

  .source-dialog-backdrop {
    padding: 0;
  }

  .source-dialog {
    width: 100%;
    height: 100dvh;
    border: 0;
    border-radius: 0;
  }

  .source-dialog-header {
    gap: 0.75rem;
    padding: 0.9rem;
  }

  .source-dialog-title p {
    display: none;
  }

  .source-dialog-actions {
    gap: 0.4rem;
  }

  .dialog-copy-button {
    padding-inline: 0.7rem;
  }

  .source-dialog-body {
    padding: 0.85rem;
  }

  .prompt-analysis-grid {
    grid-template-columns: 1fr;
  }

  .prompt-target-picker {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .prompt-target-options {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .component-guide-grid {
    grid-template-columns: 1fr;
  }

  .component-guide-grid article,
  .component-guide-grid article:nth-child(2) {
    border-right: 0;
    border-bottom: 1px solid var(--border-secondary);
  }

  .component-guide-grid article:last-child {
    border-bottom: 0;
  }
}
</style>
