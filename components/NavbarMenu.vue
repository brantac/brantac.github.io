<template>
    <nav
        id="navbar"
        class="container mx-auto px-6 lg:px-12 py-4 flex flex-row justify-between items-center"
    >
        <div class="shrink-0 font-bold text-2xl text-zinc-900 dark:text-zinc-100">
            Arthur Brant
        </div>

        <!-- Navigation Links -->
        <div
            id="nav-menu"
            class="fixed md:relative z-10 md:z-0 left-0 top-0 w-full md:w-auto h-screen md:h-auto bg-neutral-50 dark:bg-neutral-900 duration-300 transform transition-transform flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-0 p-0"
            :class="mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
        >
            <a
                v-for="link in navLinks"
                :key="link.id"
                class="px-4 py-2 md:px-6 md:py-3 text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                :href="link.anchor"
                @click="handleLinkClick"
            >{{ link.title }}</a>
        </div>

        <!-- Menu toggle -->
        <button
            id="menu-toggle"
            type="button"
            class="md:hidden w-8 h-8 z-20 flex flex-col items-center justify-center focus:outline-none"
            v-on:click="toggleMobileNav"
            :aria-expanded="mobileNavOpen ? 'true' : 'false'"
            aria-label="Toggle navigation"
        >
            <span 
                class="w-8 h-1 rounded bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 transform"
                :class="mobileNavOpen ? 'rotate-45 translate-y-1/2' : ''"
            ></span>
            <span 
                class="w-8 h-1 rounded bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 transform"
                :class="mobileNavOpen ? '-rotate-45 -translate-y-1/2 mt-0' : 'mt-1'"
            ></span>
        </button>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const mobileNavOpen = ref(false)

const navLinks = [
    {
        id: 1,
        title: "About",
        anchor: "#about",
    },
    {
        id: 2,
        title: "Portfolio",
        anchor: "#portfolio",
    },
    {
        id: 4,
        title: "Contact",
        anchor: "#contact",
    },
]

const toggleMobileNav = () => {
    mobileNavOpen.value = !mobileNavOpen.value
};

const handleLinkClick = () => {
    mobileNavOpen.value = false;
}
</script>