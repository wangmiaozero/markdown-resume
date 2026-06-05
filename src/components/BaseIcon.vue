<script setup lang="ts">
defineProps<{
  name: string;
  size?: number;
}>();
</script>

<template>
  <svg class="base-icon" :width="size ?? 18" :height="size ?? 18" aria-hidden="true">
    <use :href="`/icons.svg#${name}`" />
  </svg>
</template>

<style scoped lang="scss">
.base-icon {
  display: block;
  flex-shrink: 0;
}
</style>
