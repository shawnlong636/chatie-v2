<template>
  <div class="container grid gap-5 sm:mt-5 md:mt-10 justify-self-center justify-items-center">
    <div class="grid min-w-full px-8 py-5 pb-8 mx-0 bg-white md:min-w-[512px] gap-y-5 rounded-xl">
      <ChatieLogo class="justify-self-center" :show-title="true" />
      <div class="text-2xl font-semibold text-center">
        Sign in to your account
      </div>
      <div class="grid">
        <label for="email-address" class="text-sm font-medium">Email Address</label>
        <div class="relative">
          <IconEnvelopeOutline class="absolute flex items-center w-5 h-full ml-2 cursor-pointer stroke-gray-400" />
          <input
            id="email-address"
            v-model.lazy="email"
            placeholder="you@example.com"
            name="email"
            type="email"
            autocomplete="email"
            required
            :class="{
              'w-full h-8 pl-8 text-sm rounded-md border-red-500 focus:ring-red-500 focus:border-red-500': emailErrors,
              'w-full h-8 pl-8 text-sm rounded-md focus:ring-accent focus:border-accent': !emailErrors
            }"
          >
          <IconExclamationCircle v-if="emailErrors" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-red-500" />
          <IconCheckCircle v-if="!emailErrors && emailMeta.dirty" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-green-500" />
        </div>
        <div class="pt-1 pl-2 text-xs text-red-500">
          {{ emailErrors }}
        </div>
      </div>
      <div class="grid">
        <label for="password" class="text-sm font-medium">Password</label>
        <div class="relative">
          <input
            id="password"
            v-model.lazy="password"
            name="password"
            :type="passwordType"
            placeholder="Enter a password"
            required
            :class="{
              'w-full h-8 text-sm rounded-md focus:ring-accent focus:border-accent': !passwordErrors,
              'w-full h-8 text-sm rounded-md border-red-500 focus:ring-red-500 focus:border-red-500': passwordErrors
            }"
          >
          <IconEyeSolid v-if="passwordType === 'password'" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-gray-400 hover:fill-gray-500 active:fill-gray-600" @click="toggleShowPassword" />
          <IconEyeSlash v-else class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-gray-400 hover:fill-gray-500 active:fill-gray-600" @click="toggleShowPassword" />
          <IconExclamationCircle v-if="passwordErrors" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-8 fill-red-500" />
          <IconCheckCircle v-if="!passwordErrors && passwordMeta.dirty" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-8 fill-green-500" />
        </div>
        <div class="pt-1 pl-2 text-xs text-red-500">
          {{ passwordErrors }}
        </div>
      </div>
      <div class="font-thin justify-self-center">
        Don't have an account? <NuxtLink to="/register" class="font-medium text-accent-500 hover:underline">
          Sign Up
        </NuxtLink>
      </div>
      <PrimaryButton class="min-w-[75%] min-h-[40px] justify-self-center" @click="onSubmit">
        <IconLockClosed class="inline h-4 fill=white" />
        Sign in
      </PrimaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

definePageMeta({ layout: 'layout-login' })

const schema = yup.object({
  email: yup.string().required('Please enter your email').email('Your email must be valid'),
  password: yup.string().required('Please enter a password')
})

const { handleSubmit } = useForm({
  validationSchema: schema
})
const passwordType = ref<string>('password')

const { value: email, errorMessage: emailErrors, meta: emailMeta } = useField<string>('email')
const { value: password, errorMessage: passwordErrors, meta: passwordMeta } = useField<string>('password')

const toggleShowPassword = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}

const onSubmit = handleSubmit(() => {
  // alert('JSON.stringify(value)')
  alert('Password Successfully submitted')
})
</script>
