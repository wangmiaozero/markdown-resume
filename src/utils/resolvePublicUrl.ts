/** Resolve a path under Vite `public/` for dev and subpath deployments (e.g. GitHub Pages). */
export function resolvePublicUrl(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}
