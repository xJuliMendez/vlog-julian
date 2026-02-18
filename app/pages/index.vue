<template>
  <div>
    <FeaturePost
      v-if="featuredPost"
      :featured-post="featuredPost"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostItem
        v-for="post in filteredPosts"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/api/post/index.interface'

const posts: Post[] = [
  {
    slug: 'por-que-este-vlog',
    title: '¿Por qué este vlog?',
    excerpt: 'Divagaciones sobre por qué cree este vlog :)',
    date: '2025-11-02',
    category: 'Pensamientos',
    tags: ['Pensamientos', 'Opiniones', 'Ideas'],
    heroImage: '/images/why-this-vlog-hero.png',
  },
  {
    slug: 'por-que-este-vlog',
    title: '¿Por qué este vlog?',
    excerpt: 'Divagaciones sobre por qué cree este vlog :)',
    date: '2025-11-02',
    category: 'Pensamientos',
    tags: ['Pensamientos', 'Opiniones', 'Ideas'],
    heroImage: '/images/why-this-vlog-hero.png',
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
</script>
