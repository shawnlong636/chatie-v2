<template>
  <div class="grid items-center grid-flow-col p-0 m-0">
    <ChatieLogo />
    <button
      class="w-20 h-8 text-center text-white transition-all rounded justify-self-end bg-accent hover:bg-accent-400 active:bg-accent-600"
      @click="navigateTo('login')"
    >
      Login
    </button>
  </div>
</template>
