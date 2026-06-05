<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';

defineProps<{
  collapsed: boolean;
}>();

const emit = defineEmits<{
  toggle: [];
}>();
</script>

<template>
  <button
    type="button"
    class="collapse-btn"
    :title="collapsed ? '展开面板' : '收起面板'"
    @click="emit('toggle')"
  >
    <BaseIcon :name="collapsed ? 'panel-open' : 'panel-close'" :size="16" />
  </button>
</template>

<style scoped lang="scss">
.collapse-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--rs-border);
  border-radius: var(--rs-radius-sm);
  background: var(--rs-surface-2);
  color: var(--rs-text-muted);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:active {
    transform: scale(0.96);
    background: var(--rs-surface-3);
    color: var(--rs-text);
  }
}
</style>
