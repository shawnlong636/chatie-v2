import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'chatie',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content: '👋 Welcome to Chatie! We\'re excited to ' +
          'provide you with a fast, reliable, and secure way ' +
          'to communicate with your friends and loved ones.'
        }
      ]
    }
  },
  css: ['~/assets/main.css'],
  typescript: {
    shim: false,
    strict: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    ['@nuxtjs/google-fonts', {
      families: { Inter: true },
      display: 'fallback'
    }]
  ],
  nitro: {
    preset: 'vercel-edge'
  }
})
