<script setup lang="ts">
import { computed } from 'vue';
import type { PreviewDevice } from '@/types/resume';
import { getDeviceConfig } from '@/features/preview/deviceConfigs';

const props = defineProps<{
  device: PreviewDevice;
}>();

const config = computed(() => getDeviceConfig(props.device));
</script>

<template>
  <div class="device-frame" :class="config.frameClass">
    <div v-if="device === 'desktop'" class="device-frame__chrome">
      <span /><span /><span />
    </div>
    <div v-if="device === 'mobile'" class="device-frame__notch" />
    <div class="device-frame__screen">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.device-frame {
  position: relative;
  margin: 0 auto;
  transition: width 0.25s ease, height 0.25s ease;

  &__chrome {
    display: flex;
    gap: 6px;
    padding: 10px 12px;
    background: var(--rs-frame-chrome);
    border: 1px solid var(--rs-border);
    border-bottom: none;
    border-radius: 12px 12px 0 0;

    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--rs-frame-dot);
    }
  }

  &__notch {
    position: absolute;
    top: 10px;
    left: 50%;
    z-index: 2;
    width: 120px;
    height: 24px;
    transform: translateX(-50%);
    border-radius: 0 0 16px 16px;
    background: #111;
  }

  &__screen {
    overflow: hidden;
    background: #fff;
  }
}

.frame-desktop {
  width: min(100%, 960px);

  .device-frame__screen {
    min-height: 640px;
    border: 1px solid var(--rs-border);
    border-radius: 0 0 12px 12px;
  }
}

.frame-mobile {
  width: min(100%, 390px);
  padding: 14px 10px 18px;
  border-radius: 36px;
  background: linear-gradient(145deg, #2a2a2e, #111114);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);

  .device-frame__screen {
    height: min(70vh, 844px);
    border-radius: 28px;
    border: 2px solid #222;
  }
}

.frame-a4 {
  width: min(100%, 794px);

  .device-frame__screen {
    min-height: 1123px;
    border: 1px solid var(--rs-border);
    box-shadow: 0 8px 32px rgba(15, 23, 42, 0.12);
  }
}
</style>
