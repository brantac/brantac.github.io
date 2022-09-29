<template>
    <nav
        class="p-4 container mx-auto flex flex-row justify-between
        md:justify-start items-center relative"
    >
        <div>Logo</div>
        <div 
            class="hidden md:flex flex-row ml-4 gap-4
            font-semibold"
        >
            <a href="/#portfolio">Projects</a>
            <a href="/#blog">Blog</a>
            <a href="/#contact">Contact</a>
        </div>
        <!-- Mobile nav -->
        <a href="#" id="_menutoggleicon"
            class="md:hidden w-11 h-11 inline-block
            relative
            group"
            :class="{menuopen: mobileNavOpen}"
            @click="() => mobileNavOpen = !mobileNavOpen"
        >
            <span 
                class="w-11 h-1 bg-indigo-600 rounded absolute
                duration-200 [.menuopen_>_&]:translate-y-5
                [.menuopen_>_&]:rotate-45"
            ></span>
            <!-- <div class="w-10 h-1 bg-indigo-600 absolute mt-5 rounded"></div> -->
            <span 
                class="w-11 h-1 bg-indigo-600 absolute mt-10 rounded
                duration-200 [.menuopen_>_&]:-translate-y-5
                [.menuopen_>_&]:-rotate-45"
            ></span>
        </a>
        <div 
            class="md:hidden absolute flex flex-col 
            -left-3/4 pl-4 gap-4 top-0 pt-12
            w-3/4 bg-indigo-600 h-screen
            duration-200 [.menuopen_+_&]:left-0
            text-neutral-100 font-bold text-lg"
        >
            <a href="/#portfolio">Projects</a>
            <a href="/#blog">Blog</a>
            <a href="/#contact">Contact</a>
        </div>
        <!-- /Mobile nav -->
    </nav>
</template>

<script setup lang="ts">
const mobileNavOpen = ref(false)
</script>

<style scoped>

</style>