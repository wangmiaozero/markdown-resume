import { defineStore } from 'pinia';
import { getThemeById, getThemes } from '@/features/themes';
import { readStorage, writeStorage } from '@/utils/localStorage';
import type { ThemeId } from '@/features/themes/types';

const THEME_KEY = 'resume-studio:theme';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentThemeId: readStorage<ThemeId>(THEME_KEY, 'professional'),
  }),

  getters: {
    themes: () => getThemes(),
    currentTheme(state) {
      return getThemeById(state.currentThemeId) ?? getThemes()[0];
    },
  },

  actions: {
    setTheme(id: ThemeId) {
      this.currentThemeId = id;
      writeStorage(THEME_KEY, id);
    },
  },
});
