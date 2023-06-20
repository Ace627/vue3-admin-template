<template>
  <div>
    <el-button type="primary" @click="login">模拟登录</el-button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const userStore = useUser()
// 计算需要跳转的路径
const toPath = (route.query.redirect as string) || '/'

async function login() {
  try {
    await userStore.login()
    router.replace({ path: toPath })
  } catch (error) {
    console.log('error: ', error)
  }
}
</script>

<style lang="scss" scoped></style>
