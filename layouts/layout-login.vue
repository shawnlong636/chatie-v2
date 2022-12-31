<template>
  <el-container direction="vertical">
    <el-header height="auto">
      <el-row justify="center">
        <el-col :span="8">
          <chatie-logo class="left-padded bottom-padded" />
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row justify="center">
        <el-card>
          <slot />
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElHeader, ElCard, ElRow, ElCol } from 'element-plus'
</script>

<style lang="scss">
.el-card.stretch {
  width: 100%;
  max-width: 100%;
}

.left-padded {
  padding-left: 20px;
}

.bottom-padded {
  padding-bottom: 20px;
}
</style>
