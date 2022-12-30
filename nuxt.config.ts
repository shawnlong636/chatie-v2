import ElementPlus from 'unplugin-element-plus/vite'
import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true
  },
  css: ['~/assets/scss/main.scss'],
  build: {
    transpile: ['element-plus/es']
  },
  vite: {
    plugins: [ElementPlus()]
  }
})
