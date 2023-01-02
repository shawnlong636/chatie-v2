<template>
  <div class="container grid max-w-2xl justify-self-center gap-y-5 ">
    <div v-for="card in cards" :key="card.body" class="max-w-sm p-5 bg-white rounded-xl drop-shadow even:bg-orange-200 even:justify-self-end even:ml-5 odd:mr-5">
      <div class="text-xl font-bold">
        {{ card.header }}
      </div>
      {{ card.body }}
      <div v-if="card.buttonText !== undefined">
        <PrimaryButton class="mt-1" :text="card.buttonText" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'models/card'
definePageMeta({
  layout: 'default'
})
const cards: Array<Card> = [
  {
    header: '👋 Welcome to Chatie!',
    body: 'We\'re excited to provide you with a fast, reliable, and secure way to ' +
          'communicate with your friends and loved ones.'
  },
  {
    header: '',
    body: 'Chatie is designed with simplicity in mind, making it easy for you to ' +
          'send messages with just a few taps.'
  },
  {
    header: '',
    body: 'Plus, with end-to-end encryption, you can be confident that your ' +
          'conversations are private and secure. So why wait?'
  },
  {
    header: '',
    body: 'Get Started today!',
    buttonText: 'Sign Up'
  }
]
</script>
