<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [
  [
    {
      label: '¿Por qué este vlog?',
      to: '/posts/por-que-este-vlog',
      class: 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium',
    },
  ],

]
</script>

<template>
  <UDropdownMenu
    :items="items"
    :ui="{ content: 'w-48' }"
    :popper="{ placement: 'bottom-start' }"
    mode="click"
  >
    <div class="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
      <UIcon
        name="i-heroicons-chevron-down"
        class="w-4 h-4"
      />
      <span>
        Publicaciones
      </span>
    </div>
  </UDropdownMenu>
</template>
