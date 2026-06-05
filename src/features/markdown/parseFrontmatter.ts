export interface ParsedFrontmatter {
  meta: Record<string, string>;
  body: string;
}

export function parseFrontmatter(text: string): ParsedFrontmatter {
  const match = String(text).match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { meta: {}, body: String(text).trim() };
  }

  const meta: Record<string, string> = {};
  match[1].split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) meta[key] = value;
  });

  return { meta, body: match[2].trim() };
}

export function serializeFrontmatter(meta: Record<string, string>): string {
  const lines = Object.entries(meta)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}: ${value ?? ''}`);
  return `---\n${lines.join('\n')}\n---`;
}
