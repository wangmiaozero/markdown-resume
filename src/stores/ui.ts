import { defineStore } from 'pinia';
import { readStorageString, writeStorageString } from '@/utils/localStorage';
import type { EditorMode } from '@/types/resume';

const COLLAPSED_KEY = 'resume-preview-panel-collapsed';
const MODE_KEY = 'resume-studio:editor-mode';

function readCollapsed(): boolean {
  try {
    return localStorage.getItem(COLLAPSED_KEY) === '1';
  } catch {
    return false;
  }
}

function readEditorMode(): EditorMode {
  const value = readStorageString(MODE_KEY, 'visual');
  return value === 'source' ? 'source' : 'visual';
}

export const useUiStore = defineStore('ui', {
  state: () => ({
    sidebarCollapsed: readCollapsed(),
    editorMode: readEditorMode(),
    sourceSynced: true,
  }),

  actions: {
    toggleSidebar() {
      this.setSidebarCollapsed(!this.sidebarCollapsed);
    },

    setSidebarCollapsed(value: boolean) {
      this.sidebarCollapsed = value;
      writeStorageString(COLLAPSED_KEY, value ? '1' : '0');
    },

    setEditorMode(mode: EditorMode) {
      this.editorMode = mode;
      writeStorageString(MODE_KEY, mode);
    },

    setSourceSynced(value: boolean) {
      this.sourceSynced = value;
    },
  },
});
