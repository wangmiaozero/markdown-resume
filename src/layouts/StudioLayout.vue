<script setup lang="ts">
import { computed } from 'vue';
import EditorPanel from '@/features/editor/EditorPanel.vue';
import PreviewPanel from '@/features/preview/PreviewPanel.vue';
import { useUiStore } from '@/stores/ui';

const ui = useUiStore();

const appClass = computed(() => ({
  app: true,
  'panel-collapsed': ui.sidebarCollapsed,
}));

function togglePanel() {
  ui.toggleSidebar();
}
</script>

<template>
  <div :class="appClass">
    <EditorPanel />

    <button
      id="panelToggleBtn"
      class="panel-toggle-btn"
      type="button"
      aria-controls="editorPanel"
      :aria-expanded="!ui.sidebarCollapsed"
      :title="ui.sidebarCollapsed ? '展开左侧编辑区' : '收起左侧编辑区'"
      @click="togglePanel"
    >
      <span class="panel-toggle-icon" aria-hidden="true">{{ ui.sidebarCollapsed ? '›' : '‹' }}</span>
      <span class="panel-toggle-text">{{ ui.sidebarCollapsed ? '展开' : '收起' }}</span>
    </button>

    <PreviewPanel />
  </div>
</template>
