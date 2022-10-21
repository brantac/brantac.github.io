<template>
    <!-- Hero section -->
    <section
        class="container mx-auto px-4 pt-8 lg:pt-16
        min-h-[90vh]"
    >
        <h1 class="text-left sm:text-center lg:text-left">
            <span
                class="block
                text-base font-bold
                text-zinc-900 dark:text-zinc-100
                mb-4"
            >
                Hi, my name is
            </span>
            <span
                class="block
                text-4xl font-bold
                text-zinc-900 dark:text-zinc-100
                mb-4"
            >
                Arthur Brant.
            </span>
            <span
                class="block
                text-4xl font-bold
                text-zinc-400
                mb-4"
            >
                I build great experiences for the internet.
            </span>
        </h1>
        <p
            class="text-base text-left sm:text-center lg:text-left
            text-zinc-900 dark:text-zinc-100
            max-w-md sm:mx-auto lg:mx-0"
        >
            I'm a fullstack web developer who wants to build
            great experiences for people who wants to showcase
            their portfolio, art or business. Currently, I'm working
            as a freelancer.
        </p>
        <!-- TODO: center button in sm and md breakpoints -->
        <a
            href="https://linkedin.com/in/brantac" target="_blank"
            type="button"
            class="bg-indigo-600 shadow-md shadow-indigo-600/50 hover:bg-indigo-500
            text-zinc-100 font-semibold
            p-4 mt-12 rounded
            block w-max mx-0 sm:mx-auto lg:mx-0"
        >
            Go to my LinkedIn!
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 inline ml-1"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        </a>
    </section>
    <!-- /Hero section -->
    <!-- About section -->
    <section
        id="about"
        class="container px-4 py-14
        [&>p:not(:last-child)]:mb-4
        text-base text-left sm:text-center
        text-zinc-900 dark:text-zinc-100
        max-w-md mx-0 sm:mx-auto"
    >
        <p>
            Welcome to my portfolio.
        </p>
        <p>
            I'm an aspiring full-stack web developer, 
            who loves to code in typeScript. Recently, 
            I've been building things in Vue.js, Node, 
            MySQL and Docker.
        </p>
        <p>
            As a Computer Scientist, who graduated
            in 2022, I'm curious and open to learn
            as much as I can things such as new
            programming languages, frameworks,
            developer tools, software archtecture
            and engineering, project and team
            management strategies, and so on.
        </p>
        <p>
            Feel free to contact me to have a chat
            about software development, projects,
            work or maybe to just have a nice talk.
        </p>
        <p>
            Currently, I've been building things with:
        </p>
        <ul 
            class="grid
            grid-cols-[repeat(2,minmax(0,150px))]
            grid-rows-4 gap-y-2 sm:justify-center
            text-base text-zinc-900 dark:text-zinc-100
            text-left 
            [&_li]:before:content-['_•'] [&_li]:before:text-indigo-500
            [&_li]:before:inline [&_li]:before:mr-2">
            <li class="">Vue.js 3</li>
            <li class="">TypeScript</li>
            <li class="">Nuxt</li>
            <li class="">TailwindCSS</li>
            <li class="">Express.js</li>
            <li class="">Git</li>
            <li class="">SQL</li>
            <li class="">Docker</li>
        </ul>
    </section>
    <!-- /About section -->
    <!-- Portfolio section -->
    <section
        id="portfolio"
        class="container mx-auto px-4 py-14"
    >
        <h2 class="text-2xl lg:text-3xl font-medium
        text-zinc-400
        text-left sm:text-center
        mb-4 sm:mb-12">Projects</h2>
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
    <!-- /Portfolio section -->
    <!-- Contact -->
    <section id="contact"
    class="py-14 px-4">
        <h2 class="text-2xl lg:text-3xl font-bold
        text-zinc-400
        text-left sm:text-center mb-4 sm:mb-8">Contact</h2>
        <p class="text-base font-medium
        max-w-md sm:mx-auto
        text-zinc-900 dark:text-zinc-100
        text-left sm:text-center">
            At the moment, I'm looking for an oportunity as a 
            Junior Fullstack Web Developer. Feel free to talk 
            about projects, ideas and collaborations related to 
            software development. Get in touch through any of my
            social medias.
        </p>
        <a
            href="https://linkedin.com/in/brantac" target="_blank"
            class="bg-indigo-600 shadow-md shadow-indigo-600/50
            hover:bg-indigo-500
            text-zinc-100 font-semibold
            p-4 mt-12 rounded
            block w-max mx-0 sm:mx-auto"
        >
           Let's connect!
            <svg class="w-6 h-6 inline ml-1" viewBox="0 0 16 16"><path fill="currentColor" d="M4 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM5.5 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-10 6.5A1.5 1.5 0 0 1 3 9h5a1.5 1.5 0 0 1 1.5 1.5v.112a1.38 1.38 0 0 1-.01.137a2.853 2.853 0 0 1-.524 1.342C8.419 12.846 7.379 13.5 5.5 13.5c-1.878 0-2.918-.654-3.467-1.409a2.853 2.853 0 0 1-.523-1.342a1.906 1.906 0 0 1-.01-.137V10.5Zm1 .09v.007l.004.049a1.853 1.853 0 0 0 .338.857c.326.448 1.036.997 2.658.997c1.622 0 2.332-.549 2.658-.997a1.853 1.853 0 0 0 .338-.857a.912.912 0 0 0 .004-.05V10.5A.5.5 0 0 0 8 10H3a.5.5 0 0 0-.5.5v.09Zm9 1.91c-.588 0-1.07-.09-1.46-.238a3.85 3.85 0 0 0 .361-.932c.268.101.624.17 1.099.17c1.119 0 1.578-.382 1.78-.666a1.224 1.224 0 0 0 .218-.56l.002-.028a.25.25 0 0 0-.25-.246h-2.8A2.49 2.49 0 0 0 10 9h3.25c.69 0 1.25.56 1.25 1.25v.017a1.352 1.352 0 0 1-.008.109a2.225 2.225 0 0 1-.398 1.04c-.422.591-1.213 1.084-2.594 1.084Z"/></svg>
        </a>
    </section>
    <!-- /Contact -->
    <!-- Socials section -->
    <section
    class="flex flex-row justify-center gap-4 sm:gap-6
    sm:flex-col
    sm:left-8 lg:left-12 sm:fixed sm:bottom-8
    mb-8 sm:mb-0">
        <a href="https://twitter.com/brantac_" target="_blank">
            <svg class="w-5 sm:w-6 h-5 sm:h-6 
            text-zinc-400 hover:text-indigo-500
            hover:-translate-y-1 duration-100" viewBox="0 0 256 256"><path fill="currentColor" d="M247.4 68.9A8 8 0 0 0 240 64h-30.4a47.8 47.8 0 0 0-75.2-10.1A47.7 47.7 0 0 0 120 88v6.1C79.3 83.5 46 50.7 45.7 50.3a8 8 0 0 0-8.1-1.9a8.1 8.1 0 0 0-5.5 6.2c-8.7 48.2 5.8 80.5 19.5 99.1a108.6 108.6 0 0 0 24.7 24.4c-15.3 17.3-38.9 26.3-39.1 26.4a8 8 0 0 0-3.9 11.9c.8 1.2 3.8 5.1 11.1 8.8c9.1 4.5 21.1 6.8 35.6 6.8c70.5 0 129.5-54.3 135.5-124.2l30.2-30.1a8.4 8.4 0 0 0 1.7-8.8Zm-45.3 29.7a7.8 7.8 0 0 0-2.3 5.2C195.7 166.7 143.1 216 80 216c-10.6 0-18-1.4-23.2-3.1c11.5-6.2 27.5-17 37.9-32.5a8 8 0 0 0 1-6.4a8.1 8.1 0 0 0-4.1-5.1c-.1-.1-14.9-7.8-27.6-25.3c-14.4-19.8-20.5-43.9-18.1-71.7c15.8 13 46 34.2 80.8 40a8.1 8.1 0 0 0 6.5-1.8a8.2 8.2 0 0 0 2.8-6.1V88a32 32 0 0 1 61.3-12.8a8.1 8.1 0 0 0 7.4 4.8h16Z"/></svg>
        </a>
        <a href="https://linkedin.com/in/brantac" target="_blank">
            <svg class="w-5 sm:w-6 h-5 sm:h-6
            text-zinc-400 hover:text-indigo-500
            hover:-translate-y-1 duration-100" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
        </a>
        <a href="https://github.com/brantac" target="_blank">
            <svg class="w-5 sm:w-6 h-5 sm:h-6
            text-zinc-400 hover:text-indigo-500
            hover:-translate-y-1 duration-100" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
        </a>
    </section>
    <!-- /Socials section -->
</template>

<script setup lang="ts">
const portfolio = [
    {
        id: 1,
        title: "Portfolio pessoal",
        tech: ["Vue 3", "TypeScript", "Nuxt"],
        thumbnail: "/Portfolio_3.jpg"
    },
    {
        id: 1,
        title: "Portfolio pessoal",
        tech: ["Vue 3", "TypeScript", "Nuxt"],
        thumbnail: "/Portfolio_3.jpg"
    },
    {
        id: 1,
        title: "Portfolio pessoal",
        tech: ["Vue 3", "TypeScript", "Nuxt"],
        thumbnail: "/Portfolio_3.jpg"
    },
    {
        id: 1,
        title: "Portfolio pessoal",
        tech: ["Vue 3", "TypeScript", "Nuxt"],
        thumbnail: "/Portfolio_3.jpg"
    },
]
</script>

<style scoped>

</style>