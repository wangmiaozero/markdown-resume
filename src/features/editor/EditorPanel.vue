<script setup lang="ts">
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import TemplateSection from './TemplateSection.vue';

const markdownContent = defineModel<string>('markdownContent', { required: true });

const emit = defineEmits<{
  contentChange: [];
  contentBlur: [];
}>();
</script>

<template>
  <aside id="editorPanel" class="editor-panel">
    <div class="panel-body editor-panel-body">
      <TemplateSection />
      <MdEditor
        v-model="markdownContent"
        theme="light"
        language="zh-CN"
        :preview="false"
        :toolbars-exclude="['preview', 'previewOnly', 'htmlPreview', 'github']"
        class="markdown-editor"
        @on-change="emit('contentChange')"
        @on-blur="emit('contentBlur')"
      />
    </div>
  </aside>
</template>

<style scoped>
.editor-panel-body {
  flex: 1;
  min-height: 0;
}

.markdown-editor {
  flex: 1;
  min-height: 0;
  height: auto;
}

.markdown-editor :deep(.md-editor) {
  height: 100%;
  border: none;
  border-radius: 0;
}

.markdown-editor :deep(.cm-scroller) {
  -webkit-overflow-scrolling: touch;
}
</style>
