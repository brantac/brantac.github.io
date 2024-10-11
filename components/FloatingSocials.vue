<template>
    <section
    class="flex flex-row justify-center gap-4 sm:gap-6
    sm:flex-col
    sm:left-8 lg:left-12 sm:fixed sm:bottom-8
    mb-8 sm:mb-0">
        <a href="https://www.threads.net/@_arthurbrant" target="_blank">
            <IconPHThreadsLogo :class="iconStyleClasses" />
        </a>
        <a href="https://linkedin.com/in/brantac" target="_blank">
            <IconLinkedinLogo :class="iconStyleClasses" />
        </a>
        <a href="https://github.com/brantac" target="_blank">
            <IconGithubLogo :class="iconStyleClasses" />
        </a>
    </section>
</template>

<script setup lang="ts">
const iconStyleClasses = "w-7 h-7 text-zinc-900 dark:text-zinc-100 hover:text-indigo-500 hover:-translate-y-1 duration-100";
</script>