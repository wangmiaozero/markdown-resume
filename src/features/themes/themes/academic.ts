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
            body { background: #e5e7eb; font-family: "Times New Roman", "Noto Serif SC", serif; color: #111827; }
            .page {
              width: 100%; max-width: 800px; min-height: 100vh; margin: 36px auto;
              background: #fff; padding: 56px 72px 72px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            }
            .resume-header { text-align: center; margin-bottom: 32px; }
            .resume-name { font-size: 28px; font-weight: 700; letter-spacing: 0.04em; margin-bottom: 6px; }
            .resume-role { font-size: 14px; font-style: italic; color: #374151; margin-bottom: 8px; }
            .resume-contact { font-size: 12px; color: #6b7280; }
            .content h2 {
              color: #111827; border-bottom: 1px solid #111827;
              font-size: 14px; font-variant: small-caps; letter-spacing: 0.06em;
            }
            .content h3 { font-size: 14px; font-weight: 700; }
            .content p { text-align: justify; }
            .content em { color: #6b7280; }
            .content pre { background: #f9fafb; color: #374151; border: 1px solid #d1d5db; font-size: 11px; }
            .content code { background: #f3f4f6; color: #1f2937; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 40px 28px 56px; box-shadow: none; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-header">
              <h1 class="resume-name">${name}</h1>
              <div class="resume-role">${role}</div>
              <div class="resume-contact">${contact}</div>
            </header>
            <div class="content">${htmlContent}</div>
          `,
  }
}

export const academicTheme: ResumeTheme = {
  id: 'academic',
  name: '学术履历 (Academic)',
  badge: '学术',
  description: '规范学术格式，适合科研、教职、留学申请。',
  accent: '#1f2937',
  chips: ['姓名', '学位', '机构'],
  render,
}
