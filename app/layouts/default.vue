<template>
  <div class="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
    <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 font-bold text-xl"
          >
            <UAvatar
              src="/images/profile.jpg"
              size="sm"
              class="w-10 h-10 ring-2 ring-primary-200 dark:ring-primary-800 group-hover:ring-primary-400 transition-all"
            />
            <span class="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Julian
            </span>

          </NuxtLink>

          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              to="/"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              Inicio
            </NuxtLink>

            <NuxtLink
              to="/sobre-mi"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              Sobre mí
            </NuxtLink>
          </nav>

          <div class="md:hidden">
            <UButton
              icon="i-heroicons-bars-3"
              color="neutral"
              variant="ghost"
              @click="mobileMenuOpen = !mobileMenuOpen"
            />
          </div>

          <div class="hidden md:flex items-center gap-2">
            <UButton
              v-for="link in socialLinks"
              :key="link.name"
              target="_blank"
              :to="link.url"
              :icon="link.icon"
              color="neutral"
              variant="ghost"
              size="sm"
              :external="true"
              :aria-label="link.name"
            />
          </div>
        </div>
      </div>
    </header>

    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
        <NuxtLink
          to="/"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
          @click="mobileMenuOpen = false"
        >
          Inicio
        </NuxtLink>
        <NuxtLink
          to="/categories"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
          @click="mobileMenuOpen = false"
        >
          Categorías
        </NuxtLink>
        <NuxtLink
          to="/sobre-mi"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
          @click="mobileMenuOpen = false"
        >
          Sobre mí
        </NuxtLink>
        <div class="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-800">
          <UButton
            v-for="link in socialLinks"
            :key="link.name"
            :to="link.url"
            :icon="link.icon"
            color="neutral"
            variant="ghost"
            size="sm"
            :external="true"
            :aria-label="link.name"
          />
        </div>
      </div>
    </div>

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <UFooter class="mt-16 border-t border-gray-200 dark:border-gray-800">
      <template #left>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          © {{ new Date().getFullYear() }} Julián's Vlog. Todos los derechos reservados.
        </p>
      </template>
      <template #right>
        <div class="flex gap-4">
          <UButton
            v-for="link in socialLinks"
            :key="link.name"
            :to="link.url"
            :icon="link.icon"
            color="neutral"
            variant="ghost"
            size="sm"
            :external="true"
            :aria-label="link.name"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>

<script setup lang="ts">
import { SocialMediaDefinition } from '~/api/socialMedia/index.const'

const mobileMenuOpen = ref(false)

const socialLinks = Object.values(SocialMediaDefinition)
</script>
