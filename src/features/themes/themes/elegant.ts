import type { ResumeTheme, ThemeRenderContext, ThemeRenderResult } from '../types'
import { buildContactLine } from '../shared/buildContactLine'
import { CONTENT_BASE } from '../shared/contentBase'
import { escapeHtml } from '../shared/escapeHtml'

function render(ctx: ThemeRenderContext): ThemeRenderResult {
  const name = escapeHtml(ctx.meta.name || '')
  const role = escapeHtml(ctx.meta.role || '')
  const contact = escapeHtml(buildContactLine(ctx.meta))
  const { htmlContent } = ctx

  return {
    css: `
            body { background: #f5f0eb; font-family: "Noto Serif SC", "Playfair Display", serif; color: #3d2c1e; }
            .page {
              width: 100%; max-width: 780px; min-height: 100vh; margin: 40px auto;
              background: #fffcf8; padding: 64px 68px 80px;
              box-shadow: 0 2px 20px rgba(61,44,30,0.08);
              border-top: 4px solid #92400e;
            }
            .resume-header { text-align: center; margin-bottom: 40px; }
            .resume-name {
              font-family: "Playfair Display", "Noto Serif SC", serif;
              font-size: 40px; font-weight: 900; color: #78350f; letter-spacing: 0.06em; margin-bottom: 10px;
            }
            .resume-role { font-size: 14px; color: #a16207; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 16px; }
            .resume-contact { font-size: 13px; color: #78716c; }
            .resume-divider { width: 60px; height: 1px; background: #d6b38a; margin: 0 auto 36px; }
            .content h2 { color: #92400e; border-bottom: 1px solid #e7d5c4; font-family: "Playfair Display", serif; letter-spacing: 0.08em; }
            .content h3 { color: #78350f; }
            .content strong { color: #92400e; }
            .content em { color: #a8a29e; }
            .content pre { background: #faf5f0; color: #57534e; border: 1px solid #e7d5c4; }
            .content code { background: #fef3c7; color: #92400e; }
            body.mode-mobile { background: #fffcf8; }
            body.mode-mobile .page { margin: 0; padding: 48px 28px 64px; box-shadow: none; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-header">
              <h1 class="resume-name">${name}</h1>
              <div class="resume-role">${role}</div>
              <div class="resume-contact">${contact}</div>
            </header>
            <div class="resume-divider"></div>
            <div class="content">${htmlContent}</div>
          `,
  }
}

export const elegantTheme: ResumeTheme = {
  id: 'elegant',
  name: '优雅衬线 (Elegant)',
  badge: '优雅',
  description: 'Playfair 衬线标题，适合咨询、金融、品牌类岗位。',
  accent: '#92400e',
  chips: ['姓名', '职称', '联络'],
  render,
}
