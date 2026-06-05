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
            body { background: #e8ecf1; font-family: "Noto Serif SC", "PingFang SC", serif; color: #1a1a2e; }
            .page {
              width: 100%; max-width: 800px; min-height: 100vh; margin: 36px auto;
              background: #fff; padding: 56px 64px 72px;
              box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            }
            .resume-header {
              text-align: center; padding-bottom: 28px; margin-bottom: 8px;
              border-bottom: 2px solid #1e40af;
            }
            .resume-name { font-size: 36px; font-weight: 900; color: #1e40af; letter-spacing: 0.12em; margin-bottom: 8px; }
            .resume-role { font-size: 16px; color: #475569; font-weight: 500; margin-bottom: 12px; }
            .resume-contact { font-size: 13px; color: #64748b; letter-spacing: 0.02em; }
            .content h2 { color: #1e40af; border-bottom: 1px solid #cbd5e1; text-transform: uppercase; }
            .content h3 { color: #1e293b; }
            .content strong { color: #1e40af; }
            .content em { color: #64748b; }
            .content pre { background: #f1f5f9; color: #334155; }
            .content code { background: #e2e8f0; color: #1e40af; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 40px 28px 56px; box-shadow: none; }
            body.mode-mobile .resume-name { font-size: 28px; }
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

export const professionalTheme: ResumeTheme = {
  id: 'professional',
  name: '商务正式 (Professional)',
  badge: '商务简历',
  description: '适合传统行业与校招，字段映射为姓名、职位和联系方式。',
  accent: '#1e40af',
  chips: ['姓名', '职位', '联系'],
  render,
}
