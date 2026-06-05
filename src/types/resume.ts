export interface ResumeMeta {
  name?: string;
  role?: string;
  email?: string;
  phone?: string;
  city?: string;
  github?: string;
  website?: string;
  portfolio?: string;
  linkedin?: string;
  theme?: string;
  [key: string]: string | undefined;
}

export interface ResumeSection {
  id: string;
  title: string;
  body: string;
}

export interface ResumeDocument {
  meta: ResumeMeta;
  sections: ResumeSection[];
  rawMarkdown: string;
}

export type EditorMode = 'visual' | 'source';

export type PreviewDevice = 'desktop' | 'mobile';

export type ExportFormat = 'markdown' | 'pdf' | 'word';

export const KNOWN_META_KEYS = [
  'name',
  'role',
  'email',
  'phone',
  'city',
  'github',
  'website',
  'portfolio',
  'linkedin',
  'theme',
] as const;

export type KnownMetaKey = (typeof KNOWN_META_KEYS)[number];
