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
            body { background: #fff7ed; font-family: "Inter", "PingFang SC", sans-serif; color: #1f2937; }
            .page {
              width: 100%; max-width: 840px; min-height: 100vh; margin: 34px auto;
              background: #fff; padding: 48px 58px 68px;
              box-shadow: 0 14px 42px rgba(249,115,22,0.12);
              border-radius: 18px;
            }
            .resume-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding-bottom: 26px; margin-bottom: 8px; border-bottom: 1px solid #fed7aa; }
            .resume-name { font-size: 36px; line-height: 1.1; font-weight: 900; color: #9a3412; letter-spacing: -0.04em; margin-bottom: 8px; }
            .resume-role { font-size: 14px; color: #ea580c; font-weight: 800; }
            .resume-contact { max-width: 260px; text-align: right; font-size: 12px; color: #78716c; line-height: 1.7; }
            .content { position: relative; padding-left: 26px; }
            .content::before { content: ""; position: absolute; top: 18px; bottom: 0; left: 6px; width: 2px; background: linear-gradient(180deg, #fb923c, #fed7aa); }
            .content h2 { position: relative; color: #c2410c; border-bottom: 1px solid #fed7aa; }
            .content h2::before { content: ""; position: absolute; left: -26px; top: 8px; width: 12px; height: 12px; border-radius: 50%; background: #f97316; box-shadow: 0 0 0 4px #ffedd5; }
            .content h3 { color: #7c2d12; }
            .content strong { color: #ea580c; }
            .content em { color: #78716c; }
            .content li::marker { color: #f97316; }
            .content pre { background: #fff7ed; color: #7c2d12; border: 1px solid #fed7aa; }
            .content code { background: #ffedd5; color: #c2410c; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 38px 24px 56px; border-radius: 0; box-shadow: none; }
            body.mode-mobile .resume-header { flex-direction: column; }
            body.mode-mobile .resume-contact { text-align: left; max-width: none; }
            body.mode-mobile .resume-name { font-size: 30px; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-header">
              <div>
                <h1 class="resume-name">${name}</h1>
                <div class="resume-role">${role}</div>
              </div>
              <div class="resume-contact">${contact}</div>
            </header>
            <div class="content">${htmlContent}</div>
          `,
  }
}

export const timelineTheme: ResumeTheme = {
  id: 'timeline',
  name: '时间轴履历 (Timeline)',
  badge: '时间轴',
  description: '左侧时间轴视觉，适合突出项目经历、工作节点和成长路径。',
  accent: '#f97316',
  chips: ['经历', '节点', '项目'],
  render,
}
