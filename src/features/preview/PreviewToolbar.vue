<script setup lang="ts">
import { computed } from 'vue';
import { usePreviewStore } from '@/stores/preview';
import { useThemeStore } from '@/stores/theme';
import { getThemePanelConfig } from '@/features/themes/themePanelConfig';
import type { PreviewDevice } from '@/types/resume';

const preview = usePreviewStore();
const themeStore = useThemeStore();

const themeLabel = computed(() => getThemePanelConfig(themeStore.currentThemeId).badge);

function setDevice(device: PreviewDevice) {
  preview.setDevice(device);
}
</script>

<template>
  <div class="preview-toolbar">
    <div class="preview-toolbar-inner">
      <div class="preview-status">实时预览</div>
      <div id="deviceSwitcher" class="device-switcher" role="tablist">
        <button
          class="device-tab"
          :class="{ active: preview.device === 'desktop' }"
          data-device="pc"
          role="tab"
          :aria-selected="preview.device === 'desktop'"
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
          @click="setDevice('mobile')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
          Mobile
        </button>
      </div>
      <div id="previewThemeLabel" class="preview-theme-label">{{ themeLabel }}</div>
    </div>
  </div>
</template>
