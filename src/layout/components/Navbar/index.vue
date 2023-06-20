<template>
  <div class="navbar">
    <div class="left">
      <Hamburger class="hamburger-container hover-effect" />
      <Breadcrumb v-if="device !== 'mobile'" />
    </div>

    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import Hamburger from '../Hamburger/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'

const appStore = useApp()
const device = computed(() => appStore.device)
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

.left {
  display: flex;
  align-items: center;
  height: 100%;
  .hamburger-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
  }
}

.hover-effect {
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 21, 41, 0.08);
  }
}
</style>
