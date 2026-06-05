<script setup lang="ts">
import { useResumeStore } from '@/stores/resume';

const resume = useResumeStore();
</script>

<template>
  <div class="section-list">
    <div v-if="!resume.sections.length" class="empty-state">暂无章节</div>
    <div v-for="(section, index) in resume.sections" :key="section.id" class="resume-section-item">
      <div class="section-item-head">
        <span class="section-drag-handle">{{ String(index + 1).padStart(2, '0') }}</span>
        <input
          class="section-title-input"
          type="text"
          :value="section.title"
          aria-label="章节标题"
          @input="resume.updateSection(section.id, { title: ($event.target as HTMLInputElement).value })"
        />
        <button
          class="btn-mini btn-mini--danger"
          type="button"
          @click="resume.removeSection(section.id)"
        >
          删除
        </button>
      </div>
      <div class="field">
        <textarea
          class="section-body"
          spellcheck="false"
          aria-label="章节内容"
          :value="section.body"
          @input="resume.updateSection(section.id, { body: ($event.target as HTMLTextAreaElement).value })"
        />
      </div>
    </div>
  </div>
</template>
