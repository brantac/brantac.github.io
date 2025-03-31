<template>
    <section
        id="portfolio"
        class="container mx-auto px-4 py-14"
    >
        <h2 class="text-2xl lg:text-4xl font-medium text-zinc-900 dark:text-zinc-100 text-left sm:text-center mb-4 sm:mb-12">Portfolio</h2>
        <div class="w-full flex flex-col gap-12
        items-start sm:items-center">
            <a :href="project.link" target="_blank" v-for="project in portfolio" :key="project.id"
            class="max-w-lg rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-md shadow-zinc-300/50 dark:shadow-zinc-700/50 hover:shadow-lg hover:shadow-zinc-300/50 hover:dark:shadow-zinc-700/50">
                <div class="px-4 pt-4">
                    <h3 class="text-xl lg:text-2xl tracking-wide text-zinc-950 dark:text-zinc-50 font-medium">
                        {{ project.title }}
                    </h3>
                    <div class="flex flex-row gap-4">
                        <span v-for="tech in project.tech"
                        class="text-sm font-medium text-zinc-500 dark:text-zinc-400">{{ tech }}</span>
                    </div>
                </div>
                <img :src="project.thumbnail"
                :alt="'Thumbnail for the project ' + project.title"
                class="w-full h-auto text-zinc-900 dark:text-zinc-100
                rounded-3xl p-4 pt-4">
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
const portfolio = [
    {
        id: 1,
        title: "My Portfolio Website",
        tech: ["Vue 3", "TypeScript", "Nuxt"],
        thumbnail: "/Portfolio_3.jpg",
        link: "https://github.com/brantac/brantac.github.io"
    },
    {
        id: 2,
        title: "Customer Registration App",
        tech: ["Vue.js 3", "Java", "Spring Boot"],
        thumbnail: "/Thumbnail_CustomerRegistrationApp.jpg",
        link: "https://github.com/brantac/customer-registration-app"
    },
]
</script>