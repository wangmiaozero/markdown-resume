import { defineStore } from 'pinia';
import {
  DEFAULT_TEMPLATE,
  discoverResumeTemplates,
  loadTemplateFile,
  templateLabel,
} from '@/features/templates/templateLoader';
import { readStorageString, writeStorageString } from '@/utils/localStorage';
import { useResumeStore } from './resume';

const TEMPLATE_KEY = 'resume-preview-template';

export const useTemplateStore = defineStore('template', {
  state: () => ({
    files: [] as string[],
    currentFile: readStorageString(TEMPLATE_KEY, DEFAULT_TEMPLATE),
    loading: false,
  }),

  getters: {
    hint(state): string {
      if (!state.files.length) return '扫描 templates 目录 应聘职位-姓名.md';
      return `已发现 ${state.files.length} 个模版 · 当前 ${state.currentFile}`;
    },
    options(state) {
      return state.files.map((file) => ({
        value: file,
        label: templateLabel(file),
      }));
    },
  },

  actions: {
    async bootstrap() {
      this.files = await discoverResumeTemplates();
      if (!this.files.includes(this.currentFile) && this.files.length) {
        this.currentFile = this.files[0];
      }
    },

    async loadCurrent(options: { persist?: boolean } = {}) {
      const { persist = true } = options;
      this.loading = true;
      try {
        const text = await loadTemplateFile(this.currentFile);
        const resume = useResumeStore();
        resume.loadFromMarkdown(text);
        if (persist) writeStorageString(TEMPLATE_KEY, this.currentFile);
      } finally {
        this.loading = false;
      }
    },

    async selectTemplate(filename: string) {
      this.currentFile = filename;
      await this.loadCurrent();
    },

    async reload() {
      await this.loadCurrent({ persist: false });
    },
  },
});
