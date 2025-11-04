<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
}>()
</script>

<template>
  <h1 :class="`text-${size} font-bold mb-4`">
    <slot />
  </h1>
</template>

