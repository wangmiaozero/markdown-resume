<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useResumeStore } from '@/stores/resume';

const resume = useResumeStore();

interface MetaEntry {
  id: string;
  key: string;
  value: string;
}

const entries = ref<MetaEntry[]>([]);

function syncFromStore() {
  entries.value = resume.customMetaKeys.map((key) => ({
    id: key,
    key,
    value: resume.meta[key] ?? '',
  }));
}

watch(() => resume.customMetaKeys, syncFromStore, { immediate: true, deep: true });

function commitEntry(entry: MetaEntry) {
  if (entry.id !== entry.key) resume.removeCustomMeta(entry.id);
  if (entry.key.trim()) resume.setMetaField(entry.key.trim(), entry.value);
}

function onKeyInput(entry: MetaEntry, value: string) {
  entry.key = value;
}

function onValueInput(entry: MetaEntry, value: string) {
  entry.value = value;
  if (entry.key.trim()) commitEntry(entry);
}

function onKeyBlur(entry: MetaEntry) {
  commitEntry(entry);
  syncFromStore();
}

function addField() {
  entries.value.push({ id: `new-${Date.now()}`, key: '', value: '' });
}

function removeEntry(entry: MetaEntry) {
  if (entry.key.trim()) resume.removeCustomMeta(entry.key.trim());
  else if (resume.meta[entry.id]) resume.removeCustomMeta(entry.id);
  entries.value = entries.value.filter((e) => e.id !== entry.id);
}

const hasEntries = computed(() => entries.value.length > 0);
</script>

<template>
  <div class="editor-block">
    <div class="editor-block-head">
      <div class="editor-block-title">更多字段</div>
      <button class="btn-mini" type="button" @click="addField">添加字段</button>
    </div>
    <div class="custom-meta-list">
      <div v-if="!hasEntries" class="empty-state">暂无自定义字段</div>
      <div v-for="entry in entries" :key="entry.id" class="custom-meta-item">
        <div class="custom-meta-head">
          <div class="custom-meta-row">
            <input
              class="custom-meta-key"
              type="text"
              :value="entry.key"
              aria-label="字段名"
              @input="onKeyInput(entry, ($event.target as HTMLInputElement).value)"
              @blur="onKeyBlur(entry)"
            />
            <input
              class="custom-meta-value"
              type="text"
              :value="entry.value"
              aria-label="字段值"
              @input="onValueInput(entry, ($event.target as HTMLInputElement).value)"
            />
          </div>
          <button class="btn-mini btn-mini--danger" type="button" @click="removeEntry(entry)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>
