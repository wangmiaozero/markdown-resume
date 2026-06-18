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
            body { background: #020617; font-family: "Inter", "JetBrains Mono", sans-serif; color: #d1fae5; }
            .page {
              width: 100%; max-width: 820px; min-height: 100vh; margin: 34px auto;
              background: linear-gradient(180deg, #06111f 0%, #020617 100%);
              padding: 46px 52px 64px; border-radius: 20px;
              border: 1px solid rgba(34,197,94,0.32);
              box-shadow: 0 0 0 1px rgba(34,197,94,0.12), 0 22px 60px rgba(0,0,0,0.45), 0 0 54px rgba(34,197,94,0.12);
            }
            .resume-header { position: relative; padding-bottom: 30px; margin-bottom: 10px; border-bottom: 1px solid rgba(34,197,94,0.28); }
            .resume-header::before { content: ""; position: absolute; top: -16px; right: 0; width: 120px; height: 120px; background: radial-gradient(circle, rgba(34,197,94,0.18), transparent 66%); pointer-events: none; }
            .resume-name { font-size: 38px; line-height: 1.1; font-weight: 900; color: #bbf7d0; letter-spacing: -0.03em; margin-bottom: 10px; text-shadow: 0 0 22px rgba(34,197,94,0.18); }
            .resume-role { display: inline-flex; font-size: 13px; color: #22c55e; border: 1px solid rgba(34,197,94,0.32); background: rgba(34,197,94,0.08); border-radius: 999px; padding: 5px 12px; margin-bottom: 14px; font-weight: 800; }
            .resume-contact { font-size: 12px; color: #93c5fd; }
            .content h2 { color: #86efac; border-bottom: 1px solid rgba(34,197,94,0.24); }
            .content h3 { color: #bfdbfe; }
            .content p, .content li { color: #cbd5e1; }
            .content strong { color: #22c55e; }
            .content em { color: #94a3b8; }
            .content li::marker { color: #22c55e; }
            .content pre { background: #020617; color: #bbf7d0; border: 1px solid rgba(34,197,94,0.24); }
            .content code { background: rgba(34,197,94,0.12); color: #86efac; }
            body.mode-mobile { background: #020617; }
            body.mode-mobile .page { margin: 0; border-radius: 0; box-shadow: none; padding: 40px 26px 56px; }
            body.mode-mobile .resume-name { font-size: 30px; }
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

export const darkTheme: ResumeTheme = {
  id: 'dark',
  name: '暗色霓虹 (Dark)',
  badge: '暗色',
  description: '暗色背景、荧光强调，适合技术、AI、开发者作品集。',
  accent: '#22c55e',
  chips: ['暗色', '霓虹', '技术'],
  render,
}
