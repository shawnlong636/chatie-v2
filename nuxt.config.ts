// import ElementPlus from 'unplugin-element-plus/vite'
import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'chatie',
      meta: [
        { name: 'lang', content: 'en' },
        { name: 'description', content: '' }
      ]
    }
  },
  css: ['~/assets/main.css'],
  typescript: {
    shim: false,
    strict: true
  },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'vercel-edge'
  }
})
