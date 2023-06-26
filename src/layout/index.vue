<template>
  <el-scrollbar class="app-container" :class="classObj">
    <!-- mobile 端侧边栏遮罩层 -->
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="appStore.closeSidebar(false)"></div>
    <!-- 左侧边栏 -->
    <Sidebar></Sidebar>
    <!-- 主体容器 -->
    <section class="main-container">
      <!-- 头部导航栏和标签栏 -->
      <header :class="{ 'fixed-header': fixedHeader }">
        <Navbar></Navbar>
      </header>
      <!-- 页面主体内容 -->
      <AppMain></AppMain>
      <!-- 右侧设置面板 -->
      <RightPanel>
        <Settings />
      </RightPanel>
    </section>
  </el-scrollbar>

  <el-backtop :right="backtopPosNumber" :bottom="backtopPosNumber" target=".el-scrollbar__wrap" />
</template>

<script setup lang="ts">
import useResize from './hooks/useResize'
import { Sidebar, Navbar, AppMain, RightPanel, Settings } from './components'

useResize() // Layout 布局响应式

const appStore = useApp()
const { sidebar, device } = storeToRefs(appStore)
const settingStore = useSetting()
const { fixedHeader, showGreyMode } = storeToRefs(settingStore)
const backtopPosNumber = computed(() => (device.value === 'desktop' ? 40 : 10))

const classObj = computed(() => {
  return {
    'hide-sidebar': !sidebar.value.opened,
    'open-sidebar': sidebar.value.opened,
    withoutAnimation: sidebar.value.withoutAnimation,
    mobile: device.value === 'mobile',
    'gray-theme': showGreyMode.value,
  }
})
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  height: 100%;
  margin-left: $base-sidebar-width;
  transition: margin-left 0.28s;
}

.gray-theme {
  filter: grayscale(1);
}

.drawer-bg {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  background-color: #000;
}

.fixed-header {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  width: calc(100% - #{$base-sidebar-width});
  transition: width 0.28s;
}

.hide-sidebar {
  .sidebar-container {
    width: $hide-sidebar-width;
  }
  .main-container {
    margin-left: $hide-sidebar-width;
  }
  .fixed-header {
    width: calc(100% - #{$hide-sidebar-width});
  }
}
.mobile {
  .main-container {
    margin-left: 0;
  }
  .fixed-header {
    width: 100%;
  }
}
.mobile.hide-sidebar {
  .sidebar-container {
    width: 0;
    pointer-events: none;
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>
