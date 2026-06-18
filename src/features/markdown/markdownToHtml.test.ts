/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { markdownToHtml } from './markdownToHtml';

describe('markdownToHtml', () => {
  it('renders basic markdown', () => {
    const html = markdownToHtml('**bold** and `code`');
    expect(html).toContain('<strong>bold</strong>');
    expect(html).toContain('<code>code</code>');
  });

  it('sanitizes unsafe html attributes', () => {
    const html = markdownToHtml('<img src=x onerror=alert(1)>\n\nHello');
    expect(html).not.toMatch(/onerror/i);
    expect(html).toContain('Hello');
  });
});
