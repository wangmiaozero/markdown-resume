import { describe, expect, it, vi } from 'vitest';
import { resolvePublicUrl } from './resolvePublicUrl';

describe('resolvePublicUrl', () => {
  it('prefixes paths with vite base url', () => {
    vi.stubEnv('BASE_URL', '/markdown-resume/');
    expect(resolvePublicUrl('templates/manifest.json')).toBe('/markdown-resume/templates/manifest.json');
    expect(resolvePublicUrl('/templates/foo.md')).toBe('/markdown-resume/templates/foo.md');
    vi.unstubAllEnvs();
  });
});
