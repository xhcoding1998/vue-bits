# 动效工坊

面向 Vue 3 的动效展示平台。每个组件页面都提供实时预览、中文解析、完整参考源码，以及可让 AI 从零复刻同等交互效果的提示词。

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址为 `http://127.0.0.1:5174/`，实际端口以 Vite 输出为准。

## 生产构建

```bash
npm run build
npm run preview
```

## 站点品牌

站点名称和描述统一放在 `src/config/site.ts`。接入正式域名后，再在 `index.html` 中补充 canonical、Open Graph 图片和线上地址。

## 项目结构

- `src/content`：组件实现源码
- `src/demo`：组件展示、参数控制和属性说明
- `src/components/common`：详情页、源码面板和 AI 提示词能力
- `src/i18n`：默认中文文案及后续多语言扩展入口
- `src/config/site.ts`：站点品牌配置

本项目不会要求访问者安装本站组件库。详情页中的 AI 提示词要求生成独立的 Vue 3 源码，并禁止使用 iframe、截图、GIF 或视频伪造交互效果。
