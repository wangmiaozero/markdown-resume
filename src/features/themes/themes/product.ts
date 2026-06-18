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
            body { background: #eff6ff; font-family: "Inter", "PingFang SC", sans-serif; color: #0f172a; }
            .page {
              width: 100%; max-width: 860px; min-height: 100vh; margin: 34px auto;
              background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
              padding: 0; overflow: hidden; border-radius: 18px;
              box-shadow: 0 18px 46px rgba(37,99,235,0.12), 0 0 0 1px rgba(37,99,235,0.10);
            }
            .resume-header { padding: 42px 48px 32px; background: radial-gradient(circle at 8% 10%, #dbeafe, transparent 34%), linear-gradient(135deg, #ffffff 0%, #eff6ff 100%); border-bottom: 1px solid #dbeafe; }
            .resume-kicker { display: inline-flex; align-items: center; height: 26px; padding: 0 10px; border-radius: 999px; color: #2563eb; background: #dbeafe; font-size: 11px; font-weight: 800; margin-bottom: 14px; }
            .resume-name { font-size: 38px; line-height: 1.1; font-weight: 900; letter-spacing: -0.04em; color: #1e3a8a; margin-bottom: 10px; }
            .resume-role { font-size: 15px; color: #1d4ed8; font-weight: 700; margin-bottom: 12px; }
            .resume-contact { font-size: 12px; color: #64748b; }
            .resume-body { padding: 34px 48px 58px; }
            .content h2 { color: #1d4ed8; border-bottom: 1px solid #bfdbfe; }
            .content h3 { color: #0f172a; }
            .content strong { color: #2563eb; }
            .content em { color: #64748b; }
            .content li::marker { color: #2563eb; }
            .content pre { background: #eff6ff; color: #1e3a8a; border: 1px solid #bfdbfe; }
            .content code { background: #dbeafe; color: #1d4ed8; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; border-radius: 0; box-shadow: none; }
            body.mode-mobile .resume-header { padding: 38px 26px 28px; }
            body.mode-mobile .resume-body { padding: 28px 24px 48px; }
            body.mode-mobile .resume-name { font-size: 30px; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-header">
              <div class="resume-kicker">PRODUCT RESUME</div>
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

export const productTheme: ResumeTheme = {
  id: 'product',
  name: '产品清爽 (Product)',
  badge: '产品',
  description: '蓝白产品文档感，适合互联网、产品经理、运营与综合岗位。',
  accent: '#2563eb',
  chips: ['产品感', '蓝白', '清爽'],
  render,
}
