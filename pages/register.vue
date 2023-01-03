<template>
  <div class="container grid grid-flow-col grid-cols-1 gap-5 md:grid-cols-2 justify-self-center">
    <div class="hidden max-w-full bg-white md:block rounded-xl">
      content1
    </div>

    <div class="grid max-w-xl px-8 py-5 mx-0 bg-white sm:mx-5 md:mx-0 gap-y-5 rounded-xl">
      <ChatieLogo class="jutify-self-center" />
      <div class="text-2xl font-semibold text-center">
        Create your account
      </div>
      <div class="grid">
        <label for="First Name">First Name</label>
        <input
          id="full-name"
          name="full-name"
          type="text"
          autocomplete="given-name"
          required
          class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
        >
      </div>
      <div class="grid">
        <label for="First Name">Last Name</label>
        <input
          id="full-name"
          name="full-name"
          type="text"
          autocomplete="family-name"
          required
          class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
        >
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
        <label for="password">Confirm Password</label>
        <input
          id="password"
          name="password"
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
import { LockClosedIcon } from '@heroicons/vue/20/solid'
definePageMeta({ layout: 'layout-login' })
</script>
