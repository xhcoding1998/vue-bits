import code from '@/content/TextAnimations/FallingText/FallingText.vue?raw';
import { createCodeObject } from '@/types/code';

export const fallingText = createCodeObject(code, 'TextAnimations/FallingText', {
  installation: `npm install matter-js @types/matter-js`,
  usage: `<template>
  <FallingText
    text="灵件碎片收录可交互的 Vue 动画组件，并提供中文解析、完整源码与 AI 从零复刻提示词。"
    :highlight-words="['灵件碎片', 'Vue', '中文解析', '完整源码', 'AI']"
    highlight-class="highlighted"
    trigger="hover"
    background-color="transparent"
    :wireframes="false"
    :gravity="0.56"
    font-size="2rem"
    :mouse-constraint-stiffness="0.9"
  />
</template>

<script setup>
import FallingText from './FallingText.vue'
</script>`
});
