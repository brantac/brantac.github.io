<template>
    <nav
        class="container mx-auto flex flex-row justify-between
        md:justify-start items-center
        p-4"
    >
        <div><span class="text-indigo-100">Arthur Brant</span></div>
        <!-- Mobile nav -->
        <div 
            class="flex flex-col fixed z-10 md:z-0
            -left-3/4 md:left-0 top-0 pt-12 md:pt-0
            w-3/4 md:w-full h-screen md:h-auto
            bg-neutral-50 dark:bg-neutral-900
            duration-100 [&:has(+_.menuopen)]:left-0 ease-in
            md:relative md:flex-row md:ml-4"
        >
            <a class="pl-4 py-4 md:pr-4
                no-underline font-normal text-sm
                text-zinc-500 [&.active]:text-indigo-400
                hover:text-indigo-500
                [&.active]:border-solid [&.active]:border-l
                md:[&.active]:border-l-0
                [&.active]:border-indigo-400
                dark:text-zinc-100
                link-item" 
                href="/#portfolio"
                @click="addActive"
            >Projects</a>
            <a class="pl-4 py-4 md:pr-4
                no-underline font-normal text-sm
                text-zinc-500 [&.active]:text-indigo-400
                hover:text-indigo-500
                [&.active]:border-solid [&.active]:border-l
                md:[&.active]:border-l-0
                [&.active]:border-indigo-400
                dark:text-zinc-100
                link-item" 
                href="/#blog"
                @click="addActive"
            >Blog</a>
            <a class="pl-4 py-4 md:pr-4
                no-underline font-normal text-sm
                text-zinc-500 [&.active]:text-indigo-400
                hover:text-indigo-500
                [&.active]:border-solid [&.active]:border-l
                md:[&.active]:border-l-0
                [&.active]:border-indigo-400
                dark:text-zinc-100
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
                class="w-11 h-1 rounded absolute
                bg-zinc-500 [.menuopen_>_&]:bg-indigo-50
                duration-100 [.menuopen_>_&]:translate-y-5
                [.menuopen_>_&]:rotate-45"
            ></span>
            <span 
                class="w-11 h-1 absolute mt-10 rounded
                bg-zinc-500 [.menuopen_>_&]:bg-indigo-50
                duration-100 [.menuopen_>_&]:-translate-y-5
                [.menuopen_>_&]:-rotate-45"
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