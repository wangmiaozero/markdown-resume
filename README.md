# markdown-resume

Markdown 简历排版预览 — Vue 3 + Vite 工程化版本。

在线体验：https://wangmiaozero.github.io/markdown-resume/

## 快速开始

```bash
pnpm install
pnpm dev
```

访问 `http://localhost:5173`

## 功能

- **143 份简历模版**：`public/templates/`，支持搜索、分组筛选、下拉切换
- **12 套主题**：下拉选择 + 风格说明卡片（badge / chips / accent 动态变色）
- **Markdown 编辑**：md-editor-v3 源码编辑，实时预览
- **Desktop / Mobile 预览**：PC 窗口壳 + iPhone 壳，iframe 隔离渲染
- **导入 / 导出**：`.md` 导入、PDF（iframe print）、Word（HTML .doc）
- **本地持久化**：编辑内容、主题、设备模式自动保存（IndexedDB + localStorage）

## 脚本

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 开发服务器 |
| `pnpm build` | 类型检查 + 生产构建 |
| `pnpm preview` | 预览构建产物 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm lint` | ESLint 检查 |
| `pnpm format` | Prettier 格式化 |
| `pnpm test` | 运行单元测试 |

## 目录

```
src/
  composables/useResumeStudio.ts   # 业务编排（初始化、持久化、导入导出）
  features/
    editor/                        # 编辑器（MdEditor + 模版选择）
    preview/                       # iframe 预览
    themes/                        # 12 主题渲染引擎
    markdown/                      # frontmatter 解析、Markdown 转 HTML
    templates/                     # 模版加载与分类
    export/                        # PDF / Word 导出
  stores/                          # Pinia 状态
  styles/resume-preview.scss       # 主 UI 样式
public/templates/                  # 简历模版 + manifest.json
```

## 新增模版

1. 将 `职位-姓名.md` 放入 `public/templates/`
2. 更新 `public/templates/manifest.json`
3. 刷新页面即可在下拉中看到

frontmatter 可选 `theme` 字段，切换模版后自动同步主题。

## 部署

### GitHub Pages（推荐）

推送到 `main` 分支后，Actions 会自动构建 `dist/` 并推送到 `gh-pages` 分支。

首次需在仓库 **Settings → Pages → Build and deployment → Source** 选择 **Deploy from a branch**，Branch 选 **`gh-pages`** / **`/ (root)`**。

访问地址：`https://wangmiaozero.github.io/markdown-resume/`

> 勿选 `main` 分支作为 Pages 源，否则会直接部署源码导致白屏（请求 `/src/main.ts` 404）。

### 本地构建

```bash
pnpm build
```

将 `dist/` 目录部署到任意静态托管（Nginx、Cloudflare Pages 等）。

## CI

推送至 `main` / `v1.0.0` / `v2.0.0` 分支时自动运行 typecheck、lint、test、build。

## 贡献

欢迎通过 [Issue](https://github.com/wangmiaozero/markdown-resume/issues) 反馈问题，或通过 Pull Request 提交改进（新模版、主题、bug 修复等）。提交 PR 前请确保 `pnpm typecheck`、`pnpm lint`、`pnpm test` 通过。

## License

[MIT](LICENSE)
