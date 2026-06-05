import { downloadText } from '@/utils/download';

export function exportMarkdown(content: string, filename = 'resume.md'): void {
  downloadText(content, filename, 'text/markdown;charset=utf-8');
}
