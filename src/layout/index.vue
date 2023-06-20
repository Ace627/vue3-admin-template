<template>
  <el-scrollbar :class="classObj">
    <Sidebar></Sidebar>

    <section class="main-container">
      <header :class="{ 'fixed-header': fixedHeader }">
        <Navbar></Navbar>
      </header>

      <AppMain></AppMain>
    </section>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { Sidebar, Navbar, AppMain } from './components'

const appStore = useApp()
const { sidebar, device } = storeToRefs(appStore)
const settingStore = useSetting()
const { fixedHeader } = storeToRefs(settingStore)

const classObj = computed(() => {
  return {
    'hide-sidebar': !sidebar.value.opened,
    'open-sidebar': sidebar.value.opened,
    withoutAnimation: sidebar.value.withoutAnimation,
    mobile: device.value === 'mobile',
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
</style>
