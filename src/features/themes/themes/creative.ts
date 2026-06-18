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
            body { background: #fce7f3; font-family: "Inter", "PingFang SC", sans-serif; color: #4a044e; }
            .page {
              width: 100%; max-width: 800px; min-height: 100vh; margin: 32px auto;
              background: #fff; overflow: hidden;
              box-shadow: 0 12px 40px rgba(219,39,119,0.15); border-radius: 16px;
            }
            .resume-hero {
              background: linear-gradient(135deg, #db2777 0%, #7c3aed 50%, #2563eb 100%);
              color: #fff; padding: 48px 48px 40px;
            }
            .resume-name { font-size: 38px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 10px; }
            .resume-role {
              display: inline-block; font-size: 13px; font-weight: 600;
              background: rgba(255,255,255,0.2); padding: 6px 14px; border-radius: 999px;
              margin-bottom: 14px; backdrop-filter: blur(4px);
            }
            .resume-contact { font-size: 13px; opacity: 0.9; }
            .resume-body { padding: 36px 48px 56px; }
            .content h2 {
              color: #db2777; border-bottom: none;
              display: inline-block; background: linear-gradient(90deg, #fce7f3, transparent);
              padding: 4px 12px 4px 0; border-radius: 4px;
            }
            .content h3 { color: #7c3aed; }
            .content strong { color: #db2777; }
            .content em { color: #a855f7; }
            .content li::marker { color: #db2777; }
            .content pre { background: #fdf4ff; color: #6b21a8; border: 1px solid #f0abfc; }
            .content code { background: #fce7f3; color: #be185d; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; border-radius: 0; box-shadow: none; }
            body.mode-mobile .resume-hero { padding: 36px 28px 32px; }
            body.mode-mobile .resume-body { padding: 28px 24px 48px; }
            body.mode-mobile .resume-name { font-size: 30px; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-hero">
              <h1 class="resume-name">${name}</h1>
              <div class="resume-role">${role}</div>
              <div class="resume-contact">${contact}</div>
            </header>
            <div class="resume-body">
              <div class="content">${htmlContent}</div>
            </div>
          `,
  }
}

export const creativeTheme: ResumeTheme = {
  id: 'creative',
  name: '创意渐变 (Creative)',
  badge: '创意',
  description: '渐变页眉与色块标签，适合设计、新媒体岗位。',
  accent: '#db2777',
  chips: ['姓名', '头衔', '社交'],
  render,
}
