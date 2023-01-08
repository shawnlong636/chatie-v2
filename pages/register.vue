<template>
  <div class="container grid items-center grid-flow-col grid-cols-1 gap-5 sm:mt-5 md:mt-10 md:grid-cols-2 justify-self-center">
    <div class="hidden px-8 py-5 justify-stretch md:grid rounded-xl">
      <ChatieLogo class="ml-8 justify-self-start" />
      <div class="mt-6 grid grid-rows-3 grid-cols-[auto_1fr] grid-flow-row-dense gap-y-5 gap-x-2">
        <IconCheckCircle v-for="card in cards" :key="card.body" class="w-5 col-span-1 col-start-1 mt-1 fill-accent justify-self-center" />
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

    <div class="grid max-w-xl px-8 py-5 pb-10 mx-0 bg-white sm:mx-5 md:mx-0 gap-y-4 rounded-xl">
      <ChatieLogo class="md:hidden justify-self-center" :show-title="true" />
      <div class="text-2xl font-semibold text-center">
        Create your account
      </div>
      <div class="grid items-start gap-5 md:grid-flow-col">
        <div class="grid items-start ">
          <label for="first-name" class="text-sm font-medium">First Name</label>
          <div class="relative">
            <input
              id="first-name"
              v-model.lazy="firstName"
              placeholder="John"
              name="first-name"
              type="text"
              autocomplete="given-name"
              required
              :class="{
                'w-full max-w-full pr-6 h-8 text-sm rounded-md border-red-500 focus:ring-red-500 focus:border-red-500': firstnameErrors,
                'w-full max-w-full pr-6 h-8 text-sm rounded-md focus:ring-accent focus:border-accent': !firstnameErrors
              }"
            >
            <IconExclamationCircle v-if="firstnameErrors" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-red-500" />
            <IconCheckCircle v-if="!firstnameErrors && firstNameMeta.dirty" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-green-500" />
          </div>
          <div class="pt-1 pl-2 text-xs text-red-500 ">
            {{ firstnameErrors }}
          </div>
        </div>
        <div class="grid">
          <label for="last-name" class="text-sm font-medium">Last Name</label>
          <div class="relative">
            <input
              id="last-name"
              v-model.lazy="lastName"
              placeholder="Smith"
              name="last-name"
              type="text"
              autocomplete="family-name"
              required
              :class="{
                'w-full max-w-full pr-6 h-8 text-sm rounded-md border-red-500 focus:ring-red-500 focus:border-red-500': lastNameErrors,
                'w-full max-w-full pr-6 h-8 text-sm rounded-md focus:ring-accent focus:border-accent': !lastNameErrors
              }"
            >
            <IconExclamationCircle v-if="lastNameErrors" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-red-500" />
            <IconCheckCircle v-if="!lastNameErrors && lastNameMeta.dirty" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-green-500" />
          </div>
          <div class="pt-1 pl-2 text-xs text-red-500">
            {{ lastNameErrors }}
          </div>
        </div>
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
      <div class="grid">
        <label for="password-confirmation" class="text-sm font-medium">Confirm Password</label>
        <div class="relative">
          <input
            id="password-confirmation"
            v-model.lazy="confirm"
            placeholder="Enter a password"
            name="password-confirmation"
            :type="confirmType"
            required
            :class="{
              'w-full h-8 text-sm rounded-md focus:ring-accent focus:border-accent': !confirmErrors,
              'w-full border-red-500 h-8 text-sm rounded-md focus:ring-red-500 focus:border-red-500': confirmErrors
            }"
          >
          <IconEyeSolid v-if="confirmType === 'password'" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-gray-400 hover:fill-gray-500 active:fill-gray-600" @click="toggleShowConfirm" />
          <IconEyeSlash v-else class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-2 fill-gray-400 hover:fill-gray-500 active:fill-gray-600" @click="toggleShowConfirm" />
          <IconExclamationCircle v-if="confirmErrors" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-8 fill-red-500" />
          <IconCheckCircle v-if="!confirmErrors && confirmMeta.dirty" class="absolute inset-y-0 right-0 flex items-center w-4 h-full mr-8 fill-green-500" />
        </div>
        <div class="pt-1 pl-2 text-xs text-red-500">
          {{ confirmErrors }}
        </div>
      </div>
      <div class="text-sm font-thin justify-self-center">
        Already have an account? <NuxtLink to="/login" class="text-sm font-medium text-accent-500 hover:underline">
          Sign In
        </NuxtLink>
      </div>

      <PrimaryButton class="min-w-[75%] min-h-[40px] justify-self-center" @click="onSubmit">
        <IconLockClosed class="inline h-4 fill-white" />
        Create account
      </PrimaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup.string().required('Please enter your email').email('Your email must be valid'),
  password: yup.string().password().required('Please enter a password'),
  confirm: yup.string().password().required('Please confirm your password').oneOf([yup.ref('password')], 'Your password doesn\'t match')
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const passwordType = ref<string>('password')
const confirmType = ref<string>('password')

const toggleShowPassword = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}

const toggleShowConfirm = () => {
  confirmType.value = confirmType.value === 'password' ? 'text' : 'password'
}

const { value: firstName, errorMessage: firstnameErrors, meta: firstNameMeta } = useField<string>('firstName')
const { value: lastName, errorMessage: lastNameErrors, meta: lastNameMeta } = useField<string>('lastName')
const { value: email, errorMessage: emailErrors, meta: emailMeta } = useField<string>('email')
const { value: password, errorMessage: passwordErrors, meta: passwordMeta } = useField<string>('password')
const { value: confirm, errorMessage: confirmErrors, meta: confirmMeta } = useField<string>('confirm')

const onSubmit = handleSubmit(() => {
  // alert(JSON.stringify(value))
  alert('Form Successfully Submitted')
})
</script>
