import type { ResumeTheme, ThemeRenderContext, ThemeRenderResult } from '../types'
import { buildContactLine } from '../shared/buildContactLine'
import { CONTENT_BASE } from '../shared/contentBase'
import { escapeHtml } from '@/utils/escapeHtml'

function render(ctx: ThemeRenderContext): ThemeRenderResult {
  const name = escapeHtml(ctx.meta.name || '')
  const role = escapeHtml(ctx.meta.role || '')
  const contact = escapeHtml(buildContactLine(ctx.meta))
  const { htmlContent } = ctx

  return {
    css: `
            body { background: #d1fae5; font-family: "Inter", "PingFang SC", sans-serif; color: #1f2937; font-size: 13px; }
            .page {
              width: 100%; max-width: 780px; min-height: 100vh; margin: 24px auto;
              background: #fff; padding: 32px 40px 40px;
              box-shadow: 0 2px 16px rgba(5,150,105,0.1);
            }
            .resume-header {
              display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 16px;
              padding-bottom: 12px; margin-bottom: 4px;
              border-bottom: 2px solid #059669;
            }
            .resume-name { font-size: 22px; font-weight: 800; color: #047857; }
            .resume-role { font-size: 13px; color: #059669; font-weight: 600; }
            .resume-contact { font-size: 11px; color: #6b7280; width: 100%; }
            .content h2 { font-size: 12px; color: #047857; border-bottom: 1px solid #a7f3d0; margin: 16px 0 8px; }
            .content h3 { font-size: 12px; margin: 10px 0 4px; }
            .content p { margin: 0 0 6px; line-height: 1.5; font-size: 12px; }
            .content ul, .content ol { margin: 4px 0 8px; }
            .content li { margin: 2px 0; font-size: 12px; line-height: 1.45; }
            .content strong { color: #047857; }
            .content em { color: #6b7280; font-size: 11px; }
            .content pre { background: #ecfdf5; font-size: 10px; padding: 8px 10px; }
            .content code { background: #d1fae5; color: #047857; font-size: 11px; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 24px 20px 32px; box-shadow: none; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-header">
              <h1 class="resume-name">${name}</h1>
              <span class="resume-role">${role}</span>
              <div class="resume-contact">${contact}</div>
            </header>
            <div class="content">${htmlContent}</div>
          `,
  }
}

export const compactTheme: ResumeTheme = {
  id: 'compact',
  name: '紧凑一页 (Compact)',
  badge: '紧凑',
  description: '小字号高密度排版，力求内容塞进一页 A4。',
  accent: '#059669',
  chips: ['姓名', '职位', '一行'],
  render,
}
