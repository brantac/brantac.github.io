import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Arthur Brant - Software Developer",
            meta: [
                // { 
                //     name: 'image',
                //     content: ''
                // },
                { 
                    name: 'description',
                    content: "Arthur Brant is a " +
                    "software developer who specializes in building great (but simple) " + 
                    "experiences for the web."
                },
                {
                    property: 'og:title',
                    content: "Arthur Brant - Software Developer"
                },
                {
                    property: 'og:description',
                    content: "Arthur Brant is a " +
                    "software developer who specializes in building great (but simple) " + 
                    "experiences for the web."
                },
                {
                    property: 'og:url',
                    content: "https://www.arthurbrant.dev.br"
                },
                {
                    property: 'og:type',
                    content: "website"
                },
                // {
                //     property: 'og:image',
                //     content: ""
                // },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:creator',
                    content: '@brantac_'
                },
                {
                    name: 'twitter:title',
                    content: 'Arthur Brant - Software Developer'
                },
                {
                    name: 'twitter:description',
                    content: "Arthur Brant is a " +
                    "software developer who specializes in building great (but simple) " + 
                    "experiences for the web."
                },
                // {
                //     name: 'twitter:image',
                //     content: ''
                // },
            ]
        }
    }
})
