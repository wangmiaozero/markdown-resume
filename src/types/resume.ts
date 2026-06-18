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

export type PreviewDevice = 'desktop' | 'mobile';
