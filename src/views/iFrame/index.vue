<template>
  <div class="iframe-content" v-loading="loading" element-loading-text="拼命加载中..." element-loading-background="rgba(0, 0, 0, 0.8)">
    <iframe ref="iframeRef" :src="src" frameborder="0" scrolling="auto" class="iframe"></iframe>
  </div>
</template>

<script setup lang="ts">
const src = ref('')
const route = useRoute()
const loading = ref(true)
const iframeRef = ref<HTMLHtmlElement>()

onMounted(() => {
  src.value = route.meta.frameURL as string
  iframeRef.value?.addEventListener('load', () => {
    loading.value = false
  })
})
</script>

<style lang="scss" scoped>
.iframe-content {
  width: 100%;
  height: $app-main-height;
  .iframe {
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 10px 1px #0f15331a, inset -1px 1px 1px #fffc;
  }
}

.has-tags-view {
  .iframe-content {
    height: calc(#{$app-main-height} - #{$tags-view-height});
  }
}
</style>
