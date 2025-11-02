<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <div class="inline-block mb-6">
        <UAvatar
          src="/images/profile.jpg"
          class="w-32 h-32"
        />
      </div>
      <h1 class="text-5xl font-bold mb-4 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Hi, I'm Julian
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Welcome to my personal here I will share my thoughts, experiences, and ideas as they come. Spanish or English. Maybe both :)
      </p>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Needles to say ideas and opinions are my own.
      </p>
    </div>

    <UCard class="mb-8">
      <template #header>
        <h2 class="text-2xl font-bold">
          About Me
        </h2>
      </template>
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p>
          I'm a passionate developer who loves learning in general. So this will be a place to share my thoughts, experiences, and ideas as they come.
        </p>
        <p>
          Here you'll find:
        </p>
        <ul>
          <li>
            <strong>Thoughts:</strong> My thoughts, experiences, and ideas as they come.
          </li>
          <li>
            <strong>Programming:</strong> Tutorials, code reviews, and insights into modern web development.
          </li>
          <li>
            <strong>Entertainment:</strong> My thought on the music I listen, movies & cool videos I watch, books I read, videogames I play, etc.
          </li>
        </ul>
      </div>
    </UCard>

    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <UCard>
        <div class="text-center">
          <UIcon
            name="i-heroicons-map-pin"
            class="w-12 h-12 mx-auto mb-4 text-blue-500"
          />
          <h3 class="text-xl font-bold mb-2">
            Travel
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Exploring the world, one destination at a time
          </p>
        </div>
      </UCard>

      <UCard>
        <div class="text-center">
          <UIcon
            name="i-heroicons-code-bracket"
            class="w-12 h-12 mx-auto mb-4 text-purple-500"
          />
          <h3 class="text-xl font-bold mb-2">
            Programming
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Building modern web applications and sharing knowledge
          </p>
        </div>
      </UCard>

      <UCard>
        <div class="text-center">
          <UIcon
            name="i-heroicons-device-phone-mobile"
            class="w-12 h-12 mx-auto mb-4 text-pink-500"
          />
          <h3 class="text-xl font-bold mb-2">
            Tech
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Reviews and thoughts on technology trends
          </p>
        </div>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <h2 class="text-2xl font-bold">
          Connect With Me
        </h2>
      </template>
      <div class="flex flex-wrap gap-4 justify-center">
        <UButton
          v-for="link in socialLinks"
          :key="link.name"
          :to="link.url"
          :icon="link.icon"
          size="lg"
          :external="true"
          color="neutral"
          variant="ghost"
        >
          {{ link.name }}
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'i-simple-icons-x',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'i-simple-icons-github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'i-simple-icons-linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'i-simple-icons-instagram',
  },
]

definePageMeta({
  title: 'About',
})
</script>
