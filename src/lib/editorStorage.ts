import localforage from 'localforage';
import type { PreviewDevice } from '@/types/resume';
import type { ThemeId } from '@/features/themes/types';

const STORAGE_KEY = 'editor-state';

export interface PersistedEditorState {
  themeId: ThemeId;
  markdownContent: string;
  activeDevice: PreviewDevice;
}

const store = localforage.createInstance({
  name: 'markdown-resume-vue3',
  storeName: 'editor',
});

export function loadEditorState(): Promise<PersistedEditorState | null> {
  return store.getItem<PersistedEditorState>(STORAGE_KEY);
}

export function saveEditorState(state: PersistedEditorState): Promise<PersistedEditorState> {
  return store.setItem(STORAGE_KEY, state);
}
