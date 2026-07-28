# Vue Bits 中文图鉴

一个面向国内 Vue 3 + Vite 项目的动效组件分析与选型站。

## 已包含

- 132 个官方 Vue Bits 组件的中文索引
- 组件用途、参数、依赖、源码规模和复杂度
- 样式结构与实现原理分析
- 每个组件独立的中文 AI 提示词
- 本地视频预览、搜索、分类筛选和收藏
- 响应式布局与 `prefers-reduced-motion` 降级

## 开发

```bash
npm install
npm run dev
npm run build
```

组件数据由 `scripts/generate-catalog.mjs` 从本地官方 Vue Bits 仓库生成。需要更新上游快照时：

```bash
npm run sync:catalog
```

## 上游与许可

- React Bits: <https://github.com/DavidHDev/react-bits>
- Vue Bits: <https://github.com/DavidHDev/vue-bits>

两个项目均采用 MIT + Commons Clause。允许把组件用于应用、网站和产品，但禁止把组件本身作为组件库、模板或移植版重新销售、再许可或分发。本站只提供分析、预览和官方安装入口。
