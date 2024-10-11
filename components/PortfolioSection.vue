<template>
    <section
        id="portfolio"
        class="container mx-auto px-4 py-14"
    >
        <h2 class="text-2xl lg:text-4xl font-medium text-zinc-900 dark:text-zinc-100 text-left sm:text-center mb-4 sm:mb-12">Portfolio</h2>
        <div class="w-full flex flex-col gap-12
        items-start sm:items-center">
            <div v-for="project in portfolio" :key="project.id"
            class="max-w-lg
            rounded
            bg-gray-50 dark:bg-neutral-800/40
            shadow-md shadow-neutral-700/50
            hover:shadow-lg hover:shadow-neutral-700/50">
                <div class="p-8">
                    <h3 class="text-xl lg:text-2xl tracking-wide
    
                    text-neutral-700 dark:text-zinc-100
                    font-medium">
                        {{ project.title }}
                    </h3>
                    <div class="flex flex-row gap-4">
                        <span v-for="tech in project.tech"
                        class="text-sm text-neutral-400">{{ tech }}</span>
                    </div>
                </div>
                <img :src="project.thumbnail"
                :alt="'Thumbnail for the project ' + project.title"
                class="w-full h-auto text-zinc-900 dark:text-zinc-100
                rounded-b">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const portfolio = [
    {
        id: 1,
        title: "Personal portfolio website",
        tech: ["Vue 3", "TypeScript", "Nuxt"],
        thumbnail: "/Portfolio_3.jpg"
    },
]
</script>