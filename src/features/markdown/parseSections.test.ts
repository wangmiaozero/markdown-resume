import { describe, expect, it } from 'vitest';
import { buildBodyFromSections, parseSections } from './parseSections';

describe('parseSections', () => {
  it('splits markdown body by level-2 headings', () => {
    const body = `## 工作经历

A 公司

## 项目经验

B 项目`;

    const sections = parseSections(body);
    expect(sections).toHaveLength(2);
    expect(sections[0]?.title).toBe('工作经历');
    expect(sections[0]?.body).toContain('A 公司');
    expect(sections[1]?.title).toBe('项目经验');
  });

  it('returns empty array for blank body', () => {
    expect(parseSections('   ')).toEqual([]);
  });
});

describe('buildBodyFromSections', () => {
  it('rebuilds markdown sections', () => {
    const body = buildBodyFromSections([
      { id: '1', title: '技能', body: 'Vue / TypeScript' },
      { id: '2', title: '教育', body: '某大学' },
    ]);
    expect(body).toContain('## 技能');
    expect(body).toContain('Vue / TypeScript');
    expect(body).toContain('## 教育');
  });
});
