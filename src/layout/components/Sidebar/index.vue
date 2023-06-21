<template>
  <el-scrollbar class="sidebar-container">
    <Logo v-if="sidebarLogo" />
    <el-menu :background-color="menuBackground" :text-color="menuColor" :collapse="isCollapse" :collapse-transition="false" unique-opened :default-active="activeMenu">
      <SidebarItem v-for="(route, index) in routeList" :key="index" :item="route" :basePath="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/export.module.scss'

const route = useRoute()
const appStore = useApp()
const settingStore = useSetting()
const permissionStore = usePermission()
const { sidebarLogo } = storeToRefs(settingStore)
const { menuBackground, menuColor } = variables

const routeList = computed(() => permissionStore.routes)
const isCollapse = computed(() => !appStore.sidebar.opened)
const activeMenu = computed(() => (route.meta?.activeMenu ? route.meta.activeMenu : route.path))
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: $base-sidebar-width;
  height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  background-color: $base-menu-background;
  transition: width 0.28s;
  overflow: hidden;
}

.el-menu {
  width: 100%;
  border: none;
}
</style>
