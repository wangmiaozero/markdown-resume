import { parseFrontmatter, serializeFrontmatter } from './parseFrontmatter';
import { buildBodyFromSections, parseSections } from './parseSections';
import type { ResumeDocument } from '@/types/resume';

export function serializeMarkdown(doc: Pick<ResumeDocument, 'meta' | 'sections'>): string {
  const body = buildBodyFromSections(doc.sections);
  const fm = serializeFrontmatter(doc.meta as Record<string, string>);
  return `${fm}\n\n${body}\n`.trim() + '\n';
}

export function parseMarkdownDocument(text: string): ResumeDocument {
  const { meta, body } = parseFrontmatter(text);
  const sections = parseSections(body);
  return {
    meta,
    sections,
    rawMarkdown: serializeMarkdown({ meta, sections }),
  };
}
