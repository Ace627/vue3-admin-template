<template>
  <main class="app-main">
    <h2>app-main1111</h2>
    <h2 v-for="(item, index) in 999" :key="index">滚动条测试 | {{ item }}</h2>
    <h2>app-main2222</h2>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: $navbar-height;
}
</style>
