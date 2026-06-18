<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useResumeStore } from '@/stores/resume';
import { usePreviewStore } from '@/stores/preview';
import { useThemeStore } from '@/stores/theme';
import { markdownToHtml } from '@/features/markdown';
import { renderThemeDocument } from '@/features/themes/renderTheme';
import { debounce } from '@/utils/debounce';

const PREVIEW_DEBOUNCE_MS = 300;

const props = defineProps<{
  device: 'desktop' | 'mobile';
}>();

const resume = useResumeStore();
const preview = usePreviewStore();
const themeStore = useThemeStore();
const iframeRef = ref<HTMLIFrameElement | null>(null);

const htmlContent = computed(() =>
  resume.sections.map((s) => `## ${s.title}\n\n${s.body}`).join('\n\n'),
);

function isActiveDevice(): boolean {
  return preview.device === props.device;
}

function renderDocument() {
  const theme = themeStore.currentTheme;
  if (!theme || !iframeRef.value) return;
  // desktop iframe 始终更新（PDF 导出依赖）；mobile 仅在当前设备时更新
  if (props.device === 'mobile' && !isActiveDevice()) return;

  preview.setUpdating(true);
  const doc = renderThemeDocument(theme, {
    meta: { ...resume.meta, theme: theme.id },
    htmlContent: markdownToHtml(htmlContent.value),
    device: props.device,
  });

  iframeRef.value.srcdoc = doc;
  preview.setUpdating(false);
}

const debouncedRender = debounce(renderDocument, PREVIEW_DEBOUNCE_MS);

onMounted(renderDocument);

watch(() => resume.markdown, debouncedRender);
watch(
  () => [themeStore.currentThemeId, props.device, preview.device] as const,
  () => renderDocument(),
);

watch(iframeRef, (el) => {
  if (props.device === 'desktop') preview.setDesktopIframe(el);
  else preview.setMobileIframe(el);
});
</script>

<template>
  <iframe
    :id="device === 'desktop' ? 'previewIframePc' : 'previewIframeMobile'"
    ref="iframeRef"
    data-preview
    title="Resume Preview"
  />
</template>
