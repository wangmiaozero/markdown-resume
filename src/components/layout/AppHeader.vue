<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { usePreviewStore } from '@/stores/preview';
import type { ThemePanelConfig } from '@/features/themes/themePanelConfig';
import type { PreviewDevice } from '@/types/resume';
import type { ThemeId } from '@/features/themes/types';

const props = defineProps<{
  panelConfig: ThemePanelConfig;
}>();

const emit = defineEmits<{
  themeChange: [themeId: ThemeId];
  fileUpload: [file: File | undefined];
  exportPdf: [];
  exportWord: [];
}>();

const themeStore = useThemeStore();
const preview = usePreviewStore();

const metaOpen = ref(false);
const metaDropdownRef = ref<HTMLElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);

const themeChips = computed(() => props.panelConfig.chips);

function onThemeChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value as ThemeId;
  emit('themeChange', value);
}

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  emit('fileUpload', input.files?.[0]);
  input.value = '';
}

function setDevice(device: PreviewDevice) {
  preview.setDevice(device);
}

function onDocumentClick(event: MouseEvent) {
  if (!metaOpen.value) return;
  const target = event.target as Node;
  if (metaDropdownRef.value && !metaDropdownRef.value.contains(target)) {
    metaOpen.value = false;
  }
}

onMounted(() => document.addEventListener('click', onDocumentClick));
onUnmounted(() => document.removeEventListener('click', onDocumentClick));
</script>

<template>
  <header class="app-header">
    <div class="panel-brand header-brand">
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

    <div class="header-toolbar">
      <div class="header-group header-group--theme">
        <label class="header-label" for="header-theme-select">排版风格</label>
        <select
          id="header-theme-select"
          class="header-select theme-select"
          aria-label="排版风格"
          :value="themeStore.currentThemeId"
          @change="onThemeChange"
        >
          <option v-for="theme in themeStore.themes" :key="theme.id" :value="theme.id">
            {{ theme.name }}
          </option>
        </select>
      </div>

      <div ref="metaDropdownRef" class="header-group header-dropdown">
        <button
          class="header-btn header-btn--ghost"
          type="button"
          aria-label="风格"
          :aria-expanded="metaOpen"
          aria-haspopup="true"
          @click.stop="metaOpen = !metaOpen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span class="header-btn-text">风格</span>
        </button>
        <div v-show="metaOpen" class="header-dropdown-panel" @click.stop>
          <div class="header-dropdown-head">
            <span class="theme-badge">{{ panelConfig.badge }}</span>
            <strong>{{ panelConfig.title }}</strong>
            <p>{{ panelConfig.desc }}</p>
          </div>
          <div class="theme-config-chips">
            <span v-for="chip in themeChips" :key="chip">{{ chip }}</span>
          </div>
        </div>
      </div>

      <div class="header-divider" aria-hidden="true" />

      <button
        class="header-btn header-btn--ghost"
        type="button"
        aria-label="内容导入"
        @click="fileInputRef?.click()"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <span class="header-btn-text">内容导入</span>
        <span class="header-btn-text header-btn-text--short">导入</span>
        <input
          ref="fileInputRef"
          type="file"
          accept=".md"
          hidden
          aria-label="上传 Markdown 文件"
          @change="onFileChange"
        />
      </button>

      <div class="header-divider" aria-hidden="true" />

      <div class="header-group header-export">
        <span class="header-label">导出与分享</span>
        <div class="header-export-actions">
          <button
            class="header-btn header-btn--primary"
            type="button"
            aria-label="下载高清 PDF"
            @click="emit('exportPdf')"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span class="header-btn-text">下载高清 PDF</span>
            <span class="header-btn-text header-btn-text--short">PDF</span>
          </button>
          <button
            class="header-btn header-btn--secondary"
            type="button"
            aria-label="下载 Word"
            @click="emit('exportWord')"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13h8" />
              <path d="M8 17h6" />
            </svg>
            <span class="header-btn-text">下载 Word</span>
            <span class="header-btn-text header-btn-text--short">Word</span>
          </button>
        </div>
      </div>
    </div>

    <div class="header-device">
      <div class="device-switcher" role="tablist">
        <button
          class="device-tab"
          :class="{ active: preview.device === 'desktop' }"
          data-device="pc"
          role="tab"
          :aria-selected="preview.device === 'desktop'"
          type="button"
          @click="setDevice('desktop')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          Desktop
        </button>
        <button
          class="device-tab"
          :class="{ active: preview.device === 'mobile' }"
          data-device="iphone"
          role="tab"
          :aria-selected="preview.device === 'mobile'"
          type="button"
          @click="setDevice('mobile')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
          Mobile
        </button>
      </div>
    </div>
  </header>
</template>
