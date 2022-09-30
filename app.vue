<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: "[&:has(a.menuopen)]:bg-gray-800/50",
    }
  })
</script>

<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>
