<template>
    <nav
        class="container mx-auto flex flex-row justify-between
        md:justify-start items-center
        p-4"
    >
        <div>Logo</div>
        <!-- Mobile nav -->
        <div 
            class="flex flex-col fixed z-10 md:z-0
            -left-3/4 md:left-0 top-0 pt-12 md:pt-0
            w-3/4 md:w-full h-screen md:h-auto
            bg-neutral-50 dark:bg-neutral-900
            duration-100 [&:has(+_.menuopen)]:left-0 ease-in
            md:relative md:flex-row md:ml-4 md:gap-4"
        >
            <a class="pl-4 py-4 md:pr-4
                rounded
                no-underline font-semibold text-lg
                text-zinc-500 [&.active]:text-indigo-400
                hover:text-indigo-500 dark:hover:text-indigo-200
                [&.active]:bg-indigo-50
                dark:text-zinc-300
                link-item" 
                href="/#portfolio"
                @click="addActive"
            >Projects</a>
            <a class="pl-4 py-4 md:pr-4
                rounded
                no-underline font-semibold text-lg
                text-zinc-500 [&.active]:text-indigo-400
                hover:text-indigo-500 dark:hover:text-indigo-200
                [&.active]:bg-indigo-50
                dark:text-zinc-300
                link-item" 
                href="/#blog"
                @click="addActive"
            >Blog</a>
            <a class="pl-4 py-4 md:pr-4
                rounded
                no-underline font-semibold text-lg
                text-zinc-500 [&.active]:text-indigo-400
                hover:text-indigo-500 dark:hover:text-indigo-200
                [&.active]:bg-indigo-50
                dark:text-zinc-300
                link-item" 
                href="/#contact"
                @click="addActive"
            >Contact</a>
        </div>
        <a href="#" id="_menutoggleicon"
            class="md:hidden w-11 h-11 inline-block
            relative z-20
            group"
            :class="{menuopen: mobileNavOpen}"
            @click.prevent="() => mobileNavOpen = !mobileNavOpen"
        >
            <span 
                class="w-11 h-1 bg-indigo-400 rounded absolute
                duration-100 [.menuopen_>_&]:translate-y-5
                [.menuopen_>_&]:rotate-45 [.menuopen_>_&]:bg-indigo-50"
            ></span>
            <!-- <div class="w-10 h-1 bg-indigo-600 absolute mt-5 rounded"></div> -->
            <span 
                class="w-11 h-1 bg-indigo-400 absolute mt-10 rounded
                duration-100 [.menuopen_>_&]:-translate-y-5
                [.menuopen_>_&]:-rotate-45 [.menuopen_>_&]:bg-indigo-50"
            ></span>
        </a>
        <!-- /Mobile nav -->
    </nav>
</template>

<script setup lang="ts">
const mobileNavOpen = ref(false)
const navlinkClicked = ref(false)

const addActive = (e) => {
    if (!e.target.classList.contains('active')) {
        const old = document.querySelector('.link-item.active')
        if (old) old.classList.remove('active')
        e.target.classList.add('active')
    }
}
</script>

<style scoped>

</style>