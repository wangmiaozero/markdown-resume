# Resume Studio

Markdown 简历排版预览 — Vue 3 工程化版本，UI 与 `markdown-resume-preview.html` 一致。

## 快速开始

```bash
pnpm install
pnpm dev
```

访问 `http://localhost:5173`

## 功能

- **17 份简历模版**：`public/templates/`，命名 `应聘职位-姓名.md`，下拉切换
- **12 套主题**：下拉选择 + 主题上下文卡片（badge / chips / accent 动态变色）
- **表单 / 源码双模式**：CodeMirror 6 源码编辑
- **Desktop / Mobile 预览**：PC 窗口壳 + iPhone 壳，iframe 隔离
- **导入 / 导出**：`.md`、PDF（print）、Word（HTML .doc）
- **面板折叠**：localStorage 持久化（与 HTML 版 key 兼容）

## 模版列表

位于 `public/templates/`：

- 高级前端工程师-张三.md（默认）
- 前端开发-马小军.md
- 前端架构负责人-林峻峰.md
- …共 17 份

切换模版后自动加载 Markdown，主题从 frontmatter `theme` 字段同步。

## 脚本

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 开发 |
| `pnpm build` | 构建 |
| `pnpm typecheck` | 类型检查 |

## 目录

```
src/styles/resume-preview.scss   # 从 HTML 提取的完整 UI 样式
src/features/templates/          # 模版扫描与加载
src/features/editor/             # 左侧面板（原生 HTML 控件）
src/features/preview/            # 右侧预览
src/features/themes/             # 12 主题引擎
```

## 新增模版

1. 将 `职位-姓名.md` 放入 `public/templates/`
2. 更新 `public/templates/manifest.json`
3. 刷新页面即可在下拉中看到
