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
        Hola, soy Julián
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Bienvenido a mi vlog personal. Aquí compartiré mis pensamientos, experiencias e ideas a medida que vayan surgiendo. En español o inglés. Quizás ambos :)
      </p>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Ni que decir tiene que las ideas y opiniones son propias.
      </p>
    </div>

    <UCard class="mb-8">
      <template #header>
        <h2 class="text-2xl font-bold">
          Sobre mí
        </h2>
      </template>
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Soy un desarrollador apasionado por el aprendizaje en general. Por lo tanto, este será un lugar para compartir mis pensamientos, experiencias e ideas a medida que vayan surgiendo.
        </p>
        <br>
        <p>
          Aquí encontrarás:
        </p>
        <ul>
          <li>
            <strong>Pensamientos:</strong> Mis pensamientos, experiencias e ideas a medida que vayan surgiendo.
          </li>
          <li>
            <strong>Programación:</strong> Tutoriales, revisiones de código e insights sobre el desarrollo web moderno.
          </li>
          <li>
            <strong>Entretenimiento:</strong> Mis pensamientos sobre la música que escucho, películas y videos interesantes que veo, libros que leo, videojuegos que juego, etc.
          </li>
        </ul>
      </div>
    </UCard>

    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <UCard>
        <div class="text-center">
          <UIcon
            name="i-heroicons-light-bulb"
            class="w-12 h-12 mx-auto mb-4 text-blue-500"
          />
          <h3 class="text-xl font-bold mb-2">
            Pensamientos
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Mis pensamientos, experiencias e ideas a medida que vayan surgiendo
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
            Programación
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Construyendo aplicaciones web modernas y compartiendo conocimiento
          </p>
        </div>
      </UCard>

      <UCard>
        <div class="text-center">
          <UIcon
            name="i-heroicons-film"
            class="w-12 h-12 mx-auto mb-4 text-pink-500"
          />
          <h3 class="text-xl font-bold mb-2">
            Entretenimiento
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Música, películas, videos interesantes, libros y videojuegos que alteren mi química cerebral
          </p>
        </div>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <h2 class="text-2xl font-bold">
          Conecta conmigo
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
import { SocialMediaDefinition } from '~/api/socialMedia/index.const'

const socialLinks = Object.values(SocialMediaDefinition)

definePageMeta({
  title: 'About',
})
</script>
