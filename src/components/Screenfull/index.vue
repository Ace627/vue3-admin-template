<template>
  <div @click="toggleFullScreen">
    <el-tooltip effect="dark" :content="tips" placement="bottom">
      <SvgIcon :name="isFullscreen ? 'FullScreenExit' : 'FullScreen'" />
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'

const props = defineProps({
  /** 全屏的元素，默认是 html */
  element: { type: String, default: 'html' },
  /** 打开全屏提示语 */
  openTips: { type: String, default: '全屏' },
  /** 关闭全屏提示语 */
  exitTips: { type: String, default: '退出全屏' },
})

const tips = ref<string>(props.openTips)
const isFullscreen = ref<boolean>(false)

const toggleFullScreen = () => {
  if (!screenfull.isEnabled) return ElMessage.warning('您的浏览器暂不支持全屏效果')
  screenfull.toggle(document.querySelector(props.element) || undefined)
}

const change = () => {
  isFullscreen.value = screenfull.isFullscreen
  tips.value = screenfull.isFullscreen ? props.exitTips : props.openTips
}

screenfull.on('change', change)

onUnmounted(() => {
  if (screenfull.isEnabled) screenfull.off('change', change)
})
</script>

<style lang="scss" scoped>
.svg-icon {
  &:focus {
    outline: none;
  }
}
</style>
