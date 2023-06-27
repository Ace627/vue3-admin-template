<template>
  <main class="app-main">
    <RouterView v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key" />
      </transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const key = computed(() => route.path)
</script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  width: 100%;
  min-height: $app-main-height;
  overflow: hidden;
}
.fixed-header + .app-main {
  min-height: 100vh;
  padding-top: $navbar-height;
}

.has-tags-view {
  .app-main {
    min-height: calc(#{$app-main-height} - #{$tags-view-height});
  }
  .fixed-header + .app-main {
    padding-top: calc(#{$navbar-height} + #{$tags-view-height});
  }
}
</style>
