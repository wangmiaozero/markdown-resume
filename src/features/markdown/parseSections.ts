import type { ResumeSection } from '@/types/resume';

export function parseSections(body: string): ResumeSection[] {
  const text = body.trim();
  if (!text) return [];

  const parts = text.split(/^##\s+/m).filter(Boolean);
  return parts.map((part, index) => {
    const lines = part.split('\n');
    const title = (lines[0] ?? '').trim();
    const sectionBody = lines.slice(1).join('\n').trim();
    return {
      id: `section-${index}-${slugify(title)}`,
      title,
      body: sectionBody,
    };
  });
}

export function buildBodyFromSections(sections: ResumeSection[]): string {
  return sections
    .filter((s) => s.title.trim() || s.body.trim())
    .map((s) => `## ${s.title.trim()}\n\n${s.body.trim()}`.trim())
    .join('\n\n');
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fa5-]/g, '')
    .slice(0, 24);
}
