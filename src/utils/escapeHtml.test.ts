import { describe, expect, it } from 'vitest';
import { escapeHtml } from './escapeHtml';

describe('escapeHtml', () => {
  it('escapes html special characters', () => {
    expect(escapeHtml(`<a "x">&'`)).toBe('&lt;a &quot;x&quot;&gt;&amp;&#039;');
  });

  it('handles nullish values', () => {
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
  });
});
