<script setup lang="ts">
import { computed } from 'vue';
import IframePreview from './IframePreview.vue';
import { usePreviewStore } from '@/stores/preview';

const preview = usePreviewStore();
const activeDevice = computed(() => preview.device);
</script>

<template>
  <div id="deviceStage" class="device-stage">
    <div
      class="device-view"
      :class="{ 'is-active': activeDevice === 'desktop' }"
      data-device-view="pc"
    >
      <div class="pc-frame">
        <div class="pc-topbar">
          <span class="window-btn close" />
          <span class="window-btn minimize" />
          <span class="window-btn maximize" />
          <div class="pc-url">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            resume-preview.local
          </div>
          <div style="width: 48px" />
        </div>
        <IframePreview device="desktop" />
      </div>
    </div>

    <div
      class="device-view"
      :class="{ 'is-active': activeDevice === 'mobile' }"
      data-device-view="iphone"
    >
      <div class="iphone-frame">
        <div class="iphone-screen">
          <div class="iphone-dynamic-island" />
          <IframePreview device="mobile" />
          <div class="iphone-home-indicator" />
        </div>
      </div>
    </div>
  </div>
</template>
