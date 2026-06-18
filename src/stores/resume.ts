import { defineStore } from 'pinia';
import { parseMarkdownDocument, serializeMarkdown } from '@/features/markdown';
import type { ResumeMeta, ResumeSection } from '@/types/resume';

export const useResumeStore = defineStore('resume', {
  state: () => ({
    meta: {} as ResumeMeta,
    sections: [] as ResumeSection[],
    rawMarkdown: '',
  }),

  getters: {
    markdown(): string {
      return serializeMarkdown({ meta: this.meta, sections: this.sections });
    },
  },

  actions: {
    loadFromMarkdown(text: string) {
      const doc = parseMarkdownDocument(text);
      this.meta = { ...doc.meta };
      this.sections = doc.sections.map((s) => ({ ...s }));
      this.rawMarkdown = doc.rawMarkdown;
    },

    setMarkdownContent(text: string) {
      const doc = parseMarkdownDocument(text);
      this.meta = { ...doc.meta };
      this.sections = doc.sections.map((s) => ({ ...s }));
      this.rawMarkdown = doc.rawMarkdown;
    },

    setMetaField(key: string, value: string) {
      this.meta = { ...this.meta, [key]: value };
    },
  },
});
