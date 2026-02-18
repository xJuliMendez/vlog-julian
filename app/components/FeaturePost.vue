<template>
  <div
    class="mb-12 rounded-2xl overflow-hidden shadow-xl"
    :class="featuredPost.heroImage ? '' : 'bg-linear-to-br from-blue-500 via-purple-500 to-pink-500'"
  >
    <NuxtLink
      :to="`/posts/${featuredPost.slug}`"
      class="block"
    >
      <div class="relative h-[400px] md:h-[500px] flex items-end">
        <img
          v-if="featuredPost.heroImage"
          :src="featuredPost.heroImage"
          :alt="featuredPost.title"
          class="absolute inset-0 w-full h-full object-cover object-top blur-sx"
        >
        <div class="absolute inset-0 bg-black/30" />
        <div class="relative z-10 p-8 md:p-12 text-white w-full">

          <h1 class="text-4xl hover:underline md:text-5xl font-bold mb-4">
            {{ featuredPost.title }}
          </h1>

          <p class="text-lg md:text-xl mb-4 opacity-90 line-clamp-2">
            {{ featuredPost.excerpt }}
          </p>

          <div class="flex items-center gap-4 text-sm">
            <span>{{ formatDate(featuredPost.date) }}</span>
          </div>

        </div>

      </div>

    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/api/post/index.interface'
import { useFormat } from '~/compasables/useFormat'

const { formatDate } = useFormat()

defineProps<{
  featuredPost: Post
}>()
</script>
