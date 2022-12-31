<template>
  <div>
    <h1 style="text-align: center;">
      Sign in to your account
    </h1>
    <el-form
      ref="loginFormRef"
      label-position="top"
      :rules="rules"
      :model="loginForm"
      label-width="120px"
      status-icon
    >
      <el-form-item label="Email" prop="email" status-icon>
        <el-input v-model="loginForm.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginForm.password" type="password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(loginFormRef)">
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm, ElFormItem, FormInstance, FormRules, ElInput, ElButton } from 'element-plus'

const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  email: '',
  password: ''
})

const rules = reactive<FormRules>({
  email: [
    { required: true, message: 'Please enter your email address', trigger: 'change' }
  ],
  password: [
    { required: true, message: 'Please enter your password', trigger: 'change' }
  ]
})

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) { return }
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('Submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>
