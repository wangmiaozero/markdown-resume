export interface ExportPdfOptions {
  title?: string;
}

export function exportPdfFromIframe(iframe: HTMLIFrameElement | null, options: ExportPdfOptions = {}): void {
  if (!iframe?.contentWindow) return;
  const title = options.title ?? 'Resume';
  const win = iframe.contentWindow;
  const prevTitle = document.title;
  document.title = title;
  win.focus();
  win.print();
  window.setTimeout(() => {
    document.title = prevTitle;
  }, 500);
}
