# markdown-resume

**English** | [简体中文](./README.md)

Markdown resume layout & preview — Vue 3 + Vite.

Live demo: https://wangmiaozero.github.io/markdown-resume/

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173`

## Features

- **143 resume templates** in `public/templates/` with search, category filter, and dropdown switch
- **12 themes** with style cards (badge / chips / dynamic accent colors)
- **Markdown editing** via md-editor-v3 with live preview
- **Desktop / Mobile preview** with PC window shell + iPhone frame, iframe-isolated rendering
- **Import / Export** — `.md` import, PDF (iframe print), Word (HTML `.doc`)
- **Local persistence** — editor content, theme, and device mode (IndexedDB + localStorage)

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Dev server |
| `pnpm build` | Typecheck + production build |
| `pnpm preview` | Preview build output |
| `pnpm typecheck` | TypeScript check |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier format |
| `pnpm test` | Unit tests |

## Project Structure

```
src/
  composables/useResumeStudio.ts   # App orchestration (init, persistence, import/export)
  features/
    editor/                        # Editor (MdEditor + template picker)
    preview/                       # iframe preview
    themes/                        # 12 theme render engines
    markdown/                      # frontmatter parsing, Markdown → HTML
    templates/                     # template loading & categories
    export/                        # PDF / Word export
  stores/                          # Pinia stores
  styles/resume-preview.scss       # Main UI styles
public/templates/                  # Resume templates + manifest.json
```

## Adding Templates

1. Add `Role-Name.md` to `public/templates/`
2. Update `public/templates/manifest.json`
3. Refresh the page — the template appears in the dropdown

Optional frontmatter `theme` field syncs the theme when switching templates.

## Deployment

### GitHub Pages (recommended)

Pushing to `main` triggers Actions to build `dist/` and push to the `gh-pages` branch.

First-time setup: **Settings → Pages → Build and deployment → Source** → **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.

URL: `https://wangmiaozero.github.io/markdown-resume/`

> Do **not** use the `main` branch as the Pages source — it serves source code and causes a white screen (`/src/main.ts` 404).

### Local Build

```bash
pnpm build
```

Deploy the `dist/` folder to any static host (Nginx, Cloudflare Pages, etc.).

## CI

Pushes to `main` / `v1.0.0` / `v2.0.0` run typecheck, lint, test, and build.

## Contributing

Issues and Pull Requests are welcome — new templates, themes, bug fixes, etc. Please ensure `pnpm typecheck`, `pnpm lint`, and `pnpm test` pass before submitting a PR.

[Open an Issue](https://github.com/wangmiaozero/markdown-resume/issues)

## License

[MIT](LICENSE)
