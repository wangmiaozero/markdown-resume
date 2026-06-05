<script setup lang="ts">
import { useResumeStore } from '@/stores/resume';

const resume = useResumeStore();

const fields = [
  { key: 'name', label: '姓名', id: 'metaName', autocomplete: 'name' as const },
  { key: 'role', label: '职位 / 方向', id: 'metaRole', autocomplete: undefined },
];

const contactFields = [
  { key: 'email', label: '邮箱', id: 'metaEmail', type: 'email', autocomplete: 'email' as const },
  { key: 'phone', label: '电话', id: 'metaPhone', type: 'tel', autocomplete: 'tel' as const },
  { key: 'city', label: '城市', id: 'metaCity', type: 'text', autocomplete: undefined },
  { key: 'github', label: 'GitHub', id: 'metaGithub', type: 'text', autocomplete: undefined },
  { key: 'website', label: '网站', id: 'metaWebsite', type: 'text', autocomplete: undefined },
  { key: 'portfolio', label: '作品集', id: 'metaPortfolio', type: 'text', autocomplete: undefined },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    id: 'metaLinkedin',
    type: 'text',
    autocomplete: undefined,
    wide: true,
  },
];

function update(key: string, value: string) {
  resume.setMetaField(key, value);
}
</script>

<template>
  <div>
    <div class="editor-block">
      <div class="editor-block-head">
        <div class="editor-block-title">基础信息</div>
      </div>
      <div class="editor-grid">
        <div v-for="field in fields" :key="field.key" class="field">
          <label :for="field.id">{{ field.label }}</label>
          <input
            :id="field.id"
            type="text"
            :autocomplete="field.autocomplete"
            :value="resume.meta[field.key] ?? ''"
            @input="update(field.key, ($event.target as HTMLInputElement).value)"
          />
        </div>
      </div>
    </div>

    <div class="editor-block">
      <div class="editor-block-head">
        <div class="editor-block-title">联系方式</div>
      </div>
      <div class="editor-grid">
        <div
          v-for="field in contactFields"
          :key="field.key"
          class="field"
          :class="{ 'field--wide': field.wide }"
        >
          <label :for="field.id">{{ field.label }}</label>
          <input
            :id="field.id"
            :type="field.type"
            :autocomplete="field.autocomplete"
            :value="resume.meta[field.key] ?? ''"
            @input="update(field.key, ($event.target as HTMLInputElement).value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
