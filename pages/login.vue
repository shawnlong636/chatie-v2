<template>
  <div class="container grid gap-5 sm:mt-5 md:mt-10 justify-self-center justify-items-center">
    <div class="grid min-w-full px-8 py-5 pb-8 mx-0 bg-white md:min-w-[512px] gap-y-5 rounded-xl">
      <ChatieLogo class="justify-self-center" :show-title="true" />
      <div class="text-2xl font-semibold text-center">
        Sign in to your account
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
      <div class="font-thin justify-self-center">
        Don't have an account? <NuxtLink to="/register" class="font-medium text-accent-500 hover:underline">
          Sign Up
        </NuxtLink>
      </div>
      <PrimaryButton class="min-w-[75%] min-h-[40px] justify-self-center">
        <LockClosedIcon class="inline h-4" />
        Sign in
      </PrimaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockClosedIcon } from '@heroicons/vue/20/solid'
definePageMeta({ layout: 'layout-login' })
</script>
