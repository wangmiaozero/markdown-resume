<script setup lang="ts">
import { onMounted, ref } from 'vue';
import StudioLayout from '@/layouts/StudioLayout.vue';
import { useTemplateStore } from '@/stores/template';
import { useThemeStore } from '@/stores/theme';
import { useResumeStore } from '@/stores/resume';
import { isThemeId } from '@/features/themes/themeRegistry';
import type { ThemeId } from '@/features/themes/types';

const templateStore = useTemplateStore();
const themeStore = useThemeStore();
const resume = useResumeStore();
const ready = ref(false);

onMounted(async () => {
  try {
    await templateStore.bootstrap();
    await templateStore.loadCurrent();
    const themeFromMeta = resume.meta.theme;
    if (themeFromMeta && isThemeId(themeFromMeta)) {
      themeStore.setTheme(themeFromMeta as ThemeId);
    }
    ready.value = true;
  } catch (error) {
    console.error(error);
    alert('无法加载简历模版。\n\n请运行 pnpm dev 后访问 http://localhost:5173');
  }
});
</script>

<template>
  <StudioLayout v-if="ready" />
  <div v-else class="boot-screen">正在加载 Resume Preview…</div>
</template>

<style scoped>
.boot-screen {
  display: grid;
  place-items: center;
  height: 100dvh;
  color: var(--text-muted);
  font-family: var(--font-ui);
}
</style>
