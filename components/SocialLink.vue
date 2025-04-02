<template>
    <a :href="hrefs[social]" target="_blank" :class="style[social]" class="underline underline-offset-2 w-5 sm:w-6 h-5 sm:h-6 text-zinc-900 hover:text-indigo-500 dark:text-zinc-100 duration-100 font-medium">{{ social }}</a>
</template>

<script setup lang="ts">
type SocialType = "linkedin" | "github";

const {social = "linkedin"} = defineProps<{
    social: SocialType,
}>()

const hrefs = {
    "linkedin": "https://www.linkedin.com/in/brantac",
    "github": "https://github.com/brantac"
}

const style = {
    "linkedin": "",
    "github": "",
}
</script>