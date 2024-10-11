<script setup lang="ts">
  useHead({
    htmlAttrs: {
      lang: 'en',
      class: 'scroll-smooth'
    },
    bodyAttrs: {
      class: `bg-zinc-50 dark:bg-zinc-900`,
    },
    title: "Arthur Brant - Software Developer",
			meta: [
				{
					name: "description",
					content:
						"Arthur Brant is a " +
						"software developer who specializes in building great (but simple) " +
						"experiences for the web.",
				},
				{
					property: "og:title",
					content: "Arthur Brant - Software Developer",
				},
				{
					property: "og:description",
					content:
						"Arthur Brant is a " +
						"software developer who specializes in building great (but simple) " +
						"experiences for the web.",
				},
				{
					property: "og:url",
					content: "https://www.arthurbrant.dev.br",
				},
				{
					property: "og:type",
					content: "website",
				},
				// {
				//     property: 'og:image',
				//     content: ""
				// },
				{
					name: "threads:creator",
					content: "@brantac_",
				},
				{
					name: "threads:title",
					content: "Arthur Brant - Software Developer",
				},
				{
					name: "threads:description",
					content:
						"Arthur Brant is a software developer who specializes in building great (but simple) experiences for the web.",
				},
			],
  })
</script>

<template>
  <div>
    <NavbarMenu />
    <NuxtPage />
  </div>
</template>
