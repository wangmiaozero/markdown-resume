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
            body { background: #fff1f2; font-family: "Playfair Display", "Noto Serif SC", serif; color: #1f2937; }
            .page {
              width: 100%; max-width: 820px; min-height: 100vh; margin: 36px auto;
              background: #fff; padding: 58px 62px 76px;
              box-shadow: 0 18px 50px rgba(225,29,72,0.10);
              border: 1px solid #ffe4e6;
            }
            .resume-header { display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: end; padding-bottom: 28px; border-bottom: 6px solid #111827; margin-bottom: 18px; }
            .resume-name { font-size: 50px; line-height: 0.95; font-weight: 900; letter-spacing: -0.06em; color: #111827; max-width: 520px; }
            .resume-side { writing-mode: vertical-rl; text-orientation: mixed; color: #e11d48; font-family: "Inter", sans-serif; font-size: 11px; font-weight: 900; letter-spacing: 0.18em; }
            .resume-role { font-family: "Inter", sans-serif; display: inline-block; margin-top: 18px; font-size: 13px; font-weight: 900; color: #e11d48; letter-spacing: 0.08em; text-transform: uppercase; }
            .resume-contact { font-family: "Inter", sans-serif; font-size: 12px; color: #64748b; margin-top: 10px; }
            .content { font-family: "Noto Serif SC", serif; }
            .content h2 { font-family: "Inter", sans-serif; color: #111827; border-bottom: 1px solid #fecdd3; font-size: 13px; }
            .content h3 { color: #9f1239; }
            .content strong { color: #e11d48; }
            .content em { color: #64748b; }
            .content li::marker { color: #e11d48; }
            .content pre { background: #fff1f2; color: #881337; border: 1px solid #fecdd3; }
            .content code { background: #ffe4e6; color: #be123c; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 44px 26px 56px; box-shadow: none; border: none; }
            body.mode-mobile .resume-header { grid-template-columns: 1fr; border-bottom-width: 4px; }
            body.mode-mobile .resume-side { writing-mode: initial; }
            body.mode-mobile .resume-name { font-size: 36px; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-header">
              <div>
                <h1 class="resume-name">${name}</h1>
                <div class="resume-role">${role}</div>
                <div class="resume-contact">${contact}</div>
              </div>
              <div class="resume-side">PORTFOLIO / RESUME</div>
            </header>
            <div class="content">${htmlContent}</div>
          `,
  }
}

export const magazineTheme: ResumeTheme = {
  id: 'magazine',
  name: '杂志排版 (Magazine)',
  badge: '杂志',
  description: '大标题与杂志式留白，适合品牌、内容、设计和个人 IP。',
  accent: '#e11d48',
  chips: ['封面', '个人IP', '设计'],
  render,
}
