<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import EditorPanel from '@/features/editor/EditorPanel.vue';
import PreviewPanel from '@/features/preview/PreviewPanel.vue';
import { useResumeStudio } from '@/composables/useResumeStudio';

const {
  ready,
  markdownContent,
  panelConfig,
  onThemeChange,
  onImportFile,
  onExportPdf,
  onExportWord,
  scheduleIdleSave,
  flushSave,
} = useResumeStudio();
</script>

<template>
  <div v-if="ready" class="app">
    <AppHeader
      :panel-config="panelConfig"
      @theme-change="onThemeChange"
      @file-upload="onImportFile"
      @export-pdf="onExportPdf"
      @export-word="onExportWord"
    />
    <div class="workspace">
      <EditorPanel
        v-model:markdown-content="markdownContent"
        @content-change="scheduleIdleSave"
        @content-blur="flushSave"
      />
      <PreviewPanel />
    </div>
  </div>
  <div v-else class="boot-screen">正在加载 Resume Preview…</div>
</template>

<style scoped>
.boot-screen {
  display: grid;
  place-items: center;
  height: 100dvh;
  color: var(--text-muted);
  font-family: var(--font-ui);
}
</style>
