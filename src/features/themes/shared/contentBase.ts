export const CONTENT_BASE = `
  .content { max-width: 100%; }
  .content > *:first-child { margin-top: 0; }
  .content h2 {
    font-size: 15px; font-weight: 700; margin: 28px 0 12px;
    padding-bottom: 6px; letter-spacing: 0.04em;
  }
  .content h3 { font-size: 14px; font-weight: 700; margin: 18px 0 6px; }
  .content p { margin: 0 0 10px; line-height: 1.65; }
  .content ul, .content ol { margin: 6px 0 12px; padding-left: 1.3em; }
  .content li { margin: 4px 0; line-height: 1.6; }
  .content strong { font-weight: 700; }
  .content em { font-style: italic; opacity: 0.85; }
  .content hr { border: none; margin: 20px 0; }
  .content pre {
    max-width: 100%; overflow-x: auto; font-size: 12px;
    padding: 12px 14px; border-radius: 6px; line-height: 1.5;
  }
  .content code { font-size: 0.9em; padding: 1px 5px; border-radius: 3px; }
  .content table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
  .content th, .content td { padding: 8px 10px; border: 1px solid currentColor; opacity: 0.9; }
`
