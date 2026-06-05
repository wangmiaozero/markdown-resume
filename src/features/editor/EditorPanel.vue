<script setup lang="ts">
import { nextTick, watch } from 'vue';
import TemplateSection from './TemplateSection.vue';
import ThemeSection from './ThemeSection.vue';
import VisualEditor from './VisualEditor.vue';
import SourceEditor from './SourceEditor.vue';
import { useResumeStore } from '@/stores/resume';
import { useThemeStore } from '@/stores/theme';
import { useUiStore } from '@/stores/ui';
import { usePreviewStore } from '@/stores/preview';
import { useTemplateStore } from '@/stores/template';
import { importMarkdownFile } from '@/features/import/importMarkdownFile';
import { exportMarkdown } from '@/features/export/exportMarkdown';
import { exportPdfFromIframe } from '@/features/export/exportPdf';
import { exportWordFromHtml } from '@/features/export/exportWord';
import { markdownToHtml } from '@/features/markdown';
import { isThemeId } from '@/features/themes/themeRegistry';
import type { EditorMode } from '@/types/resume';
import type { ThemeId } from '@/features/themes/types';

const resume = useResumeStore();
const themeStore = useThemeStore();
const ui = useUiStore();
const preview = usePreviewStore();
const templateStore = useTemplateStore();

watch(
  () => themeStore.currentThemeId,
  (id) => {
    if (resume.meta.theme !== id) resume.setMetaField('theme', id);
  },
);

function setEditorMode(mode: EditorMode) {
  if (mode === 'source') {
    resume.setSourceDraft(resume.markdown);
    ui.setSourceSynced(true);
  }
  ui.setEditorMode(mode);
}

async function reloadTemplate() {
  try {
    await templateStore.reload();
  } catch (error) {
    console.error(error);
    alert(`重新加载失败，请确认 ${templateStore.currentFile} 存在且本地服务已启动。`);
  }
}

function downloadMd() {
  exportMarkdown(resume.markdown, `${resume.meta.name || 'resume'}.md`);
}

async function exportPdf() {
  preview.setDevice('desktop');
  await nextTick();
  await nextTick();
  exportPdfFromIframe(preview.desktopIframe, { title: resume.meta.name || 'Resume' });
}

function exportWord() {
  const html = resume.sections
    .map((s) => `<h2>${s.title}</h2>${markdownToHtml(s.body)}`)
    .join('');
  exportWordFromHtml(`<h1>${resume.meta.name ?? ''}</h1><p>${resume.meta.role ?? ''}</p>${html}`);
}

async function onImportFile(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;
  const text = await importMarkdownFile(file);
  resume.loadFromMarkdown(text);
  if (resume.meta.theme && isThemeId(resume.meta.theme)) {
    themeStore.setTheme(resume.meta.theme as ThemeId);
  }
  input.value = '';
}
</script>

<template>
  <aside id="editorPanel" class="editor-panel">
    <div class="panel-brand">
      <div class="brand-mark" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <div class="brand-info">
        <div class="brand-name">Resume Preview</div>
        <div class="brand-desc">Markdown 简历排版引擎</div>
      </div>
    </div>

    <div class="panel-body">
      <TemplateSection />
      <ThemeSection />

      <section class="panel-card panel-card--editor">
        <h2 class="panel-title">
          <span class="panel-title-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </span>
          <span class="panel-title-text">简历内容</span>
          <span class="panel-title-actions">
            <button class="btn-mini btn-mini--primary" type="button" @click="reloadTemplate">
              重新加载
            </button>
            <button class="btn-mini" type="button" @click="downloadMd">下载 .md</button>
          </span>
        </h2>

        <div class="editor-mode-toggle" role="tablist" aria-label="编辑模式">
          <button
            class="editor-mode-tab"
            :class="{ active: ui.editorMode === 'visual' }"
            type="button"
            role="tab"
            :aria-selected="ui.editorMode === 'visual'"
            @click="setEditorMode('visual')"
          >
            表单编辑
          </button>
          <button
            class="editor-mode-tab"
            :class="{ active: ui.editorMode === 'source' }"
            type="button"
            role="tab"
            :aria-selected="ui.editorMode === 'source'"
            @click="setEditorMode('source')"
          >
            Markdown 源码
          </button>
        </div>

        <div
          id="visualEditor"
          class="editor-mode-panel"
          :class="{ active: ui.editorMode === 'visual' }"
          role="tabpanel"
          :hidden="ui.editorMode !== 'visual'"
        >
          <VisualEditor />
        </div>

        <SourceEditor v-show="ui.editorMode === 'source'" />

        <div class="field-file" style="margin-top: 4px">
          <div class="field-file-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <div class="field-file-title">导入 Markdown</div>
          <div class="field-file-desc">支持 .md 文件，覆盖当前编辑器内容</div>
          <input
            type="file"
            accept=".md"
            aria-label="导入 Markdown 文件"
            @change="onImportFile"
          />
        </div>
      </section>

      <section class="panel-card panel-card--export">
        <h2 class="panel-title">
          <span class="panel-title-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
          <span class="panel-title-text">导出与分享</span>
        </h2>
        <div class="export-actions">
          <button id="exportPdfBtn" class="btn-primary" type="button" @click="exportPdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            下载高清 PDF
          </button>
          <button id="exportWordBtn" class="btn-primary btn-secondary" type="button" @click="exportWord">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            下载 Word
          </button>
        </div>
        <p class="btn-primary-sub">基于 Desktop 预览导出，自动保留当前主题样式</p>
      </section>
    </div>
  </aside>
</template>
