<template>
  <el-scrollbar>
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

const settingStore = useSetting()
const { fixedHeader } = storeToRefs(settingStore)
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
</style>
