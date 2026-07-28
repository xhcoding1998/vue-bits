export const locale = 'zh-CN' as const;

export const messages = {
  componentGuide: {
    eyebrow: '组件说明',
    implementation: '核心实现',
    interaction: '交互行为',
    styling: '样式与颜色',
    scenarios: '适用场景',
    sourceReference: '参考源码',
    sourceReferenceDescription: '源码用于理解实现，不需要安装或导入本组件库。',
    aiRebuild: 'AI 从零复刻'
  },
  tabs: {
    preview: '实时预览',
    source: '完整源码',
    prompt: 'AI 提示词'
  }
} as const;

const EXACT_CONTROL_LABELS: Record<string, string> = {
  Text: '文本',
  Size: '尺寸',
  Color: '颜色',
  Background: '背景色',
  Speed: '速度',
  Duration: '持续时间',
  Delay: '延迟',
  Direction: '方向',
  Distance: '距离',
  Intensity: '强度',
  Opacity: '透明度',
  Scale: '缩放',
  Threshold: '触发阈值',
  Rotation: '旋转角度',
  Frequency: '频率',
  Amplitude: '振幅',
  Blend: '混合程度',
  Count: '数量',
  Gravity: '重力',
  Friction: '摩擦力',
  Stagger: '错开延迟',
  Ease: '缓动曲线',
  Category: '分类',
  'Color 1': '颜色 1',
  'Color 2': '颜色 2',
  'Color 3': '颜色 3',
  'Enable Waves': '启用波浪',
  'Animate By': '动画拆分方式',
  'On Hover': '悬停行为',
  'Enable Mouse Interaction': '启用鼠标交互',
  'Mouse Interaction': '鼠标交互',
  'Auto Animate': '自动播放',
  'Animate Opacity': '透明度动画',
  'Enable Hover Effect': '启用悬停效果',
  'Display Cursor': '显示光标',
  'Show Scrollbar': '显示滚动条',
  'Keyboard Navigation': '键盘导航',
  'Fade Items': '边缘淡出',
  'Particle Shape': '粒子形状',
  'Particle Size': '粒子尺寸',
  'Particle Variance': '粒子尺寸差异',
  'Particle Count': '粒子数量',
  'Wave Speed': '波浪速度',
  'Wave Amplitude': '波浪振幅',
  'Rotation Speed': '旋转速度',
  'Animation Delay': '动画延迟',
  'Animation Stagger': '动画错开时间',
  'Initial Opacity': '初始透明度',
  'Border Radius': '圆角',
  'Glow Radius': '发光半径',
  'Glow Intensity': '发光强度',
  'Fill Color': '填充颜色',
  'Inner Color': '内部颜色',
  'Shadow Color': '阴影颜色',
  'Shadow Blur': '阴影模糊',
  'Pixelation': '像素化程度',
  'Wall Bounce': '边界反弹',
  'Trail Count': '拖尾数量',
  'Ball Count': '球体数量',
  'Spark Color': '火花颜色',
  'Spark Size': '火花尺寸',
  'Spark Count': '火花数量',
  'Spark Radius': '火花扩散半径',
  'Noise Intensity': '噪声强度',
  'Noise Scale': '噪声缩放',
  'Mouse Influence': '鼠标影响强度',
  'Warp Strength': '扭曲强度',
  'Single Color': '单色模式',
  'Demo Content': '演示内容'
};

const CONTROL_WORDS: Array<[RegExp, string]> = [
  [/\bEnable\b/gi, '启用'],
  [/\bShow\b/gi, '显示'],
  [/\bDisplay\b/gi, '显示'],
  [/\bAuto\b/gi, '自动'],
  [/\bAnimation\b/gi, '动画'],
  [/\bMouse\b/gi, '鼠标'],
  [/\bHover\b/gi, '悬停'],
  [/\bParticle\b/gi, '粒子'],
  [/\bBackground\b/gi, '背景'],
  [/\bColor\b/gi, '颜色'],
  [/\bRadius\b/gi, '半径'],
  [/\bStrength\b/gi, '强度'],
  [/\bIntensity\b/gi, '强度'],
  [/\bOpacity\b/gi, '透明度'],
  [/\bDuration\b/gi, '持续时间'],
  [/\bDelay\b/gi, '延迟'],
  [/\bSpeed\b/gi, '速度'],
  [/\bSize\b/gi, '尺寸'],
  [/\bWidth\b/gi, '宽度'],
  [/\bHeight\b/gi, '高度'],
  [/\bCount\b/gi, '数量'],
  [/\bScale\b/gi, '缩放'],
  [/\bRotation\b/gi, '旋转'],
  [/\bDirection\b/gi, '方向'],
  [/\bDistance\b/gi, '距离'],
  [/\bThreshold\b/gi, '阈值'],
  [/\bFrequency\b/gi, '频率'],
  [/\bAmplitude\b/gi, '振幅'],
  [/\bSpacing\b/gi, '间距'],
  [/\bOffset\b/gi, '偏移'],
  [/\bBlur\b/gi, '模糊'],
  [/\bNoise\b/gi, '噪声'],
  [/\bText\b/gi, '文本'],
  [/\bReverse\b/gi, '反向'],
  [/\bShape\b/gi, '形状']
];

export function translateControlLabel(label = '') {
  if (!label) return '';
  if (EXACT_CONTROL_LABELS[label]) return EXACT_CONTROL_LABELS[label];

  let translated = label;
  for (const [pattern, replacement] of CONTROL_WORDS) {
    translated = translated.replace(pattern, replacement);
  }
  return translated;
}

export function humanizePropName(name = '') {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

export function translatePropDescription(name: string, _description = '') {
  const normalized = name.toLowerCase();
  const label = translateControlLabel(humanizePropName(name));

  if (/^(on|handle)[a-z]/i.test(name)) {
    return `当「${label}」对应事件发生时触发的回调函数。`;
  }
  if (/color|palette|gradient|fill|stroke|background|shadow/.test(normalized)) {
    return `设置组件的${label}，用于控制最终视觉配色。`;
  }
  if (/speed|duration|delay|stagger|ease|frequency/.test(normalized)) {
    return `控制${label}，直接影响动画的时间节奏。`;
  }
  if (/width|height|size|radius|spacing|gap|distance|offset|scale|count/.test(normalized)) {
    return `设置${label}，用于调整组件的尺寸、数量或空间关系。`;
  }
  if (/intensity|strength|amplitude|force|gravity|friction|blur|opacity|threshold|blend|noise/.test(normalized)) {
    return `控制${label}，用于调整视觉效果或交互反馈的强弱。`;
  }
  if (/enable|disable|show|display|follow|auto|reverse|loop|interactive|is[A-Z]/.test(name)) {
    return `决定是否启用「${label}」行为。`;
  }
  if (/text|label|content|title/.test(normalized)) {
    return `设置组件中显示的${label}内容。`;
  }

  return `配置组件的「${label}」参数；修改后可在实时预览中查看效果。`;
}

