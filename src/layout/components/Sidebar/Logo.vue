<template>
  <div class="sidebar-logo-container">
    <transition name="sidebar-logo-fade">
      <!-- 侧栏折叠状态 -->
      <router-link v-if="isCollapse" key="collapse" to="/" class="sidebar-logo-link">
        <img v-if="SHOW_SIDEBAR_LOGO" src="/logo.png" class="sidebar-logo" draggable="false" />
        <h1 v-else class="sidebar-logo-text">{{ APP_TITLE }}</h1>
      </router-link>

      <!-- 侧栏展开状态 -->
      <router-link v-else key="expand" to="/" class="sidebar-logo-link">
        <img v-if="SHOW_SIDEBAR_LOGO" src="/logo.png" class="sidebar-logo" alt="logo" draggable="false" />
        <h1 class="sidebar-logo-text">{{ APP_TITLE }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup lang="ts">
const SHOW_SIDEBAR_LOGO = true
const APP_TITLE = '似水流年'

const appStore = useApp()
const isCollapse = computed(() => !appStore.sidebar.opened)
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  height: $logo-height;
  overflow: hidden;

  .sidebar-logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;

    .sidebar-logo {
      width: 32px;
      height: 32px;
    }

    .sidebar-logo-text {
      white-space: nowrap;
      margin-left: 10px;
      font-weight: 600;
      font-size: 14px;
    }
  }
}
</style>
