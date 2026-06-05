import type { ResumeTheme, ThemeId } from './types'
import { academicTheme } from './themes/academic'
import { compactTheme } from './themes/compact'
import { creativeTheme } from './themes/creative'
import { darkTheme } from './themes/dark'
import { elegantTheme } from './themes/elegant'
import { magazineTheme } from './themes/magazine'
import { minimalTheme } from './themes/minimal'
import { productTheme } from './themes/product'
import { professionalTheme } from './themes/professional'
import { sidebarTheme } from './themes/sidebar'
import { techTheme } from './themes/tech'
import { timelineTheme } from './themes/timeline'

export const THEME_REGISTRY: ResumeTheme[] = [
  professionalTheme,
  minimalTheme,
  sidebarTheme,
  techTheme,
  elegantTheme,
  creativeTheme,
  academicTheme,
  compactTheme,
  productTheme,
  darkTheme,
  magazineTheme,
  timelineTheme,
]

export const THEME_MAP: Record<ThemeId, ResumeTheme> = {
  professional: professionalTheme,
  minimal: minimalTheme,
  sidebar: sidebarTheme,
  tech: techTheme,
  elegant: elegantTheme,
  creative: creativeTheme,
  academic: academicTheme,
  compact: compactTheme,
  product: productTheme,
  dark: darkTheme,
  magazine: magazineTheme,
  timeline: timelineTheme,
}

export const DEFAULT_THEME_ID: ThemeId = 'professional'

export function getTheme(id: string): ResumeTheme {
  return THEME_MAP[id as ThemeId] ?? professionalTheme
}

export function getThemeById(id: string): ResumeTheme {
  return getTheme(id)
}

export function getThemes(): ResumeTheme[] {
  return THEME_REGISTRY
}

export function isThemeId(id: string): id is ThemeId {
  return id in THEME_MAP
}
