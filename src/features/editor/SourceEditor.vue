<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { EditorView, basicSetup } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { useResumeStore } from '@/stores/resume';
import { useUiStore } from '@/stores/ui';

const resume = useResumeStore();
const ui = useUiStore();
const host = ref<HTMLElement | null>(null);
let view: EditorView | null = null;

function createEditor() {
  if (!host.value) return;
  view?.destroy();
  view = new EditorView({
    parent: host.value,
    extensions: [
      basicSetup,
      markdown(),
      EditorView.lineWrapping,
      EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          resume.setSourceDraft(update.state.doc.toString());
          ui.setSourceSynced(false);
        }
      }),
    ],
    doc: resume.sourceDraft,
  });
}

onMounted(createEditor);

watch(
  () => resume.sourceDraft,
  (value) => {
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({ changes: { from: 0, to: current.length, insert: value } });
    }
  },
);

onBeforeUnmount(() => {
  view?.destroy();
  view = null;
});

function applySource() {
  resume.applySource();
  ui.setSourceSynced(true);
}
</script>

<template>
  <div id="sourceEditor" class="editor-mode-panel active" role="tabpanel">
    <div class="source-actions">
      <span id="sourceStatus" class="source-status">
        {{ ui.sourceSynced ? 'Markdown 已同步' : '源码有未应用修改' }}
      </span>
      <button id="applySourceBtn" class="btn-mini btn-mini--primary" type="button" @click="applySource">
        应用源码
      </button>
    </div>
    <div class="md-hint">
      frontmatter 保存头部字段，正文以 <code>##</code> 拆成可编辑章节。
    </div>
    <div class="field">
      <div ref="host" class="md-editor source-cm-host" />
    </div>
  </div>
</template>

<style scoped>
.source-cm-host :deep(.cm-editor) {
  min-height: clamp(620px, calc(100dvh - var(--header-bar-height) - 180px), 920px);
  height: clamp(620px, calc(100dvh - var(--header-bar-height) - 180px), 920px);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  line-height: 1.6;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  background: #f8fafc;
}

.source-cm-host :deep(.cm-scroller) {
  min-height: inherit;
}

.source-cm-host :deep(.cm-content) {
  padding: 10px 12px;
}
</style>
