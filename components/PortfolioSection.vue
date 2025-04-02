<template>
    <section
        id="portfolio"
        class="container mx-auto px-6 lg:px-12 py-16"
    >
        <h2 class="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12">
            Portfolio
        </h2>
        <div class="w-full flex flex-col gap-12 items-center">
            <a
                :href="project.link"
                target="_blank"
                v-for="project in portfolio"
                :key="project.id"
                class="max-w-lg rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-lg p-6 hover:shadow-xl transition"
            >
                <div class="mb-4">
                    <h3 class="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                        {{ project.title }}
                    </h3>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span
                            v-for="tech in project.tech"
                            :key="tech"
                            class="text-sm font-medium text-zinc-500 dark:text-zinc-400"
                        >
                            {{ tech }}
                        </span>
                    </div>
                </div>
                <img
                    :src="project.thumbnail"
                    :alt="'Thumbnail for the project ' + project.title"
                    class="w-full h-auto rounded-lg"
                />
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