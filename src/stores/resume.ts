import { defineStore } from 'pinia';
import { parseMarkdownDocument, serializeMarkdown } from '@/features/markdown';
import { isThemeId } from '@/features/themes/themeRegistry';
import { useThemeStore } from './theme';
import type { ResumeMeta, ResumeSection } from '@/types/resume';

function createId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export const useResumeStore = defineStore('resume', {
  state: () => ({
    meta: {} as ResumeMeta,
    sections: [] as ResumeSection[],
    rawMarkdown: '',
    sourceDraft: '',
    initialized: false,
  }),

  getters: {
    markdown(): string {
      return serializeMarkdown({ meta: this.meta, sections: this.sections });
    },
    customMetaKeys(): string[] {
      const known = new Set([
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
      ]);
      return Object.keys(this.meta).filter((k) => !known.has(k));
    },
  },

  actions: {
    loadFromMarkdown(text: string) {
      const doc = parseMarkdownDocument(text);
      this.meta = { ...doc.meta };
      this.sections = doc.sections.map((s) => ({ ...s }));
      this.rawMarkdown = doc.rawMarkdown;
      this.sourceDraft = doc.rawMarkdown;

      const themeStore = useThemeStore();
      if (doc.meta.theme && isThemeId(doc.meta.theme)) {
        themeStore.setTheme(doc.meta.theme);
      }
    },

    setMarkdownContent(text: string) {
      const doc = parseMarkdownDocument(text);
      this.meta = { ...doc.meta };
      this.sections = doc.sections.map((s) => ({ ...s }));
      this.rawMarkdown = doc.rawMarkdown;
      this.sourceDraft = doc.rawMarkdown;

      const themeStore = useThemeStore();
      if (doc.meta.theme && isThemeId(doc.meta.theme)) {
        if (themeStore.currentThemeId !== doc.meta.theme) {
          themeStore.setTheme(doc.meta.theme);
        }
      }
    },

    updateMeta(partial: Partial<ResumeMeta>) {
      this.meta = { ...this.meta, ...partial };
      this.syncFromVisual();
    },

    setMetaField(key: string, value: string) {
      this.meta = { ...this.meta, [key]: value };
      this.syncFromVisual();
    },

    removeCustomMeta(key: string) {
      const next = { ...this.meta };
      delete next[key];
      this.meta = next;
      this.syncFromVisual();
    },

    addCustomMeta(key: string, value = '') {
      if (!key.trim()) return;
      this.meta = { ...this.meta, [key.trim()]: value };
      this.syncFromVisual();
    },

    updateSection(id: string, patch: Partial<Pick<ResumeSection, 'title' | 'body'>>) {
      this.sections = this.sections.map((s) => (s.id === id ? { ...s, ...patch } : s));
      this.syncFromVisual();
    },

    addSection(title = '新章节') {
      this.sections.push({ id: createId('section'), title, body: '' });
      this.syncFromVisual();
    },

    removeSection(id: string) {
      this.sections = this.sections.filter((s) => s.id !== id);
      this.syncFromVisual();
    },

    setSourceDraft(text: string) {
      this.sourceDraft = text;
    },

    applySource() {
      this.loadFromMarkdown(this.sourceDraft);
    },

    syncFromVisual() {
      this.rawMarkdown = this.markdown;
      this.sourceDraft = this.rawMarkdown;
    },
  },
});
