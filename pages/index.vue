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
        <button
            type="button"
            class="bg-indigo-600 hover:bg-indigo-500
            text-zinc-100 font-semibold
            p-4 mt-12 rounded
            block mx-0 sm:mx-auto lg:mx-0"
        >
            Send a message!
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 inline ml-1"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        </button>
    </section>
    <!-- /Hero section -->
    <!-- About section -->
    <section
        id="#about"
        class="container mx-auto px-4 pt-4 md:pt-8
        [&>p:not(:last-child)]:mb-4"
    >
        <p
            class="text-base text-left sm:text-center lg:text-left
            text-zinc-900 dark:text-zinc-100
            max-w-md sm:mx-auto lg:mx-0"
        >
            Welcome to my portfolio.
        </p>
        <p
            class="text-base text-left sm:text-center lg:text-left
            text-zinc-900 dark:text-zinc-100
            max-w-md sm:mx-auto lg:mx-0"
        >
            I'm an aspiring full-stack web developer, 
            who loves to code in typeScript. Recently, 
            I've been building things in Vue.js, Node, 
            MySQL and Docker.
        </p>
        <p
            class="text-base text-left sm:text-center lg:text-left
            text-zinc-900 dark:text-zinc-100
            max-w-md sm:mx-auto lg:mx-0"
        >
            As a Computer Scientist, who graduated
            in 2022, I'm curious and open to learn
            as much as I can things such as new
            programming languages, frameworks,
            developer tools, software archtecture
            and engineering, project and team
            management strategies, and so on.
        </p>
        <p
            class="text-base text-left sm:text-center lg:text-left
            text-zinc-900 dark:text-zinc-100
            max-w-md sm:mx-auto lg:mx-0"
        >
            Feel free to contact me to have a chat
            about software development, projects,
            work or maybe to just have a nice talk.
        </p>
        <p
            class="text-base text-left sm:text-center lg:text-left
            text-zinc-900 dark:text-zinc-100
            max-w-md sm:mx-auto lg:mx-0"
        >
            Currently, I've been building things with:
        </p>
        <ul 
            class="grid
            grid-cols-[repeat(2,minmax(0,150px))]
            grid-rows-4 gap-y-2 sm:justify-center lg:justify-start
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
        id="#portfolio"
        class="container mx-auto px-4 pt-4 md:pt-8
        [&>p:not(:last-child)]:mb-4"
    >
        <h1>Portfolio</h1>
    </section>
    <!-- /Portfolio section -->
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>