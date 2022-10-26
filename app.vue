<script setup lang="ts">
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: `bg-neutral-50 dark:bg-neutral-900
      [&:has(a.menuopen)]:bg-gray-800/50
      md:[&:has(a.menuopen)]:bg-neutral-50
      dark:md:[&:has(a.menuopen)]:bg-neutral-900`,
    },
  })
</script>

<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>
