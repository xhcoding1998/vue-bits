import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const upstream = join(root, "work", "vue-bits-upstream");
const infoPath = join(upstream, "src", "constants", "Information.ts");
const dependencyPath = join(upstream, "src", "constants", "componentDependencies.ts");
const contentRoot = join(upstream, "src", "content");
const videoRoot = join(upstream, "public", "assets", "videos");

const CATEGORY_CN = {
  TextAnimations: "文字动画",
  Animations: "交互动效",
  Components: "界面组件",
  Backgrounds: "动态背景",
};

const SPECIAL_NAMES = {
  ASCIIText: "字符画文字",
  AnimatedContent: "内容入场",
  Antigravity: "反重力",
  Balatro: "小丑牌像素背景",
  ColorBends: "色彩弯曲",
  CountUp: "数字递增",
  CurvedLoop: "曲线循环文字",
  DarkVeil: "暗幕",
  DecryptedText: "解密文字",
  Dither: "抖动像素",
  DotField: "点阵场",
  ElectricBorder: "电流边框",
  EvilEye: "邪眼",
  FadeContent: "内容淡入",
  FallingText: "重力下落文字",
  FaultyTerminal: "故障终端",
  Ferrofluid: "磁流体",
  FloatingLines: "漂浮线条",
  FluidGlass: "流体玻璃",
  FuzzyText: "噪点文字",
  GhostCursor: "幽灵光标",
  GlareHover: "悬停眩光",
  GooeyNav: "黏液导航",
  GradientBlinds: "渐变百叶",
  Grainient: "颗粒渐变",
  GridDistortion: "网格扭曲",
  GridMotion: "网格运动",
  GridScan: "网格扫描",
  Hyperspeed: "超空间加速",
  Iridescence: "虹彩",
  LaserFlow: "激光流",
  LetterGlitch: "字母故障",
  Lightfall: "光瀑",
  LiquidChrome: "液态铬",
  LiquidEther: "液态以太",
  MagicBento: "魔法便当网格",
  MagicRings: "魔法环",
  MagnetLines: "磁力线",
  MetallicPaint: "金属漆",
  MetaBalls: "融球",
  ModelViewer: "三维模型查看器",
  OrbitImages: "轨道图片",
  PixelBlast: "像素爆破",
  PixelSnow: "像素雪",
  PlasmaWave: "等离子波",
  PrismaticBurst: "棱镜爆发",
  ReflectiveCard: "反射卡片",
  ScrambleText: "扰乱文字",
  ScrollFloat: "滚动漂浮文字",
  ScrollReveal: "滚动揭示文字",
  ScrollVelocity: "滚动速度文字",
  ShapeBlur: "形状模糊",
  ShapeGrid: "形状网格",
  ShinyText: "流光文字",
  SideRays: "侧向光束",
  SoftAurora: "柔和极光",
  SplashCursor: "流体泼溅光标",
  StaggeredMenu: "错落式菜单",
  StickerPeel: "贴纸揭角",
  Strands: "丝缕",
  TargetCursor: "目标光标",
  TextPressure: "压力文字",
  TextType: "打字机文字",
  TrueFocus: "真焦点",
  VariableProximity: "邻近可变文字",
};

const TOKEN_CN = {
  Animated: "动态",
  Animation: "动画",
  Background: "背景",
  Ballpit: "球池",
  Beams: "光束",
  Blob: "流体",
  Blur: "模糊",
  Border: "边框",
  Bounce: "弹跳",
  Bubble: "气泡",
  Card: "卡片",
  Carousel: "轮播",
  Chroma: "色彩",
  Circular: "环形",
  Click: "点击",
  Counter: "计数器",
  Crosshair: "准星",
  Cubes: "立方体",
  Cursor: "光标",
  Decay: "衰减",
  Dock: "程序坞",
  Dome: "穹顶",
  Elastic: "弹性",
  Flowing: "流动",
  Flying: "飞行",
  Folder: "文件夹",
  Galaxy: "星系",
  Glass: "玻璃",
  Glitch: "故障",
  Glow: "辉光",
  Gradient: "渐变",
  Icons: "图标",
  Image: "图片",
  Infinite: "无限",
  Lightning: "闪电",
  Lines: "线条",
  Logo: "标志",
  Loop: "循环",
  Magnet: "磁吸",
  Masonry: "瀑布流",
  Menu: "菜单",
  Motion: "运动",
  Nav: "导航",
  Noise: "噪声",
  Orb: "光球",
  Particles: "粒子",
  Pill: "胶囊",
  Pixel: "像素",
  Plasma: "等离子",
  Posters: "海报",
  Pressure: "压力",
  Prism: "棱镜",
  Profile: "资料",
  Radar: "雷达",
  Rays: "光线",
  Ribbons: "丝带",
  Ripple: "涟漪",
  Rotating: "轮换",
  Scroll: "滚动",
  Shiny: "流光",
  Shuffle: "洗牌",
  Silk: "丝绸",
  Slider: "滑块",
  Spark: "火花",
  Split: "拆分",
  Stack: "堆叠",
  Stepper: "步骤器",
  Surface: "表面",
  Text: "文字",
  Threads: "丝线",
  Tilted: "倾斜",
  Trail: "拖尾",
  Transition: "转场",
  Velocity: "速度",
  Waves: "波纹",
};

const normalize = value => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const slugify = value =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-|-$/g, "");

function translateName(name) {
  if (SPECIAL_NAMES[name]) return SPECIAL_NAMES[name];
  const tokens = name.match(/[A-Z]+(?=[A-Z][a-z]|\b)|[A-Z][a-z]+|[a-z]+|\d+/g) ?? [name];
  const translated = tokens.map(token => TOKEN_CN[token] ?? token).join("");
  return /[\u4e00-\u9fff]/.test(translated) ? translated : `${name} 效果`;
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

function findBalancedBlock(source, startIndex) {
  const open = source.indexOf("{", startIndex);
  if (open < 0) return "";
  let depth = 0;
  for (let index = open; index < source.length; index += 1) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") depth -= 1;
    if (depth === 0) return source.slice(open + 1, index);
  }
  return "";
}

function extractProps(source) {
  const marker =
    source.search(/(?:type|interface)\s+\w*Props\b/) >= 0
      ? source.search(/(?:type|interface)\s+\w*Props\b/)
      : source.search(/defineProps\s*<\s*{/);
  if (marker < 0) return [];

  const block = findBalancedBlock(source, marker);
  const defaultsMarker = source.search(/withDefaults\s*\(\s*defineProps/);
  const defaultsBlock = defaultsMarker >= 0 ? findBalancedBlock(source, source.indexOf("{", defaultsMarker + 20)) : "";
  const props = [];

  for (const match of block.matchAll(/(?:^|\n)\s*([A-Za-z_$][\w$]*)\??\s*:\s*([^;\n]+)[;,]?/g)) {
    const [, name, rawType] = match;
    if (name === "style" && rawType.length > 100) continue;
    const defaultMatch =
      defaultsBlock.match(new RegExp(`(?:^|\\n)\\s*${name}\\s*:\\s*([^,\\n]+)`)) ??
      source.match(new RegExp(`\\b${name}\\s*=\\s*([^,}\\n]+)`));
    props.push({
      name,
      type: rawType.trim().replace(/\s+/g, " ").slice(0, 100),
      ...(defaultMatch ? { defaultValue: defaultMatch[1].trim().slice(0, 80) } : {}),
    });
  }

  return props.slice(0, 24);
}

function detectImplementation(source, dependencies) {
  const notes = [];
  const has = value => dependencies.includes(value);

  if (has("three") || has("@tresjs/core")) notes.push("使用 Three.js / TresJS 建立 WebGL 场景，并在渲染循环中更新几何体、材质或相机。");
  if (has("ogl")) notes.push("使用 OGL 驱动轻量 WebGL 管线，核心视觉通常由顶点/片元着色器计算。");
  if (has("gsap")) notes.push("使用 GSAP timeline / tween 管理缓动、错峰、指针跟随或滚动进度。");
  if (has("motion-v")) notes.push("使用 Motion for Vue 声明关键帧与弹簧过渡，由响应式状态驱动动画。");
  if (has("matter-js")) notes.push("使用 Matter.js 建立重力、碰撞和回弹等二维物理行为。");
  if (has("lenis")) notes.push("使用 Lenis 协调平滑滚动与组件内部的滚动进度。");
  if (has("face-api.js")) notes.push("使用 face-api.js 读取视觉特征，再把检测结果传给后处理渲染。");
  if (source.includes("IntersectionObserver")) notes.push("用 IntersectionObserver 延迟启动动画，避免离屏渲染。");
  if (source.includes("ResizeObserver")) notes.push("用 ResizeObserver 同步容器尺寸，保证响应式布局和画布清晰度。");
  if (/<canvas\b/i.test(source) && !notes.some(note => note.includes("WebGL"))) notes.push("通过 Canvas 绘制逐帧视觉，并在卸载时停止 requestAnimationFrame。");
  if (/<svg\b/i.test(source)) notes.push("用 SVG 路径、遮罩或滤镜构建可缩放的矢量效果。");
  if (!notes.length) notes.push("以 Vue 3 响应式状态配合 CSS transform / transition 实现，不依赖重型运行时。");

  return notes.slice(0, 4);
}

function detectStyle(source, styleBlock, dependencies) {
  const notes = [];
  if (!styleBlock.trim() && (dependencies.includes("three") || dependencies.includes("ogl"))) {
    notes.push("主要视觉由 WebGL 绘制，CSS 只负责容器尺寸、定位和层级。");
  } else if (/<style[^>]*scoped/i.test(source)) {
    notes.push("样式封装在 scoped CSS 中，便于复制到业务项目后独立调整。");
  } else {
    notes.push("样式与模板结构紧密配合，接入时应保留根容器的定位和溢出规则。");
  }
  if (/linear-gradient|radial-gradient|conic-gradient/i.test(styleBlock)) notes.push("通过多层渐变塑造高光、色带或背景纹理。");
  if (/filter:|backdrop-filter:/i.test(styleBlock)) notes.push("使用 blur / filter / backdrop-filter 营造景深、玻璃或发光质感。");
  if (/transform:|translate|rotate|scale/i.test(styleBlock)) notes.push("动画优先作用于 transform，减少布局抖动并利于 GPU 合成。");
  if (/--[\w-]+\s*:/i.test(styleBlock)) notes.push("关键颜色和尺寸通过 CSS 自定义属性传递，适合接入主题系统。");
  if (/@keyframes/i.test(styleBlock)) notes.push("包含 CSS keyframes，可在 reduced-motion 模式下降级为静态状态。");
  return notes.slice(0, 4);
}

function makeDescription(category, nameCn, sourceDescription) {
  const lead = {
    TextAnimations: `把文字拆分后呈现「${nameCn}」效果`,
    Animations: `为页面内容加入「${nameCn}」交互`,
    Components: `可直接用于界面的「${nameCn}」组件`,
    Backgrounds: `可铺满容器的「${nameCn}」动态背景`,
  }[category];
  const suffix = {
    TextAnimations: "，适合首屏标题、数据强调、品牌口号和滚动叙事。",
    Animations: "，适合落地页、作品集和需要强化反馈的关键区域。",
    Components: "，适合产品展示、导航、内容集合和运营活动页。",
    Backgrounds: "，适合首屏、登录页、活动专题和数据大屏。",
  }[category];
  const hint = /cursor|pointer/i.test(sourceDescription) ? " 它会响应鼠标或触控位置。" : "";
  return `${lead}${suffix}${hint}`;
}

function makeUseCases(category, name) {
  const common = {
    TextAnimations: ["品牌首屏标题", "数字与核心卖点强调", "滚动叙事段落"],
    Animations: ["交互反馈", "作品集与活动页", "关键内容入场"],
    Components: ["产品功能展示", "内容导航与集合", "营销落地页"],
    Backgrounds: ["全屏首屏背景", "登录与等待页面", "数据大屏氛围层"],
  }[category];
  if (/Card|Grid|Gallery|Masonry|Posters/.test(name)) return ["作品与案例展示", "商品或内容卡片", "品牌活动页"];
  if (/Nav|Menu|Dock|Stepper/.test(name)) return ["站点导航", "流程操作", "移动端快捷入口"];
  if (/Cursor|Hover|Magnet|Click/.test(name)) return ["鼠标交互反馈", "CTA 强调", "创意作品集"];
  return common;
}

function makeUsage(name, slug, props, dependencies) {
  const importLine = `import ${name} from '@/components/${name}.vue'`;
  const simpleProps = props
    .filter(prop => !/^on[A-Z]/.test(prop.name) && !["className", "style"].includes(prop.name))
    .slice(0, 3)
    .map(prop => {
      const kebab = prop.name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      if (/boolean/.test(prop.type)) return ` :${kebab}="true"`;
      if (/number/.test(prop.type)) return ` :${kebab}="1"`;
      if (/string/.test(prop.type)) return ` ${kebab}="示例内容"`;
      return "";
    })
    .join("");
  const dependencyLine = dependencies.length ? `\n# 依赖\nnpm i ${dependencies.join(" ")}` : "";
  return `<script setup lang="ts">\n${importLine}\n</script>\n\n<template>\n  <${name}${simpleProps} />\n</template>${dependencyLine}\n\n# 官方安装\nnpx jsrepo add https://vue-bits.dev/r/${slug}.json`;
}

function makePrompt(entry) {
  const propList = entry.props.slice(0, 10).map(prop => prop.name).join("、") || "颜色、尺寸、速度与开关";
  const dependencyText = entry.dependencies.length ? entry.dependencies.join("、") : "尽量不新增第三方依赖";
  return `请为我的 Vue 3 + Vite + TypeScript 项目实现一个「${entry.nameCn}（${entry.name}）」组件。目标效果：${entry.descriptionCn} 技术要求：使用 <script setup lang="ts">；核心可配置项包括 ${propList}；实现可使用 ${dependencyText}；样式放在 scoped CSS 中并允许通过 CSS 变量覆盖主题；正确支持中文文案、移动端和触控操作；加入 prefers-reduced-motion 降级；Canvas/WebGL、Observer、事件监听与 requestAnimationFrame 必须在组件卸载时释放。请不要输出 React 代码。最终给出完整 .vue 单文件组件、依赖安装命令、最小使用示例和关键实现说明。`;
}

const informationSource = await readFile(infoPath, "utf8");
const dependencySource = await readFile(dependencyPath, "utf8");
const availableVideos = new Set(await readdir(videoRoot));

const dependencyMap = {};
for (const match of dependencySource.matchAll(/^\s*(?:'([^']+)'|([a-z][\w-]*)):\s*\[([^\]]*)\]/gm)) {
  const key = match[1] ?? match[2];
  dependencyMap[key] = [...match[3].matchAll(/'([^']+)'/g)].map(item => item[1]);
}

const sourceFiles = (await walk(contentRoot)).filter(file => file.endsWith(".vue"));
const sourceIndex = new Map();
for (const file of sourceFiles) {
  const key = normalize(relative(contentRoot, file).replace(/\.vue$/, ""));
  sourceIndex.set(key, file);
  sourceIndex.set(normalize(`${basename(dirname(file))}/${basename(file, ".vue")}`), file);
}

const metadataPattern =
  /'((?:TextAnimations|Animations|Components|Backgrounds)\/[^']+)':\s*{([\s\S]*?)\n\s*}(?:,|\n};)/g;

const catalog = [];
for (const match of informationSource.matchAll(metadataPattern)) {
  const [, metadataKey, metadataBlock] = match;
  const readField = field =>
    metadataBlock.match(new RegExp(`${field}:\\s*(['"])([\\s\\S]*?)\\1(?:,|\\n)`))?.[2] ?? "";
  const videoUrl = readField("videoUrl");
  const descriptionRaw = readField("description");
  const category = readField("category");
  const name = readField("name");
  const docsUrl = readField("docsUrl");
  if (!videoUrl || !category || !name || !docsUrl) continue;
  const description = descriptionRaw.replace(/\\'/g, "'").replace(/\s+/g, " ").trim();
  const slug = docsUrl.split("/").filter(Boolean).at(-1) ?? slugify(name);
  const requestedVideo = basename(videoUrl);
  const localVideo = availableVideos.has(requestedVideo)
    ? requestedVideo
    : availableVideos.has(requestedVideo.replace(/\.webm$/i, ".mp4"))
      ? requestedVideo.replace(/\.webm$/i, ".mp4")
      : requestedVideo;
  const sourceFile =
    sourceIndex.get(normalize(metadataKey)) ??
    sourceFiles.find(file => normalize(basename(file, ".vue")) === normalize(name));
  if (!sourceFile) continue;

  const source = await readFile(sourceFile, "utf8");
  const styleBlock = source.match(/<style[^>]*>([\s\S]*?)<\/style>/i)?.[1] ?? "";
  const props = extractProps(source);
  const dependencies = dependencyMap[slug] ?? [];
  const nameCn = translateName(name);
  const descriptionCn = makeDescription(category, nameCn, description);
  const entry = {
    id: `${category}/${slug}`,
    slug,
    category,
    categoryCn: CATEGORY_CN[category] ?? category,
    name,
    nameCn,
    video: `/previews/${localVideo}`,
    description,
    descriptionCn,
    docsUrl,
    dependencies,
    props,
    implementation: detectImplementation(source, dependencies),
    style: detectStyle(source, styleBlock, dependencies),
    useCases: makeUseCases(category, name),
    complexity:
      dependencies.some(dependency =>
        ["three", "ogl", "postprocessing", "face-api.js", "@tresjs/core"].includes(dependency)
      )
        ? "较高"
        : dependencies.length || source.includes("requestAnimationFrame")
          ? "中等"
          : "轻量",
    sourceLines: source.split(/\r?\n/).length,
    usage: makeUsage(name, slug, props, dependencies),
  };
  entry.aiPrompt = makePrompt(entry);
  catalog.push(entry);
}

catalog.sort((a, b) => {
  const categoryOrder = ["TextAnimations", "Animations", "Components", "Backgrounds"];
  return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) || a.name.localeCompare(b.name);
});

const output = `/* 此文件由 scripts/generate-catalog.mjs 根据官方 Vue Bits 源码生成。 */\nimport type { ComponentEntry } from "../types";\n\nexport const components = ${JSON.stringify(catalog, null, 2)} satisfies ComponentEntry[];\n`;

await mkdir(join(root, "src", "data"), { recursive: true });
await writeFile(join(root, "src", "data", "catalog.generated.ts"), output, "utf8");
console.log(`Generated ${catalog.length} component records.`);
