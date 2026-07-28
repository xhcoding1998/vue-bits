/* 此文件由 scripts/generate-catalog.mjs 根据官方 Vue Bits 源码生成。 */
import type { ComponentEntry } from "../types";

export const components = [
  {
    "id": "TextAnimations/ascii-text",
    "slug": "ascii-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "ASCIIText",
    "nameCn": "字符画文字",
    "video": "/previews/asciitext.webm",
    "description": "Renders text with an animated ASCII background for a retro feel.",
    "descriptionCn": "把文字拆分后呈现「字符画文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/ascii-text",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "text",
        "type": "string",
        "defaultValue": "'David!'"
      },
      {
        "name": "asciiFontSize",
        "type": "number",
        "defaultValue": "8"
      },
      {
        "name": "textFontSize",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "textColor",
        "type": "string",
        "defaultValue": "'#fdf9f3'"
      },
      {
        "name": "planeBaseHeight",
        "type": "number",
        "defaultValue": "8"
      },
      {
        "name": "enableWaves",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "通过多层渐变塑造高光、色带或背景纹理。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "较高",
    "sourceLines": 626,
    "usage": "<script setup lang=\"ts\">\nimport ASCIIText from '@/components/ASCIIText.vue'\n</script>\n\n<template>\n  <ASCIIText text=\"示例内容\" :ascii-font-size=\"1\" :text-font-size=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/ascii-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「字符画文字（ASCIIText）」组件。目标效果：把文字拆分后呈现「字符画文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、asciiFontSize、textFontSize、textColor、planeBaseHeight、enableWaves；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/blur-text",
    "slug": "blur-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "BlurText",
    "nameCn": "模糊文字",
    "video": "/previews/blurtext.webm",
    "description": "Text starts blurred then crisply resolves for a soft-focus reveal effect.",
    "descriptionCn": "把文字拆分后呈现「模糊文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/blur-text",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "text",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "delay",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "animateBy",
        "type": "'words' | 'letters'",
        "defaultValue": "'words'"
      },
      {
        "name": "direction",
        "type": "'top' | 'bottom'",
        "defaultValue": "'top'"
      },
      {
        "name": "threshold",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "rootMargin",
        "type": "string",
        "defaultValue": "'0px'"
      },
      {
        "name": "animationFrom",
        "type": "Record<string, string | number>"
      },
      {
        "name": "animationTo",
        "type": "Array<Record<string, string | number>>"
      },
      {
        "name": "easing",
        "type": "(t: number) => number",
        "defaultValue": "(t: number) => t"
      },
      {
        "name": "onAnimationComplete",
        "type": "() => void"
      },
      {
        "name": "stepDuration",
        "type": "number",
        "defaultValue": "0.35"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 142,
    "usage": "<script setup lang=\"ts\">\nimport BlurText from '@/components/BlurText.vue'\n</script>\n\n<template>\n  <BlurText text=\"示例内容\" :delay=\"1\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/blur-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「模糊文字（BlurText）」组件。目标效果：把文字拆分后呈现「模糊文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、delay、className、animateBy、direction、threshold、rootMargin、animationFrom、animationTo、easing；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/circular-text",
    "slug": "circular-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "CircularText",
    "nameCn": "环形文字",
    "video": "/previews/circulartext.webm",
    "description": "Layouts characters around a circle with optional rotation animation.",
    "descriptionCn": "把文字拆分后呈现「环形文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/circular-text",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "text",
        "type": "string"
      },
      {
        "name": "spinDuration",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "onHover",
        "type": "'slowDown' | 'speedUp' | 'pause' | 'goBonkers'",
        "defaultValue": "'speedUp'"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 106,
    "usage": "<script setup lang=\"ts\">\nimport CircularText from '@/components/CircularText.vue'\n</script>\n\n<template>\n  <CircularText text=\"示例内容\" :spin-duration=\"1\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/circular-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「环形文字（CircularText）」组件。目标效果：把文字拆分后呈现「环形文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、spinDuration、onHover、className；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/count-up",
    "slug": "count-up",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "CountUp",
    "nameCn": "数字递增",
    "video": "/previews/countup.webm",
    "description": "Animated number counter supporting formatting and decimals.",
    "descriptionCn": "把文字拆分后呈现「数字递增」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/count-up",
    "dependencies": [],
    "props": [
      {
        "name": "to",
        "type": "number"
      },
      {
        "name": "from",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "direction",
        "type": "'up' | 'down'",
        "defaultValue": "'up'"
      },
      {
        "name": "delay",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "startWhen",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "separator",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "onStart",
        "type": "() => void"
      },
      {
        "name": "onEnd",
        "type": "() => void"
      }
    ],
    "implementation": [
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 167,
    "usage": "<script setup lang=\"ts\">\nimport CountUp from '@/components/CountUp.vue'\n</script>\n\n<template>\n  <CountUp :to=\"1\" :from=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/count-up.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「数字递增（CountUp）」组件。目标效果：把文字拆分后呈现「数字递增」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 to、from、direction、delay、duration、className、startWhen、separator、onStart、onEnd；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/curved-loop",
    "slug": "curved-loop",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "CurvedLoop",
    "nameCn": "曲线循环文字",
    "video": "/previews/curvedloop.webm",
    "description": "Flowing looping text path along a customizable curve with drag interaction.",
    "descriptionCn": "把文字拆分后呈现「曲线循环文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/curved-loop",
    "dependencies": [],
    "props": [
      {
        "name": "marqueeText",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "curveAmount",
        "type": "number",
        "defaultValue": "400"
      },
      {
        "name": "direction",
        "type": "'left' | 'right'",
        "defaultValue": "'left'"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 180,
    "usage": "<script setup lang=\"ts\">\nimport CurvedLoop from '@/components/CurvedLoop.vue'\n</script>\n\n<template>\n  <CurvedLoop marquee-text=\"示例内容\" :speed=\"1\" :curve-amount=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/curved-loop.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「曲线循环文字（CurvedLoop）」组件。目标效果：把文字拆分后呈现「曲线循环文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 marqueeText、speed、className、curveAmount、direction、interactive；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/decrypted-text",
    "slug": "decrypted-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "DecryptedText",
    "nameCn": "解密文字",
    "video": "/previews/decryptedtext.webm",
    "description": "Hacker-style decryption cycling random glyphs until resolving to real text.",
    "descriptionCn": "把文字拆分后呈现「解密文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/decrypted-text",
    "dependencies": [],
    "props": [
      {
        "name": "text",
        "type": "string"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "maxIterations",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "sequential",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "revealDirection",
        "type": "RevealDirection",
        "defaultValue": "'start'"
      },
      {
        "name": "useOriginalCharsOnly",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "characters",
        "type": "string",
        "defaultValue": "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "encryptedClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "parentClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "animateOn",
        "type": "AnimateOn",
        "defaultValue": "'hover'"
      },
      {
        "name": "clickMode",
        "type": "ClickMode",
        "defaultValue": "'once'"
      }
    ],
    "implementation": [
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "轻量",
    "sourceLines": 361,
    "usage": "<script setup lang=\"ts\">\nimport DecryptedText from '@/components/DecryptedText.vue'\n</script>\n\n<template>\n  <DecryptedText text=\"示例内容\" :speed=\"1\" :max-iterations=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/decrypted-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「解密文字（DecryptedText）」组件。目标效果：把文字拆分后呈现「解密文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、speed、maxIterations、sequential、revealDirection、useOriginalCharsOnly、characters、className、encryptedClassName、parentClassName；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/falling-text",
    "slug": "falling-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "FallingText",
    "nameCn": "重力下落文字",
    "video": "/previews/fallingtext.webm",
    "description": "Characters fall with gravity + bounce creating a playful entrance.",
    "descriptionCn": "把文字拆分后呈现「重力下落文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/falling-text",
    "dependencies": [
      "matter-js"
    ],
    "props": [
      {
        "name": "text",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "highlightWords",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "trigger",
        "type": "'auto' | 'scroll' | 'click' | 'hover'",
        "defaultValue": "'auto'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "defaultValue": "'transparent'"
      },
      {
        "name": "wireframes",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "gravity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "mouseConstraintStiffness",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "fontSize",
        "type": "string",
        "defaultValue": "'1rem'"
      }
    ],
    "implementation": [
      "使用 Matter.js 建立重力、碰撞和回弹等二维物理行为。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 281,
    "usage": "<script setup lang=\"ts\">\nimport FallingText from '@/components/FallingText.vue'\n</script>\n\n<template>\n  <FallingText text=\"示例内容\" highlight-words=\"示例内容\" />\n</template>\n# 依赖\nnpm i matter-js\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/falling-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「重力下落文字（FallingText）」组件。目标效果：把文字拆分后呈现「重力下落文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、highlightWords、trigger、backgroundColor、wireframes、gravity、mouseConstraintStiffness、fontSize；实现可使用 matter-js；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/fuzzy-text",
    "slug": "fuzzy-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "FuzzyText",
    "nameCn": "噪点文字",
    "video": "/previews/fuzzytext.webm",
    "description": "Vibrating fuzzy text with controllable hover intensity.",
    "descriptionCn": "把文字拆分后呈现「噪点文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/fuzzy-text",
    "dependencies": [],
    "props": [
      {
        "name": "fontSize",
        "type": "number | string",
        "defaultValue": "'clamp(2rem"
      },
      {
        "name": "fontWeight",
        "type": "string | number",
        "defaultValue": "900"
      },
      {
        "name": "fontFamily",
        "type": "string",
        "defaultValue": "'inherit'"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "enableHover",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "baseIntensity",
        "type": "number",
        "defaultValue": "0.18"
      },
      {
        "name": "hoverIntensity",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "fuzzRange",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "fps",
        "type": "number",
        "defaultValue": "60"
      },
      {
        "name": "direction",
        "type": "'horizontal' | 'vertical' | 'both'",
        "defaultValue": "'horizontal'"
      },
      {
        "name": "transitionDuration",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "clickEffect",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "glitchMode",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "glitchInterval",
        "type": "number",
        "defaultValue": "2000"
      },
      {
        "name": "glitchDuration",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "gradient",
        "type": "string[] | null",
        "defaultValue": "null"
      },
      {
        "name": "letterSpacing",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 351,
    "usage": "<script setup lang=\"ts\">\nimport FuzzyText from '@/components/FuzzyText.vue'\n</script>\n\n<template>\n  <FuzzyText :font-size=\"1\" :font-weight=\"1\" font-family=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/fuzzy-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「噪点文字（FuzzyText）」组件。目标效果：把文字拆分后呈现「噪点文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 fontSize、fontWeight、fontFamily、color、enableHover、baseIntensity、hoverIntensity、fuzzRange、fps、direction；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/glitch-text",
    "slug": "glitch-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "GlitchText",
    "nameCn": "故障文字",
    "video": "/previews/glitchtext.webm",
    "description": "RGB split and distortion glitch effect with jitter effects.",
    "descriptionCn": "把文字拆分后呈现「故障文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/glitch-text",
    "dependencies": [],
    "props": [
      {
        "name": "children",
        "type": "string"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "enableShadows",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "enableOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。",
      "包含 CSS keyframes，可在 reduced-motion 模式下降级为静态状态。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "轻量",
    "sourceLines": 184,
    "usage": "<script setup lang=\"ts\">\nimport GlitchText from '@/components/GlitchText.vue'\n</script>\n\n<template>\n  <GlitchText children=\"示例内容\" :speed=\"1\" :enable-shadows=\"true\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/glitch-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「故障文字（GlitchText）」组件。目标效果：把文字拆分后呈现「故障文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 children、speed、enableShadows、enableOnHover、className；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/gradient-text",
    "slug": "gradient-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "GradientText",
    "nameCn": "渐变文字",
    "video": "/previews/gradienttext.webm",
    "description": "Animated gradient sweep across live text with speed and color control.",
    "descriptionCn": "把文字拆分后呈现「渐变文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/gradient-text",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#27FF64'"
      },
      {
        "name": "animationSpeed",
        "type": "number",
        "defaultValue": "8"
      },
      {
        "name": "showBorder",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "direction",
        "type": "'horizontal' | 'vertical' | 'diagonal'",
        "defaultValue": "'horizontal'"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "yoyo",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 141,
    "usage": "<script setup lang=\"ts\">\nimport GradientText from '@/components/GradientText.vue'\n</script>\n\n<template>\n  <GradientText colors=\"示例内容\" :animation-speed=\"1\" :show-border=\"true\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/gradient-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「渐变文字（GradientText）」组件。目标效果：把文字拆分后呈现「渐变文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、colors、animationSpeed、showBorder、direction、pauseOnHover、yoyo；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/rotating-text",
    "slug": "rotating-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "RotatingText",
    "nameCn": "轮换文字",
    "video": "/previews/rotatingtext.webm",
    "description": "Cycles through multiple phrases with 3D rotate / flip transitions.",
    "descriptionCn": "把文字拆分后呈现「轮换文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/rotating-text",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "texts",
        "type": "string[]"
      },
      {
        "name": "transition",
        "type": "TransitionType",
        "defaultValue": "() =>"
      },
      {
        "name": "initial",
        "type": "InitialType",
        "defaultValue": "() => ({ y: '100%'"
      },
      {
        "name": "animate",
        "type": "AnimateType",
        "defaultValue": "() => ({ y: 0"
      },
      {
        "name": "exit",
        "type": "ExitType",
        "defaultValue": "() => ({ y: '-120%'"
      },
      {
        "name": "animatePresenceMode",
        "type": "'sync' | 'wait'",
        "defaultValue": "'wait'"
      },
      {
        "name": "animatePresenceInitial",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "rotationInterval",
        "type": "number",
        "defaultValue": "2000"
      },
      {
        "name": "staggerDuration",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "staggerFrom",
        "type": "StaggerFrom",
        "defaultValue": "'first'"
      },
      {
        "name": "loop",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "auto",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "splitBy",
        "type": "SplitBy",
        "defaultValue": "'characters'"
      },
      {
        "name": "onNext",
        "type": "(index: number) => void"
      },
      {
        "name": "mainClassName",
        "type": "string"
      },
      {
        "name": "splitLevelClassName",
        "type": "string"
      },
      {
        "name": "elementLevelClassName",
        "type": "string"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 260,
    "usage": "<script setup lang=\"ts\">\nimport RotatingText from '@/components/RotatingText.vue'\n</script>\n\n<template>\n  <RotatingText texts=\"示例内容\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/rotating-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「轮换文字（RotatingText）」组件。目标效果：把文字拆分后呈现「轮换文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 texts、transition、initial、animate、exit、animatePresenceMode、animatePresenceInitial、rotationInterval、staggerDuration、staggerFrom；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/scramble-text",
    "slug": "scramble-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "ScrambleText",
    "nameCn": "扰乱文字",
    "video": "/previews/scrambledtext.webm",
    "description": "Detects cursor position and applies a distortion effect to text.",
    "descriptionCn": "把文字拆分后呈现「扰乱文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/text-animations/scramble-text",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "radius",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "1.2"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "scrambleChars",
        "type": "string",
        "defaultValue": "'.:'"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 115,
    "usage": "<script setup lang=\"ts\">\nimport ScrambleText from '@/components/ScrambleText.vue'\n</script>\n\n<template>\n  <ScrambleText :radius=\"1\" :duration=\"1\" :speed=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/scramble-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「扰乱文字（ScrambleText）」组件。目标效果：把文字拆分后呈现「扰乱文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 radius、duration、speed、scrambleChars、className、style；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/scroll-float",
    "slug": "scroll-float",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "ScrollFloat",
    "nameCn": "滚动漂浮文字",
    "video": "/previews/scrollfloat.webm",
    "description": "Text gently floats / parallax shifts on scroll.",
    "descriptionCn": "把文字拆分后呈现「滚动漂浮文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/scroll-float",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "scrollContainerRef",
        "type": "Ref<HTMLElement | null> | HTMLElement | null",
        "defaultValue": "null"
      },
      {
        "name": "containerClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "textClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "animationDuration",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "ease",
        "type": "string",
        "defaultValue": "'back.inOut(2)'"
      },
      {
        "name": "scrollStart",
        "type": "string",
        "defaultValue": "'center bottom+=50%'"
      },
      {
        "name": "scrollEnd",
        "type": "string",
        "defaultValue": "'bottom bottom-=40%'"
      },
      {
        "name": "stagger",
        "type": "number",
        "defaultValue": "0.03"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 154,
    "usage": "<script setup lang=\"ts\">\nimport ScrollFloat from '@/components/ScrollFloat.vue'\n</script>\n\n<template>\n  <ScrollFloat container-class-name=\"示例内容\" text-class-name=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/scroll-float.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「滚动漂浮文字（ScrollFloat）」组件。目标效果：把文字拆分后呈现「滚动漂浮文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 scrollContainerRef、containerClassName、textClassName、animationDuration、ease、scrollStart、scrollEnd、stagger；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/scroll-reveal",
    "slug": "scroll-reveal",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "ScrollReveal",
    "nameCn": "滚动揭示文字",
    "video": "/previews/scrollreveal.webm",
    "description": "Text gently unblurs and reveals on scroll.",
    "descriptionCn": "把文字拆分后呈现「滚动揭示文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/scroll-reveal",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "scrollContainerRef",
        "type": "Ref<HTMLElement | null> | HTMLElement | null",
        "defaultValue": "null"
      },
      {
        "name": "enableBlur",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "baseOpacity",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "baseRotation",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "blurStrength",
        "type": "number",
        "defaultValue": "4"
      },
      {
        "name": "containerClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "textClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "rotationEnd",
        "type": "string",
        "defaultValue": "'bottom bottom'"
      },
      {
        "name": "wordAnimationEnd",
        "type": "string",
        "defaultValue": "'bottom bottom'"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 151,
    "usage": "<script setup lang=\"ts\">\nimport ScrollReveal from '@/components/ScrollReveal.vue'\n</script>\n\n<template>\n  <ScrollReveal :enable-blur=\"true\" :base-opacity=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/scroll-reveal.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「滚动揭示文字（ScrollReveal）」组件。目标效果：把文字拆分后呈现「滚动揭示文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 scrollContainerRef、enableBlur、baseOpacity、baseRotation、blurStrength、containerClassName、textClassName、rotationEnd、wordAnimationEnd；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/scroll-velocity",
    "slug": "scroll-velocity",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "ScrollVelocity",
    "nameCn": "滚动速度文字",
    "video": "/previews/scrollvelocity.webm",
    "description": "Text marquee animatio - speed and distortion scale with user's scroll velocity.",
    "descriptionCn": "把文字拆分后呈现「滚动速度文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/scroll-velocity",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "scrollContainerRef",
        "type": "HTMLElement | null"
      },
      {
        "name": "texts",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "velocity",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "damping",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "stiffness",
        "type": "number",
        "defaultValue": "400"
      },
      {
        "name": "velocityMapping",
        "type": "VelocityMapping",
        "defaultValue": "() => ({ input: [0"
      },
      {
        "name": "parallaxClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "scrollerClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "parallaxStyle",
        "type": "Record<string, string | number>",
        "defaultValue": "() => ({})"
      },
      {
        "name": "scrollerStyle",
        "type": "Record<string, string | number>",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 237,
    "usage": "<script setup lang=\"ts\">\nimport ScrollVelocity from '@/components/ScrollVelocity.vue'\n</script>\n\n<template>\n  <ScrollVelocity texts=\"示例内容\" :velocity=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/scroll-velocity.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「滚动速度文字（ScrollVelocity）」组件。目标效果：把文字拆分后呈现「滚动速度文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 scrollContainerRef、texts、velocity、className、damping、stiffness、velocityMapping、parallaxClassName、scrollerClassName、parallaxStyle；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/shiny-text",
    "slug": "shiny-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "ShinyText",
    "nameCn": "流光文字",
    "video": "/previews/shinytext.webm",
    "description": "Metallic sheen sweeps across text producing a reflective highlight.",
    "descriptionCn": "把文字拆分后呈现「流光文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/shiny-text",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "text",
        "type": "string"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#b5b5b5'"
      },
      {
        "name": "shineColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "spread",
        "type": "number",
        "defaultValue": "120"
      },
      {
        "name": "yoyo",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "direction",
        "type": "'left' | 'right'",
        "defaultValue": "'left'"
      },
      {
        "name": "delay",
        "type": "number",
        "defaultValue": "0"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 136,
    "usage": "<script setup lang=\"ts\">\nimport ShinyText from '@/components/ShinyText.vue'\n</script>\n\n<template>\n  <ShinyText text=\"示例内容\" :disabled=\"true\" :speed=\"1\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/shiny-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「流光文字（ShinyText）」组件。目标效果：把文字拆分后呈现「流光文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、disabled、speed、className、color、shineColor、spread、yoyo、pauseOnHover、direction；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/shuffle",
    "slug": "shuffle",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "Shuffle",
    "nameCn": "洗牌",
    "video": "/previews/shuffle.webm",
    "description": "Animated text reveal where characters shuffle before settling.",
    "descriptionCn": "把文字拆分后呈现「洗牌」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/shuffle",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "text",
        "type": "string"
      },
      {
        "name": "class",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      },
      {
        "name": "shuffleDirection",
        "type": "ShuffleDirection",
        "defaultValue": "'right'"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "0.35"
      },
      {
        "name": "maxDelay",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "ease",
        "type": "string | EaseFn",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "threshold",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "rootMargin",
        "type": "string",
        "defaultValue": "'-100px'"
      },
      {
        "name": "tag",
        "type": "TagName",
        "defaultValue": "'p'"
      },
      {
        "name": "textAlign",
        "type": "CSSProperties['textAlign']",
        "defaultValue": "'center'"
      },
      {
        "name": "onShuffleComplete",
        "type": "() => void",
        "defaultValue": "undefined"
      },
      {
        "name": "shuffleTimes",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "animationMode",
        "type": "AnimationMode",
        "defaultValue": "'evenodd'"
      },
      {
        "name": "loop",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "loopDelay",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "stagger",
        "type": "number",
        "defaultValue": "0.03"
      },
      {
        "name": "scrambleCharset",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "colorFrom",
        "type": "string",
        "defaultValue": "undefined"
      },
      {
        "name": "colorTo",
        "type": "string",
        "defaultValue": "undefined"
      },
      {
        "name": "triggerOnce",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "respectReducedMotion",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "triggerOnHover",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 497,
    "usage": "<script setup lang=\"ts\">\nimport Shuffle from '@/components/Shuffle.vue'\n</script>\n\n<template>\n  <Shuffle text=\"示例内容\" class=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/shuffle.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「洗牌（Shuffle）」组件。目标效果：把文字拆分后呈现「洗牌」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、class、style、shuffleDirection、duration、maxDelay、ease、threshold、rootMargin、tag；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/split-text",
    "slug": "split-text",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "SplitText",
    "nameCn": "拆分文字",
    "video": "/previews/splittext.webm",
    "description": "Splits text into characters / words for staggered entrance animation.",
    "descriptionCn": "把文字拆分后呈现「拆分文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/split-text",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "text",
        "type": "string"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "delay",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "1.25"
      },
      {
        "name": "ease",
        "type": "string | EaseFn",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "splitType",
        "type": "SplitType",
        "defaultValue": "'chars'"
      },
      {
        "name": "from",
        "type": "gsap.TweenVars",
        "defaultValue": "() => ({ opacity: 0"
      },
      {
        "name": "to",
        "type": "gsap.TweenVars",
        "defaultValue": "() => ({ opacity: 1"
      },
      {
        "name": "threshold",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "rootMargin",
        "type": "string",
        "defaultValue": "'-100px'"
      },
      {
        "name": "tag",
        "type": "TagName",
        "defaultValue": "'p'"
      },
      {
        "name": "textAlign",
        "type": "CSSProperties['textAlign']",
        "defaultValue": "'center'"
      },
      {
        "name": "onLetterAnimationComplete",
        "type": "() => void",
        "defaultValue": "undefined"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 198,
    "usage": "<script setup lang=\"ts\">\nimport SplitText from '@/components/SplitText.vue'\n</script>\n\n<template>\n  <SplitText text=\"示例内容\" :delay=\"1\" :duration=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/split-text.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「拆分文字（SplitText）」组件。目标效果：把文字拆分后呈现「拆分文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、className、delay、duration、ease、splitType、from、to、threshold、rootMargin；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/text-cursor",
    "slug": "text-cursor",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "TextCursor",
    "nameCn": "文字光标",
    "video": "/previews/textcursor.webm",
    "description": "Make any text element follow your cursor, leaving a trail of copies behind it.",
    "descriptionCn": "把文字拆分后呈现「文字光标」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/text-animations/text-cursor",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "text",
        "type": "string",
        "defaultValue": "'⚛️'"
      },
      {
        "name": "spacing",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "followMouseDirection",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "randomFloat",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "exitDuration",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "removalInterval",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "maxPoints",
        "type": "number",
        "defaultValue": "5"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "动画优先作用于 transform，减少布局抖动并利于 GPU 合成。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "中等",
    "sourceLines": 178,
    "usage": "<script setup lang=\"ts\">\nimport TextCursor from '@/components/TextCursor.vue'\n</script>\n\n<template>\n  <TextCursor text=\"示例内容\" :spacing=\"1\" :follow-mouse-direction=\"true\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/text-cursor.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「文字光标（TextCursor）」组件。目标效果：把文字拆分后呈现「文字光标」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、spacing、followMouseDirection、randomFloat、exitDuration、removalInterval、maxPoints；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/text-pressure",
    "slug": "text-pressure",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "TextPressure",
    "nameCn": "压力文字",
    "video": "/previews/textpressure.webm",
    "description": "Characters scale / warp interactively based on pointer pressure zone.",
    "descriptionCn": "把文字拆分后呈现「压力文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/text-animations/text-pressure",
    "dependencies": [],
    "props": [
      {
        "name": "text",
        "type": "string",
        "defaultValue": "'Compressa'"
      },
      {
        "name": "fontFamily",
        "type": "string",
        "defaultValue": "'Compressa VF'"
      },
      {
        "name": "fontUrl",
        "type": "string",
        "defaultValue": "'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.wof"
      },
      {
        "name": "width",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "weight",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "italic",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "alpha",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "flex",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "stroke",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "scale",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "textColor",
        "type": "string",
        "defaultValue": "'#FFFFFF'"
      },
      {
        "name": "strokeColor",
        "type": "string",
        "defaultValue": "'#00FF00'"
      },
      {
        "name": "strokeWidth",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "minFontSize",
        "type": "number",
        "defaultValue": "24"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 244,
    "usage": "<script setup lang=\"ts\">\nimport TextPressure from '@/components/TextPressure.vue'\n</script>\n\n<template>\n  <TextPressure text=\"示例内容\" font-family=\"示例内容\" font-url=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/text-pressure.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「压力文字（TextPressure）」组件。目标效果：把文字拆分后呈现「压力文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 text、fontFamily、fontUrl、width、weight、italic、alpha、flex、stroke、scale；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/text-type",
    "slug": "text-type",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "TextType",
    "nameCn": "打字机文字",
    "video": "/previews/texttype.webm",
    "description": "Typewriter effect with blinking cursor and adjustable typing cadence.",
    "descriptionCn": "把文字拆分后呈现「打字机文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/text-animations/text-type",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "showCursor",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "hideCursorWhileTyping",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "cursorCharacter",
        "type": "string",
        "defaultValue": "'|'"
      },
      {
        "name": "cursorBlinkDuration",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "cursorClassName",
        "type": "string"
      },
      {
        "name": "text",
        "type": "string | string[]"
      },
      {
        "name": "as",
        "type": "string",
        "defaultValue": "'div'"
      },
      {
        "name": "typingSpeed",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "initialDelay",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "pauseDuration",
        "type": "number",
        "defaultValue": "2000"
      },
      {
        "name": "deletingSpeed",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "loop",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "textColors",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "variableSpeed",
        "type": "{ min: number"
      },
      {
        "name": "onSentenceComplete",
        "type": "(sentence: string, index: number) => void"
      },
      {
        "name": "startOnVisible",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "reverseMode",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 177,
    "usage": "<script setup lang=\"ts\">\nimport TextType from '@/components/TextType.vue'\n</script>\n\n<template>\n  <TextType :show-cursor=\"true\" :hide-cursor-while-typing=\"true\" cursor-character=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/text-type.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「打字机文字（TextType）」组件。目标效果：把文字拆分后呈现「打字机文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、showCursor、hideCursorWhileTyping、cursorCharacter、cursorBlinkDuration、cursorClassName、text、as、typingSpeed、initialDelay；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/true-focus",
    "slug": "true-focus",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "TrueFocus",
    "nameCn": "真焦点",
    "video": "/previews/truefocus.webm",
    "description": "Applies dynamic blur / clarity based over a series of words in order.",
    "descriptionCn": "把文字拆分后呈现「真焦点」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    "docsUrl": "https://vue-bits.dev/text-animations/true-focus",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "sentence",
        "type": "string",
        "defaultValue": "'True Focus'"
      },
      {
        "name": "separator",
        "type": "string",
        "defaultValue": "' '"
      },
      {
        "name": "manualMode",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "blurAmount",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "borderColor",
        "type": "string",
        "defaultValue": "'green'"
      },
      {
        "name": "glowColor",
        "type": "string",
        "defaultValue": "'rgba(0"
      },
      {
        "name": "animationDuration",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "pauseBetweenAnimations",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "index",
        "type": "Array<number>"
      },
      {
        "name": "syncGroup",
        "type": "string"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 218,
    "usage": "<script setup lang=\"ts\">\nimport TrueFocus from '@/components/TrueFocus.vue'\n</script>\n\n<template>\n  <TrueFocus sentence=\"示例内容\" separator=\"示例内容\" :manual-mode=\"true\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/true-focus.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「真焦点（TrueFocus）」组件。目标效果：把文字拆分后呈现「真焦点」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 sentence、separator、manualMode、blurAmount、borderColor、glowColor、animationDuration、pauseBetweenAnimations、index、syncGroup；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "TextAnimations/variable-proximity",
    "slug": "variable-proximity",
    "category": "TextAnimations",
    "categoryCn": "文字动画",
    "name": "VariableProximity",
    "nameCn": "邻近可变文字",
    "video": "/previews/variableproximity.webm",
    "description": "Letter styling changes continuously with pointer distance mapping.",
    "descriptionCn": "把文字拆分后呈现「邻近可变文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/text-animations/variable-proximity",
    "dependencies": [],
    "props": [
      {
        "name": "label",
        "type": "string"
      },
      {
        "name": "fromFontVariationSettings",
        "type": "string"
      },
      {
        "name": "toFontVariationSettings",
        "type": "string"
      },
      {
        "name": "containerRef",
        "type": "HTMLElement | null"
      },
      {
        "name": "radius",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "falloff",
        "type": "FalloffType",
        "defaultValue": "'linear'"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      },
      {
        "name": "onClick",
        "type": "() => void",
        "defaultValue": "undefined"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "品牌首屏标题",
      "数字与核心卖点强调",
      "滚动叙事段落"
    ],
    "complexity": "中等",
    "sourceLines": 201,
    "usage": "<script setup lang=\"ts\">\nimport VariableProximity from '@/components/VariableProximity.vue'\n</script>\n\n<template>\n  <VariableProximity label=\"示例内容\" from-font-variation-settings=\"示例内容\" to-font-variation-settings=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/variable-proximity.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「邻近可变文字（VariableProximity）」组件。目标效果：把文字拆分后呈现「邻近可变文字」效果，适合首屏标题、数据强调、品牌口号和滚动叙事。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 label、fromFontVariationSettings、toFontVariationSettings、containerRef、radius、falloff、className、style、onClick；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/animated-content",
    "slug": "animated-content",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "AnimatedContent",
    "nameCn": "内容入场",
    "video": "/previews/animatedcontent.webm",
    "description": "Wrapper that animates any children on scroll or mount with configurable direction, distance, duration, easing and disappear options.",
    "descriptionCn": "为页面内容加入「内容入场」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/animated-content",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "distance",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "direction",
        "type": "'vertical' | 'horizontal'",
        "defaultValue": "'vertical'"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "0.8"
      },
      {
        "name": "ease",
        "type": "string | ((progress: number) => number)",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "initialOpacity",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "animateOpacity",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "threshold",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "delay",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 140,
    "usage": "<script setup lang=\"ts\">\nimport AnimatedContent from '@/components/AnimatedContent.vue'\n</script>\n\n<template>\n  <AnimatedContent :distance=\"1\" :reverse=\"true\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/animated-content.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「内容入场（AnimatedContent）」组件。目标效果：为页面内容加入「内容入场」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 distance、direction、reverse、duration、ease、initialOpacity、animateOpacity、scale、threshold、delay；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/antigravity",
    "slug": "antigravity",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "Antigravity",
    "nameCn": "反重力",
    "video": "/previews/antigravity.webm",
    "description": "3D antigravity particle field that repels from the cursor with smooth motion.",
    "descriptionCn": "为页面内容加入「反重力」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/antigravity",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "count",
        "type": "number",
        "defaultValue": "300"
      },
      {
        "name": "magnetRadius",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "ringRadius",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "waveSpeed",
        "type": "number",
        "defaultValue": "0.4"
      },
      {
        "name": "waveAmplitude",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "particleSize",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "lerpSpeed",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "autoAnimate",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "particleVariance",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "rotationSpeed",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "depthFactor",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "pulseSpeed",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "particleShape",
        "type": "ParticleShape",
        "defaultValue": "'capsule'"
      },
      {
        "name": "fieldStrength",
        "type": "number",
        "defaultValue": "10"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 339,
    "usage": "<script setup lang=\"ts\">\nimport Antigravity from '@/components/Antigravity.vue'\n</script>\n\n<template>\n  <Antigravity :count=\"1\" :magnet-radius=\"1\" :ring-radius=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/antigravity.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「反重力（Antigravity）」组件。目标效果：为页面内容加入「反重力」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 count、magnetRadius、ringRadius、waveSpeed、waveAmplitude、particleSize、lerpSpeed、color、autoAnimate、particleVariance；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/blob-cursor",
    "slug": "blob-cursor",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "BlobCursor",
    "nameCn": "流体光标",
    "video": "/previews/blobcursor.webm",
    "description": "Organic blob cursor that smoothly follows the pointer with inertia and elastic morphing.",
    "descriptionCn": "为页面内容加入「流体光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/blob-cursor",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "blobType",
        "type": "'circle' | 'square'",
        "defaultValue": "'circle'"
      },
      {
        "name": "fillColor",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "trailCount",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "sizes",
        "type": "number[]",
        "defaultValue": "() => [60"
      },
      {
        "name": "innerSizes",
        "type": "number[]",
        "defaultValue": "() => [20"
      },
      {
        "name": "innerColor",
        "type": "string",
        "defaultValue": "'rgba(255"
      },
      {
        "name": "opacities",
        "type": "number[]",
        "defaultValue": "() => [0.6"
      },
      {
        "name": "shadowColor",
        "type": "string",
        "defaultValue": "'rgba(0"
      },
      {
        "name": "shadowBlur",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "shadowOffsetX",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "shadowOffsetY",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "filterId",
        "type": "string",
        "defaultValue": "'blob'"
      },
      {
        "name": "filterStdDeviation",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "filterColorMatrixValues",
        "type": "string",
        "defaultValue": "'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10'"
      },
      {
        "name": "useFilter",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "fastDuration",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "slowDuration",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "fastEase",
        "type": "string",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "slowEase",
        "type": "string",
        "defaultValue": "'power1.out'"
      },
      {
        "name": "zIndex",
        "type": "number",
        "defaultValue": "100"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "中等",
    "sourceLines": 142,
    "usage": "<script setup lang=\"ts\">\nimport BlobCursor from '@/components/BlobCursor.vue'\n</script>\n\n<template>\n  <BlobCursor fill-color=\"示例内容\" :trail-count=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/blob-cursor.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「流体光标（BlobCursor）」组件。目标效果：为页面内容加入「流体光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 blobType、fillColor、trailCount、sizes、innerSizes、innerColor、opacities、shadowColor、shadowBlur、shadowOffsetX；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/click-spark",
    "slug": "click-spark",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "ClickSpark",
    "nameCn": "点击火花",
    "video": "/previews/clickspark.webm",
    "description": "Creates particle spark bursts at click position.",
    "descriptionCn": "为页面内容加入「点击火花」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/click-spark",
    "dependencies": [],
    "props": [
      {
        "name": "sparkColor",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "sparkSize",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "sparkRadius",
        "type": "number",
        "defaultValue": "15"
      },
      {
        "name": "sparkCount",
        "type": "number",
        "defaultValue": "8"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "400"
      },
      {
        "name": "easing",
        "type": "'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'",
        "defaultValue": "'ease-out'"
      },
      {
        "name": "extraScale",
        "type": "number",
        "defaultValue": "1.0"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。",
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "中等",
    "sourceLines": 186,
    "usage": "<script setup lang=\"ts\">\nimport ClickSpark from '@/components/ClickSpark.vue'\n</script>\n\n<template>\n  <ClickSpark spark-color=\"示例内容\" :spark-size=\"1\" :spark-radius=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/click-spark.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「点击火花（ClickSpark）」组件。目标效果：为页面内容加入「点击火花」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 sparkColor、sparkSize、sparkRadius、sparkCount、duration、easing、extraScale；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/crosshair",
    "slug": "crosshair",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "Crosshair",
    "nameCn": "准星",
    "video": "/previews/crosshair.webm",
    "description": "Custom crosshair cursor with tracking, and link hover effects.",
    "descriptionCn": "为页面内容加入「准星」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/crosshair",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'white'"
      },
      {
        "name": "containerRef",
        "type": "HTMLElement | null",
        "defaultValue": "null"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 238,
    "usage": "<script setup lang=\"ts\">\nimport Crosshair from '@/components/Crosshair.vue'\n</script>\n\n<template>\n  <Crosshair color=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/crosshair.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「准星（Crosshair）」组件。目标效果：为页面内容加入「准星」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、containerRef；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/cubes",
    "slug": "cubes",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "Cubes",
    "nameCn": "立方体",
    "video": "/previews/cubes.webm",
    "description": "3D rotating cube cluster. Supports auto-rotation or hover interaction.",
    "descriptionCn": "为页面内容加入「立方体」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/cubes",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "gridSize",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "cubeSize",
        "type": "number"
      },
      {
        "name": "maxAngle",
        "type": "number",
        "defaultValue": "45"
      },
      {
        "name": "radius",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "easing",
        "type": "gsap.EaseString",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "duration",
        "type": "Duration",
        "defaultValue": "() => ({ enter: 0.3"
      },
      {
        "name": "cellGap",
        "type": "number | Gap",
        "defaultValue": "== 'number'"
      },
      {
        "name": "borderStyle",
        "type": "string",
        "defaultValue": "'1px solid #fff'"
      },
      {
        "name": "faceColor",
        "type": "string",
        "defaultValue": "'#0b0b0b'"
      },
      {
        "name": "shadow",
        "type": "boolean | string",
        "defaultValue": "false"
      },
      {
        "name": "autoAnimate",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "rippleOnClick",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "rippleColor",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "rippleSpeed",
        "type": "number",
        "defaultValue": "2"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 345,
    "usage": "<script setup lang=\"ts\">\nimport Cubes from '@/components/Cubes.vue'\n</script>\n\n<template>\n  <Cubes :grid-size=\"1\" :cube-size=\"1\" :max-angle=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/cubes.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「立方体（Cubes）」组件。目标效果：为页面内容加入「立方体」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 gridSize、cubeSize、maxAngle、radius、easing、duration、cellGap、borderStyle、faceColor、shadow；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/electric-border",
    "slug": "electric-border",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "ElectricBorder",
    "nameCn": "电流边框",
    "video": "/previews/electricborder.webm",
    "description": "Jittery electric energy border with animated arcs, glow and adjustable intensity.",
    "descriptionCn": "为页面内容加入「电流边框」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/electric-border",
    "dependencies": [],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#28FF85'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "chaos",
        "type": "number",
        "defaultValue": "0.12"
      },
      {
        "name": "borderRadius",
        "type": "number",
        "defaultValue": "24"
      },
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"wrapperStyle\">"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。",
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 399,
    "usage": "<script setup lang=\"ts\">\nimport ElectricBorder from '@/components/ElectricBorder.vue'\n</script>\n\n<template>\n  <ElectricBorder color=\"示例内容\" :speed=\"1\" :chaos=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/electric-border.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「电流边框（ElectricBorder）」组件。目标效果：为页面内容加入「电流边框」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、speed、chaos、borderRadius、className、style；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/fade-content",
    "slug": "fade-content",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "FadeContent",
    "nameCn": "内容淡入",
    "video": "/previews/fadecontent.webm",
    "description": "Simple directional fade / slide entrance / exit wrapper with threshold-based activation.",
    "descriptionCn": "为页面内容加入「内容淡入」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/fade-content",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "container",
        "type": "Element | string | null",
        "defaultValue": "null"
      },
      {
        "name": "blur",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "1000"
      },
      {
        "name": "ease",
        "type": "string",
        "defaultValue": "'power2.out'"
      },
      {
        "name": "delay",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "threshold",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "initialOpacity",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "disappearAfter",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "disappearDuration",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "disappearEase",
        "type": "string",
        "defaultValue": "'power2.in'"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 133,
    "usage": "<script setup lang=\"ts\">\nimport FadeContent from '@/components/FadeContent.vue'\n</script>\n\n<template>\n  <FadeContent container=\"示例内容\" :blur=\"true\" :duration=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/fade-content.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「内容淡入（FadeContent）」组件。目标效果：为页面内容加入「内容淡入」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 container、blur、duration、ease、delay、threshold、initialOpacity、disappearAfter、disappearDuration、disappearEase；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/ghost-cursor",
    "slug": "ghost-cursor",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "GhostCursor",
    "nameCn": "幽灵光标",
    "video": "/previews/ghostcursor.webm",
    "description": "Semi-transparent ghost cursor that smoothly follows the real cursor with a trailing effect.",
    "descriptionCn": "为页面内容加入「幽灵光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/ghost-cursor",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"mergedStyle\" />"
      },
      {
        "name": "trailLength",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "inertia",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "grainIntensity",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "bloomStrength",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "bloomRadius",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "bloomThreshold",
        "type": "number",
        "defaultValue": "0.025"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#A0FFBC'"
      },
      {
        "name": "mixBlendMode",
        "type": "CSSProperties['mixBlendMode']",
        "defaultValue": "'screen'"
      },
      {
        "name": "edgeIntensity",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "maxDevicePixelRatio",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "targetPixels",
        "type": "number"
      },
      {
        "name": "fadeDelayMs",
        "type": "number"
      },
      {
        "name": "fadeDurationMs",
        "type": "number"
      },
      {
        "name": "zIndex",
        "type": "number",
        "defaultValue": "10"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "较高",
    "sourceLines": 558,
    "usage": "<script setup lang=\"ts\">\nimport GhostCursor from '@/components/GhostCursor.vue'\n</script>\n\n<template>\n  <GhostCursor :trail-length=\"1\" :inertia=\"1\" :grain-intensity=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/ghost-cursor.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「幽灵光标（GhostCursor）」组件。目标效果：为页面内容加入「幽灵光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、style、trailLength、inertia、grainIntensity、bloomStrength、bloomRadius、bloomThreshold、brightness、color；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/glare-hover",
    "slug": "glare-hover",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "GlareHover",
    "nameCn": "悬停眩光",
    "video": "/previews/glarehover.webm",
    "description": "Adds a realistic moving glare highlight on hover over any element.",
    "descriptionCn": "为页面内容加入「悬停眩光」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/glare-hover",
    "dependencies": [],
    "props": [
      {
        "name": "width",
        "type": "string",
        "defaultValue": "'500px'"
      },
      {
        "name": "height",
        "type": "string",
        "defaultValue": "'500px'"
      },
      {
        "name": "background",
        "type": "string",
        "defaultValue": "'#000'"
      },
      {
        "name": "borderRadius",
        "type": "string",
        "defaultValue": "'10px'"
      },
      {
        "name": "borderColor",
        "type": "string",
        "defaultValue": "'#333'"
      },
      {
        "name": "glareColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "glareOpacity",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "glareAngle",
        "type": "number",
        "defaultValue": "-45"
      },
      {
        "name": "glareSize",
        "type": "number",
        "defaultValue": "250"
      },
      {
        "name": "transitionDuration",
        "type": "number",
        "defaultValue": "650"
      },
      {
        "name": "playOnce",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "Record<string, string | number>",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "轻量",
    "sourceLines": 114,
    "usage": "<script setup lang=\"ts\">\nimport GlareHover from '@/components/GlareHover.vue'\n</script>\n\n<template>\n  <GlareHover width=\"示例内容\" height=\"示例内容\" background=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/glare-hover.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「悬停眩光（GlareHover）」组件。目标效果：为页面内容加入「悬停眩光」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 width、height、background、borderRadius、borderColor、glareColor、glareOpacity、glareAngle、glareSize、transitionDuration；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/gradual-blur",
    "slug": "gradual-blur",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "GradualBlur",
    "nameCn": "Gradual模糊",
    "video": "/previews/gradualblur.webm",
    "description": "Progressively un-blurs content based on scroll or trigger creating a cinematic reveal.",
    "descriptionCn": "为页面内容加入「Gradual模糊」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/gradual-blur",
    "dependencies": [],
    "props": [
      {
        "name": "position",
        "type": "'top' | 'bottom' | 'left' | 'right'",
        "defaultValue": "'bottom'"
      },
      {
        "name": "strength",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "height",
        "type": "string",
        "defaultValue": "'6rem'"
      },
      {
        "name": "width",
        "type": "string",
        "defaultValue": "window.innerWidth;"
      },
      {
        "name": "divCount",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "exponential",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "zIndex",
        "type": "number",
        "defaultValue": "1000"
      },
      {
        "name": "animated",
        "type": "boolean | 'scroll'",
        "defaultValue": "false"
      },
      {
        "name": "duration",
        "type": "string",
        "defaultValue": "'0.3s'"
      },
      {
        "name": "easing",
        "type": "string",
        "defaultValue": "'ease-out'"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "curve",
        "type": "'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out'",
        "defaultValue": "'linear'"
      },
      {
        "name": "responsive",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "mobileHeight",
        "type": "string"
      },
      {
        "name": "tabletHeight",
        "type": "string"
      },
      {
        "name": "desktopHeight",
        "type": "string"
      },
      {
        "name": "mobileWidth",
        "type": "string"
      },
      {
        "name": "tabletWidth",
        "type": "string"
      },
      {
        "name": "desktopWidth",
        "type": "string"
      },
      {
        "name": "preset",
        "type": "| 'top'"
      },
      {
        "name": "gpuOptimized",
        "type": "boolean"
      },
      {
        "name": "hoverIntensity",
        "type": "number"
      },
      {
        "name": "target",
        "type": "'parent' | 'page'",
        "defaultValue": "'parent'"
      },
      {
        "name": "onAnimationComplete",
        "type": "() => void"
      }
    ],
    "implementation": [
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "轻量",
    "sourceLines": 350,
    "usage": "<script setup lang=\"ts\">\nimport GradualBlur from '@/components/GradualBlur.vue'\n</script>\n\n<template>\n  <GradualBlur :strength=\"1\" height=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/gradual-blur.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「Gradual模糊（GradualBlur）」组件。目标效果：为页面内容加入「Gradual模糊」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 position、strength、height、width、divCount、exponential、zIndex、animated、duration、easing；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/image-trail",
    "slug": "image-trail",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "ImageTrail",
    "nameCn": "图片拖尾",
    "video": "/previews/imagetrail.webm",
    "description": "Cursor-based image trail with several built-in variants.",
    "descriptionCn": "为页面内容加入「图片拖尾」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/image-trail",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "items",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "variant",
        "type": "number",
        "defaultValue": "1"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 1223,
    "usage": "<script setup lang=\"ts\">\nimport ImageTrail from '@/components/ImageTrail.vue'\n</script>\n\n<template>\n  <ImageTrail items=\"示例内容\" :variant=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/image-trail.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「图片拖尾（ImageTrail）」组件。目标效果：为页面内容加入「图片拖尾」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、variant；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/laser-flow",
    "slug": "laser-flow",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "LaserFlow",
    "nameCn": "激光流",
    "video": "/previews/laserflow.webm",
    "description": "Dynamic laser light that flows onto a surface, customizable effect.",
    "descriptionCn": "为页面内容加入「激光流」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/laser-flow",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"style\" />"
      },
      {
        "name": "wispDensity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "dpr",
        "type": "number"
      },
      {
        "name": "mouseSmoothTime",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "mouseTiltStrength",
        "type": "number",
        "defaultValue": "0.01"
      },
      {
        "name": "horizontalBeamOffset",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "verticalBeamOffset",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "flowSpeed",
        "type": "number",
        "defaultValue": "0.35"
      },
      {
        "name": "verticalSizing",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "horizontalSizing",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "fogIntensity",
        "type": "number",
        "defaultValue": "0.45"
      },
      {
        "name": "fogScale",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "wispSpeed",
        "type": "number",
        "defaultValue": "15.0"
      },
      {
        "name": "wispIntensity",
        "type": "number",
        "defaultValue": "5.0"
      },
      {
        "name": "flowStrength",
        "type": "number",
        "defaultValue": "0.25"
      },
      {
        "name": "decay",
        "type": "number",
        "defaultValue": "1.1"
      },
      {
        "name": "falloffStart",
        "type": "number",
        "defaultValue": "1.2"
      },
      {
        "name": "fogFallSpeed",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#A0FFBC'"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 616,
    "usage": "<script setup lang=\"ts\">\nimport LaserFlow from '@/components/LaserFlow.vue'\n</script>\n\n<template>\n  <LaserFlow :wisp-density=\"1\" :dpr=\"1\" :mouse-smooth-time=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/laser-flow.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「激光流（LaserFlow）」组件。目标效果：为页面内容加入「激光流」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、style、wispDensity、dpr、mouseSmoothTime、mouseTiltStrength、horizontalBeamOffset、verticalBeamOffset、flowSpeed、verticalSizing；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/logo-loop",
    "slug": "logo-loop",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "LogoLoop",
    "nameCn": "标志循环",
    "video": "/previews/logoloop.webm",
    "description": "Continuously looping marquee of brand or tech logos with seamless repeat and hover pause.",
    "descriptionCn": "为页面内容加入「标志循环」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/logo-loop",
    "dependencies": [],
    "props": [
      {
        "name": "logos",
        "type": "LogoItem[]"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "120"
      },
      {
        "name": "direction",
        "type": "'left' | 'right' | 'up' | 'down'",
        "defaultValue": "'left'"
      },
      {
        "name": "width",
        "type": "number | string",
        "defaultValue": "'100%'"
      },
      {
        "name": "logoHeight",
        "type": "number",
        "defaultValue": "28"
      },
      {
        "name": "gap",
        "type": "number",
        "defaultValue": "32"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "defaultValue": "undefined"
      },
      {
        "name": "hoverSpeed",
        "type": "number",
        "defaultValue": "undefined"
      },
      {
        "name": "fadeOut",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "fadeOutColor",
        "type": "string"
      },
      {
        "name": "scaleOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "defaultValue": "'Partner logos'"
      },
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"containerStyle\" role=\"region\" :aria-label=\"ariaLabel\">"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 486,
    "usage": "<script setup lang=\"ts\">\nimport LogoLoop from '@/components/LogoLoop.vue'\n</script>\n\n<template>\n  <LogoLoop :speed=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/logo-loop.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「标志循环（LogoLoop）」组件。目标效果：为页面内容加入「标志循环」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 logos、speed、direction、width、logoHeight、gap、pauseOnHover、hoverSpeed、fadeOut、fadeOutColor；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/magic-rings",
    "slug": "magic-rings",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "MagicRings",
    "nameCn": "魔法环",
    "video": "/previews/magicrings.webm",
    "description": "Interactive magic rings effect with customizable parameters.",
    "descriptionCn": "为页面内容加入「魔法环」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/magic-rings",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#7cff67'"
      },
      {
        "name": "colorTwo",
        "type": "string",
        "defaultValue": "'#42fcff'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "ringCount",
        "type": "number",
        "defaultValue": "6"
      },
      {
        "name": "attenuation",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "lineThickness",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "baseRadius",
        "type": "number",
        "defaultValue": "0.35"
      },
      {
        "name": "radiusStep",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "scaleRate",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "blur",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "noiseAmount",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "rotation",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "ringGap",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "fadeIn",
        "type": "number",
        "defaultValue": "0.7"
      },
      {
        "name": "fadeOut",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "followMouse",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "mouseInfluence",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "hoverScale",
        "type": "number",
        "defaultValue": "1.2"
      },
      {
        "name": "parallax",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "clickBurst",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 328,
    "usage": "<script setup lang=\"ts\">\nimport MagicRings from '@/components/MagicRings.vue'\n</script>\n\n<template>\n  <MagicRings color=\"示例内容\" color-two=\"示例内容\" :speed=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/magic-rings.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「魔法环（MagicRings）」组件。目标效果：为页面内容加入「魔法环」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、colorTwo、speed、ringCount、attenuation、lineThickness、baseRadius、radiusStep、scaleRate、opacity；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/magnet",
    "slug": "magnet",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "Magnet",
    "nameCn": "磁吸",
    "video": "/previews/magnet.webm",
    "description": "Elements magnetically ease toward the cursor then settle back with spring physics.",
    "descriptionCn": "为页面内容加入「磁吸」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/magnet",
    "dependencies": [],
    "props": [
      {
        "name": "padding",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "magnetStrength",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "activeTransition",
        "type": "string",
        "defaultValue": "'transform 0.3s ease-out'"
      },
      {
        "name": "inactiveTransition",
        "type": "string",
        "defaultValue": "'transform 0.5s ease-in-out'"
      },
      {
        "name": "wrapperClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "innerClassName",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "轻量",
    "sourceLines": 93,
    "usage": "<script setup lang=\"ts\">\nimport Magnet from '@/components/Magnet.vue'\n</script>\n\n<template>\n  <Magnet :padding=\"1\" :disabled=\"true\" :magnet-strength=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/magnet.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「磁吸（Magnet）」组件。目标效果：为页面内容加入「磁吸」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 padding、disabled、magnetStrength、activeTransition、inactiveTransition、wrapperClassName、innerClassName；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/magnet-lines",
    "slug": "magnet-lines",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "MagnetLines",
    "nameCn": "磁力线",
    "video": "/previews/magnetlines.webm",
    "description": "Animated field lines bend toward the cursor.",
    "descriptionCn": "为页面内容加入「磁力线」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/magnet-lines",
    "dependencies": [],
    "props": [
      {
        "name": "rows",
        "type": "number",
        "defaultValue": "9"
      },
      {
        "name": "columns",
        "type": "number",
        "defaultValue": "9"
      },
      {
        "name": "containerSize",
        "type": "string",
        "defaultValue": "'80vmin'"
      },
      {
        "name": "lineColor",
        "type": "string",
        "defaultValue": "'#efefef'"
      },
      {
        "name": "lineWidth",
        "type": "string",
        "defaultValue": "'1vmin'"
      },
      {
        "name": "lineHeight",
        "type": "string",
        "defaultValue": "'6vmin'"
      },
      {
        "name": "baseAngle",
        "type": "number",
        "defaultValue": "-10"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "Record<string, string | number>",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "轻量",
    "sourceLines": 102,
    "usage": "<script setup lang=\"ts\">\nimport MagnetLines from '@/components/MagnetLines.vue'\n</script>\n\n<template>\n  <MagnetLines :rows=\"1\" :columns=\"1\" container-size=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/magnet-lines.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「磁力线（MagnetLines）」组件。目标效果：为页面内容加入「磁力线」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 rows、columns、containerSize、lineColor、lineWidth、lineHeight、baseAngle、className、style；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/meta-balls",
    "slug": "meta-balls",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "MetaBalls",
    "nameCn": "融球",
    "video": "/previews/metaballs.webm",
    "description": "Liquid metaball blobs that merge and separate with smooth implicit surface animation.",
    "descriptionCn": "为页面内容加入「融球」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/meta-balls",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "enableMouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "hoverSmoothness",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "animationSize",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "ballCount",
        "type": "number",
        "defaultValue": "15"
      },
      {
        "name": "clumpFactor",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "cursorBallSize",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "cursorBallColor",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "enableTransparency",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "mixBlendMode",
        "type": "string",
        "defaultValue": "'normal'"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 270,
    "usage": "<script setup lang=\"ts\">\nimport MetaBalls from '@/components/MetaBalls.vue'\n</script>\n\n<template>\n  <MetaBalls color=\"示例内容\" :speed=\"1\" :enable-mouse-interaction=\"true\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/meta-balls.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「融球（MetaBalls）」组件。目标效果：为页面内容加入「融球」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、speed、enableMouseInteraction、hoverSmoothness、animationSize、ballCount、clumpFactor、cursorBallSize、cursorBallColor、enableTransparency；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/metallic-paint",
    "slug": "metallic-paint",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "MetallicPaint",
    "nameCn": "金属漆",
    "video": "/previews/metallicpaint.webm",
    "description": "Liquid metallic paint shader which can be applied to SVG elements.",
    "descriptionCn": "为页面内容加入「金属漆」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/metallic-paint",
    "dependencies": [],
    "props": [
      {
        "name": "imageSrc",
        "type": "string"
      },
      {
        "name": "seed",
        "type": "number",
        "defaultValue": "42"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "4"
      },
      {
        "name": "refraction",
        "type": "number",
        "defaultValue": "0.01"
      },
      {
        "name": "blur",
        "type": "number",
        "defaultValue": "0.015"
      },
      {
        "name": "liquid",
        "type": "number",
        "defaultValue": "0.75"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "contrast",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "angle",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "fresnel",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "lightColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "darkColor",
        "type": "string",
        "defaultValue": "'#000000'"
      },
      {
        "name": "patternSharpness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "waveAmplitude",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "noiseScale",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "chromaticSpread",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "mouseAnimation",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "distortion",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "contour",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "tintColor",
        "type": "string",
        "defaultValue": "'#feb3ff'"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 567,
    "usage": "<script setup lang=\"ts\">\nimport MetallicPaint from '@/components/MetallicPaint.vue'\n</script>\n\n<template>\n  <MetallicPaint image-src=\"示例内容\" :seed=\"1\" :scale=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/metallic-paint.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「金属漆（MetallicPaint）」组件。目标效果：为页面内容加入「金属漆」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 imageSrc、seed、scale、refraction、blur、liquid、speed、brightness、contrast、angle；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/noise",
    "slug": "noise",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "Noise",
    "nameCn": "噪声",
    "video": "/previews/noise.webm",
    "description": "Animated film grain / noise overlay adding subtle texture and motion.",
    "descriptionCn": "为页面内容加入「噪声」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/noise",
    "dependencies": [],
    "props": [
      {
        "name": "patternSize",
        "type": "number",
        "defaultValue": "250"
      },
      {
        "name": "patternScaleX",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "patternScaleY",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "patternRefreshInterval",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "patternAlpha",
        "type": "number",
        "defaultValue": "15"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 104,
    "usage": "<script setup lang=\"ts\">\nimport Noise from '@/components/Noise.vue'\n</script>\n\n<template>\n  <Noise :pattern-size=\"1\" :pattern-scale-x=\"1\" :pattern-scale-y=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/noise.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「噪声（Noise）」组件。目标效果：为页面内容加入「噪声」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 patternSize、patternScaleX、patternScaleY、patternRefreshInterval、patternAlpha；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/orbit-images",
    "slug": "orbit-images",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "OrbitImages",
    "nameCn": "轨道图片",
    "video": "/previews/orbitimages.webm",
    "description": "SVG Path customizable orbiting images effect",
    "descriptionCn": "为页面内容加入「轨道图片」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/orbit-images",
    "dependencies": [],
    "props": [
      {
        "name": "images",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "altPrefix",
        "type": "string",
        "defaultValue": "'Orbiting image'"
      },
      {
        "name": "shape",
        "type": "OrbitShape",
        "defaultValue": "'ellipse'"
      },
      {
        "name": "customPath",
        "type": "string",
        "defaultValue": "undefined"
      },
      {
        "name": "baseWidth",
        "type": "number",
        "defaultValue": "1400"
      },
      {
        "name": "radiusX",
        "type": "number",
        "defaultValue": "700"
      },
      {
        "name": "radiusY",
        "type": "number",
        "defaultValue": "170"
      },
      {
        "name": "radius",
        "type": "number",
        "defaultValue": "300"
      },
      {
        "name": "starPoints",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "starInnerRatio",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "rotation",
        "type": "number",
        "defaultValue": "-8"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "40"
      },
      {
        "name": "itemSize",
        "type": "number",
        "defaultValue": "64"
      },
      {
        "name": "direction",
        "type": "'normal' | 'reverse'",
        "defaultValue": "'normal'"
      },
      {
        "name": "fill",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "width",
        "type": "number | '100%'",
        "defaultValue": "100"
      },
      {
        "name": "height",
        "type": "number | 'auto'",
        "defaultValue": "100"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "showPath",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "pathColor",
        "type": "string",
        "defaultValue": "'rgba(0"
      },
      {
        "name": "pathWidth",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "easing",
        "type": "'linear' | 'easeIn' | 'easeOut' | 'easeInOut'",
        "defaultValue": "'linear'"
      },
      {
        "name": "paused",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "responsive",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 378,
    "usage": "<script setup lang=\"ts\">\nimport OrbitImages from '@/components/OrbitImages.vue'\n</script>\n\n<template>\n  <OrbitImages images=\"示例内容\" alt-prefix=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/orbit-images.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「轨道图片（OrbitImages）」组件。目标效果：为页面内容加入「轨道图片」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 images、altPrefix、shape、customPath、baseWidth、radiusX、radiusY、radius、starPoints、starInnerRatio；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/pixel-trail",
    "slug": "pixel-trail",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "PixelTrail",
    "nameCn": "像素拖尾",
    "video": "/previews/pixeltrail.webm",
    "description": "Pixelated cursor trail emitting fading squares with retro digital feel.",
    "descriptionCn": "为页面内容加入「像素拖尾」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/pixel-trail",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "gridSize",
        "type": "number",
        "defaultValue": "40"
      },
      {
        "name": "trailSize",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "maxAge",
        "type": "number",
        "defaultValue": "250"
      },
      {
        "name": "interpolate",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "gooeyFilter",
        "type": "GooeyFilterConfig",
        "defaultValue": "undefined"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 415,
    "usage": "<script setup lang=\"ts\">\nimport PixelTrail from '@/components/PixelTrail.vue'\n</script>\n\n<template>\n  <PixelTrail :grid-size=\"1\" :trail-size=\"1\" :max-age=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/pixel-trail.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「像素拖尾（PixelTrail）」组件。目标效果：为页面内容加入「像素拖尾」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 gridSize、trailSize、maxAge、interpolate、color、gooeyFilter、className；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/pixel-transition",
    "slug": "pixel-transition",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "PixelTransition",
    "nameCn": "像素转场",
    "video": "/previews/pixeltransition.webm",
    "description": "Pixel dissolve transition for content reveal on hover.",
    "descriptionCn": "为页面内容加入「像素转场」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/pixel-transition",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "gridSize",
        "type": "number",
        "defaultValue": "7"
      },
      {
        "name": "pixelColor",
        "type": "string",
        "defaultValue": "'currentColor'"
      },
      {
        "name": "animationStepDuration",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "once",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      },
      {
        "name": "aspectRatio",
        "type": "string",
        "defaultValue": "'100%'"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 167,
    "usage": "<script setup lang=\"ts\">\nimport PixelTransition from '@/components/PixelTransition.vue'\n</script>\n\n<template>\n  <PixelTransition :grid-size=\"1\" pixel-color=\"示例内容\" :animation-step-duration=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/pixel-transition.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「像素转场（PixelTransition）」组件。目标效果：为页面内容加入「像素转场」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 gridSize、pixelColor、animationStepDuration、once、className、style、aspectRatio；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/ribbons",
    "slug": "ribbons",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "Ribbons",
    "nameCn": "丝带",
    "video": "/previews/ribbons.webm",
    "description": "Flowing responsive ribbons/cursor trail driven by physics and pointer motion.",
    "descriptionCn": "为页面内容加入「丝带」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/ribbons",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#ff9346'"
      },
      {
        "name": "baseSpring",
        "type": "number",
        "defaultValue": "0.03"
      },
      {
        "name": "baseFriction",
        "type": "number",
        "defaultValue": "0.9"
      },
      {
        "name": "baseThickness",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "offsetFactor",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "maxAge",
        "type": "number",
        "defaultValue": "500"
      },
      {
        "name": "pointCount",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "speedMultiplier",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "enableFade",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "enableShaderEffect",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "effectAmplitude",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "backgroundColor",
        "type": "number[]",
        "defaultValue": "() => [0"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 291,
    "usage": "<script setup lang=\"ts\">\nimport Ribbons from '@/components/Ribbons.vue'\n</script>\n\n<template>\n  <Ribbons colors=\"示例内容\" :base-spring=\"1\" :base-friction=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/ribbons.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「丝带（Ribbons）」组件。目标效果：为页面内容加入「丝带」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 colors、baseSpring、baseFriction、baseThickness、offsetFactor、maxAge、pointCount、speedMultiplier、enableFade、enableShaderEffect；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/shape-blur",
    "slug": "shape-blur",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "ShapeBlur",
    "nameCn": "形状模糊",
    "video": "/previews/shapeblur.webm",
    "description": "Morphing blurred geometric shape. The effect occurs on hover.",
    "descriptionCn": "为页面内容加入「形状模糊」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/shape-blur",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "class",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "variation",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "pixelRatioProp",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "shapeSize",
        "type": "number",
        "defaultValue": "1.2"
      },
      {
        "name": "roundness",
        "type": "number",
        "defaultValue": "0.4"
      },
      {
        "name": "borderSize",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "circleSize",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "circleEdge",
        "type": "number",
        "defaultValue": "0.5"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 296,
    "usage": "<script setup lang=\"ts\">\nimport ShapeBlur from '@/components/ShapeBlur.vue'\n</script>\n\n<template>\n  <ShapeBlur class=\"示例内容\" :variation=\"1\" :pixel-ratio-prop=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/shape-blur.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「形状模糊（ShapeBlur）」组件。目标效果：为页面内容加入「形状模糊」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 class、variation、pixelRatioProp、shapeSize、roundness、borderSize、circleSize、circleEdge；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/splash-cursor",
    "slug": "splash-cursor",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "SplashCursor",
    "nameCn": "流体泼溅光标",
    "video": "/previews/splashcursor.webm",
    "description": "Liquid splash burst at cursor with curling ripples and waves.",
    "descriptionCn": "为页面内容加入「流体泼溅光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/splash-cursor",
    "dependencies": [],
    "props": [
      {
        "name": "SIM_RESOLUTION",
        "type": "number",
        "defaultValue": "128"
      },
      {
        "name": "DYE_RESOLUTION",
        "type": "number",
        "defaultValue": "1440"
      },
      {
        "name": "CAPTURE_RESOLUTION",
        "type": "number",
        "defaultValue": "512"
      },
      {
        "name": "DENSITY_DISSIPATION",
        "type": "number",
        "defaultValue": "3.5"
      },
      {
        "name": "VELOCITY_DISSIPATION",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "PRESSURE",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "PRESSURE_ITERATIONS",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "CURL",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "SPLAT_RADIUS",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "SPLAT_FORCE",
        "type": "number",
        "defaultValue": "6000"
      },
      {
        "name": "SHADING",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "COLOR_UPDATE_SPEED",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "BACK_COLOR",
        "type": "ColorRGB",
        "defaultValue": "() => ({ r: 0.5"
      },
      {
        "name": "TRANSPARENT",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "RAINBOW_MODE",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "COLOR",
        "type": "string",
        "defaultValue": "'#ff0000'"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "中等",
    "sourceLines": 1167,
    "usage": "<script setup lang=\"ts\">\nimport SplashCursor from '@/components/SplashCursor.vue'\n</script>\n\n<template>\n  <SplashCursor :sim_resolution=\"1\" :dye_resolution=\"1\" :capture_resolution=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/splash-cursor.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「流体泼溅光标（SplashCursor）」组件。目标效果：为页面内容加入「流体泼溅光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 SIM_RESOLUTION、DYE_RESOLUTION、CAPTURE_RESOLUTION、DENSITY_DISSIPATION、VELOCITY_DISSIPATION、PRESSURE、PRESSURE_ITERATIONS、CURL、SPLAT_RADIUS、SPLAT_FORCE；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/star-border",
    "slug": "star-border",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "StarBorder",
    "nameCn": "Star边框",
    "video": "/previews/starborder.webm",
    "description": "Animated star / sparkle border orbiting content with twinkle pulses.",
    "descriptionCn": "为页面内容加入「Star边框」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/star-border",
    "dependencies": [],
    "props": [
      {
        "name": "as",
        "type": "string",
        "defaultValue": "'button'"
      },
      {
        "name": "customClass",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'white'"
      },
      {
        "name": "speed",
        "type": "string",
        "defaultValue": "'6s'"
      },
      {
        "name": "thickness",
        "type": "number",
        "defaultValue": "1"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "动画优先作用于 transform，减少布局抖动并利于 GPU 合成。",
      "包含 CSS keyframes，可在 reduced-motion 模式下降级为静态状态。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "轻量",
    "sourceLines": 95,
    "usage": "<script setup lang=\"ts\">\nimport StarBorder from '@/components/StarBorder.vue'\n</script>\n\n<template>\n  <StarBorder as=\"示例内容\" custom-class=\"示例内容\" color=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/star-border.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「Star边框（StarBorder）」组件。目标效果：为页面内容加入「Star边框」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 as、customClass、color、speed、thickness；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/sticker-peel",
    "slug": "sticker-peel",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "StickerPeel",
    "nameCn": "贴纸揭角",
    "video": "/previews/stickerpeel.webm",
    "description": "Sticker corner lift + peel interaction using 3D transform and shadow depth.",
    "descriptionCn": "为页面内容加入「贴纸揭角」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/sticker-peel",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "imageSrc",
        "type": "string"
      },
      {
        "name": "rotate",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "peelBackHoverPct",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "peelBackActivePct",
        "type": "number",
        "defaultValue": "40"
      },
      {
        "name": "peelEasing",
        "type": "string",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "peelHoverEasing",
        "type": "string",
        "defaultValue": "'power2.out'"
      },
      {
        "name": "width",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "shadowIntensity",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "lightingIntensity",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "initialPosition",
        "type": "'center' | 'random' | { x: number",
        "defaultValue": "'center'"
      },
      {
        "name": "peelDirection",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "中等",
    "sourceLines": 402,
    "usage": "<script setup lang=\"ts\">\nimport StickerPeel from '@/components/StickerPeel.vue'\n</script>\n\n<template>\n  <StickerPeel image-src=\"示例内容\" :rotate=\"1\" :peel-back-hover-pct=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/sticker-peel.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「贴纸揭角（StickerPeel）」组件。目标效果：为页面内容加入「贴纸揭角」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 imageSrc、rotate、peelBackHoverPct、peelBackActivePct、peelEasing、peelHoverEasing、width、shadowIntensity、lightingIntensity、initialPosition；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/strands",
    "slug": "strands",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "Strands",
    "nameCn": "丝缕",
    "video": "/previews/strands.webm",
    "description": "Glowing ribbon-like strands that ripple and weave across a transparent canvas.",
    "descriptionCn": "为页面内容加入「丝缕」交互，适合落地页、作品集和需要强化反馈的关键区域。",
    "docsUrl": "https://vue-bits.dev/animations/strands",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#FF4242'"
      },
      {
        "name": "count",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "amplitude",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "waviness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "thickness",
        "type": "number",
        "defaultValue": "0.7"
      },
      {
        "name": "glow",
        "type": "number",
        "defaultValue": "2.6"
      },
      {
        "name": "taper",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "spread",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "hueShift",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "intensity",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "saturation",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "glass",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "refraction",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "dispersion",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "glassSize",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "交互反馈",
      "作品集与活动页",
      "关键内容入场"
    ],
    "complexity": "较高",
    "sourceLines": 375,
    "usage": "<script setup lang=\"ts\">\nimport Strands from '@/components/Strands.vue'\n</script>\n\n<template>\n  <Strands colors=\"示例内容\" :count=\"1\" :speed=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/strands.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「丝缕（Strands）」组件。目标效果：为页面内容加入「丝缕」交互，适合落地页、作品集和需要强化反馈的关键区域。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 colors、count、speed、amplitude、waviness、thickness、glow、taper、spread、hueShift；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Animations/target-cursor",
    "slug": "target-cursor",
    "category": "Animations",
    "categoryCn": "交互动效",
    "name": "TargetCursor",
    "nameCn": "目标光标",
    "video": "/previews/targetcursor.webm",
    "description": "A cursor follow animation with 4 corners that lock onto targets.",
    "descriptionCn": "为页面内容加入「目标光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/animations/target-cursor",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "targetSelector",
        "type": "string",
        "defaultValue": "'.cursor-target'"
      },
      {
        "name": "spinDuration",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "hideDefaultCursor",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "hoverDuration",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "parallaxOn",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "鼠标交互反馈",
      "CTA 强调",
      "创意作品集"
    ],
    "complexity": "中等",
    "sourceLines": 457,
    "usage": "<script setup lang=\"ts\">\nimport TargetCursor from '@/components/TargetCursor.vue'\n</script>\n\n<template>\n  <TargetCursor target-selector=\"示例内容\" :spin-duration=\"1\" :hide-default-cursor=\"true\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/target-cursor.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「目标光标（TargetCursor）」组件。目标效果：为页面内容加入「目标光标」交互，适合落地页、作品集和需要强化反馈的关键区域。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 targetSelector、spinDuration、hideDefaultCursor、hoverDuration、parallaxOn；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/animated-list",
    "slug": "animated-list",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "AnimatedList",
    "nameCn": "动态List",
    "video": "/previews/animatedlist.webm",
    "description": "List items enter with staggered motion variants for polished reveals.",
    "descriptionCn": "可直接用于界面的「动态List」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/animated-list",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "items",
        "type": "string[]",
        "defaultValue": "() => ["
      },
      {
        "name": "showGradients",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "enableArrowNavigation",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "itemClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "displayScrollbar",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "initialSelectedIndex",
        "type": "number",
        "defaultValue": "-1"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 188,
    "usage": "<script setup lang=\"ts\">\nimport AnimatedList from '@/components/AnimatedList.vue'\n</script>\n\n<template>\n  <AnimatedList items=\"示例内容\" :show-gradients=\"true\" :enable-arrow-navigation=\"true\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/animated-list.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「动态List（AnimatedList）」组件。目标效果：可直接用于界面的「动态List」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、showGradients、enableArrowNavigation、className、itemClassName、displayScrollbar、initialSelectedIndex；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/border-glow",
    "slug": "border-glow",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "BorderGlow",
    "nameCn": "边框辉光",
    "video": "/previews/borderglow.webm",
    "description": "Glowing mesh-gradient border that follows cursor direction and intensifies near edges.",
    "descriptionCn": "可直接用于界面的「边框辉光」组件，适合产品展示、导航、内容集合和运营活动页。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/components/border-glow",
    "dependencies": [],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "edgeSensitivity",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "glowColor",
        "type": "string",
        "defaultValue": "'40 80 80'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "defaultValue": "'#060010'"
      },
      {
        "name": "borderRadius",
        "type": "number",
        "defaultValue": "28"
      },
      {
        "name": "glowRadius",
        "type": "number",
        "defaultValue": "40"
      },
      {
        "name": "glowIntensity",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "coneSpread",
        "type": "number",
        "defaultValue": "25"
      },
      {
        "name": "animated",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#c084fc'"
      },
      {
        "name": "fillOpacity",
        "type": "number",
        "defaultValue": "0.5"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 313,
    "usage": "<script setup lang=\"ts\">\nimport BorderGlow from '@/components/BorderGlow.vue'\n</script>\n\n<template>\n  <BorderGlow :edge-sensitivity=\"1\" glow-color=\"示例内容\" background-color=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/border-glow.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「边框辉光（BorderGlow）」组件。目标效果：可直接用于界面的「边框辉光」组件，适合产品展示、导航、内容集合和运营活动页。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、edgeSensitivity、glowColor、backgroundColor、borderRadius、glowRadius、glowIntensity、coneSpread、animated、colors；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/bounce-cards",
    "slug": "bounce-cards",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "BounceCards",
    "nameCn": "弹跳Cards",
    "video": "/previews/bouncecards.webm",
    "description": "Cards bounce that bounce in on mount.",
    "descriptionCn": "可直接用于界面的「弹跳Cards」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/bounce-cards",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "images",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "containerWidth",
        "type": "number",
        "defaultValue": "400"
      },
      {
        "name": "containerHeight",
        "type": "number",
        "defaultValue": "400"
      },
      {
        "name": "animationDelay",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "animationStagger",
        "type": "number",
        "defaultValue": "0.06"
      },
      {
        "name": "easeType",
        "type": "string",
        "defaultValue": "'elastic.out(1"
      },
      {
        "name": "transformStyles",
        "type": "string[]",
        "defaultValue": "() => ["
      },
      {
        "name": "enableHover",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 155,
    "usage": "<script setup lang=\"ts\">\nimport BounceCards from '@/components/BounceCards.vue'\n</script>\n\n<template>\n  <BounceCards images=\"示例内容\" :container-width=\"1\" :container-height=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/bounce-cards.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「弹跳Cards（BounceCards）」组件。目标效果：可直接用于界面的「弹跳Cards」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、images、containerWidth、containerHeight、animationDelay、animationStagger、easeType、transformStyles、enableHover；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/bubble-menu",
    "slug": "bubble-menu",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "BubbleMenu",
    "nameCn": "气泡菜单",
    "video": "/previews/bubblemenu.webm",
    "description": "Floating circular expanding menu with staggered item reveal.",
    "descriptionCn": "可直接用于界面的「气泡菜单」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/bubble-menu",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "logo",
        "type": "string | VNode",
        "defaultValue": "== 'string'\""
      },
      {
        "name": "onMenuClick",
        "type": "(open: boolean) => void"
      },
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"style\" aria-label=\"Main navigation\">"
      },
      {
        "name": "menuAriaLabel",
        "type": "string",
        "defaultValue": "'Toggle menu'"
      },
      {
        "name": "menuBg",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "menuContentColor",
        "type": "string",
        "defaultValue": "'#111'"
      },
      {
        "name": "useFixedPosition",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "items",
        "type": "MenuItem[]"
      },
      {
        "name": "animationEase",
        "type": "string",
        "defaultValue": "'back.out(1.5)'"
      },
      {
        "name": "animationDuration",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "staggerDelay",
        "type": "number",
        "defaultValue": "0.12"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "动画优先作用于 transform，减少布局抖动并利于 GPU 合成。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 444,
    "usage": "<script setup lang=\"ts\">\nimport BubbleMenu from '@/components/BubbleMenu.vue'\n</script>\n\n<template>\n  <BubbleMenu logo=\"示例内容\" menu-aria-label=\"示例内容\" menu-bg=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/bubble-menu.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「气泡菜单（BubbleMenu）」组件。目标效果：可直接用于界面的「气泡菜单」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 logo、onMenuClick、className、style、menuAriaLabel、menuBg、menuContentColor、useFixedPosition、items、animationEase；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/card-nav",
    "slug": "card-nav",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "CardNav",
    "nameCn": "卡片导航",
    "video": "/previews/cardnav.webm",
    "description": "Expandable navigation bar with card panels revealing nested links.",
    "descriptionCn": "可直接用于界面的「卡片导航」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/card-nav",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "logo",
        "type": "string"
      },
      {
        "name": "logoAlt",
        "type": "string",
        "defaultValue": "'Logo'"
      },
      {
        "name": "items",
        "type": "CardNavItem[]"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "ease",
        "type": "string",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "baseColor",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "menuColor",
        "type": "string"
      },
      {
        "name": "buttonBgColor",
        "type": "string"
      },
      {
        "name": "buttonTextColor",
        "type": "string"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 258,
    "usage": "<script setup lang=\"ts\">\nimport CardNav from '@/components/CardNav.vue'\n</script>\n\n<template>\n  <CardNav logo=\"示例内容\" logo-alt=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/card-nav.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「卡片导航（CardNav）」组件。目标效果：可直接用于界面的「卡片导航」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 logo、logoAlt、items、className、ease、baseColor、menuColor、buttonBgColor、buttonTextColor；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/card-swap",
    "slug": "card-swap",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "CardSwap",
    "nameCn": "卡片Swap",
    "video": "/previews/cardswap.webm",
    "description": "Cards animate position swapping with smooth layout transitions.",
    "descriptionCn": "可直接用于界面的「卡片Swap」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/card-swap",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "width",
        "type": "number | string",
        "defaultValue": "500"
      },
      {
        "name": "height",
        "type": "number | string",
        "defaultValue": "400"
      },
      {
        "name": "cardDistance",
        "type": "number",
        "defaultValue": "60"
      },
      {
        "name": "verticalDistance",
        "type": "number",
        "defaultValue": "70"
      },
      {
        "name": "delay",
        "type": "number",
        "defaultValue": "5000"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "skewAmount",
        "type": "number",
        "defaultValue": "6"
      },
      {
        "name": "easing",
        "type": "'linear' | 'elastic'",
        "defaultValue": "'elastic'"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 216,
    "usage": "<script setup lang=\"ts\">\nimport CardSwap from '@/components/CardSwap.vue'\n</script>\n\n<template>\n  <CardSwap :width=\"1\" :height=\"1\" :card-distance=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/card-swap.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「卡片Swap（CardSwap）」组件。目标效果：可直接用于界面的「卡片Swap」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 width、height、cardDistance、verticalDistance、delay、pauseOnHover、skewAmount、easing；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/carousel",
    "slug": "carousel",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "Carousel",
    "nameCn": "轮播",
    "video": "/previews/carousel.webm",
    "description": "Responsive carousel with touch gestures, looping and transitions.",
    "descriptionCn": "可直接用于界面的「轮播」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/carousel",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "items",
        "type": "CarouselItem[]",
        "defaultValue": "() => DEFAULT_ITEMS"
      },
      {
        "name": "baseWidth",
        "type": "number",
        "defaultValue": "300"
      },
      {
        "name": "autoplay",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "autoplayDelay",
        "type": "number",
        "defaultValue": "3000"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "loop",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "round",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 281,
    "usage": "<script setup lang=\"ts\">\nimport Carousel from '@/components/Carousel.vue'\n</script>\n\n<template>\n  <Carousel :base-width=\"1\" :autoplay=\"true\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/carousel.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「轮播（Carousel）」组件。目标效果：可直接用于界面的「轮播」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、baseWidth、autoplay、autoplayDelay、pauseOnHover、loop、round；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/chroma-grid",
    "slug": "chroma-grid",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "ChromaGrid",
    "nameCn": "色彩Grid",
    "video": "/previews/chromagrid.webm",
    "description": "A responsive grid of grayscale tiles. Hovering the grid reaveals their colors.",
    "descriptionCn": "可直接用于界面的「色彩Grid」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/chroma-grid",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "items",
        "type": "CardItem[]",
        "defaultValue": "() => []"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "radius",
        "type": "number",
        "defaultValue": "300"
      },
      {
        "name": "damping",
        "type": "number",
        "defaultValue": "0.45"
      },
      {
        "name": "fadeOut",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "ease",
        "type": "string",
        "defaultValue": "'power3.out'"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 233,
    "usage": "<script setup lang=\"ts\">\nimport ChromaGrid from '@/components/ChromaGrid.vue'\n</script>\n\n<template>\n  <ChromaGrid :radius=\"1\" :damping=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/chroma-grid.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「色彩Grid（ChromaGrid）」组件。目标效果：可直接用于界面的「色彩Grid」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、className、radius、damping、fadeOut、ease；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/circular-gallery",
    "slug": "circular-gallery",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "CircularGallery",
    "nameCn": "环形Gallery",
    "video": "/previews/circulargallery.webm",
    "description": "Circular orbit gallery rotating images.",
    "descriptionCn": "可直接用于界面的「环形Gallery」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/circular-gallery",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "items",
        "type": "{ image: string"
      },
      {
        "name": "bend",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "textColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "borderRadius",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "font",
        "type": "string",
        "defaultValue": "'bold 30px Figtree'"
      },
      {
        "name": "fontUrl",
        "type": "string"
      },
      {
        "name": "scrollSpeed",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "scrollEase",
        "type": "number",
        "defaultValue": "0.05"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "较高",
    "sourceLines": 796,
    "usage": "<script setup lang=\"ts\">\nimport CircularGallery from '@/components/CircularGallery.vue'\n</script>\n\n<template>\n  <CircularGallery items=\"示例内容\" :bend=\"1\" text-color=\"示例内容\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/circular-gallery.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「环形Gallery（CircularGallery）」组件。目标效果：可直接用于界面的「环形Gallery」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、bend、textColor、borderRadius、font、fontUrl、scrollSpeed、scrollEase；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/counter",
    "slug": "counter",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "Counter",
    "nameCn": "计数器",
    "video": "/previews/counter.webm",
    "description": "Flexible animated counter supporting increments + easing.",
    "descriptionCn": "可直接用于界面的「计数器」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/counter",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "value",
        "type": "number",
        "defaultValue": "\"value\" :height=\"height\" :digit-style=\"props.digitStyle\" />"
      },
      {
        "name": "fontSize",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "padding",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "places",
        "type": "PlaceValue[]",
        "defaultValue": "undefined"
      },
      {
        "name": "gap",
        "type": "number",
        "defaultValue": "8"
      },
      {
        "name": "borderRadius",
        "type": "number",
        "defaultValue": "4"
      },
      {
        "name": "horizontalPadding",
        "type": "number",
        "defaultValue": "8"
      },
      {
        "name": "textColor",
        "type": "string",
        "defaultValue": "'inherit'"
      },
      {
        "name": "fontWeight",
        "type": "CSSProperties['fontWeight']",
        "defaultValue": "'inherit'"
      },
      {
        "name": "containerStyle",
        "type": "CSSProperties"
      },
      {
        "name": "counterStyle",
        "type": "CSSProperties"
      },
      {
        "name": "digitStyle",
        "type": "CSSProperties"
      },
      {
        "name": "gradientHeight",
        "type": "number",
        "defaultValue": "16"
      },
      {
        "name": "gradientFrom",
        "type": "string",
        "defaultValue": "'black'"
      },
      {
        "name": "gradientTo",
        "type": "string",
        "defaultValue": "'transparent'"
      },
      {
        "name": "topGradientStyle",
        "type": "CSSProperties"
      },
      {
        "name": "bottomGradientStyle",
        "type": "CSSProperties"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 184,
    "usage": "<script setup lang=\"ts\">\nimport Counter from '@/components/Counter.vue'\n</script>\n\n<template>\n  <Counter :value=\"1\" :font-size=\"1\" :padding=\"1\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/counter.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「计数器（Counter）」组件。目标效果：可直接用于界面的「计数器」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 value、fontSize、padding、places、gap、borderRadius、horizontalPadding、textColor、fontWeight、containerStyle；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/decay-card",
    "slug": "decay-card",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "DecayCard",
    "nameCn": "衰减卡片",
    "video": "/previews/decaycard.webm",
    "description": "Hover parallax effect that disintegrates the content of a card.",
    "descriptionCn": "可直接用于界面的「衰减卡片」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/decay-card",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "width",
        "type": "number",
        "defaultValue": "300"
      },
      {
        "name": "height",
        "type": "number",
        "defaultValue": "400"
      },
      {
        "name": "image",
        "type": "string",
        "defaultValue": "'https://picsum.photos/300/400?grayscale'"
      },
      {
        "name": "baseFrequency",
        "type": "number",
        "defaultValue": "0.015"
      },
      {
        "name": "numOctaves",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "seed",
        "type": "number",
        "defaultValue": "4"
      },
      {
        "name": "maxDisplacement",
        "type": "number",
        "defaultValue": "400"
      },
      {
        "name": "movementBound",
        "type": "number",
        "defaultValue": "50"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 168,
    "usage": "<script setup lang=\"ts\">\nimport DecayCard from '@/components/DecayCard.vue'\n</script>\n\n<template>\n  <DecayCard :width=\"1\" :height=\"1\" image=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/decay-card.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「衰减卡片（DecayCard）」组件。目标效果：可直接用于界面的「衰减卡片」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 width、height、image、baseFrequency、numOctaves、seed、maxDisplacement、movementBound；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/dock",
    "slug": "dock",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "Dock",
    "nameCn": "程序坞",
    "video": "/previews/dock.webm",
    "description": "macOS style magnifying dock with proximity scaling of icons.",
    "descriptionCn": "可直接用于界面的「程序坞」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/dock",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "items",
        "type": "DockItemData[]"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "\"item.className\""
      },
      {
        "name": "distance",
        "type": "number",
        "defaultValue": "\"distance\""
      },
      {
        "name": "panelHeight",
        "type": "number"
      },
      {
        "name": "baseItemSize",
        "type": "number",
        "defaultValue": "\"baseItemSize\""
      },
      {
        "name": "dockHeight",
        "type": "number"
      },
      {
        "name": "magnification",
        "type": "number",
        "defaultValue": "\"magnification\""
      },
      {
        "name": "spring",
        "type": "SpringOptions",
        "defaultValue": "\"spring\""
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 341,
    "usage": "<script setup lang=\"ts\">\nimport Dock from '@/components/Dock.vue'\n</script>\n\n<template>\n  <Dock :distance=\"1\" :panel-height=\"1\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/dock.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「程序坞（Dock）」组件。目标效果：可直接用于界面的「程序坞」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、className、distance、panelHeight、baseItemSize、dockHeight、magnification、spring；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/dome-gallery",
    "slug": "dome-gallery",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "DomeGallery",
    "nameCn": "穹顶Gallery",
    "video": "/previews/domegallery.webm",
    "description": "Immersive 3D dome gallery projecting images on a hemispheric surface.",
    "descriptionCn": "可直接用于界面的「穹顶Gallery」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/dome-gallery",
    "dependencies": [],
    "props": [
      {
        "name": "images",
        "type": "(string | ImageItem)[]"
      },
      {
        "name": "fit",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "fitBasis",
        "type": "'auto' | 'min' | 'max' | 'width' | 'height'",
        "defaultValue": "'auto'"
      },
      {
        "name": "minRadius",
        "type": "number",
        "defaultValue": "600"
      },
      {
        "name": "maxRadius",
        "type": "number",
        "defaultValue": "Infinity"
      },
      {
        "name": "padFactor",
        "type": "number",
        "defaultValue": "0.25"
      },
      {
        "name": "overlayBlurColor",
        "type": "string",
        "defaultValue": "'#120F17'"
      },
      {
        "name": "maxVerticalRotationDeg",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "dragSensitivity",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "enlargeTransitionMs",
        "type": "number",
        "defaultValue": "300"
      },
      {
        "name": "segments",
        "type": "number",
        "defaultValue": "35"
      },
      {
        "name": "dragDampening",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "openedImageWidth",
        "type": "string",
        "defaultValue": "'250px'"
      },
      {
        "name": "openedImageHeight",
        "type": "string",
        "defaultValue": "'350px'"
      },
      {
        "name": "imageBorderRadius",
        "type": "string",
        "defaultValue": "'30px'"
      },
      {
        "name": "openedImageBorderRadius",
        "type": "string",
        "defaultValue": "'30px'"
      },
      {
        "name": "grayscale",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 826,
    "usage": "<script setup lang=\"ts\">\nimport DomeGallery from '@/components/DomeGallery.vue'\n</script>\n\n<template>\n  <DomeGallery images=\"示例内容\" :fit=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/dome-gallery.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「穹顶Gallery（DomeGallery）」组件。目标效果：可直接用于界面的「穹顶Gallery」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 images、fit、fitBasis、minRadius、maxRadius、padFactor、overlayBlurColor、maxVerticalRotationDeg、dragSensitivity、enlargeTransitionMs；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/elastic-slider",
    "slug": "elastic-slider",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "ElasticSlider",
    "nameCn": "弹性滑块",
    "video": "/previews/elasticslider.webm",
    "description": "Slider handle stretches elastically then snaps with spring physics.",
    "descriptionCn": "可直接用于界面的「弹性滑块」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/elastic-slider",
    "dependencies": [],
    "props": [
      {
        "name": "defaultValue",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "startingValue",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "maxValue",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "isStepped",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "stepSize",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "leftIcon",
        "type": "Component | string",
        "defaultValue": "'-'"
      },
      {
        "name": "rightIcon",
        "type": "Component | string",
        "defaultValue": "'+'"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 359,
    "usage": "<script setup lang=\"ts\">\nimport ElasticSlider from '@/components/ElasticSlider.vue'\n</script>\n\n<template>\n  <ElasticSlider :default-value=\"1\" :starting-value=\"1\" :max-value=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/elastic-slider.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「弹性滑块（ElasticSlider）」组件。目标效果：可直接用于界面的「弹性滑块」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 defaultValue、startingValue、maxValue、className、isStepped、stepSize、leftIcon、rightIcon；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/flowing-menu",
    "slug": "flowing-menu",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "FlowingMenu",
    "nameCn": "流动菜单",
    "video": "/previews/flowingmenu.webm",
    "description": "Liquid flowing active indicator glides between menu items.",
    "descriptionCn": "可直接用于界面的「流动菜单」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/flowing-menu",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "items",
        "type": "MenuItemData[]",
        "defaultValue": "() => []"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "15"
      },
      {
        "name": "textColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "bgColor",
        "type": "string",
        "defaultValue": "'#111111'"
      },
      {
        "name": "marqueeBgColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "marqueeTextColor",
        "type": "string",
        "defaultValue": "'#111111'"
      },
      {
        "name": "borderColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 259,
    "usage": "<script setup lang=\"ts\">\nimport FlowingMenu from '@/components/FlowingMenu.vue'\n</script>\n\n<template>\n  <FlowingMenu :speed=\"1\" text-color=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/flowing-menu.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「流动菜单（FlowingMenu）」组件。目标效果：可直接用于界面的「流动菜单」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、speed、textColor、bgColor、marqueeBgColor、marqueeTextColor、borderColor；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/flying-posters",
    "slug": "flying-posters",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "FlyingPosters",
    "nameCn": "飞行海报",
    "video": "/previews/flyingposters.webm",
    "description": "3D posters rotate on scroll infinitely.",
    "descriptionCn": "可直接用于界面的「飞行海报」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/flying-posters",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "items",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "planeWidth",
        "type": "number",
        "defaultValue": "320"
      },
      {
        "name": "planeHeight",
        "type": "number",
        "defaultValue": "320"
      },
      {
        "name": "distortion",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "scrollEase",
        "type": "number",
        "defaultValue": "0.01"
      },
      {
        "name": "cameraFov",
        "type": "number",
        "defaultValue": "45"
      },
      {
        "name": "cameraZ",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "较高",
    "sourceLines": 647,
    "usage": "<script setup lang=\"ts\">\nimport FlyingPosters from '@/components/FlyingPosters.vue'\n</script>\n\n<template>\n  <FlyingPosters items=\"示例内容\" :plane-width=\"1\" :plane-height=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/flying-posters.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「飞行海报（FlyingPosters）」组件。目标效果：可直接用于界面的「飞行海报」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、planeWidth、planeHeight、distortion、scrollEase、cameraFov、cameraZ、className；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/folder",
    "slug": "folder",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "Folder",
    "nameCn": "文件夹",
    "video": "/previews/folder.webm",
    "description": "Interactive folder opens to reveal nested content smooth motion.",
    "descriptionCn": "可直接用于界面的「文件夹」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/folder",
    "dependencies": [],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "size",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "items",
        "type": "(string | null)[]",
        "defaultValue": "() => []"
      },
      {
        "name": "class",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "轻量",
    "sourceLines": 148,
    "usage": "<script setup lang=\"ts\">\nimport Folder from '@/components/Folder.vue'\n</script>\n\n<template>\n  <Folder color=\"示例内容\" :size=\"1\" items=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/folder.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「文件夹（Folder）」组件。目标效果：可直接用于界面的「文件夹」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、size、items、class；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/glass-icons",
    "slug": "glass-icons",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "GlassIcons",
    "nameCn": "玻璃图标",
    "video": "/previews/glassicons.webm",
    "description": "Icon set styled with frosted glass blur.",
    "descriptionCn": "可直接用于界面的「玻璃图标」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/glass-icons",
    "dependencies": [],
    "props": [
      {
        "name": "items",
        "type": "GlassIconsItem[]",
        "defaultValue": "() => []"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "轻量",
    "sourceLines": 75,
    "usage": "<script setup lang=\"ts\">\nimport GlassIcons from '@/components/GlassIcons.vue'\n</script>\n\n<template>\n  <GlassIcons />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/glass-icons.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「玻璃图标（GlassIcons）」组件。目标效果：可直接用于界面的「玻璃图标」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、className；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/glass-surface",
    "slug": "glass-surface",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "GlassSurface",
    "nameCn": "玻璃表面",
    "video": "/previews/glasssurface.webm",
    "description": "Advanced Apple-style glass surface with real-time distortion + lighting.",
    "descriptionCn": "可直接用于界面的「玻璃表面」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/glass-surface",
    "dependencies": [],
    "props": [
      {
        "name": "width",
        "type": "string | number",
        "defaultValue": "'200px'"
      },
      {
        "name": "height",
        "type": "string | number",
        "defaultValue": "'200px'"
      },
      {
        "name": "borderRadius",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "borderWidth",
        "type": "number",
        "defaultValue": "0.07"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "70"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "0.93"
      },
      {
        "name": "blur",
        "type": "number",
        "defaultValue": "11"
      },
      {
        "name": "displace",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "backgroundOpacity",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "saturation",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "distortionScale",
        "type": "number",
        "defaultValue": "-180"
      },
      {
        "name": "redOffset",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "greenOffset",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "blueOffset",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "xChannel",
        "type": "'R' | 'G' | 'B'",
        "defaultValue": "'R'"
      },
      {
        "name": "yChannel",
        "type": "'R' | 'G' | 'B'",
        "defaultValue": "'G'"
      },
      {
        "name": "mixBlendMode",
        "type": "| 'normal'",
        "defaultValue": "'difference'"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "轻量",
    "sourceLines": 378,
    "usage": "<script setup lang=\"ts\">\nimport GlassSurface from '@/components/GlassSurface.vue'\n</script>\n\n<template>\n  <GlassSurface :width=\"1\" :height=\"1\" :border-radius=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/glass-surface.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「玻璃表面（GlassSurface）」组件。目标效果：可直接用于界面的「玻璃表面」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 width、height、borderRadius、borderWidth、brightness、opacity、blur、displace、backgroundOpacity、saturation；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/gooey-nav",
    "slug": "gooey-nav",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "GooeyNav",
    "nameCn": "黏液导航",
    "video": "/previews/gooeynav.webm",
    "description": "Navigation indicator morphs with gooey blob transitions between items.",
    "descriptionCn": "可直接用于界面的「黏液导航」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/gooey-nav",
    "dependencies": [],
    "props": [
      {
        "name": "items",
        "type": "GooeyNavItem[]"
      },
      {
        "name": "animationTime",
        "type": "number",
        "defaultValue": "600"
      },
      {
        "name": "particleCount",
        "type": "number",
        "defaultValue": "15"
      },
      {
        "name": "particleDistances",
        "type": "[number, number]",
        "defaultValue": "() => [90"
      },
      {
        "name": "particleR",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "timeVariance",
        "type": "number",
        "defaultValue": "300"
      },
      {
        "name": "colors",
        "type": "number[]",
        "defaultValue": "() => [1"
      },
      {
        "name": "initialActiveIndex",
        "type": "number",
        "defaultValue": "0"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。",
      "使用 blur / filter / backdrop-filter 营造景深、玻璃或发光质感。",
      "动画优先作用于 transform，减少布局抖动并利于 GPU 合成。",
      "关键颜色和尺寸通过 CSS 自定义属性传递，适合接入主题系统。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 390,
    "usage": "<script setup lang=\"ts\">\nimport GooeyNav from '@/components/GooeyNav.vue'\n</script>\n\n<template>\n  <GooeyNav :animation-time=\"1\" :particle-count=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/gooey-nav.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「黏液导航（GooeyNav）」组件。目标效果：可直接用于界面的「黏液导航」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、animationTime、particleCount、particleDistances、particleR、timeVariance、colors、initialActiveIndex；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/infinite-menu",
    "slug": "infinite-menu",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "InfiniteMenu",
    "nameCn": "无限菜单",
    "video": "/previews/infinitemenu.webm",
    "description": "Horizontally looping menu effect that scrolls endlessly with seamless wrap.",
    "descriptionCn": "可直接用于界面的「无限菜单」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/infinite-menu",
    "dependencies": [
      "gl-matrix"
    ],
    "props": [
      {
        "name": "items",
        "type": "InfiniteMenuItem[]",
        "defaultValue": "resolvedItems.value;"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1.0"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 1212,
    "usage": "<script setup lang=\"ts\">\nimport InfiniteMenu from '@/components/InfiniteMenu.vue'\n</script>\n\n<template>\n  <InfiniteMenu :scale=\"1\" />\n</template>\n# 依赖\nnpm i gl-matrix\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/infinite-menu.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「无限菜单（InfiniteMenu）」组件。目标效果：可直接用于界面的「无限菜单」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、scale；实现可使用 gl-matrix；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/magic-bento",
    "slug": "magic-bento",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "MagicBento",
    "nameCn": "魔法便当网格",
    "video": "/previews/magicbento.webm",
    "description": "Interactive bento grid tiles expand + animate with various options.",
    "descriptionCn": "可直接用于界面的「魔法便当网格」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/magic-bento",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "\"glowColor\""
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "label",
        "type": "string"
      },
      {
        "name": "textAutoHide",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "disableAnimations",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。",
      "通过多层渐变塑造高光、色带或背景纹理。",
      "关键颜色和尺寸通过 CSS 自定义属性传递，适合接入主题系统。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 928,
    "usage": "<script setup lang=\"ts\">\nimport MagicBento from '@/components/MagicBento.vue'\n</script>\n\n<template>\n  <MagicBento color=\"示例内容\" title=\"示例内容\" description=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/magic-bento.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「魔法便当网格（MagicBento）」组件。目标效果：可直接用于界面的「魔法便当网格」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、title、description、label、textAutoHide、disableAnimations；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/masonry",
    "slug": "masonry",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "Masonry",
    "nameCn": "瀑布流",
    "video": "/previews/masonry.webm",
    "description": "Responsive masonry layout with animated reflow + gaps optimization.",
    "descriptionCn": "可直接用于界面的「瀑布流」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/masonry",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "items",
        "type": "Item[]"
      },
      {
        "name": "ease",
        "type": "string",
        "defaultValue": "'power3.out'"
      },
      {
        "name": "duration",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "stagger",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "animateFrom",
        "type": "'bottom' | 'top' | 'left' | 'right' | 'center' | 'random'",
        "defaultValue": "'bottom'"
      },
      {
        "name": "scaleOnHover",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "hoverScale",
        "type": "number",
        "defaultValue": "0.95"
      },
      {
        "name": "blurToFocus",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "colorShiftOnHover",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 266,
    "usage": "<script setup lang=\"ts\">\nimport Masonry from '@/components/Masonry.vue'\n</script>\n\n<template>\n  <Masonry ease=\"示例内容\" :duration=\"1\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/masonry.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「瀑布流（Masonry）」组件。目标效果：可直接用于界面的「瀑布流」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、ease、duration、stagger、animateFrom、scaleOnHover、hoverScale、blurToFocus、colorShiftOnHover；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/model-viewer",
    "slug": "model-viewer",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "ModelViewer",
    "nameCn": "三维模型查看器",
    "video": "/previews/modelviewer.webm",
    "description": "Interactive 3D model viewer with orbit zoom, parallax, hover rotation and lighting presets.",
    "descriptionCn": "可直接用于界面的「三维模型查看器」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/model-viewer",
    "dependencies": [
      "three",
      "@tresjs/core",
      "@tresjs/cientos"
    ],
    "props": [
      {
        "name": "url",
        "type": "string",
        "defaultValue": "\"url\""
      },
      {
        "name": "width",
        "type": "number | string",
        "defaultValue": "400"
      },
      {
        "name": "height",
        "type": "number | string",
        "defaultValue": "400"
      },
      {
        "name": "modelXOffset",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "modelYOffset",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "defaultRotationX",
        "type": "number",
        "defaultValue": "-50"
      },
      {
        "name": "defaultRotationY",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "defaultZoom",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "minZoomDistance",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "maxZoomDistance",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "enableMouseParallax",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "enableManualRotation",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "enableHoverRotation",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "enableManualZoom",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "ambientIntensity",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "keyLightIntensity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "fillLightIntensity",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "rimLightIntensity",
        "type": "number",
        "defaultValue": "0.8"
      },
      {
        "name": "environmentPreset",
        "type": "'city' | 'sunset' | 'night' | 'dawn' | 'studio' | 'hangar' | 'urban' | 'modern' | 'none'",
        "defaultValue": "'city'"
      },
      {
        "name": "autoFrame",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "placeholderSrc",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "showScreenshotButton",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "fadeIn",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "autoRotate",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "使用 blur / filter / backdrop-filter 营造景深、玻璃或发光质感。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "较高",
    "sourceLines": 658,
    "usage": "<script setup lang=\"ts\">\nimport ModelViewer from '@/components/ModelViewer.vue'\n</script>\n\n<template>\n  <ModelViewer url=\"示例内容\" :width=\"1\" :height=\"1\" />\n</template>\n# 依赖\nnpm i three @tresjs/core @tresjs/cientos\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/model-viewer.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「三维模型查看器（ModelViewer）」组件。目标效果：可直接用于界面的「三维模型查看器」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 url、width、height、modelXOffset、modelYOffset、defaultRotationX、defaultRotationY、defaultZoom、minZoomDistance、maxZoomDistance；实现可使用 three、@tresjs/core、@tresjs/cientos；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/pill-nav",
    "slug": "pill-nav",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "PillNav",
    "nameCn": "胶囊导航",
    "video": "/previews/pillnav.webm",
    "description": "Minimal pill nav with sliding active highlight + smooth easing.",
    "descriptionCn": "可直接用于界面的「胶囊导航」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/pill-nav",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "logo",
        "type": "string",
        "defaultValue": "logoRef.value;"
      },
      {
        "name": "logoAlt",
        "type": "string",
        "defaultValue": "'Logo'"
      },
      {
        "name": "items",
        "type": "PillNavItem[]",
        "defaultValue": "> {"
      },
      {
        "name": "activeHref",
        "type": "string",
        "defaultValue": "== item.href"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "ease",
        "type": "string",
        "defaultValue": "'power3.easeOut'"
      },
      {
        "name": "baseColor",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "pillColor",
        "type": "string",
        "defaultValue": "'#060010'"
      },
      {
        "name": "hoveredPillTextColor",
        "type": "string",
        "defaultValue": "'#060010'"
      },
      {
        "name": "pillTextColor",
        "type": "string"
      },
      {
        "name": "onMobileMenuClick",
        "type": "() => void"
      },
      {
        "name": "initialLoadAnimation",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "动画优先作用于 transform，减少布局抖动并利于 GPU 合成。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 457,
    "usage": "<script setup lang=\"ts\">\nimport PillNav from '@/components/PillNav.vue'\n</script>\n\n<template>\n  <PillNav logo=\"示例内容\" logo-alt=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/pill-nav.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「胶囊导航（PillNav）」组件。目标效果：可直接用于界面的「胶囊导航」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 logo、logoAlt、items、activeHref、className、ease、baseColor、pillColor、hoveredPillTextColor、pillTextColor；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/pixel-card",
    "slug": "pixel-card",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "PixelCard",
    "nameCn": "像素卡片",
    "video": "/previews/pixelcard.webm",
    "description": "Card content revealed through pixel expansion transition.",
    "descriptionCn": "可直接用于界面的「像素卡片」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/pixel-card",
    "dependencies": [],
    "props": [
      {
        "name": "variant",
        "type": "'default' | 'blue' | 'yellow' | 'pink'",
        "defaultValue": "'default'"
      },
      {
        "name": "gap",
        "type": "number"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "this.getRandomValue(0.1"
      },
      {
        "name": "colors",
        "type": "string"
      },
      {
        "name": "noFocus",
        "type": "boolean"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。",
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 308,
    "usage": "<script setup lang=\"ts\">\nimport PixelCard from '@/components/PixelCard.vue'\n</script>\n\n<template>\n  <PixelCard :gap=\"1\" :speed=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/pixel-card.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「像素卡片（PixelCard）」组件。目标效果：可直接用于界面的「像素卡片」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 variant、gap、speed、colors、noFocus、className；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/profile-card",
    "slug": "profile-card",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "ProfileCard",
    "nameCn": "资料卡片",
    "video": "/previews/profilecard.webm",
    "description": "Animated profile card glare with 3D hover effect.",
    "descriptionCn": "可直接用于界面的「资料卡片」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/profile-card",
    "dependencies": [],
    "props": [
      {
        "name": "avatarUrl",
        "type": "string",
        "defaultValue": "'<Placeholder for avatar URL>'"
      },
      {
        "name": "iconUrl",
        "type": "string",
        "defaultValue": "'<Placeholder for icon URL>'"
      },
      {
        "name": "grainUrl",
        "type": "string",
        "defaultValue": "'<Placeholder for grain URL>'"
      },
      {
        "name": "innerGradient",
        "type": "string"
      },
      {
        "name": "behindGlowEnabled",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "behindGlowColor",
        "type": "string"
      },
      {
        "name": "behindGlowSize",
        "type": "string"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "enableTilt",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "enableMobileTilt",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "mobileTiltSensitivity",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "miniAvatarUrl",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string",
        "defaultValue": "'Javi A. Torres'"
      },
      {
        "name": "title",
        "type": "string",
        "defaultValue": "'Software Engineer'"
      },
      {
        "name": "handle",
        "type": "string",
        "defaultValue": "'javicodes'"
      },
      {
        "name": "status",
        "type": "string",
        "defaultValue": "'Online'"
      },
      {
        "name": "contactText",
        "type": "string",
        "defaultValue": "'Contact'"
      },
      {
        "name": "showUserInfo",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "通过多层渐变塑造高光、色带或背景纹理。",
      "使用 blur / filter / backdrop-filter 营造景深、玻璃或发光质感。",
      "动画优先作用于 transform，减少布局抖动并利于 GPU 合成。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 919,
    "usage": "<script setup lang=\"ts\">\nimport ProfileCard from '@/components/ProfileCard.vue'\n</script>\n\n<template>\n  <ProfileCard avatar-url=\"示例内容\" icon-url=\"示例内容\" grain-url=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/profile-card.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「资料卡片（ProfileCard）」组件。目标效果：可直接用于界面的「资料卡片」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 avatarUrl、iconUrl、grainUrl、innerGradient、behindGlowEnabled、behindGlowColor、behindGlowSize、className、enableTilt、enableMobileTilt；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/reflective-card",
    "slug": "reflective-card",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "ReflectiveCard",
    "nameCn": "反射卡片",
    "video": "/previews/reflectivecard.webm",
    "description": "Metallic card with live webcam reflection and SVG displacement filter.",
    "descriptionCn": "可直接用于界面的「反射卡片」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/reflective-card",
    "dependencies": [
      "lucide-vue-next"
    ],
    "props": [
      {
        "name": "blurStrength",
        "type": "number",
        "defaultValue": "12"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'white'"
      },
      {
        "name": "metalness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "roughness",
        "type": "number",
        "defaultValue": "0.4"
      },
      {
        "name": "overlayColor",
        "type": "string",
        "defaultValue": "'rgba(255"
      },
      {
        "name": "displacementStrength",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "noiseScale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "specularConstant",
        "type": "number",
        "defaultValue": "\"specularConstant\""
      },
      {
        "name": "grayscale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "glassDistortion",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"[cardStyle"
      }
    ],
    "implementation": [
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 202,
    "usage": "<script setup lang=\"ts\">\nimport ReflectiveCard from '@/components/ReflectiveCard.vue'\n</script>\n\n<template>\n  <ReflectiveCard :blur-strength=\"1\" color=\"示例内容\" :metalness=\"1\" />\n</template>\n# 依赖\nnpm i lucide-vue-next\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/reflective-card.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「反射卡片（ReflectiveCard）」组件。目标效果：可直接用于界面的「反射卡片」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 blurStrength、color、metalness、roughness、overlayColor、displacementStrength、noiseScale、specularConstant、grayscale、glassDistortion；实现可使用 lucide-vue-next；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/scroll-stack",
    "slug": "scroll-stack",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "ScrollStack",
    "nameCn": "滚动堆叠",
    "video": "/previews/scrollstack.webm",
    "description": "Overlapping card stack reveals on scroll with depth layering.",
    "descriptionCn": "可直接用于界面的「滚动堆叠」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/scroll-stack",
    "dependencies": [
      "lenis"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "itemDistance",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "itemScale",
        "type": "number",
        "defaultValue": "0.03"
      },
      {
        "name": "itemStackDistance",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "stackPosition",
        "type": "string",
        "defaultValue": "'20%'"
      },
      {
        "name": "scaleEndPosition",
        "type": "string",
        "defaultValue": "'10%'"
      },
      {
        "name": "baseScale",
        "type": "number",
        "defaultValue": "0.85"
      },
      {
        "name": "scaleDuration",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "rotationAmount",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "blurAmount",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "useWindowScroll",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "onStackComplete",
        "type": "() => void"
      }
    ],
    "implementation": [
      "使用 Lenis 协调平滑滚动与组件内部的滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 358,
    "usage": "<script setup lang=\"ts\">\nimport ScrollStack from '@/components/ScrollStack.vue'\n</script>\n\n<template>\n  <ScrollStack :item-distance=\"1\" :item-scale=\"1\" :item-stack-distance=\"1\" />\n</template>\n# 依赖\nnpm i lenis\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/scroll-stack.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「滚动堆叠（ScrollStack）」组件。目标效果：可直接用于界面的「滚动堆叠」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、itemDistance、itemScale、itemStackDistance、stackPosition、scaleEndPosition、baseScale、scaleDuration、rotationAmount、blurAmount；实现可使用 lenis；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/spotlight-card",
    "slug": "spotlight-card",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "SpotlightCard",
    "nameCn": "Spotlight卡片",
    "video": "/previews/spotlightcard.webm",
    "description": "Dynamic spotlight follows cursor casting gradient illumination.",
    "descriptionCn": "可直接用于界面的「Spotlight卡片」组件，适合产品展示、导航、内容集合和运营活动页。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/components/spotlight-card",
    "dependencies": [],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "spotlightColor",
        "type": "string",
        "defaultValue": "'rgba(255"
      }
    ],
    "implementation": [
      "以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "轻量",
    "sourceLines": 68,
    "usage": "<script setup lang=\"ts\">\nimport SpotlightCard from '@/components/SpotlightCard.vue'\n</script>\n\n<template>\n  <SpotlightCard spotlight-color=\"示例内容\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/spotlight-card.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「Spotlight卡片（SpotlightCard）」组件。目标效果：可直接用于界面的「Spotlight卡片」组件，适合产品展示、导航、内容集合和运营活动页。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、spotlightColor；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/stack",
    "slug": "stack",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "Stack",
    "nameCn": "堆叠",
    "video": "/previews/stack.webm",
    "description": "Layered stack with swipe animations, autoplay and smooth transitions.",
    "descriptionCn": "可直接用于界面的「堆叠」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/stack",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "randomRotation",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "sensitivity",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "cardsData",
        "type": "CardData[]",
        "defaultValue": "() => []"
      },
      {
        "name": "animationConfig",
        "type": "AnimationConfig",
        "defaultValue": "() => ({ stiffness: 260"
      },
      {
        "name": "sendToBackOnClick",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "autoplay",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "autoplayDelay",
        "type": "number",
        "defaultValue": "3000"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "mobileClickOnly",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "mobileBreakpoint",
        "type": "number",
        "defaultValue": "768"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "产品功能展示",
      "内容导航与集合",
      "营销落地页"
    ],
    "complexity": "中等",
    "sourceLines": 258,
    "usage": "<script setup lang=\"ts\">\nimport Stack from '@/components/Stack.vue'\n</script>\n\n<template>\n  <Stack :random-rotation=\"true\" :sensitivity=\"1\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/stack.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「堆叠（Stack）」组件。目标效果：可直接用于界面的「堆叠」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 randomRotation、sensitivity、cardsData、animationConfig、sendToBackOnClick、autoplay、autoplayDelay、pauseOnHover、mobileClickOnly、mobileBreakpoint；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/staggered-menu",
    "slug": "staggered-menu",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "StaggeredMenu",
    "nameCn": "错落式菜单",
    "video": "/previews/staggeredmenu.webm",
    "description": "Menu with staggered item animations and smooth transitions on open/close.",
    "descriptionCn": "可直接用于界面的「错落式菜单」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/staggered-menu",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "position",
        "type": "'left' | 'right'",
        "defaultValue": "'right'"
      },
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#9EF2B2'"
      },
      {
        "name": "items",
        "type": "StaggeredMenuItem[]",
        "defaultValue": "() => []"
      },
      {
        "name": "socialItems",
        "type": "StaggeredMenuSocialItem[]",
        "defaultValue": "() => []"
      },
      {
        "name": "displaySocials",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "displayItemNumbering",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "logoUrl",
        "type": "string",
        "defaultValue": "'/src/assets/logos/vuebits-gh-white.svg'"
      },
      {
        "name": "menuButtonColor",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "openMenuButtonColor",
        "type": "string",
        "defaultValue": "'#fff'"
      },
      {
        "name": "accentColor",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "changeMenuColorOnOpen",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "isFixed",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "closeOnClickAway",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "onMenuOpen",
        "type": "() => void"
      },
      {
        "name": "onMenuClose",
        "type": "() => void"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。",
      "使用 blur / filter / backdrop-filter 营造景深、玻璃或发光质感。",
      "动画优先作用于 transform，减少布局抖动并利于 GPU 合成。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 893,
    "usage": "<script setup lang=\"ts\">\nimport StaggeredMenu from '@/components/StaggeredMenu.vue'\n</script>\n\n<template>\n  <StaggeredMenu colors=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/staggered-menu.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「错落式菜单（StaggeredMenu）」组件。目标效果：可直接用于界面的「错落式菜单」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 position、colors、items、socialItems、displaySocials、displayItemNumbering、className、logoUrl、menuButtonColor、openMenuButtonColor；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/stepper",
    "slug": "stepper",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "Stepper",
    "nameCn": "步骤器",
    "video": "/previews/stepper.webm",
    "description": "Animated multi-step progress indicator with active state transitions.",
    "descriptionCn": "可直接用于界面的「步骤器」组件，适合产品展示、导航、内容集合和运营活动页。",
    "docsUrl": "https://vue-bits.dev/components/stepper",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "initialStep",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "onStepChange",
        "type": "(step: number) => void",
        "defaultValue": "() => {}"
      },
      {
        "name": "onFinalStepCompleted",
        "type": "() => void",
        "defaultValue": "() => {}"
      },
      {
        "name": "stepCircleContainerClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "stepContainerClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "backButtonProps",
        "type": "ButtonHTMLAttributes",
        "defaultValue": "() => ({})"
      },
      {
        "name": "nextButtonProps",
        "type": "ButtonHTMLAttributes",
        "defaultValue": "() => ({})"
      },
      {
        "name": "backButtonText",
        "type": "string",
        "defaultValue": "'Back'"
      },
      {
        "name": "nextButtonText",
        "type": "string",
        "defaultValue": "'Continue'"
      },
      {
        "name": "disableStepIndicators",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "renderStepIndicator",
        "type": "Component",
        "defaultValue": "undefined"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "站点导航",
      "流程操作",
      "移动端快捷入口"
    ],
    "complexity": "中等",
    "sourceLines": 266,
    "usage": "<script setup lang=\"ts\">\nimport Stepper from '@/components/Stepper.vue'\n</script>\n\n<template>\n  <Stepper :initial-step=\"1\" step-circle-container-class-name=\"示例内容\" step-container-class-name=\"示例内容\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/stepper.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「步骤器（Stepper）」组件。目标效果：可直接用于界面的「步骤器」组件，适合产品展示、导航、内容集合和运营活动页。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 initialStep、onStepChange、onFinalStepCompleted、stepCircleContainerClassName、stepContainerClassName、contentClassName、footerClassName、backButtonProps、nextButtonProps、backButtonText；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Components/tilted-card",
    "slug": "tilted-card",
    "category": "Components",
    "categoryCn": "界面组件",
    "name": "TiltedCard",
    "nameCn": "倾斜卡片",
    "video": "/previews/tiltedcard.webm",
    "description": "3D perspective tilt card reacting to pointer.",
    "descriptionCn": "可直接用于界面的「倾斜卡片」组件，适合产品展示、导航、内容集合和运营活动页。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/components/tilted-card",
    "dependencies": [
      "motion-v"
    ],
    "props": [
      {
        "name": "imageSrc",
        "type": "string"
      },
      {
        "name": "altText",
        "type": "string",
        "defaultValue": "'Tilted card image'"
      },
      {
        "name": "captionText",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "containerHeight",
        "type": "string",
        "defaultValue": "'300px'"
      },
      {
        "name": "containerWidth",
        "type": "string",
        "defaultValue": "'100%'"
      },
      {
        "name": "imageHeight",
        "type": "string",
        "defaultValue": "'300px'"
      },
      {
        "name": "imageWidth",
        "type": "string",
        "defaultValue": "'300px'"
      },
      {
        "name": "scaleOnHover",
        "type": "number",
        "defaultValue": "1.1"
      },
      {
        "name": "rotateAmplitude",
        "type": "number",
        "defaultValue": "14"
      },
      {
        "name": "showMobileWarning",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "showTooltip",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "overlayContent",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "displayOverlayContent",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 160,
    "usage": "<script setup lang=\"ts\">\nimport TiltedCard from '@/components/TiltedCard.vue'\n</script>\n\n<template>\n  <TiltedCard image-src=\"示例内容\" alt-text=\"示例内容\" caption-text=\"示例内容\" />\n</template>\n# 依赖\nnpm i motion-v\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/tilted-card.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「倾斜卡片（TiltedCard）」组件。目标效果：可直接用于界面的「倾斜卡片」组件，适合产品展示、导航、内容集合和运营活动页。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 imageSrc、altText、captionText、containerHeight、containerWidth、imageHeight、imageWidth、scaleOnHover、rotateAmplitude、showMobileWarning；实现可使用 motion-v；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/aurora",
    "slug": "aurora",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Aurora",
    "nameCn": "Aurora 效果",
    "video": "/previews/aurora.webm",
    "description": "Flowing aurora gradient background.",
    "descriptionCn": "可铺满容器的「Aurora 效果」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/aurora",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "colorStops",
        "type": "string[]",
        "defaultValue": "() => ['#171D22'"
      },
      {
        "name": "amplitude",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "blend",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "time",
        "type": "number",
        "defaultValue": "props.time ?? t * 0.01;"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1.0"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 235,
    "usage": "<script setup lang=\"ts\">\nimport Aurora from '@/components/Aurora.vue'\n</script>\n\n<template>\n  <Aurora color-stops=\"示例内容\" :amplitude=\"1\" :blend=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/aurora.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「Aurora 效果（Aurora）」组件。目标效果：可铺满容器的「Aurora 效果」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 colorStops、amplitude、blend、time、speed；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/balatro",
    "slug": "balatro",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Balatro",
    "nameCn": "小丑牌像素背景",
    "video": "/previews/balatro.webm",
    "description": "The balatro shader, fully customizalbe and interactive.",
    "descriptionCn": "可铺满容器的「小丑牌像素背景」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/balatro",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "spinRotation",
        "type": "number",
        "defaultValue": "-2.0"
      },
      {
        "name": "spinSpeed",
        "type": "number",
        "defaultValue": "7.0"
      },
      {
        "name": "offset",
        "type": "[number, number]",
        "defaultValue": "() => [0.0"
      },
      {
        "name": "color1",
        "type": "string",
        "defaultValue": "'#DE443B'"
      },
      {
        "name": "color2",
        "type": "string",
        "defaultValue": "'#006BB4'"
      },
      {
        "name": "color3",
        "type": "string",
        "defaultValue": "'#162325'"
      },
      {
        "name": "contrast",
        "type": "number",
        "defaultValue": "3.5"
      },
      {
        "name": "lighting",
        "type": "number",
        "defaultValue": "0.4"
      },
      {
        "name": "spinAmount",
        "type": "number",
        "defaultValue": "0.25"
      },
      {
        "name": "pixelFilter",
        "type": "number",
        "defaultValue": "745.0"
      },
      {
        "name": "spinEase",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "isRotate",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "mouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 248,
    "usage": "<script setup lang=\"ts\">\nimport Balatro from '@/components/Balatro.vue'\n</script>\n\n<template>\n  <Balatro :spin-rotation=\"1\" :spin-speed=\"1\" :offset=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/balatro.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「小丑牌像素背景（Balatro）」组件。目标效果：可铺满容器的「小丑牌像素背景」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 spinRotation、spinSpeed、offset、color1、color2、color3、contrast、lighting、spinAmount、pixelFilter；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/ballpit",
    "slug": "ballpit",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Ballpit",
    "nameCn": "球池",
    "video": "/previews/ballpit.webm",
    "description": "Physics ball pit simulation with bouncing colorful spheres.",
    "descriptionCn": "可铺满容器的「球池」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/ballpit",
    "dependencies": [
      "gsap",
      "three"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "followCursor",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "count",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "colors",
        "type": "number[]",
        "defaultValue": "() => [0"
      },
      {
        "name": "ambientColor",
        "type": "number",
        "defaultValue": "0xffffff"
      },
      {
        "name": "ambientIntensity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "lightIntensity",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "materialParams",
        "type": "MaterialParams",
        "defaultValue": "() => ({"
      },
      {
        "name": "minSize",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "maxSize",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "size0",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "gravity",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "friction",
        "type": "number",
        "defaultValue": "0.9975"
      },
      {
        "name": "wallBounce",
        "type": "number",
        "defaultValue": "0.95"
      },
      {
        "name": "maxVelocity",
        "type": "number",
        "defaultValue": "0.15"
      },
      {
        "name": "maxX",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "maxY",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "maxZ",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "controlSphere0",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 927,
    "usage": "<script setup lang=\"ts\">\nimport Ballpit from '@/components/Ballpit.vue'\n</script>\n\n<template>\n  <Ballpit :follow-cursor=\"true\" :count=\"1\" :colors=\"1\" />\n</template>\n# 依赖\nnpm i gsap three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/ballpit.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「球池（Ballpit）」组件。目标效果：可铺满容器的「球池」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、followCursor、count、colors、ambientColor、ambientIntensity、lightIntensity、materialParams、minSize、maxSize；实现可使用 gsap、three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/beams",
    "slug": "beams",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Beams",
    "nameCn": "光束",
    "video": "/previews/beams.webm",
    "description": "Crossing animated ribbons with customizable properties.",
    "descriptionCn": "可铺满容器的「光束」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/beams",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "beamWidth",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "beamHeight",
        "type": "number",
        "defaultValue": "15"
      },
      {
        "name": "beamNumber",
        "type": "number",
        "defaultValue": "12"
      },
      {
        "name": "lightColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "noiseIntensity",
        "type": "number",
        "defaultValue": "1.75"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "rotation",
        "type": "number",
        "defaultValue": "0"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 440,
    "usage": "<script setup lang=\"ts\">\nimport Beams from '@/components/Beams.vue'\n</script>\n\n<template>\n  <Beams :beam-width=\"1\" :beam-height=\"1\" :beam-number=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/beams.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「光束（Beams）」组件。目标效果：可铺满容器的「光束」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 beamWidth、beamHeight、beamNumber、lightColor、speed、noiseIntensity、scale、rotation；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/color-bends",
    "slug": "color-bends",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "ColorBends",
    "nameCn": "色彩弯曲",
    "video": "/previews/colorbends.webm",
    "description": "Vibrant color bends with smooth flowing animation.",
    "descriptionCn": "可铺满容器的「色彩弯曲」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/color-bends",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"props.style\""
      },
      {
        "name": "rotation",
        "type": "number",
        "defaultValue": "90"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "transparent",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "autoRotate",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "frequency",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "warpStrength",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "mouseInfluence",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "parallax",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "noise",
        "type": "number",
        "defaultValue": "0.15"
      },
      {
        "name": "iterations",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "intensity",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "bandWidth",
        "type": "number",
        "defaultValue": "6"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 352,
    "usage": "<script setup lang=\"ts\">\nimport ColorBends from '@/components/ColorBends.vue'\n</script>\n\n<template>\n  <ColorBends :rotation=\"1\" :speed=\"1\" colors=\"示例内容\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/color-bends.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「色彩弯曲（ColorBends）」组件。目标效果：可铺满容器的「色彩弯曲」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、style、rotation、speed、colors、transparent、autoRotate、scale、frequency、warpStrength；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/dark-veil",
    "slug": "dark-veil",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "DarkVeil",
    "nameCn": "暗幕",
    "video": "/previews/darkveil.webm",
    "description": "Subtle dark background with a smooth animation and postprocessing.",
    "descriptionCn": "可铺满容器的「暗幕」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/dark-veil",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "hueShift",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "noiseIntensity",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "scanlineIntensity",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "scanlineFrequency",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "warpAmount",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "resolutionScale",
        "type": "number",
        "defaultValue": "1"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 204,
    "usage": "<script setup lang=\"ts\">\nimport DarkVeil from '@/components/DarkVeil.vue'\n</script>\n\n<template>\n  <DarkVeil :hue-shift=\"1\" :noise-intensity=\"1\" :scanline-intensity=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/dark-veil.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「暗幕（DarkVeil）」组件。目标效果：可铺满容器的「暗幕」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 hueShift、noiseIntensity、scanlineIntensity、speed、scanlineFrequency、warpAmount、resolutionScale；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/dither",
    "slug": "dither",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Dither",
    "nameCn": "抖动像素",
    "video": "/previews/dither.webm",
    "description": "Retro dithered noise shader background.",
    "descriptionCn": "可铺满容器的「抖动像素」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/dither",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "waveSpeed",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "waveFrequency",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "waveAmplitude",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "waveColor",
        "type": "[number, number, number]",
        "defaultValue": "() => [0.5"
      },
      {
        "name": "colorNum",
        "type": "number",
        "defaultValue": "4"
      },
      {
        "name": "pixelSize",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "disableAnimation",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "enableMouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseRadius",
        "type": "number",
        "defaultValue": "1"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 393,
    "usage": "<script setup lang=\"ts\">\nimport Dither from '@/components/Dither.vue'\n</script>\n\n<template>\n  <Dither :wave-speed=\"1\" :wave-frequency=\"1\" :wave-amplitude=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/dither.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「抖动像素（Dither）」组件。目标效果：可铺满容器的「抖动像素」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 waveSpeed、waveFrequency、waveAmplitude、waveColor、colorNum、pixelSize、disableAnimation、enableMouseInteraction、mouseRadius；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/dot-field",
    "slug": "dot-field",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "DotField",
    "nameCn": "点阵场",
    "video": "/previews/dotfield.webm",
    "description": "Interactive dot grid with cursor bulge, glow, sparkle, and wave effects.",
    "descriptionCn": "可铺满容器的「点阵场」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/backgrounds/dot-field",
    "dependencies": [],
    "props": [
      {
        "name": "dotRadius",
        "type": "number"
      },
      {
        "name": "dotSpacing",
        "type": "number"
      },
      {
        "name": "cursorRadius",
        "type": "number"
      },
      {
        "name": "cursorForce",
        "type": "number"
      },
      {
        "name": "bulgeOnly",
        "type": "boolean"
      },
      {
        "name": "bulgeStrength",
        "type": "number"
      },
      {
        "name": "glowRadius",
        "type": "number"
      },
      {
        "name": "sparkle",
        "type": "boolean"
      },
      {
        "name": "waveAmplitude",
        "type": "number"
      },
      {
        "name": "gradientFrom",
        "type": "string"
      },
      {
        "name": "gradientTo",
        "type": "string"
      },
      {
        "name": "glowColor",
        "type": "string"
      },
      {
        "name": "className",
        "type": "string"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。",
      "用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "中等",
    "sourceLines": 362,
    "usage": "<script setup lang=\"ts\">\nimport DotField from '@/components/DotField.vue'\n</script>\n\n<template>\n  <DotField :dot-radius=\"1\" :dot-spacing=\"1\" :cursor-radius=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/dot-field.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「点阵场（DotField）」组件。目标效果：可铺满容器的「点阵场」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 dotRadius、dotSpacing、cursorRadius、cursorForce、bulgeOnly、bulgeStrength、glowRadius、sparkle、waveAmplitude、gradientFrom；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/dot-grid",
    "slug": "dot-grid",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "DotGrid",
    "nameCn": "DotGrid 效果",
    "video": "/previews/dotgrid.webm",
    "description": "Animated dot grid with cursor interactions.",
    "descriptionCn": "可铺满容器的「DotGrid 效果」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/backgrounds/dot-grid",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "dotSize",
        "type": "number",
        "defaultValue": "16"
      },
      {
        "name": "gap",
        "type": "number",
        "defaultValue": "32"
      },
      {
        "name": "baseColor",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "activeColor",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "proximity",
        "type": "number",
        "defaultValue": "150"
      },
      {
        "name": "speedTrigger",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "shockRadius",
        "type": "number",
        "defaultValue": "250"
      },
      {
        "name": "shockStrength",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "maxSpeed",
        "type": "number",
        "defaultValue": "5000"
      },
      {
        "name": "resistance",
        "type": "number",
        "defaultValue": "750"
      },
      {
        "name": "returnDuration",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。",
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 316,
    "usage": "<script setup lang=\"ts\">\nimport DotGrid from '@/components/DotGrid.vue'\n</script>\n\n<template>\n  <DotGrid :dot-size=\"1\" :gap=\"1\" base-color=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/dot-grid.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「DotGrid 效果（DotGrid）」组件。目标效果：可铺满容器的「DotGrid 效果」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 dotSize、gap、baseColor、activeColor、proximity、speedTrigger、shockRadius、shockStrength、maxSpeed、resistance；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/evil-eye",
    "slug": "evil-eye",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "EvilEye",
    "nameCn": "邪眼",
    "video": "/previews/evileye.webm",
    "description": "Procedural evil eye shader with animated iris, slit pupil, and fiery outer glow.",
    "descriptionCn": "可铺满容器的「邪眼」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/evil-eye",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "eyeColor",
        "type": "string",
        "defaultValue": "'#FF6F37'"
      },
      {
        "name": "intensity",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "pupilSize",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "irisWidth",
        "type": "number",
        "defaultValue": "0.25"
      },
      {
        "name": "glowIntensity",
        "type": "number",
        "defaultValue": "0.35"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "0.8"
      },
      {
        "name": "noiseScale",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "pupilFollow",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "flameSpeed",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "defaultValue": "'#000000'"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 304,
    "usage": "<script setup lang=\"ts\">\nimport EvilEye from '@/components/EvilEye.vue'\n</script>\n\n<template>\n  <EvilEye eye-color=\"示例内容\" :intensity=\"1\" :pupil-size=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/evil-eye.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「邪眼（EvilEye）」组件。目标效果：可铺满容器的「邪眼」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 eyeColor、intensity、pupilSize、irisWidth、glowIntensity、scale、noiseScale、pupilFollow、flameSpeed、backgroundColor；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/faulty-terminal",
    "slug": "faulty-terminal",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "FaultyTerminal",
    "nameCn": "故障终端",
    "video": "/previews/faultyterminal.webm",
    "description": "Terminal CRT scanline squares effect with flicker + noise.",
    "descriptionCn": "可铺满容器的「故障终端」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/faulty-terminal",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "gridMul",
        "type": "Vec2",
        "defaultValue": "() => [2"
      },
      {
        "name": "digitSize",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "timeScale",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "pause",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "scanlineIntensity",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "glitchAmount",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "flickerAmount",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "noiseAmp",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "chromaticAberration",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "dither",
        "type": "number | boolean",
        "defaultValue": "0"
      },
      {
        "name": "curvature",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "tint",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "mouseReact",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseStrength",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "dpr",
        "type": "number",
        "defaultValue": "Math.min(window.devicePixelRatio || 1"
      },
      {
        "name": "pageLoadAnimation",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 440,
    "usage": "<script setup lang=\"ts\">\nimport FaultyTerminal from '@/components/FaultyTerminal.vue'\n</script>\n\n<template>\n  <FaultyTerminal :scale=\"1\" :digit-size=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/faulty-terminal.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「故障终端（FaultyTerminal）」组件。目标效果：可铺满容器的「故障终端」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 scale、gridMul、digitSize、timeScale、pause、scanlineIntensity、glitchAmount、flickerAmount、noiseAmp、chromaticAberration；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/ferrofluid",
    "slug": "ferrofluid",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Ferrofluid",
    "nameCn": "磁流体",
    "video": "/previews/ferrofluid.mp4",
    "description": "A churning magnetic fluid traced by glowing contour lines, with a cursor magnet.",
    "descriptionCn": "可铺满容器的「磁流体」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/backgrounds/ferrofluid",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "dpr",
        "type": "number"
      },
      {
        "name": "paused",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#27FF64'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1.6"
      },
      {
        "name": "turbulence",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "fluidity",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "rimWidth",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "sharpness",
        "type": "number",
        "defaultValue": "2.5"
      },
      {
        "name": "shimmer",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "glow",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "flowDirection",
        "type": "FerrofluidFlowDirection",
        "defaultValue": "'down'"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "mouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseStrength",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "mouseRadius",
        "type": "number",
        "defaultValue": "0.35"
      },
      {
        "name": "mouseDampening",
        "type": "number",
        "defaultValue": "0.15"
      },
      {
        "name": "mixBlendMode",
        "type": "string"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 490,
    "usage": "<script setup lang=\"ts\">\nimport Ferrofluid from '@/components/Ferrofluid.vue'\n</script>\n\n<template>\n  <Ferrofluid :dpr=\"1\" :paused=\"true\" colors=\"示例内容\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/ferrofluid.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「磁流体（Ferrofluid）」组件。目标效果：可铺满容器的「磁流体」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、dpr、paused、colors、speed、scale、turbulence、fluidity、rimWidth、sharpness；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/floating-lines",
    "slug": "floating-lines",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "FloatingLines",
    "nameCn": "漂浮线条",
    "video": "/previews/floatinglines.webm",
    "description": "3D floating lines that react to cursor movement.",
    "descriptionCn": "可铺满容器的「漂浮线条」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/backgrounds/floating-lines",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "linesGradient",
        "type": "string[]"
      },
      {
        "name": "enabledWaves",
        "type": "Array<'top' | 'middle' | 'bottom'>",
        "defaultValue": "() => ['top'"
      },
      {
        "name": "lineCount",
        "type": "number | number[]",
        "defaultValue": "() => [6]"
      },
      {
        "name": "lineDistance",
        "type": "number | number[]",
        "defaultValue": "() => [5]"
      },
      {
        "name": "topWavePosition",
        "type": "WavePosition"
      },
      {
        "name": "middleWavePosition",
        "type": "WavePosition"
      },
      {
        "name": "bottomWavePosition",
        "type": "WavePosition",
        "defaultValue": "() => ({ x: 2.0"
      },
      {
        "name": "animationSpeed",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "bendRadius",
        "type": "number",
        "defaultValue": "5.0"
      },
      {
        "name": "bendStrength",
        "type": "number",
        "defaultValue": "-0.5"
      },
      {
        "name": "mouseDamping",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "parallax",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "parallaxStrength",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "mixBlendMode",
        "type": "CSSProperties['mixBlendMode']",
        "defaultValue": "'screen'"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 525,
    "usage": "<script setup lang=\"ts\">\nimport FloatingLines from '@/components/FloatingLines.vue'\n</script>\n\n<template>\n  <FloatingLines lines-gradient=\"示例内容\" :line-count=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/floating-lines.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「漂浮线条（FloatingLines）」组件。目标效果：可铺满容器的「漂浮线条」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 linesGradient、enabledWaves、lineCount、lineDistance、topWavePosition、middleWavePosition、bottomWavePosition、animationSpeed、interactive、bendRadius；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/galaxy",
    "slug": "galaxy",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Galaxy",
    "nameCn": "星系",
    "video": "/previews/galaxy.webm",
    "description": "Parallax realistic starfield with pointer interactions.",
    "descriptionCn": "可铺满容器的「星系」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/backgrounds/galaxy",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "focal",
        "type": "[number, number]",
        "defaultValue": "() => [0.5"
      },
      {
        "name": "rotation",
        "type": "[number, number]",
        "defaultValue": "() => [1.0"
      },
      {
        "name": "starSpeed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "density",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "hueShift",
        "type": "number",
        "defaultValue": "140"
      },
      {
        "name": "disableAnimation",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "mouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "glowIntensity",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "saturation",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "mouseRepulsion",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "twinkleIntensity",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "rotationSpeed",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "repulsionStrength",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "autoCenterRepulsion",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "transparent",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 358,
    "usage": "<script setup lang=\"ts\">\nimport Galaxy from '@/components/Galaxy.vue'\n</script>\n\n<template>\n  <Galaxy :focal=\"1\" :rotation=\"1\" :star-speed=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/galaxy.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「星系（Galaxy）」组件。目标效果：可铺满容器的「星系」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 focal、rotation、starSpeed、density、hueShift、disableAnimation、speed、mouseInteraction、glowIntensity、saturation；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/gradient-blinds",
    "slug": "gradient-blinds",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "GradientBlinds",
    "nameCn": "渐变百叶",
    "video": "/previews/gradientblinds.webm",
    "description": "Layered gradient blinds with spotlight and noise distortion.",
    "descriptionCn": "可铺满容器的「渐变百叶」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/gradient-blinds",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "dpr",
        "type": "number"
      },
      {
        "name": "paused",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "gradientColors",
        "type": "string[]"
      },
      {
        "name": "angle",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "noise",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "blindCount",
        "type": "number",
        "defaultValue": "16"
      },
      {
        "name": "blindMinWidth",
        "type": "number",
        "defaultValue": "60"
      },
      {
        "name": "mouseDampening",
        "type": "number",
        "defaultValue": "0.15"
      },
      {
        "name": "mirrorGradient",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "spotlightRadius",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "spotlightSoftness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "spotlightOpacity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "distortAmount",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "shineDirection",
        "type": "'left' | 'right'",
        "defaultValue": "'left'"
      },
      {
        "name": "mixBlendMode",
        "type": "string",
        "defaultValue": "'lighten'"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 390,
    "usage": "<script setup lang=\"ts\">\nimport GradientBlinds from '@/components/GradientBlinds.vue'\n</script>\n\n<template>\n  <GradientBlinds :dpr=\"1\" :paused=\"true\" gradient-colors=\"示例内容\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/gradient-blinds.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「渐变百叶（GradientBlinds）」组件。目标效果：可铺满容器的「渐变百叶」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、dpr、paused、gradientColors、angle、noise、blindCount、blindMinWidth、mouseDampening、mirrorGradient；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/grainient",
    "slug": "grainient",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Grainient",
    "nameCn": "颗粒渐变",
    "video": "/previews/grainient.webm",
    "description": "Grainy gradient swirls with soft wave distortion.",
    "descriptionCn": "可铺满容器的「颗粒渐变」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/grainient",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "timeSpeed",
        "type": "number",
        "defaultValue": "0.25"
      },
      {
        "name": "colorBalance",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "warpStrength",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "warpFrequency",
        "type": "number",
        "defaultValue": "5.0"
      },
      {
        "name": "warpSpeed",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "warpAmplitude",
        "type": "number",
        "defaultValue": "50.0"
      },
      {
        "name": "blendAngle",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "blendSoftness",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "rotationAmount",
        "type": "number",
        "defaultValue": "500.0"
      },
      {
        "name": "noiseScale",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "grainAmount",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "grainScale",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "grainAnimated",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "contrast",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "gamma",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "saturation",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "centerX",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "centerY",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "zoom",
        "type": "number",
        "defaultValue": "0.9"
      },
      {
        "name": "color1",
        "type": "string",
        "defaultValue": "'#48FF28'"
      },
      {
        "name": "color2",
        "type": "string",
        "defaultValue": "'#2c3d32'"
      },
      {
        "name": "color3",
        "type": "string",
        "defaultValue": "'#65a865'"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 286,
    "usage": "<script setup lang=\"ts\">\nimport Grainient from '@/components/Grainient.vue'\n</script>\n\n<template>\n  <Grainient :time-speed=\"1\" :color-balance=\"1\" :warp-strength=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/grainient.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「颗粒渐变（Grainient）」组件。目标效果：可铺满容器的「颗粒渐变」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 timeSpeed、colorBalance、warpStrength、warpFrequency、warpSpeed、warpAmplitude、blendAngle、blendSoftness、rotationAmount、noiseScale；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/grid-distortion",
    "slug": "grid-distortion",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "GridDistortion",
    "nameCn": "网格扭曲",
    "video": "/previews/griddistortion.webm",
    "description": "Warped grid mesh distorts smoothly reacting to cursor.",
    "descriptionCn": "可铺满容器的「网格扭曲」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/backgrounds/grid-distortion",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "grid",
        "type": "number",
        "defaultValue": "15"
      },
      {
        "name": "mouse",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "strength",
        "type": "number",
        "defaultValue": "0.15"
      },
      {
        "name": "relaxation",
        "type": "number",
        "defaultValue": "0.9"
      },
      {
        "name": "imageSrc",
        "type": "string"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "较高",
    "sourceLines": 291,
    "usage": "<script setup lang=\"ts\">\nimport GridDistortion from '@/components/GridDistortion.vue'\n</script>\n\n<template>\n  <GridDistortion :grid=\"1\" :mouse=\"1\" :strength=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/grid-distortion.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「网格扭曲（GridDistortion）」组件。目标效果：可铺满容器的「网格扭曲」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 grid、mouse、strength、relaxation、imageSrc、className；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/grid-motion",
    "slug": "grid-motion",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "GridMotion",
    "nameCn": "网格运动",
    "video": "/previews/gridmotion.webm",
    "description": "Perspective moving grid lines based on cusror position.",
    "descriptionCn": "可铺满容器的「网格运动」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/grid-motion",
    "dependencies": [
      "gsap"
    ],
    "props": [
      {
        "name": "items",
        "type": "string[]",
        "defaultValue": "() => []"
      },
      {
        "name": "gradientColor",
        "type": "string",
        "defaultValue": "'#222222'"
      }
    ],
    "implementation": [
      "使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 129,
    "usage": "<script setup lang=\"ts\">\nimport GridMotion from '@/components/GridMotion.vue'\n</script>\n\n<template>\n  <GridMotion items=\"示例内容\" gradient-color=\"示例内容\" />\n</template>\n# 依赖\nnpm i gsap\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/grid-motion.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「网格运动（GridMotion）」组件。目标效果：可铺满容器的「网格运动」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 items、gradientColor；实现可使用 gsap；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/grid-scan",
    "slug": "grid-scan",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "GridScan",
    "nameCn": "网格扫描",
    "video": "/previews/gridscan.webm",
    "description": "Animated grid room 3D scan effect and cool interactions.",
    "descriptionCn": "可铺满容器的「网格扫描」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/grid-scan",
    "dependencies": [
      "face-api.js",
      "postprocessing",
      "three"
    ],
    "props": [
      {
        "name": "enableWebcam",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "showPreview",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "modelsPath",
        "type": "string",
        "defaultValue": "'https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights'"
      },
      {
        "name": "sensitivity",
        "type": "number",
        "defaultValue": "0.55"
      },
      {
        "name": "lineThickness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "linesColor",
        "type": "string",
        "defaultValue": "'#2c3d32'"
      },
      {
        "name": "gridScale",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "lineStyle",
        "type": "LineStyle",
        "defaultValue": "'solid'"
      },
      {
        "name": "lineJitter",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "enablePost",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "bloomIntensity",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "bloomThreshold",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "bloomSmoothing",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "chromaticAberration",
        "type": "number",
        "defaultValue": "0.002"
      },
      {
        "name": "noiseIntensity",
        "type": "number",
        "defaultValue": "0.01"
      },
      {
        "name": "scanColor",
        "type": "string",
        "defaultValue": "'#48FF28'"
      },
      {
        "name": "scanOpacity",
        "type": "number",
        "defaultValue": "0.4"
      },
      {
        "name": "scanDirection",
        "type": "ScanDirection",
        "defaultValue": "'pingpong'"
      },
      {
        "name": "scanSoftness",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "scanGlow",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "scanPhaseTaper",
        "type": "number",
        "defaultValue": "0.9"
      },
      {
        "name": "scanDuration",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "scanDelay",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "enableGyro",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "使用 face-api.js 读取视觉特征，再把检测结果传给后处理渲染。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "较高",
    "sourceLines": 926,
    "usage": "<script setup lang=\"ts\">\nimport GridScan from '@/components/GridScan.vue'\n</script>\n\n<template>\n  <GridScan :enable-webcam=\"true\" :show-preview=\"true\" models-path=\"示例内容\" />\n</template>\n# 依赖\nnpm i face-api.js postprocessing three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/grid-scan.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「网格扫描（GridScan）」组件。目标效果：可铺满容器的「网格扫描」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 enableWebcam、showPreview、modelsPath、sensitivity、lineThickness、linesColor、gridScale、lineStyle、lineJitter、enablePost；实现可使用 face-api.js、postprocessing、three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/hyperspeed",
    "slug": "hyperspeed",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Hyperspeed",
    "nameCn": "超空间加速",
    "video": "/previews/hyperspeed.webm",
    "description": "Animated lines continuously moving to simulate hyperspace travel on click hold.",
    "descriptionCn": "可铺满容器的「超空间加速」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/hyperspeed",
    "dependencies": [
      "three",
      "postprocessing"
    ],
    "props": [
      {
        "name": "effectOptions",
        "type": "Partial<HyperspeedOptions>",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 1299,
    "usage": "<script setup lang=\"ts\">\nimport Hyperspeed from '@/components/Hyperspeed.vue'\n</script>\n\n<template>\n  <Hyperspeed />\n</template>\n# 依赖\nnpm i three postprocessing\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/hyperspeed.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「超空间加速（Hyperspeed）」组件。目标效果：可铺满容器的「超空间加速」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 effectOptions；实现可使用 three、postprocessing；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/iridescence",
    "slug": "iridescence",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Iridescence",
    "nameCn": "虹彩",
    "video": "/previews/iridescence.webm",
    "description": "Slick iridescent shader with shifting waves.",
    "descriptionCn": "可铺满容器的「虹彩」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/iridescence",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "color",
        "type": "[number, number, number]",
        "defaultValue": "() => [0.3"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "amplitude",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "mouseReact",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 201,
    "usage": "<script setup lang=\"ts\">\nimport Iridescence from '@/components/Iridescence.vue'\n</script>\n\n<template>\n  <Iridescence :color=\"1\" :speed=\"1\" :amplitude=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/iridescence.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「虹彩（Iridescence）」组件。目标效果：可铺满容器的「虹彩」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、speed、amplitude、mouseReact；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/letter-glitch",
    "slug": "letter-glitch",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "LetterGlitch",
    "nameCn": "字母故障",
    "video": "/previews/letterglitch.webm",
    "description": "Matrix style letter animation.",
    "descriptionCn": "可铺满容器的「字母故障」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/letter-glitch",
    "dependencies": [],
    "props": [
      {
        "name": "glitchColors",
        "type": "string[]",
        "defaultValue": "() => ['#2b4539'"
      },
      {
        "name": "glitchSpeed",
        "type": "number",
        "defaultValue": "50"
      },
      {
        "name": "centerVignette",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "outerVignette",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "smooth",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "中等",
    "sourceLines": 327,
    "usage": "<script setup lang=\"ts\">\nimport LetterGlitch from '@/components/LetterGlitch.vue'\n</script>\n\n<template>\n  <LetterGlitch glitch-colors=\"示例内容\" :glitch-speed=\"1\" :center-vignette=\"true\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/letter-glitch.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「字母故障（LetterGlitch）」组件。目标效果：可铺满容器的「字母故障」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 glitchColors、glitchSpeed、centerVignette、outerVignette、smooth；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/lightfall",
    "slug": "lightfall",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Lightfall",
    "nameCn": "光瀑",
    "video": "/previews/lightfall.webm",
    "description": "Colorful light streaks raining down a glowing tunnel with a cursor light.",
    "descriptionCn": "可铺满容器的「光瀑」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。",
    "docsUrl": "https://vue-bits.dev/backgrounds/lightfall",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "dpr",
        "type": "number"
      },
      {
        "name": "paused",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#A8FFB6'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "defaultValue": "'#0A4A2A'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "streakCount",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "streakWidth",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "streakLength",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "glow",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "density",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "twinkle",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "zoom",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "backgroundGlow",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "mouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseStrength",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "mouseRadius",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "mouseDampening",
        "type": "number",
        "defaultValue": "0.15"
      },
      {
        "name": "mixBlendMode",
        "type": "string"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 472,
    "usage": "<script setup lang=\"ts\">\nimport Lightfall from '@/components/Lightfall.vue'\n</script>\n\n<template>\n  <Lightfall :dpr=\"1\" :paused=\"true\" colors=\"示例内容\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/lightfall.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「光瀑（Lightfall）」组件。目标效果：可铺满容器的「光瀑」动态背景，适合首屏、登录页、活动专题和数据大屏。 它会响应鼠标或触控位置。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 className、dpr、paused、colors、backgroundColor、speed、streakCount、streakWidth、streakLength、glow；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/lightning",
    "slug": "lightning",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Lightning",
    "nameCn": "闪电",
    "video": "/previews/lightning.webm",
    "description": "Procedural lightning bolts with branching and glow flicker.",
    "descriptionCn": "可铺满容器的「闪电」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/lightning",
    "dependencies": [],
    "props": [
      {
        "name": "hue",
        "type": "number",
        "defaultValue": "230"
      },
      {
        "name": "xOffset",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "intensity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "size",
        "type": "number",
        "defaultValue": "1"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "中等",
    "sourceLines": 276,
    "usage": "<script setup lang=\"ts\">\nimport Lightning from '@/components/Lightning.vue'\n</script>\n\n<template>\n  <Lightning :hue=\"1\" :x-offset=\"1\" :speed=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/lightning.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「闪电（Lightning）」组件。目标效果：可铺满容器的「闪电」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 hue、xOffset、speed、intensity、size；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/light-pillar",
    "slug": "light-pillar",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "LightPillar",
    "nameCn": "LightPillar 效果",
    "video": "/previews/lightpillar.webm",
    "description": "Vertical pillar of light with glow effects.",
    "descriptionCn": "可铺满容器的「LightPillar 效果」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/light-pillar",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "topColor",
        "type": "string",
        "defaultValue": "'#5227FF'"
      },
      {
        "name": "bottomColor",
        "type": "string",
        "defaultValue": "'#FF9FFC'"
      },
      {
        "name": "intensity",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "rotationSpeed",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "glowAmount",
        "type": "number",
        "defaultValue": "0.005"
      },
      {
        "name": "pillarWidth",
        "type": "number",
        "defaultValue": "3.0"
      },
      {
        "name": "pillarHeight",
        "type": "number",
        "defaultValue": "0.4"
      },
      {
        "name": "noiseIntensity",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "mixBlendMode",
        "type": "CSSProperties['mixBlendMode']",
        "defaultValue": "'screen'"
      },
      {
        "name": "pillarRotation",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "quality",
        "type": "'low' | 'medium' | 'high'",
        "defaultValue": "'high'"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 428,
    "usage": "<script setup lang=\"ts\">\nimport LightPillar from '@/components/LightPillar.vue'\n</script>\n\n<template>\n  <LightPillar top-color=\"示例内容\" bottom-color=\"示例内容\" :intensity=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/light-pillar.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「LightPillar 效果（LightPillar）」组件。目标效果：可铺满容器的「LightPillar 效果」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 topColor、bottomColor、intensity、rotationSpeed、interactive、className、glowAmount、pillarWidth、pillarHeight、noiseIntensity；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/light-rays",
    "slug": "light-rays",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "LightRays",
    "nameCn": "Light光线",
    "video": "/previews/lightrays.webm",
    "description": "Volumetric light rays/beams with customizable direction.",
    "descriptionCn": "可铺满容器的「Light光线」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/light-rays",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "raysOrigin",
        "type": "RaysOrigin",
        "defaultValue": "'top-center'"
      },
      {
        "name": "raysColor",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "raysSpeed",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "lightSpread",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "rayLength",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "pulsating",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "fadeDistance",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "saturation",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "followMouse",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseInfluence",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "noiseAmount",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "distortion",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 506,
    "usage": "<script setup lang=\"ts\">\nimport LightRays from '@/components/LightRays.vue'\n</script>\n\n<template>\n  <LightRays rays-color=\"示例内容\" :rays-speed=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/light-rays.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「Light光线（LightRays）」组件。目标效果：可铺满容器的「Light光线」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 raysOrigin、raysColor、raysSpeed、lightSpread、rayLength、pulsating、fadeDistance、saturation、followMouse、mouseInfluence；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/line-waves",
    "slug": "line-waves",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "LineWaves",
    "nameCn": "Line波纹",
    "video": "/previews/linewaves.webm",
    "description": "Animated line wave pattern with colorful warped distortion.",
    "descriptionCn": "可铺满容器的「Line波纹」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/line-waves",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "innerLineCount",
        "type": "number",
        "defaultValue": "32.0"
      },
      {
        "name": "outerLineCount",
        "type": "number",
        "defaultValue": "36.0"
      },
      {
        "name": "warpIntensity",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "rotation",
        "type": "number",
        "defaultValue": "-45"
      },
      {
        "name": "edgeFadeWidth",
        "type": "number",
        "defaultValue": "0.0"
      },
      {
        "name": "colorCycleSpeed",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "color1",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "color2",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "color3",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "enableMouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseInfluence",
        "type": "number",
        "defaultValue": "2.0"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 290,
    "usage": "<script setup lang=\"ts\">\nimport LineWaves from '@/components/LineWaves.vue'\n</script>\n\n<template>\n  <LineWaves :speed=\"1\" :inner-line-count=\"1\" :outer-line-count=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/line-waves.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「Line波纹（LineWaves）」组件。目标效果：可铺满容器的「Line波纹」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 speed、innerLineCount、outerLineCount、warpIntensity、rotation、edgeFadeWidth、colorCycleSpeed、brightness、color1、color2；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/liquid-chrome",
    "slug": "liquid-chrome",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "LiquidChrome",
    "nameCn": "液态铬",
    "video": "/previews/liquidchrome.webm",
    "description": "Liquid metallic chrome shader with flowing reflective surface.",
    "descriptionCn": "可铺满容器的「液态铬」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/liquid-chrome",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "baseColor",
        "type": "number[]",
        "defaultValue": "() => [0.1"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "amplitude",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "frequencyX",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "frequencyY",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 200,
    "usage": "<script setup lang=\"ts\">\nimport LiquidChrome from '@/components/LiquidChrome.vue'\n</script>\n\n<template>\n  <LiquidChrome :base-color=\"1\" :speed=\"1\" :amplitude=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/liquid-chrome.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「液态铬（LiquidChrome）」组件。目标效果：可铺满容器的「液态铬」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 baseColor、speed、amplitude、frequencyX、frequencyY、interactive；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/liquid-ether",
    "slug": "liquid-ether",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "LiquidEther",
    "nameCn": "液态以太",
    "video": "/previews/liquidether.webm",
    "description": "Interactive liquid shader with flowing distortion and customizable colors.",
    "descriptionCn": "可铺满容器的「液态以太」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/liquid-ether",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "mouseForce",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "cursorSize",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "isViscous",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "viscous",
        "type": "number",
        "defaultValue": "30"
      },
      {
        "name": "iterationsViscous",
        "type": "number",
        "defaultValue": "32"
      },
      {
        "name": "iterationsPoisson",
        "type": "number",
        "defaultValue": "32"
      },
      {
        "name": "dt",
        "type": "number",
        "defaultValue": "0.014"
      },
      {
        "name": "BFECC",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "resolution",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "isBounce",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "colors",
        "type": "string[]",
        "defaultValue": "() => ['#5227FF'"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "autoDemo",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "autoSpeed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "autoIntensity",
        "type": "number",
        "defaultValue": "2.2"
      },
      {
        "name": "takeoverDuration",
        "type": "number",
        "defaultValue": "0.25"
      },
      {
        "name": "autoResumeDelay",
        "type": "number",
        "defaultValue": "1000"
      },
      {
        "name": "autoRampDuration",
        "type": "number",
        "defaultValue": "0.6"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 1205,
    "usage": "<script setup lang=\"ts\">\nimport LiquidEther from '@/components/LiquidEther.vue'\n</script>\n\n<template>\n  <LiquidEther :mouse-force=\"1\" :cursor-size=\"1\" :is-viscous=\"true\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/liquid-ether.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「液态以太（LiquidEther）」组件。目标效果：可铺满容器的「液态以太」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 mouseForce、cursorSize、isViscous、viscous、iterationsViscous、iterationsPoisson、dt、BFECC、resolution、isBounce；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/orb",
    "slug": "orb",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Orb",
    "nameCn": "光球",
    "video": "/previews/orb.webm",
    "description": "Floating energy orb with customizable hover effect.",
    "descriptionCn": "可铺满容器的「光球」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/orb",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "hue",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "hoverIntensity",
        "type": "number",
        "defaultValue": "0.2"
      },
      {
        "name": "rotateOnHover",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "forceHoverState",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "defaultValue": "'#000000'"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 371,
    "usage": "<script setup lang=\"ts\">\nimport Orb from '@/components/Orb.vue'\n</script>\n\n<template>\n  <Orb :hue=\"1\" :hover-intensity=\"1\" :rotate-on-hover=\"true\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/orb.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「光球（Orb）」组件。目标效果：可铺满容器的「光球」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 hue、hoverIntensity、rotateOnHover、forceHoverState、backgroundColor；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/particles",
    "slug": "particles",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Particles",
    "nameCn": "粒子",
    "video": "/previews/particles.webm",
    "description": "Configurable particle system.",
    "descriptionCn": "可铺满容器的「粒子」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/particles",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "particleCount",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "particleSpread",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "particleColors",
        "type": "string[]",
        "defaultValue": "() => ['#ffffff'"
      },
      {
        "name": "moveParticlesOnHover",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "particleHoverFactor",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "alphaParticles",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "particleBaseSize",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "sizeRandomness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "cameraDistance",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "disableRotation",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "pixelRatio",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 261,
    "usage": "<script setup lang=\"ts\">\nimport Particles from '@/components/Particles.vue'\n</script>\n\n<template>\n  <Particles :particle-count=\"1\" :particle-spread=\"1\" :speed=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/particles.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「粒子（Particles）」组件。目标效果：可铺满容器的「粒子」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 particleCount、particleSpread、speed、particleColors、moveParticlesOnHover、particleHoverFactor、alphaParticles、particleBaseSize、sizeRandomness、cameraDistance；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/pixel-blast",
    "slug": "pixel-blast",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "PixelBlast",
    "nameCn": "像素爆破",
    "video": "/previews/pixelblast.webm",
    "description": "Exploding pixel particle bursts with optional liquid postprocessing.",
    "descriptionCn": "可铺满容器的「像素爆破」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/pixel-blast",
    "dependencies": [
      "postprocessing",
      "three"
    ],
    "props": [
      {
        "name": "variant",
        "type": "PixelBlastVariant",
        "defaultValue": "'square'"
      },
      {
        "name": "pixelSize",
        "type": "number",
        "defaultValue": "3"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#B19EEF'"
      },
      {
        "name": "className",
        "type": "string"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "\"style\""
      },
      {
        "name": "antialias",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "patternScale",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "patternDensity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "liquid",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "liquidStrength",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "liquidRadius",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "pixelSizeJitter",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "enableRipples",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "rippleIntensityScale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "rippleThickness",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "rippleSpeed",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "liquidWobbleSpeed",
        "type": "number",
        "defaultValue": "4.5"
      },
      {
        "name": "autoPauseOffscreen",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "transparent",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "edgeFade",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "noiseAmount",
        "type": "number",
        "defaultValue": "0"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 678,
    "usage": "<script setup lang=\"ts\">\nimport PixelBlast from '@/components/PixelBlast.vue'\n</script>\n\n<template>\n  <PixelBlast :pixel-size=\"1\" color=\"示例内容\" />\n</template>\n# 依赖\nnpm i postprocessing three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/pixel-blast.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「像素爆破（PixelBlast）」组件。目标效果：可铺满容器的「像素爆破」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 variant、pixelSize、color、className、style、antialias、patternScale、patternDensity、liquid、liquidStrength；实现可使用 postprocessing、three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/pixel-snow",
    "slug": "pixel-snow",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "PixelSnow",
    "nameCn": "像素雪",
    "video": "/previews/pixelsnow.webm",
    "description": "Falling pixelated snow effect with customizable density and speed.",
    "descriptionCn": "可铺满容器的「像素雪」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/pixel-snow",
    "dependencies": [
      "three"
    ],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#ffffff'"
      },
      {
        "name": "flakeSize",
        "type": "number",
        "defaultValue": "0.01"
      },
      {
        "name": "minFlakeSize",
        "type": "number",
        "defaultValue": "1.25"
      },
      {
        "name": "pixelResolution",
        "type": "number",
        "defaultValue": "200"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1.25"
      },
      {
        "name": "depthFade",
        "type": "number",
        "defaultValue": "8"
      },
      {
        "name": "farPlane",
        "type": "number",
        "defaultValue": "20"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "gamma",
        "type": "number",
        "defaultValue": "0.4545"
      },
      {
        "name": "density",
        "type": "number",
        "defaultValue": "0.3"
      },
      {
        "name": "variant",
        "type": "'square' | 'round' | 'snowflake'",
        "defaultValue": "'square'"
      },
      {
        "name": "direction",
        "type": "number",
        "defaultValue": "125"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 278,
    "usage": "<script setup lang=\"ts\">\nimport PixelSnow from '@/components/PixelSnow.vue'\n</script>\n\n<template>\n  <PixelSnow color=\"示例内容\" :flake-size=\"1\" :min-flake-size=\"1\" />\n</template>\n# 依赖\nnpm i three\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/pixel-snow.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「像素雪（PixelSnow）」组件。目标效果：可铺满容器的「像素雪」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、flakeSize、minFlakeSize、pixelResolution、speed、depthFade、farPlane、brightness、gamma、density；实现可使用 three；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/plasma",
    "slug": "plasma",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Plasma",
    "nameCn": "等离子",
    "video": "/previews/plasma.webm",
    "description": "Organic plasma gradients swirl + morph with smooth turbulence.",
    "descriptionCn": "可铺满容器的「等离子」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/plasma",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#9EF2BE'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "direction",
        "type": "'forward' | 'reverse' | 'pingpong'",
        "defaultValue": "'forward'"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "mouseInteractive",
        "type": "boolean",
        "defaultValue": "true"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 225,
    "usage": "<script setup lang=\"ts\">\nimport Plasma from '@/components/Plasma.vue'\n</script>\n\n<template>\n  <Plasma color=\"示例内容\" :speed=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/plasma.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「等离子（Plasma）」组件。目标效果：可铺满容器的「等离子」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、speed、direction、scale、opacity、mouseInteractive；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/plasma-wave",
    "slug": "plasma-wave",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "PlasmaWave",
    "nameCn": "等离子波",
    "video": "/previews/plasmawave.webm",
    "description": "Raymarched plasma waves with dual-wave interference and OGL.",
    "descriptionCn": "可铺满容器的「等离子波」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/plasma-wave",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "xOffset",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "yOffset",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "rotationDeg",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "focalLength",
        "type": "number",
        "defaultValue": "0.8"
      },
      {
        "name": "speed1",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "speed2",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "dir2",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "bend1",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "bend2",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "colors",
        "type": "[string, string]",
        "defaultValue": "() => ['#A855F7'"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 255,
    "usage": "<script setup lang=\"ts\">\nimport PlasmaWave from '@/components/PlasmaWave.vue'\n</script>\n\n<template>\n  <PlasmaWave :x-offset=\"1\" :y-offset=\"1\" :rotation-deg=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/plasma-wave.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「等离子波（PlasmaWave）」组件。目标效果：可铺满容器的「等离子波」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 xOffset、yOffset、rotationDeg、focalLength、speed1、speed2、dir2、bend1、bend2、colors；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/prism",
    "slug": "prism",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Prism",
    "nameCn": "棱镜",
    "video": "/previews/prism.webm",
    "description": "Rotating prism with configurable intensity, size, and colors.",
    "descriptionCn": "可铺满容器的「棱镜」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/prism",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "height",
        "type": "number",
        "defaultValue": "3.5"
      },
      {
        "name": "baseWidth",
        "type": "number",
        "defaultValue": "5.5"
      },
      {
        "name": "animationType",
        "type": "'rotate' | 'hover' | '3drotate'",
        "defaultValue": "'rotate'"
      },
      {
        "name": "glow",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "offset",
        "type": "{ x?: number",
        "defaultValue": "() => ({ x: 0"
      },
      {
        "name": "noise",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "transparent",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "3.6"
      },
      {
        "name": "hueShift",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "colorFrequency",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "hoverStrength",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "inertia",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "bloom",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "suspendWhenOffscreen",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "timeScale",
        "type": "number",
        "defaultValue": "0.5"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 460,
    "usage": "<script setup lang=\"ts\">\nimport Prism from '@/components/Prism.vue'\n</script>\n\n<template>\n  <Prism :height=\"1\" :base-width=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/prism.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「棱镜（Prism）」组件。目标效果：可铺满容器的「棱镜」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 height、baseWidth、animationType、glow、offset、noise、transparent、scale、hueShift、colorFrequency；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/prismatic-burst",
    "slug": "prismatic-burst",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "PrismaticBurst",
    "nameCn": "棱镜爆发",
    "video": "/previews/prismaticburst.webm",
    "description": "Burst of light rays with controllable color, distortion, amount.",
    "descriptionCn": "可铺满容器的「棱镜爆发」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/prismatic-burst",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "intensity",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "animationType",
        "type": "AnimationType",
        "defaultValue": "'rotate3d'"
      },
      {
        "name": "colors",
        "type": "string[]"
      },
      {
        "name": "distort",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "paused",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "offset",
        "type": "Offset",
        "defaultValue": "() => ({ x: 0"
      },
      {
        "name": "hoverDampness",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "rayCount",
        "type": "number"
      },
      {
        "name": "mixBlendMode",
        "type": "CSSProperties['mixBlendMode'] | 'none'",
        "defaultValue": "'lighten'"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。",
      "用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 470,
    "usage": "<script setup lang=\"ts\">\nimport PrismaticBurst from '@/components/PrismaticBurst.vue'\n</script>\n\n<template>\n  <PrismaticBurst :intensity=\"1\" :speed=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/prismatic-burst.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「棱镜爆发（PrismaticBurst）」组件。目标效果：可铺满容器的「棱镜爆发」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 intensity、speed、animationType、colors、distort、paused、offset、hoverDampness、rayCount、mixBlendMode；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/radar",
    "slug": "radar",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Radar",
    "nameCn": "雷达",
    "video": "/previews/radar.webm",
    "description": "Radar sweep effect with concentric rings, radial spokes, and a rotating beam.",
    "descriptionCn": "可铺满容器的「雷达」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/radar",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "ringCount",
        "type": "number",
        "defaultValue": "10.0"
      },
      {
        "name": "spokeCount",
        "type": "number",
        "defaultValue": "10.0"
      },
      {
        "name": "ringThickness",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "spokeThickness",
        "type": "number",
        "defaultValue": "0.01"
      },
      {
        "name": "sweepSpeed",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "sweepWidth",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "sweepLobes",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "defaultValue": "'#000000'"
      },
      {
        "name": "falloff",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "enableMouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseInfluence",
        "type": "number",
        "defaultValue": "0.1"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 251,
    "usage": "<script setup lang=\"ts\">\nimport Radar from '@/components/Radar.vue'\n</script>\n\n<template>\n  <Radar :speed=\"1\" :scale=\"1\" :ring-count=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/radar.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「雷达（Radar）」组件。目标效果：可铺满容器的「雷达」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 speed、scale、ringCount、spokeCount、ringThickness、spokeThickness、sweepSpeed、sweepWidth、sweepLobes、color；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/ripple-grid",
    "slug": "ripple-grid",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "RippleGrid",
    "nameCn": "涟漪Grid",
    "video": "/previews/ripplegrid.webm",
    "description": "A grid that continuously animates with a ripple effect.",
    "descriptionCn": "可铺满容器的「涟漪Grid」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/ripple-grid",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "enableRainbow",
        "type": "boolean",
        "defaultValue": "false"
      },
      {
        "name": "gridColor",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "rippleIntensity",
        "type": "number",
        "defaultValue": "0.05"
      },
      {
        "name": "gridSize",
        "type": "number",
        "defaultValue": "10.0"
      },
      {
        "name": "gridThickness",
        "type": "number",
        "defaultValue": "15.0"
      },
      {
        "name": "fadeDistance",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "vignetteStrength",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "glowIntensity",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "gridRotation",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "mouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseInteractionRadius",
        "type": "number",
        "defaultValue": "1"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "较高",
    "sourceLines": 276,
    "usage": "<script setup lang=\"ts\">\nimport RippleGrid from '@/components/RippleGrid.vue'\n</script>\n\n<template>\n  <RippleGrid :enable-rainbow=\"true\" grid-color=\"示例内容\" :ripple-intensity=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/ripple-grid.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「涟漪Grid（RippleGrid）」组件。目标效果：可铺满容器的「涟漪Grid」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 enableRainbow、gridColor、rippleIntensity、gridSize、gridThickness、fadeDistance、vignetteStrength、glowIntensity、opacity、gridRotation；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/shape-grid",
    "slug": "shape-grid",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "ShapeGrid",
    "nameCn": "形状网格",
    "video": "/previews/squares.webm",
    "description": "Animated grid with shape variants (square, hexagon, circle, triangle) + direction customization.",
    "descriptionCn": "可铺满容器的「形状网格」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/shape-grid",
    "dependencies": [],
    "props": [
      {
        "name": "direction",
        "type": "'diagonal' | 'up' | 'right' | 'down' | 'left'",
        "defaultValue": "'right'"
      },
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "borderColor",
        "type": "CanvasStrokeStyle",
        "defaultValue": "'#999'"
      },
      {
        "name": "squareSize",
        "type": "number",
        "defaultValue": "40"
      },
      {
        "name": "hoverFillColor",
        "type": "CanvasStrokeStyle",
        "defaultValue": "'#222'"
      },
      {
        "name": "shape",
        "type": "'square' | 'hexagon' | 'circle' | 'triangle'",
        "defaultValue": "'square'"
      },
      {
        "name": "hoverTrailAmount",
        "type": "number",
        "defaultValue": "0"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "作品与案例展示",
      "商品或内容卡片",
      "品牌活动页"
    ],
    "complexity": "中等",
    "sourceLines": 520,
    "usage": "<script setup lang=\"ts\">\nimport ShapeGrid from '@/components/ShapeGrid.vue'\n</script>\n\n<template>\n  <ShapeGrid :speed=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/shape-grid.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「形状网格（ShapeGrid）」组件。目标效果：可铺满容器的「形状网格」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 direction、speed、borderColor、squareSize、hoverFillColor、shape、hoverTrailAmount；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/side-rays",
    "slug": "side-rays",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "SideRays",
    "nameCn": "侧向光束",
    "video": "/previews/siderays.webm",
    "description": "Animated light rays emanating from the side with customizable colors and speed.",
    "descriptionCn": "可铺满容器的「侧向光束」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/side-rays",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "2.5"
      },
      {
        "name": "rayColor1",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "rayColor2",
        "type": "string",
        "defaultValue": "'#A8FFB6'"
      },
      {
        "name": "intensity",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "spread",
        "type": "number",
        "defaultValue": "2"
      },
      {
        "name": "origin",
        "type": "SideRaysOrigin",
        "defaultValue": "'top-right'"
      },
      {
        "name": "tilt",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "saturation",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "blend",
        "type": "number",
        "defaultValue": "0.75"
      },
      {
        "name": "falloff",
        "type": "number",
        "defaultValue": "2.0"
      },
      {
        "name": "opacity",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。",
      "用 IntersectionObserver 延迟启动动画，避免离屏渲染。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 328,
    "usage": "<script setup lang=\"ts\">\nimport SideRays from '@/components/SideRays.vue'\n</script>\n\n<template>\n  <SideRays :speed=\"1\" ray-color1=\"示例内容\" ray-color2=\"示例内容\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/side-rays.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「侧向光束（SideRays）」组件。目标效果：可铺满容器的「侧向光束」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 speed、rayColor1、rayColor2、intensity、spread、origin、tilt、saturation、blend、falloff；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/silk",
    "slug": "silk",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Silk",
    "nameCn": "丝绸",
    "video": "/previews/silk.webm",
    "description": "Smooth waves background with soft lighting.",
    "descriptionCn": "可铺满容器的「丝绸」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/silk",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "5"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "color",
        "type": "string",
        "defaultValue": "'#7B7481'"
      },
      {
        "name": "noiseIntensity",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "rotation",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 274,
    "usage": "<script setup lang=\"ts\">\nimport Silk from '@/components/Silk.vue'\n</script>\n\n<template>\n  <Silk :speed=\"1\" :scale=\"1\" color=\"示例内容\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/silk.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「丝绸（Silk）」组件。目标效果：可铺满容器的「丝绸」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 speed、scale、color、noiseIntensity、rotation、className、style；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/soft-aurora",
    "slug": "soft-aurora",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "SoftAurora",
    "nameCn": "柔和极光",
    "video": "/previews/softaurora.webm",
    "description": "Soft aurora borealis shader with 3D Perlin noise and cosine gradient palettes.",
    "descriptionCn": "可铺满容器的「柔和极光」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/soft-aurora",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "speed",
        "type": "number",
        "defaultValue": "0.6"
      },
      {
        "name": "scale",
        "type": "number",
        "defaultValue": "1.5"
      },
      {
        "name": "brightness",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "color1",
        "type": "string",
        "defaultValue": "'#f7f7f7'"
      },
      {
        "name": "color2",
        "type": "string",
        "defaultValue": "'#27FF64'"
      },
      {
        "name": "noiseFrequency",
        "type": "number",
        "defaultValue": "2.5"
      },
      {
        "name": "noiseAmplitude",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "bandHeight",
        "type": "number",
        "defaultValue": "0.5"
      },
      {
        "name": "bandSpread",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "octaveDecay",
        "type": "number",
        "defaultValue": "0.1"
      },
      {
        "name": "layerOffset",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "colorSpeed",
        "type": "number",
        "defaultValue": "1.0"
      },
      {
        "name": "enableMouseInteraction",
        "type": "boolean",
        "defaultValue": "true"
      },
      {
        "name": "mouseInfluence",
        "type": "number",
        "defaultValue": "0.25"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 307,
    "usage": "<script setup lang=\"ts\">\nimport SoftAurora from '@/components/SoftAurora.vue'\n</script>\n\n<template>\n  <SoftAurora :speed=\"1\" :scale=\"1\" :brightness=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/soft-aurora.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「柔和极光（SoftAurora）」组件。目标效果：可铺满容器的「柔和极光」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 speed、scale、brightness、color1、color2、noiseFrequency、noiseAmplitude、bandHeight、bandSpread、octaveDecay；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/threads",
    "slug": "threads",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Threads",
    "nameCn": "丝线",
    "video": "/previews/threads.webm",
    "description": "Animated pattern of lines forming a fabric-like motion.",
    "descriptionCn": "可铺满容器的「丝线」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/threads",
    "dependencies": [
      "ogl"
    ],
    "props": [
      {
        "name": "color",
        "type": "[number, number, number]",
        "defaultValue": "() => [1"
      },
      {
        "name": "amplitude",
        "type": "number",
        "defaultValue": "1"
      },
      {
        "name": "distance",
        "type": "number",
        "defaultValue": "0"
      },
      {
        "name": "enableMouseInteraction",
        "type": "boolean",
        "defaultValue": "false"
      }
    ],
    "implementation": [
      "使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。"
    ],
    "style": [
      "主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "较高",
    "sourceLines": 287,
    "usage": "<script setup lang=\"ts\">\nimport Threads from '@/components/Threads.vue'\n</script>\n\n<template>\n  <Threads :color=\"1\" :amplitude=\"1\" :distance=\"1\" />\n</template>\n# 依赖\nnpm i ogl\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/threads.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「丝线（Threads）」组件。目标效果：可铺满容器的「丝线」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 color、amplitude、distance、enableMouseInteraction；实现可使用 ogl；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  },
  {
    "id": "Backgrounds/waves",
    "slug": "waves",
    "category": "Backgrounds",
    "categoryCn": "动态背景",
    "name": "Waves",
    "nameCn": "波纹",
    "video": "/previews/waves.webm",
    "description": "Layered lines that form smooth wave patterns with animation.",
    "descriptionCn": "可铺满容器的「波纹」动态背景，适合首屏、登录页、活动专题和数据大屏。",
    "docsUrl": "https://vue-bits.dev/backgrounds/waves",
    "dependencies": [],
    "props": [
      {
        "name": "lineColor",
        "type": "string",
        "defaultValue": "'black'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "defaultValue": "'transparent'"
      },
      {
        "name": "waveSpeedX",
        "type": "number",
        "defaultValue": "0.0125"
      },
      {
        "name": "waveSpeedY",
        "type": "number",
        "defaultValue": "0.005"
      },
      {
        "name": "waveAmpX",
        "type": "number",
        "defaultValue": "32"
      },
      {
        "name": "waveAmpY",
        "type": "number",
        "defaultValue": "16"
      },
      {
        "name": "xGap",
        "type": "number",
        "defaultValue": "10"
      },
      {
        "name": "yGap",
        "type": "number",
        "defaultValue": "32"
      },
      {
        "name": "friction",
        "type": "number",
        "defaultValue": "0.925"
      },
      {
        "name": "tension",
        "type": "number",
        "defaultValue": "0.005"
      },
      {
        "name": "maxCursorMove",
        "type": "number",
        "defaultValue": "100"
      },
      {
        "name": "style",
        "type": "CSSProperties",
        "defaultValue": "() => ({})"
      },
      {
        "name": "className",
        "type": "string",
        "defaultValue": "''"
      }
    ],
    "implementation": [
      "通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。"
    ],
    "style": [
      "样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。"
    ],
    "useCases": [
      "全屏首屏背景",
      "登录与等待页面",
      "数据大屏氛围层"
    ],
    "complexity": "中等",
    "sourceLines": 423,
    "usage": "<script setup lang=\"ts\">\nimport Waves from '@/components/Waves.vue'\n</script>\n\n<template>\n  <Waves line-color=\"示例内容\" background-color=\"示例内容\" :wave-speed-x=\"1\" />\n</template>\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/waves.json",
    "aiPrompt": "请为我的 Vue 3 + Vite + TypeScript 项目实现一个「波纹（Waves）」组件。目标效果：可铺满容器的「波纹」动态背景，适合首屏、登录页、活动专题和数据大屏。 技术要求：使用 <script setup lang=\"ts\">；核心可配置项包括 lineColor、backgroundColor、waveSpeedX、waveSpeedY、waveAmpX、waveAmpY、xGap、yGap、friction、tension；实现可使用 尽量不新增第三方依赖；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。"
  }
] satisfies ComponentEntry[];
