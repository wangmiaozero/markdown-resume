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
            body { background: #f5f5f4; font-family: "Inter", "PingFang SC", sans-serif; color: #292524; }
            .page {
              width: 100%; max-width: 720px; min-height: 100vh; margin: 48px auto;
              background: #fff; padding: 80px 72px 96px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.04);
            }
            .resume-header { margin-bottom: 48px; }
            .resume-name { font-size: 42px; font-weight: 300; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 12px; }
            .resume-role { font-size: 15px; color: #78716c; font-weight: 400; margin-bottom: 16px; }
            .resume-contact { font-size: 13px; color: #a8a29e; }
            .content h2 { color: #292524; border-bottom: none; font-weight: 600; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 40px; }
            .content h3 { font-weight: 600; font-size: 14px; }
            .content em { color: #a8a29e; font-size: 13px; }
            .content pre { background: #fafaf9; color: #57534e; border: 1px solid #e7e5e4; }
            .content code { background: #f5f5f4; color: #57534e; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 48px 28px 64px; box-shadow: none; }
            body.mode-mobile .resume-name { font-size: 32px; }
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

export const minimalTheme: ResumeTheme = {
  id: 'minimal',
  name: '极简留白 (Minimal)',
  badge: '极简',
  description: '大留白、细线条，适合设计类与互联网岗位。',
  accent: '#334155',
  chips: ['姓名', '方向', '联系'],
  render,
}
