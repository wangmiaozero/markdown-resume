<script setup lang="ts">
import { computed } from 'vue';
import { useResumeStore } from '@/stores/resume';
import MetaForm from './MetaForm.vue';
import SectionEditor from './SectionEditor.vue';
import CustomMetaEditor from './CustomMetaEditor.vue';

const resume = useResumeStore();
const sectionCount = computed(() => resume.sections.length);
</script>

<template>
  <div>
    <MetaForm />

    <div class="editor-block">
      <div class="editor-block-head">
        <div class="editor-block-title">章节内容</div>
        <span class="editor-block-count">{{ sectionCount }}</span>
      </div>
      <SectionEditor />
      <button class="btn-mini btn-mini--primary" type="button" @click="resume.addSection()">
        添加章节
      </button>
    </div>

    <CustomMetaEditor />
  </div>
</template>
