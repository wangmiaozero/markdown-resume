<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import {
  TEMPLATE_CATEGORIES,
  buildTemplateOptions,
  filterTemplateOptions,
  groupTemplateOptions,
} from '@/features/templates/templateCategories';
import { templateLabel } from '@/features/templates/templateLoader';
import { useTemplateStore } from '@/stores/template';

const templateStore = useTemplateStore();

const query = ref('');
const categoryFilter = ref('all');

const allOptions = computed(() =>
  buildTemplateOptions(templateStore.files, templateLabel),
);

const filteredOptions = computed(() =>
  filterTemplateOptions(allOptions.value, query.value, categoryFilter.value),
);

const groupedOptions = computed(() => groupTemplateOptions(filteredOptions.value));

const showGrouped = computed(
  () => !query.value.trim() && categoryFilter.value === 'all',
);

const resultCount = computed(() => filteredOptions.value.length);

watch(
  () => templateStore.currentFile,
  (file) => {
    if (!file) return;
    const stillVisible = filteredOptions.value.some((o) => o.value === file);
    if (!stillVisible && (query.value.trim() || categoryFilter.value !== 'all')) {
      query.value = '';
      categoryFilter.value = 'all';
    }
  },
);

async function onChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  if (!value || value === templateStore.currentFile) return;
  try {
    await templateStore.selectTemplate(value);
  } catch (error) {
    console.error(error);
    alert(`切换模版失败：${value}`);
    (event.target as HTMLSelectElement).value = templateStore.currentFile;
  }
}

function clearSearch() {
  query.value = '';
  categoryFilter.value = 'all';
}
</script>

<template>
  <section class="panel-card">
    <h2 class="panel-title">
      <span class="panel-title-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </span>
      <span class="panel-title-text">简历模版</span>
    </h2>

    <div class="template-toolbar">
      <div class="template-search">
        <svg class="template-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3-3" />
        </svg>
        <input
          v-model="query"
          type="search"
          class="template-search-input"
          placeholder="搜索职位、姓名、分组…"
          aria-label="搜索简历模版"
        />
        <button
          v-if="query || categoryFilter !== 'all'"
          type="button"
          class="template-search-clear"
          aria-label="清除筛选"
          @click="clearSearch"
        >
          ×
        </button>
      </div>
      <select
        v-model="categoryFilter"
        class="template-category-select"
        aria-label="模版分组"
      >
        <option value="all">全部分组</option>
        <option v-for="cat in TEMPLATE_CATEGORIES" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </option>
      </select>
    </div>

    <select
      class="theme-select template-select"
      aria-label="简历模版"
      :value="templateStore.currentFile"
      @change="onChange"
    >
      <template v-if="showGrouped">
        <optgroup v-for="group in groupedOptions" :key="group.id" :label="group.name">
          <option v-for="opt in group.items" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </optgroup>
      </template>
      <template v-else>
        <option v-for="opt in filteredOptions" :key="opt.value" :value="opt.value">
          {{ opt.categoryName }} · {{ opt.label }}
        </option>
      </template>
    </select>

    <p class="panel-title-hint template-hint">
      <span>{{ templateStore.hint }}</span>
      <span v-if="query || categoryFilter !== 'all'" class="template-filter-count">
        · 筛选 {{ resultCount }} 个
      </span>
    </p>
  </section>
</template>
