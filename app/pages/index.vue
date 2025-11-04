<template>
  <div>
    <div
      v-if="featuredPost"
      class="mb-12 rounded-2xl overflow-hidden shadow-xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500"
    >
      <NuxtLink
        :to="`/posts/${featuredPost.slug}`"
        class="block"
      >
        <div class="relative h-[400px] md:h-[500px] flex items-end">
          <div class="absolute inset-0 bg-black/30" />
          <div class="relative z-10 p-8 md:p-12 text-white w-full">
            <div class="flex gap-2 mb-4">
              <UBadge
                v-for="tag in featuredPost.tags"
                :key="tag"
                color="primary"
                variant="solid"
              >
                {{ tag }}
              </UBadge>

            </div>

            <h1 class="text-4xl hover:underline md:text-5xl font-bold mb-4">
              {{ featuredPost.title }}
            </h1>

            <p class="text-lg md:text-xl mb-4 opacity-90 line-clamp-2">
              {{ featuredPost.excerpt }}
            </p>

            <div class="flex items-center gap-4 text-sm">
              <span>{{ formatDate(featuredPost.date) }}</span>

              <span>•</span>

              <span>{{ featuredPost.category }}</span>

            </div>

          </div>

        </div>

      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="post in filteredPosts"
        :key="post.slug"
        :to="`/posts/${post.slug}`"
        class="block group"
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
                  color="primary"
                  variant="solid"
                >
                  {{ post.category }}
                </UBadge>

              </div>

            </div>

          </template>

          <div class="p-6">
            <h2
              class="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
            >
              {{ post.title }}
            </h2>

            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <UBadge
                v-for="tag in post.tags.slice(0, 3)"
                :key="tag"
                color="primary"
                variant="subtle"
                size="xs"
              >
                {{ tag }}
              </UBadge>

            </div>

            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
              <span>{{ formatDate(post.date) }}</span>

              <span
                class="flex items-center gap-1"
              >
                Read more
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4"
                />
              </span>

            </div>

          </div>

        </UCard>

      </NuxtLink>
    </div>

    <div
      v-if="filteredPosts.length === 0"
      class="text-center py-16"
    >
      <UIcon
        name="i-heroicons-document-text"
        class="w-16 h-16 mx-auto mb-4 text-gray-400"
      />
      <p class="text-gray-600 dark:text-gray-400">
        No hay posts en esta categoría.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CategoryGradient, type Category } from '~/api/post/index.const'
import type { Post } from '~/api/post/index.interface'
import { useFormat } from '~/compasables/useFormat'

const posts: Post[] = [
  {
    slug: 'por-que-este-vlog',
    title: '¿Por qué este vlog?',
    excerpt: 'Divagaciones sobre por qué cree este vlog :)',
    date: '2025-11-02',
    category: 'Pensamientos',
    tags: ['Pensamientos', 'Opiniones', 'Ideas'],
  },
]

const selectedCategory = ref('all')

const featuredPost = computed(() => posts[0] || null)

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'all') {
    return posts.slice(1)
  }
  return posts.slice(1).filter(post => post.category === selectedCategory.value)
})

const { formatDate } = useFormat()

function getPostGradient(category: Category): string {
  return CategoryGradient[category]
}
</script>
