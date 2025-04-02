<template>
    <section
        id="about"
        class="container mx-auto px-6 lg:px-12 min-h-[var(--hero-section-height)] flex flex-col lg:flex-row items-center justify-between gap-12 py-16"
    >
        <!-- Left Side -->
        <div class="hero-left-side flex-1 flex flex-col items-center lg:items-start text-center lg:text-left ">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
                <span class="block mb-2">Welcome</span>
                <span class="block mb-2">My name is</span>
                <span class="block text-indigo-500 dark:text-indigo-400">Arthur Brant</span>
            </h1>
            <p class="mt-6 text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
                I build simple and effective applications. I am a Full-Stack Web Developer who enjoys programming in Java, Vue.js, and TypeScript. Currently seeking a junior role to grow and contribute.
            </p>
            <a
                href="#contact"
                class="mt-8 inline-block px-6 py-3 bg-indigo-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-600 transition"
            >
                Contact Me
            </a>
        </div>

        <!-- Right Side -->
        <div
            class="hero-right-side flex-1 max-w-lg rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-lg p-6"
        >
            <div class="mb-6">
                <p class="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">I am</p>
                <ul class="space-y-2 text-lg text-zinc-700 dark:text-zinc-300">
                    <li>→ A Computer Scientist</li>
                    <li>→ A Full-Stack Web Developer</li>
                    <li>→ Eager to Learn New Technologies</li>
                </ul>
            </div>
            <div>
                <p class="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">I know</p>
                <ul class="space-y-2 text-lg text-zinc-700 dark:text-zinc-300">
                    <li>→ Java</li>
                    <li>→ Vue.js</li>
                    <li>→ Node.js</li>
                    <li>→ MySQL</li>
                    <li>→ MongoDB</li>
                    <li>→ And many more...</li>
                </ul>
            </div>
        </div>
    </section>
</template>