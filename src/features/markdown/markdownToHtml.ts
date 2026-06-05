import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function markdownToHtml(markdown: string): string {
  return marked.parse(markdown || '') as string;
}
