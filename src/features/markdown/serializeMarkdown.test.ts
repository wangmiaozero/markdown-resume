import { describe, expect, it } from 'vitest';
import { parseMarkdownDocument, serializeMarkdown } from './serializeMarkdown';

describe('serializeMarkdown', () => {
  it('round-trips frontmatter and sections', () => {
    const doc = parseMarkdownDocument(`---
name: 王五
role: 产品经理
theme: professional
---

## 工作经历

某互联网公司

## 项目经验

核心产品 0-1`);
    const output = serializeMarkdown(doc);
    expect(output).toContain('name: 王五');
    expect(output).toContain('## 工作经历');
    expect(output).toContain('某互联网公司');
  });
});

describe('parseMarkdownDocument', () => {
  it('assigns stable section ids', () => {
    const doc = parseMarkdownDocument('## 技能\n\nVue');
    expect(doc.sections[0]?.title).toBe('技能');
    expect(doc.sections[0]?.id).toMatch(/^section-/);
  });
});
