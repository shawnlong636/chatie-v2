<template>
  <div class="container grid items-center min-h-full grid-flow-col grid-cols-1 gap-5 sm:mt-5 md:mt-10 md:grid-cols-2 justify-self-center">
    <div class="hidden px-8 py-5 align-middle justify-stretch md:grid rounded-xl">
      <ChatieLogo class="ml-8 justify-self-start" />
      <div class="mt-6 grid grid-rows-3 grid-cols-[auto_1fr] grid-flow-row-dense gap-y-5 gap-x-2">
        <CheckCircleIcon v-for="card in cards" :key="card.body" class="w-5 col-span-1 col-start-1 mt-1 text-accent justify-self-center" />
        <div v-for="card in cards" :key="card.body" class="col-span-1 col-start-2">
          <div class="text-xl">
            {{ card.header }}
          </div>
          <div class="font-normal text-gray-600">
            {{ card.body }}
          </div>
        </div>
      </div>
    </div>

    <div class="grid max-w-xl px-8 py-5 pb-10 mx-0 bg-white sm:mx-5 md:mx-0 gap-y-5 rounded-xl">
      <ChatieLogo class="md:hidden justify-self-center" :show-title="true" />
      <div class="text-2xl font-semibold text-center">
        Create your account
      </div>
      <div class="grid gap-5 md:grid-flow-col">
        <div class="grid">
          <label for="first-name">First Name</label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autocomplete="given-name"
            required
            class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
          >
        </div>
        <div class="grid">
          <label for="last-name">Last Name</label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            autocomplete="family-name"
            required
            class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
          >
        </div>
      </div>

      <div class="grid">
        <label for="email-address">Email Address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
        >
      </div>
      <div class="grid">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
        >
      </div>
      <div class="grid">
        <label for="password-confirmation">Confirm Password</label>
        <input
          id="password-confirmation"
          name="password-confirmation"
          type="password"
          required
          class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
        >
      </div>
      <div class="font-thin justify-self-center">
        Already have an account? <NuxtLink to="/login" class="font-medium text-accent-500 hover:underline">
          Sign In
        </NuxtLink>
      </div>
      <PrimaryButton class="min-w-[75%] min-h-[40px] justify-self-center">
        <LockClosedIcon class="inline h-4" />
        Create account
      </PrimaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockClosedIcon, CheckCircleIcon } from '@heroicons/vue/20/solid'
import Card from 'models/card'
definePageMeta({ layout: 'layout-login' })

const cards: Array<Card> = [
  {
    header: 'Fast and reliable messaging',
    body: ' Delivers your messages quickly and reliably, keeping you in trouch with friends and family.'
  },
  {
    header: 'Secure and private',
    body: 'We use We use SSL and SSH encryption to keep your conversations secure and private to keep your conversations secure and private.'
  },
  {
    header: 'Easy to use',
    body: 'Simple and straightforward, so you can start chatting right away.'
  }
]
</script>
