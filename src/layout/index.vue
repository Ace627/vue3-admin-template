<template>
  <div class="app-container">
    <div class="sidebar-container">sidebar-container</div>

    <div class="main-container">
      <div class="fixed-header">
        <div class="navbar">navbar</div>
      </div>

      <div class="app-main">app-main</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.sidebar-container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: $base-sidebar-width;
  height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

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

.navbar {
  position: relative;
  width: 100%;
  height: $navbar-height;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  overflow: hidden;
}

.app-main {
  position: relative;
  width: 100%;
  min-height: calc(100vh - #{$navbar-height});
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: $navbar-height;
}
</style>
