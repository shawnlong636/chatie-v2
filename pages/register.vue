<template>
  <div class="container grid items-center grid-flow-col grid-cols-1 gap-5 sm:mt-5 md:mt-10 md:grid-cols-2 justify-self-center">
    <div class="hidden px-8 py-5 justify-stretch md:grid rounded-xl">
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
          <label for="first-name" class="text-sm font-medium">First Name</label>
          <input
            id="first-name"
            v-model="firstName"
            placeholder="John"
            name="first-name"
            type="text"
            autocomplete="given-name"
            required
            class="w-full h-8 text-sm rounded-md focus:ring-accent focus:border-accent"
          >
        </div>
        <div class="grid">
          <label for="last-name" class="text-sm font-medium">Last Name</label>
          <input
            id="last-name"
            v-model="lastName"
            placeholder="Smith"
            name="last-name"
            type="text"
            autocomplete="family-name"
            required
            class="w-full h-8 text-sm rounded-md focus:ring-accent focus:border-accent"
          >
        </div>
      </div>

      <div class="grid">
        <label for="email-address" class="text-sm font-medium">Email Address</label>
        <div class="relative">
          <EnvelopeIcon class="absolute flex items-center w-5 h-full ml-2 text-gray-400 cursor-pointer" />
          <input
            id="email-address"
            v-model="email"
            placeholder="you@example.com"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="w-full h-8 pl-8 text-sm rounded-md focus:ring-accent focus:border-accent"
          >
        </div>
      </div>
      <div class="grid">
        <label for="password" class="text-sm font-medium">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          required
          class="w-full h-8 text-sm rounded-md focus:ring-accent focus:border-accent"
        >
      </div>
      <div class="grid">
        <label for="password-confirmation">Confirm Password</label>
        <input
          id="password-confirmation"
          v-model="confirm"
          name="password-confirmation"
          type="password"
          required
          class="w-full h-8 rounded-md focus:ring-accent focus:border-accent"
        >
      </div>
      <div class="text-sm font-thin justify-self-center">
        Already have an account? <NuxtLink to="/login" class="text-sm font-medium text-accent-500 hover:underline">
          Sign In
        </NuxtLink>
      </div>
      <div v-if="Object.keys(errors).length" class="px-3 py-2 bg-gray-200 rounded-md shadow-inner">
        <h5 class="p-0 m-0 font-bold text-gray-800 text-md">
          Errors
        </h5>
        <p class="relative p-0 m-0 font-mono text-sm text-gray-600">
          {{ errors }}
        </p>
      </div>

      <PrimaryButton class="min-w-[75%] min-h-[40px] justify-self-center" @click="onSubmit">
        <LockClosedIcon class="inline h-4" />
        Create account
      </PrimaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockClosedIcon, CheckCircleIcon } from '@heroicons/vue/20/solid'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import Card from 'models/card'

YupPassword(yup)
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

const schema = yup.object({
  firstName: yup.string().required().label('First Name'),
  lastName: yup.string().required().label('Last Name'),
  email: yup.string().required().email().label('Email Address'),
  password: yup.string().password().required().label('Password'),
  confirm: yup.string().password().required().oneOf([yup.ref('password')], 'Passwords must match')
})

const { handleSubmit, errors } = useForm({
  validationSchema: schema
})
const { value: firstName } = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')
const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')
const { value: confirm } = useField<string>('confirm')

const onSubmit = handleSubmit((value) => {
  alert(JSON.stringify(value))
})
</script>
