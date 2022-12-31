<template>
  <el-container>
    <el-header height="auto">
      <MenuBar />
    </el-header>
    <el-main><slot /></el-main>
    <el-footer />
  </el-container>
</template>
<script setup lang="ts">
import { ElHeader, ElMain, ElFooter, ElContainer } from 'element-plus'
</script>
