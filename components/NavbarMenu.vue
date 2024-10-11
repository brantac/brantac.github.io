<template>
    <nav
        class="container h-navbar mx-auto flex flex-row justify-between md:justify-start items-center px-4"
    >
        <div class="shrink-0 font-bold text-xl
        text-gray-400 dark:text-gray-300"
        >Arthur Brant</div>

        <!-- Navigation Links -->
        <div
            id="nav-menu"
            class="md:ml-4 fixed md:relative z-10 md:z-0 left-0 top-0 w-full md:w-auto h-screen md:h-auto bg-neutral-50 dark:bg-neutral-900 duration-300 transform transition-transform"
            :class="mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
        >
            <div
                class="flex flex-col md:flex-row items-center h-full md:h-auto pt-20 md:pt-0"
            >
                <a
                    v-for="link in navLinks"
                    :key="link.id"
                    class="pl-4 py-4 md:pr-4 no-underline font-medium text-base lg:text-lg text-zinc-900 [&.active]:text-indigo-500 hover:text-indigo-500 dark:text-zinc-100" 
                    :href="link.anchor"
                    @click="handleLinkClick"
                >{{ link.title }}</a>
            </div>
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
                class="w-8 h-1 rounded bg-zinc-900  dark:bg-zinc-100 transition-all duration-300 transform"
                :class="mobileNavOpen ? 'rotate-45 translate-y-1/2' : ''"
            ></span>
            <span 
                class="w-8 h-1 rounded bg-zinc-900  dark:bg-zinc-100 transition-all duration-300 transform"
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

<style scoped>

</style>