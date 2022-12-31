<template>
  <div class="card">
    <form>
      <h2 id="header">
        Sign in to your account
      </h2>
      <div class="input-group">
        <label for="email">Email</label>
        <input id="email" type="text" name="email">
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" name="password">
      </div>

      <div class="row-container">
        <NuxtLink to="/signup">
          <button type="button" class="button-line">
            Sign Up
          </button>
        </NuxtLink>
        <NuxtLink to="/inbox">
          <button class="button-fill" type="button">
            Sign In
          </button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})
</script>

<style scoped lang="scss">
form {
  display: grid;
  grid-template: repeat(4, auto) / 1fr;
  grid-row-gap: 20px;
  justify-content: stretch;

  h2 {
    padding: 0;
    margin: 0;
  }
}

.row-container {
  display: grid;
  grid-auto-flow: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  grid-gap: 20px;
}

.input-group {
  display: grid;
  grid-template: auto auto / 1fr;

  label {
    padding: 5px 0;
    margin: 0;
  }
}

button {
  margin: 10px 0;
  justify-self: center;
}
</style>
