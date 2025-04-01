<template>
    <section id="about" class="container mx-auto px-4 min-h-[var(--hero-section-height)] flex flex-col items-center lg:flex-row justify-evenly pb-14 lg:pb-0"
    >
        <div class="hero-left-side sm:flex-1 w-full lg:max-w-[50%] min-h-[var(--hero-section-height)] flex flex-col justify-center items-center">
            <h1 class="text-center text-4xl md:text-5xl lg:text-6xl font-medium"
            >
                <span class="block text-zinc-900 dark:text-zinc-100 mb-4">
                    Welcome
                </span>
                <span class="block text-zinc-900 dark:text-zinc-100 mb-4">
                    My name is
                </span>
                <span class="block text-indigo-500 dark:text-indigo-500 mb-4">
                    Arthur Brant
                </span>
            </h1>
            <p class="text-center text-xl font-medium text-zinc-900 dark:text-zinc-100">
                I build simple and effective applications. I am a Full-Stack Web Developer who enjoys programming in Java, Vue.js and TypeScript. I am currently looking for a job in a junior role.
            </p>
        </div>
        <div class="hero-right-side sm:flex-1 w-fit lg:max-w-[40%] rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-lg p-4">
            <p
                class="text-xl font-bold text-zinc-900 dark:text-zinc-100"
            >I am</p>
            <ul class="text-xl space-y-2 mb-4">
                <ListItem>A Computer Scientist</ListItem>
                <ListItem>A full-stack web developer</ListItem>
                <ListItem>Eager to learn new technologies</ListItem>
            </ul>
            <p class="text-xl font-bold text-zinc-900 dark:text-zinc-100">I know</p>
            <ul class="text-xl space-y-2">
                <ListItem>Java</ListItem>
                <ListItem>Vue.js</ListItem>
                <ListItem>Node</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>And many more...</ListItem>
            </ul>
        </div>
    </section>
</template>