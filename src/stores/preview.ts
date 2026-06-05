import { defineStore } from 'pinia';
import type { PreviewDevice } from '@/types/resume';

export const usePreviewStore = defineStore('preview', {
  state: () => ({
    device: 'desktop' as PreviewDevice,
    updating: false,
    desktopIframe: null as HTMLIFrameElement | null,
    mobileIframe: null as HTMLIFrameElement | null,
  }),

  getters: {
    activeIframe(state): HTMLIFrameElement | null {
      if (state.device === 'mobile') return state.mobileIframe;
      return state.desktopIframe;
    },
  },

  actions: {
    setDevice(device: PreviewDevice) {
      this.device = device;
    },

    setDesktopIframe(el: HTMLIFrameElement | null) {
      this.desktopIframe = el;
    },

    setMobileIframe(el: HTMLIFrameElement | null) {
      this.mobileIframe = el;
    },

    setUpdating(value: boolean) {
      this.updating = value;
    },
  },
});
