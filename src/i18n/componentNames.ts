const COMPONENT_NAMES_ZH: Record<string, string> = {
  Index: '组件索引',

  // 文字动画
  'ASCII Text': 'ASCII 字符文字',
  'Blur Text': '模糊文字',
  'Circular Text': '环形文字',
  'Count Up': '数字递增',
  'Curved Loop': '曲线循环文字',
  'Decrypted Text': '解密文字',
  'Falling Text': '坠落文字',
  'Fuzzy Text': '模糊抖动文字',
  'Glitch Text': '故障文字',
  'Gradient Text': '渐变文字',
  'Rotating Text': '轮换文字',
  'Scramble Text': '扰乱文字',
  'Scroll Float': '滚动浮现文字',
  'Scroll Reveal': '滚动揭示文字',
  'Scroll Velocity': '滚动速度文字',
  'Shiny Text': '流光文字',
  Shuffle: '乱序文字',
  'Split Text': '拆分文字',
  'Text Cursor': '文字光标',
  'Text Pressure': '压感文字',
  'Text Type': '打字机文字',
  'True Focus': '焦点切换文字',
  'Variable Proximity': '邻近可变字体',

  // 交互动效
  'Animated Content': '内容入场动画',
  Antigravity: '反重力',
  'Blob Cursor': '液态光标',
  'Click Spark': '点击火花',
  Crosshair: '十字准星',
  Cubes: '立方体集群',
  'Electric Border': '电流边框',
  'Fade Content': '淡入内容',
  'Ghost Cursor': '幽灵光标',
  'Glare Hover': '悬停掠光',
  'Gradual Blur': '渐进模糊',
  'Image Trail': '图片拖尾',
  'Laser Flow': '激光流',
  'Logo Loop': '标志循环带',
  'Magic Rings': '魔法圆环',
  Magnet: '磁吸',
  'Magnet Lines': '磁力线',
  'Meta Balls': '元球',
  'Metallic Paint': '金属液态绘制',
  Noise: '噪点纹理',
  'Orbit Images': '轨道图片',
  'Pixel Trail': '像素拖尾',
  'Pixel Transition': '像素转场',
  Ribbons: '丝带轨迹',
  'Shape Blur': '形状模糊',
  'Splash Cursor': '飞溅光标',
  'Star Border': '星光边框',
  'Sticker Peel': '贴纸剥离',
  Strands: '光丝',
  'Target Cursor': '目标光标',

  // UI 组件
  'Animated List': '动画列表',
  'Border Glow': '边框辉光',
  'Bounce Cards': '弹跳卡片',
  'Bubble Menu': '气泡菜单',
  'Card Nav': '卡片导航',
  'Card Swap': '卡片轮换',
  Carousel: '轮播',
  'Chroma Grid': '炫彩网格',
  'Circular Gallery': '环形画廊',
  Counter: '计数器',
  'Decay Card': '消散卡片',
  Dock: '程序坞',
  'Dome Gallery': '穹顶画廊',
  'Elastic Slider': '弹性滑块',
  'Flowing Menu': '流动菜单',
  'Flying Posters': '飞行海报',
  Folder: '文件夹',
  'Glass Icons': '玻璃图标',
  'Glass Surface': '玻璃面板',
  'Gooey Nav': '黏液导航',
  'Infinite Menu': '无限菜单',
  'Magic Bento': '魔法便当网格',
  Masonry: '瀑布流',
  'Model Viewer': '模型查看器',
  'Pill Nav': '胶囊导航',
  'Pixel Card': '像素卡片',
  'Profile Card': '个人资料卡',
  'Reflective Card': '反光卡片',
  'Scroll Stack': '滚动堆叠',
  'Spotlight Card': '聚光卡片',
  Stack: '堆叠卡片',
  'Staggered Menu': '错落菜单',
  Stepper: '步骤器',
  'Tilted Card': '倾斜卡片',

  // 动态背景
  Aurora: '极光',
  Balatro: '幻彩波纹',
  Ballpit: '球池',
  Beams: '光束',
  'Color Bends': '色彩弯曲',
  'Dark Veil': '暗幕',
  Dither: '抖动渐变',
  'Dot Field': '点阵场',
  'Dot Grid': '点阵网格',
  'Evil Eye': '魔眼',
  'Faulty Terminal': '故障终端',
  Ferrofluid: '磁流体',
  'Floating Lines': '浮动线条',
  Galaxy: '星系',
  'Gradient Blinds': '渐变百叶',
  Grainient: '颗粒渐变',
  'Grid Distortion': '网格扭曲',
  'Grid Motion': '网格流动',
  'Grid Scan': '网格扫描',
  Hyperspeed: '超空间',
  Iridescence: '虹彩',
  'Letter Glitch': '字符故障',
  'Light Pillar': '光柱',
  'Light Rays': '光线',
  Lightfall: '流光瀑布',
  Lightning: '闪电',
  'Line Waves': '线条波浪',
  'Liquid Chrome': '液态铬',
  'Liquid Ether': '液态以太',
  Orb: '光球',
  Particles: '粒子',
  'Pixel Blast': '像素爆发',
  'Pixel Snow': '像素雪',
  Plasma: '等离子',
  'Plasma Wave': '等离子波',
  Prism: '棱镜',
  'Prismatic Burst': '棱彩爆发',
  Radar: '雷达',
  'Ripple Grid': '涟漪网格',
  'Shape Grid': '形状网格',
  'Side Rays': '侧向光线',
  Silk: '丝绸',
  'Soft Aurora': '柔和极光',
  Threads: '线束',
  Waves: '波浪'
};

const normalizeComponentName = (name: string) => name.replace(/[^a-z0-9]/gi, '').toLowerCase();

const COMPONENT_NAME_LOOKUP = new Map(
  Object.entries(COMPONENT_NAMES_ZH).map(([englishName, chineseName]) => [
    normalizeComponentName(englishName),
    { englishName, chineseName }
  ])
);

const titleCaseFromSlug = (name: string) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export function componentNameEnglish(name: string): string {
  const fallback = titleCaseFromSlug(name);
  return COMPONENT_NAME_LOOKUP.get(normalizeComponentName(name))?.englishName ?? fallback;
}

export function componentNameZh(name: string): string {
  return COMPONENT_NAME_LOOKUP.get(normalizeComponentName(name))?.chineseName ?? componentNameEnglish(name);
}

export function componentNameBilingual(name: string, separator = ' · '): string {
  const englishName = componentNameEnglish(name);
  const chineseName = componentNameZh(name);
  return chineseName === englishName ? englishName : `${chineseName}${separator}${englishName}`;
}

export const componentNameEntries = Object.entries(COMPONENT_NAMES_ZH);
