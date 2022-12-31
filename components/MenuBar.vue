<template>
  <div class="menu-bar">
    <ChatieLogo />
    <div class="content">
      <el-button type="primary" @click="navigateTo('login')">
        Login
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
</script>

<style lang="scss">
.menu-bar {
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template: "Logo Content" auto / auto 1fr;

  .content {
    justify-self: end;
  }
}
</style>
