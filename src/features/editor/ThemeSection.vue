<script setup lang="ts">
import { computed, watch } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { useResumeStore } from '@/stores/resume';
import { applyPanelAccent, getThemePanelConfig } from '@/features/themes/themePanelConfig';
import type { ThemeId } from '@/features/themes/types';

const themeStore = useThemeStore();
const resume = useResumeStore();

const panelConfig = computed(() => getThemePanelConfig(themeStore.currentThemeId));

watch(
  () => themeStore.currentThemeId,
  (id) => {
    applyPanelAccent(getThemePanelConfig(id).accent);
  },
  { immediate: true },
);

function onThemeChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value as ThemeId;
  themeStore.setTheme(value);
  resume.setMetaField('theme', value);
}
</script>

<template>
  <section class="panel-card">
    <h2 class="panel-title">
      <span class="panel-title-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </span>
      <span class="panel-title-text">简历风格</span>
    </h2>
    <select
      class="theme-select"
      aria-label="简历风格"
      :value="themeStore.currentThemeId"
      @change="onThemeChange"
    >
      <option v-for="theme in themeStore.themes" :key="theme.id" :value="theme.id">
        {{ theme.name }}
      </option>
    </select>
    <div class="theme-context" aria-live="polite">
      <div class="theme-context-top">
        <span class="theme-badge">{{ panelConfig.badge }}</span>
        <strong class="theme-context-title">{{ panelConfig.title }}</strong>
      </div>
      <p class="theme-context-desc">{{ panelConfig.desc }}</p>
      <div class="theme-config-chips">
        <span v-for="chip in panelConfig.chips" :key="chip">{{ chip }}</span>
      </div>
    </div>
  </section>
</template>
