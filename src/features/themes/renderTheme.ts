import type { ResumeTheme, ThemeRenderContext } from './types'

const FONT_LINK =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700;900&family=Playfair+Display:wght@700;900&display=swap'

const DOCUMENT_BASE_CSS = `
* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
html, body { overflow-x: hidden; max-width: 100%; }
.page { max-width: 100%; overflow-x: hidden; }
.content pre { max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }

body.mode-a4 {
  background: #e8ecf1;
}
body.mode-a4 .page {
  width: 100%;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  box-shadow: none;
}

@media print {
  @page { margin: 10mm; size: A4; }
  html, body { overflow: visible !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { background: transparent !important; }
  .page { box-shadow: none !important; margin: 0 auto !important; min-height: auto !important; max-width: 210mm !important; }
  .content h2, .content h3 { page-break-after: avoid; }
  .content pre, .content table, .content tr { page-break-inside: avoid; }
}
`

function resolveBodyClass(device: ThemeRenderContext['device']): string {
  if (device === 'mobile') return 'mode-mobile'
  if (device === 'a4') return 'mode-a4'
  return 'mode-desktop'
}

export function renderThemeDocument(theme: ResumeTheme, ctx: ThemeRenderContext): string {
  const { css: themeCSS, html: themeHTML } = theme.render(ctx)
  const bodyClass = resolveBodyClass(ctx.device)

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<link href="${FONT_LINK}" rel="stylesheet" />
<style>
${DOCUMENT_BASE_CSS}
${themeCSS}
</style>
</head>
<body class="${bodyClass}">
<div class="page">${themeHTML}</div>
</body>
</html>`
}
