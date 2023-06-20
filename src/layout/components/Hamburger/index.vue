<template>
  <div @click="appStore.toggleSidebar">
    <SvgIcon :name="appStore.sidebar.opened ? 'Expand' : 'Fold'" class="hamburger-icon" />
  </div>
</template>

<script setup lang="ts">
const appStore = useApp()
</script>

<style lang="scss" scoped>
.hamburger-icon {
  font-size: 26px;
}
</style>
