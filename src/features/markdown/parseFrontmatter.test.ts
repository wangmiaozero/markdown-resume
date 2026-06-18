import { describe, expect, it } from 'vitest';
import { parseFrontmatter, serializeFrontmatter } from './parseFrontmatter';

describe('parseFrontmatter', () => {
  it('parses yaml frontmatter and body', () => {
    const text = `---
name: 张三
role: 前端工程师
theme: minimal
---

## 工作经历

内容`;
    const { meta, body } = parseFrontmatter(text);
    expect(meta).toEqual({
      name: '张三',
      role: '前端工程师',
      theme: 'minimal',
    });
    expect(body).toContain('## 工作经历');
  });

  it('returns empty meta when frontmatter is missing', () => {
    const { meta, body } = parseFrontmatter('# Hello');
    expect(meta).toEqual({});
    expect(body).toBe('# Hello');
  });
});

describe('serializeFrontmatter', () => {
  it('serializes meta to yaml block', () => {
    const result = serializeFrontmatter({ name: '李四', role: '设计师' });
    expect(result).toBe('---\nname: 李四\nrole: 设计师\n---');
  });
});
