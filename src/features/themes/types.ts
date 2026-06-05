export type ThemeId =
  | 'professional'
  | 'minimal'
  | 'sidebar'
  | 'tech'
  | 'elegant'
  | 'creative'
  | 'academic'
  | 'compact'
  | 'product'
  | 'dark'
  | 'magazine'
  | 'timeline'

export type DeviceMode = 'desktop' | 'mobile' | 'a4'

export interface ResumeMeta {
  name?: string
  role?: string
  email?: string
  phone?: string
  city?: string
  github?: string
  website?: string
  portfolio?: string
  linkedin?: string
  theme?: string
  [key: string]: string | undefined
}

export interface ThemeRenderContext {
  meta: ResumeMeta
  htmlContent: string
  device: DeviceMode
}

export interface ThemeRenderResult {
  css: string
  html: string
}

export interface ResumeTheme {
  id: ThemeId
  name: string
  badge: string
  description: string
  accent: string
  chips: string[]
  render: (ctx: ThemeRenderContext) => ThemeRenderResult
}
