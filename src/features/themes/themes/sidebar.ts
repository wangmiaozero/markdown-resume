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
            body { background: #d1d5db; font-family: "Inter", "PingFang SC", sans-serif; color: #1f2937; }
            .page {
              width: 100%; max-width: 900px; min-height: 100vh; margin: 32px auto;
              background: #fff; display: flex; box-shadow: 0 8px 32px rgba(0,0,0,0.12);
            }
            .resume-sidebar {
              flex: 0 0 260px; background: linear-gradient(180deg, #0f766e 0%, #115e59 100%);
              color: #fff; padding: 48px 28px 40px; display: flex; flex-direction: column;
            }
            .resume-name { font-size: 28px; font-weight: 800; line-height: 1.25; margin-bottom: 10px; }
            .resume-role {
              font-size: 13px; font-weight: 600; opacity: 0.9; margin-bottom: 32px;
              padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.25);
            }
            .resume-contact { font-size: 12px; line-height: 1.8; opacity: 0.85; margin-top: auto; }
            .resume-main { flex: 1; padding: 48px 44px 56px; min-width: 0; }
            .content h2 { color: #0f766e; border-bottom: 2px solid #99f6e4; }
            .content h3 { color: #134e4a; }
            .content strong { color: #0f766e; }
            .content em { color: #6b7280; }
            .content pre { background: #f0fdfa; color: #134e4a; }
            .content code { background: #ccfbf1; color: #0f766e; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; flex-direction: column; box-shadow: none; }
            body.mode-mobile .resume-sidebar { flex: none; padding: 36px 24px 28px; }
            body.mode-mobile .resume-main { padding: 32px 24px 48px; }
            ${CONTENT_BASE}
          `,
    html: `
            <aside class="resume-sidebar">
              <h1 class="resume-name">${name}</h1>
              <div class="resume-role">${role}</div>
              <div class="resume-contact">${contact}</div>
            </aside>
            <main class="resume-main">
              <div class="content">${htmlContent}</div>
            </main>
          `,
  }
}

export const sidebarTheme: ResumeTheme = {
  id: 'sidebar',
  name: '双栏侧栏 (Sidebar)',
  badge: '双栏',
  description: '左侧色块展示个人信息，右侧为经历正文。',
  accent: '#0f766e',
  chips: ['姓名', '岗位', '侧栏'],
  render,
}
