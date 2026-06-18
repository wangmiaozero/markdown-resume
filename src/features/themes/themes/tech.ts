import type { ResumeTheme, ThemeRenderContext, ThemeRenderResult } from '../types'
import { buildContactLine } from '../shared/buildContactLine'
import { CONTENT_BASE } from '../shared/contentBase'
import { escapeHtml } from '@/utils/escapeHtml'

function render(ctx: ThemeRenderContext): ThemeRenderResult {
  const name = escapeHtml(ctx.meta.name || '')
  const role = escapeHtml(ctx.meta.role || '')
  const contact = escapeHtml(buildContactLine(ctx.meta))
  const { htmlContent } = ctx
  const terminalSlug = name.toLowerCase().replace(/\s+/g, '-')

  return {
    css: `
            body { background: #0f172a; font-family: "JetBrains Mono", "Inter", monospace; color: #e2e8f0; }
            .page {
              width: 100%; max-width: 820px; min-height: 100vh; margin: 32px auto;
              background: #1e1e2e; padding: 0 0 48px;
              box-shadow: 0 0 40px rgba(124, 58, 237, 0.15);
              border: 1px solid #312e81;
              border-radius: 8px; overflow: hidden;
            }
            .resume-header {
              background: #181825; padding: 16px 24px;
              border-bottom: 1px solid #313244;
              display: flex; align-items: center; gap: 8px;
            }
            .terminal-dots { display: flex; gap: 6px; }
            .terminal-dots span { width: 12px; height: 12px; border-radius: 50%; }
            .terminal-dots span:nth-child(1) { background: #f38ba8; }
            .terminal-dots span:nth-child(2) { background: #fab387; }
            .terminal-dots span:nth-child(3) { background: #a6e3a1; }
            .terminal-title { font-size: 12px; color: #6c7086; margin-left: 8px; }
            .resume-intro { padding: 32px 40px 0; }
            .resume-name { font-size: 32px; font-weight: 700; color: #cba6f7; margin-bottom: 6px; }
            .resume-role { font-size: 14px; color: #a6e3a1; margin-bottom: 4px; }
            .resume-role::before { content: "$ role --set "; color: #6c7086; }
            .resume-contact { font-size: 12px; color: #89b4fa; margin-bottom: 8px; }
            .resume-contact::before { content: "# contact: "; color: #6c7086; }
            .resume-body { padding: 16px 40px 0; }
            .content h2 { color: #cba6f7; border-bottom: 1px dashed #45475a; font-family: "JetBrains Mono", monospace; }
            .content h3 { color: #f9e2af; font-family: "Inter", sans-serif; }
            .content strong { color: #89b4fa; }
            .content em { color: #6c7086; }
            .content li::marker { color: #a6e3a1; }
            .content pre { background: #11111b; color: #cdd6f4; border: 1px solid #313244; }
            .content code { background: #313244; color: #f38ba8; }
            body.mode-mobile { background: #1e1e2e; }
            body.mode-mobile .page { margin: 0; border-radius: 0; border: none; }
            body.mode-mobile .resume-intro, body.mode-mobile .resume-body { padding-left: 24px; padding-right: 24px; }
            ${CONTENT_BASE}
          `,
    html: `
            <header class="resume-header">
              <div class="terminal-dots"><span></span><span></span><span></span></div>
              <span class="terminal-title">~/resume/${terminalSlug}</span>
            </header>
            <div class="resume-intro">
              <h1 class="resume-name">${name}</h1>
              <div class="resume-role">${role}</div>
              <div class="resume-contact">${contact}</div>
            </div>
            <div class="resume-body">
              <div class="content">${htmlContent}</div>
            </div>
          `,
  }
}

export const techTheme: ResumeTheme = {
  id: 'tech',
  name: '技术极客 (Tech)',
  badge: '技术',
  description: '等宽字体点缀、代码风装饰，适合研发与数据岗位。',
  accent: '#7c3aed',
  chips: ['Name', 'Role', 'Links'],
  render,
}
