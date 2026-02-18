<template>
  <NuxtLink
    class="block group"
    :to="`/posts/${post.slug}`"
  >
    <UCard
      class="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700"
    >
      <template #header>
        <div
          class="relative h-48 overflow-hidden rounded-t-lg bg-linear-to-br"
          :class="getPostGradient(post.category)"
        >
          <div class="absolute inset-0 bg-black/20" />
          <div class="absolute top-4 left-4">
            <UBadge
              color="neutral"
              variant="solid"
            >
              {{ post.category }}
            </UBadge>

          </div>

        </div>

      </template>

      <div>
        <h2
          class="text-xl font-bold mb-2 group-hover:underline transition-colors"
        >
          {{ post.title }}
        </h2>

        <p class="text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">
          {{ post.excerpt }}
        </p>

        <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <span>{{ formatDate(post.date) }}</span>

          <span
            class="flex items-center gap-1"
          >
            Leer más
            <UIcon
              name="i-heroicons-arrow-right"
              class="w-4 h-4"
            />
          </span>

        </div>

      </div>

    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import { CategoryGradient, type Category } from '~/api/post/index.const'
import type { Post } from '~/api/post/index.interface'
import { useFormat } from '~/compasables/useFormat'

const { formatDate } = useFormat()

defineProps<{
  post: Post
}>()
const getPostGradient = (category: Category) => {
  return CategoryGradient[category]
}
</script>
