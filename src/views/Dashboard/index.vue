<template>
  <div class="app-content" :class="{ loading: loading }">
    <img v-if="loading" src="http://www.86y.org/images/loading.gif" alt="loading" />
    <img v-else src="https://api.03c3.cn/zb" alt="每天60s读懂世界" draggable="false" class="is-loading" />
  </div>
</template>

<script setup lang="ts">
const loading = ref(true)

function loadImage() {
  const img = new Image()
  img.src = 'https://api.03c3.cn/zb'
  img.onload = () => {
    loading.value = false
  }
}

loadImage()
</script>

<style lang="scss" scoped>
.app-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  &.loading img {
    position: fixed;
    width: 64px;
    height: 64px;
    margin-top: 128px;
  }
}
</style>
