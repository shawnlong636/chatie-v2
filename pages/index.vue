<template>
  <div class="container">
    <div class="chat-container">
      <!-- <el-card v-for="card in cards" :key="card.body" shadow="hover">
        <h1 v-if="card.header !== ''">
          {{ card.header }}
        </h1>
        <p>{{ card.body }}</p>
      </el-card>
      <el-button type="primary" @click="navigateTo('signup')">
        Get Started
      </el-button> -->

      <p v-for="card in cards" :key="card.body">
        {{ card.body }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ElCard, ElButton } from 'element-plus'
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
  }
]
</script>

<style scoped>
/* h1 {
  padding: 0;
  margin: 0;
}

.container {
  grid-template: 1fr / 1fr;
  justify-items: stretch;
  padding-top: 10px;
}

.chat-container {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(max-content, 600px);
  justify-content: center;
  grid-row-gap: 20px;
}

.el-card:nth-of-type(even) {
  justify-self: end;
  background-color: rgb(248, 222, 177);
}

.el-button {
  justify-self: end;
} */
</style>
