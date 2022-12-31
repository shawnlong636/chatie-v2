<template>
  <el-container>
    <el-header height="auto">
      <ChatieLogo class="chatie-logo" />
    </el-header>
    <el-main>
      <el-card shadow="hover">
        <slot />
      </el-card>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ElCard, ElHeader, ElContainer, ElMain } from 'element-plus'
</script>

<style lang="scss">
.el-container {
  display: grid;
  justify-content: center;
}

.chatie-logo {
  justify-self: start;
  padding-top: 30px;
  padding-left: 30px;
  // padding-bottom: 30px;
}
</style>
