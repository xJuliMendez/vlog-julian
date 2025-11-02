<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  title: 'Julian\'s blog',
  meta: [
    { name: 'description', content: 'The blog' },
  ],
})
</script>
