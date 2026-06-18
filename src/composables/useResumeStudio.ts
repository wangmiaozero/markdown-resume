import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { useResumeStore } from '@/stores/resume';
import { useThemeStore } from '@/stores/theme';
import { usePreviewStore } from '@/stores/preview';
import { useTemplateStore } from '@/stores/template';
import { importMarkdownFile } from '@/features/import/importMarkdownFile';
import { exportPdfFromIframe } from '@/features/export/exportPdf';
import { exportWordFromHtml } from '@/features/export/exportWord';
import { markdownToHtml } from '@/features/markdown';
import { applyPanelAccent, getThemePanelConfig } from '@/features/themes/themePanelConfig';
import { isThemeId } from '@/features/themes/themeRegistry';
import { loadEditorState, saveEditorState } from '@/lib/editorStorage';
import { escapeHtml } from '@/utils/escapeHtml';
import type { ThemeId } from '@/features/themes/types';

const SAVE_IDLE_MS = 600;

export function useResumeStudio() {
  const resume = useResumeStore();
  const themeStore = useThemeStore();
  const preview = usePreviewStore();
  const templateStore = useTemplateStore();

  const ready = ref(false);
  let idleSaveTimer: ReturnType<typeof setTimeout> | null = null;
  let hydrated = false;

  const markdownContent = computed({
    get: () => resume.markdown,
    set: (value: string) => {
      resume.setMarkdownContent(value);
    },
  });

  const panelConfig = computed(() => getThemePanelConfig(themeStore.currentThemeId));

  function syncThemeFromMeta(theme?: string) {
    if (!theme || !isThemeId(theme)) return;
    if (themeStore.currentThemeId !== theme) {
      themeStore.setTheme(theme as ThemeId);
    }
  }

  function flushSave() {
    if (!hydrated) return;
    if (idleSaveTimer) {
      clearTimeout(idleSaveTimer);
      idleSaveTimer = null;
    }
    void saveEditorState({
      themeId: themeStore.currentThemeId,
      markdownContent: resume.markdown,
      activeDevice: preview.device,
    });
  }

  function scheduleIdleSave() {
    if (!hydrated) return;
    if (idleSaveTimer) clearTimeout(idleSaveTimer);
    idleSaveTimer = setTimeout(flushSave, SAVE_IDLE_MS);
  }

  function onThemeChange(themeId: ThemeId) {
    themeStore.setTheme(themeId);
    resume.setMetaField('theme', themeId);
    applyPanelAccent(getThemePanelConfig(themeId).accent);
    flushSave();
  }

  async function onImportFile(file: File | undefined) {
    if (!file) return;
    const text = await importMarkdownFile(file);
    resume.loadFromMarkdown(text);
    syncThemeFromMeta(resume.meta.theme);
    applyPanelAccent(getThemePanelConfig(themeStore.currentThemeId).accent);
    flushSave();
  }

  async function onExportPdf() {
    preview.setDevice('desktop');
    await nextTick();
    await nextTick();
    exportPdfFromIframe(preview.desktopIframe, { title: resume.meta.name || 'Resume' });
  }

  function onExportWord() {
    const html = resume.sections
      .map((s) => `<h2>${escapeHtml(s.title)}</h2>${markdownToHtml(s.body)}`)
      .join('');
    exportWordFromHtml(
      `<h1>${escapeHtml(resume.meta.name ?? '')}</h1><p>${escapeHtml(resume.meta.role ?? '')}</p>${html}`,
    );
  }

  onMounted(async () => {
    try {
      await templateStore.bootstrap();
      const saved = await loadEditorState();

      if (saved?.markdownContent?.trim()) {
        resume.loadFromMarkdown(saved.markdownContent);
        if (saved.themeId && isThemeId(saved.themeId)) {
          themeStore.setTheme(saved.themeId);
        }
        if (saved.activeDevice) {
          preview.setDevice(saved.activeDevice);
        }
      } else {
        await templateStore.loadCurrent();
        syncThemeFromMeta(resume.meta.theme);
      }

      applyPanelAccent(getThemePanelConfig(themeStore.currentThemeId).accent);
      hydrated = true;
      ready.value = true;
    } catch (error) {
      console.error(error);
      alert('无法加载简历模版。\n\n请运行 pnpm dev 后访问 http://localhost:5173');
    }
  });

  onUnmounted(() => {
    flushSave();
  });

  watch(
    () => themeStore.currentThemeId,
    (id) => applyPanelAccent(getThemePanelConfig(id).accent),
  );
  watch(() => preview.device, flushSave);
  watch(
    () => resume.meta.theme,
    (theme) => {
      if (!hydrated) return;
      syncThemeFromMeta(theme);
    },
  );
  watch(
    () => templateStore.currentFile,
    () => {
      if (!hydrated) return;
      syncThemeFromMeta(resume.meta.theme);
      applyPanelAccent(getThemePanelConfig(themeStore.currentThemeId).accent);
      flushSave();
    },
  );

  return {
    ready,
    markdownContent,
    panelConfig,
    onThemeChange,
    onImportFile,
    onExportPdf,
    onExportWord,
    scheduleIdleSave,
    flushSave,
  };
}
