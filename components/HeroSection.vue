<template>
    <section id="about" class="container mx-auto px-4 min-h-[var(--hero-section-height)] flex flex-col items-center lg:flex-row justify-evenly"
    >
        <div class="hero-left-side sm:flex-1 w-full lg:max-w-[50%] min-h-[var(--hero-section-height)] flex flex-col justify-center items-center">
            <h1 class="text-center text-4xl md:text-5xl lg:text-6xl font-medium"
            >
                <span
                    class="block
                    text-zinc-900 dark:text-zinc-100
                    mb-4"
                >
                    Welcome
                </span>
                <span
                    class="block
                    text-zinc-900 dark:text-zinc-100
                    mb-4"
                >
                    My name is
                </span>
                <span
                    class="block
                    text-indigo-500 dark:text-indigo-500
                    mb-4"
                >
                    Arthur Brant
                </span>
            </h1>
            <p
                class="text-center
                text-xl lg:text-2xl font-medium text-zinc-900 dark:text-zinc-100"
            >
                I build great experiences for the internet
            </p>
        </div>
        <div class="hero-right-side sm:flex-1 w-fit lg:max-w-[40%]">
            <p
                class="text-lg font-medium
                text-zinc-900 dark:text-zinc-100"
            >I am</p>
            <ul class="text-lg space-y-2 mb-4">
                <ListItem>a Computer Scientist</ListItem>
                <ListItem>a Fullstack web developer</ListItem>
                <ListItem>Curious</ListItem>
            </ul>
            <p class="text-lg font-medium
                text-zinc-900 dark:text-zinc-100">I know</p>
            <ul class="text-lg space-y-2">
                <ListItem>Java</ListItem>
                <ListItem>Vue.js</ListItem>
                <ListItem>Node</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>MongoDB</ListItem>
            </ul>
        </div>
    </section>
</template>