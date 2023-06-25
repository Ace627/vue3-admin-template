<template>
  <div class="navbar">
    <div class="left">
      <Hamburger class="hamburger-container hover-effect" />
      <Breadcrumb v-if="device !== 'mobile'" />
    </div>

    <div class="right">
      <!-- 个人中心 -->
      <el-dropdown class="right-menu-item hover-effect" :trigger="triggerType">
        <img :src="avatar" class="avatar" draggable="false" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="openSettingPanel">布局配置</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import Hamburger from '../Hamburger/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'

const appStore = useApp()
const userStore = useUser()
const settingStore = useSetting()
const { device } = storeToRefs(appStore)
const { avatar } = storeToRefs(userStore)
const triggerType = computed(() => (device.value === 'desktop' ? 'hover' : 'click'))

// 退出登录的回调
async function logout() {
  try {
    await ElMessageBox.confirm('确定要退出系统吗？', '温馨提示', { type: 'warning' })
    await userStore.logout()
    window.location.reload()
  } catch (error: any) {
    if (error === 'cancel') return
    console.log('error: ', error)
  }
}

function openSettingPanel() {
  settingStore.showSetting = true
}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: $navbar-height;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  overflow: hidden;
}

/* prettier-ignore */
.left, .right {
  display: flex;
  align-items: center;
  height: 100%;
}

.left {
  .hamburger-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
  }
}

.right {
  .right-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
  }
}

/* 用户头像样式 */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &:focus-visible {
    outline: none;
  }
}

/* 鼠标悬浮时的菜单效果 */
.hover-effect {
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 21, 41, 0.08);
  }
}
</style>
