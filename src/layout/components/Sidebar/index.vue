<template>
  <aside class="sidebar-container">sidebar-container</aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: $base-sidebar-width;
  height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
</style>
