import type { ResumeMeta } from '../types'

export function buildContactLine(meta: ResumeMeta): string {
  return [
    meta.email,
    meta.phone,
    meta.city,
    meta.github,
    meta.website,
    meta.portfolio,
    meta.linkedin,
  ]
    .filter((v) => v && v !== '')
    .join(' · ')
}
