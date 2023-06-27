<template>
  <div class="setting-container">
    <h3 class="drawer-title">系统布局配置</h3>
    <div class="setting-item" v-for="(item, index) in settingList" :key="index">
      <span class="setting-name">{{ item.name }}</span>
      <el-switch v-model="settingStore[item.key]" />
    </div>

    <el-divider />

    <div class="btn-group">
      <el-button type="primary" plain @click="saveSetting">保存配置</el-button>
      <el-button plain @click="resetSetting">重置配置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElLoading } from 'element-plus'
import type { KeyType, SettingStore } from '@/store/modules/useSetting'

const settingStore = useSetting()

// 用来遍历的配置菜单
const settingList: Array<{ key: KeyType; name: string }> = [
  { key: 'fixedHeader', name: '固定 Header' },
  { key: 'tagsView', name: '是否显示 tagsView' },
  { key: 'sidebarLogo', name: '显示侧边栏 Logo' },
  { key: 'showGreyMode', name: '显示灰色模式' },
  { key: 'dynamicTitle', name: '是否采用动态标题' },
]
// 根据配置菜单自动生成需要存储的配置
function getSettingConfig() {
  const keyList = settingList.map(item => item.key) as KeyType[]
  const config = {} as SettingStore
  for (const item of keyList) config[item] = settingStore[item]
  return config
}
// 保存配置
function saveSetting() {
  const loadingInstance = ElLoading.service({ fullscreen: true, text: '正在保存到本地，请稍候...', background: 'rgba(0, 0, 0, 0.96)' })
  localStorage.setItem('LAYOUT_SETTING', JSON.stringify(getSettingConfig()))
  setTimeout(() => {
    loadingInstance.close()
    settingStore.showSetting = false
  }, 1 * 1000)
}
// 重置配置
function resetSetting() {
  ElLoading.service({ fullscreen: true, text: '正在清除设置缓存并刷新，请稍候...', background: 'rgba(0, 0, 0, 0.96)' })
  localStorage.removeItem('LAYOUT_SETTING')
  setTimeout(() => window.location.reload(), 1 * 1000)
}
</script>

<style lang="scss" scoped>
.setting-container {
  .drawer-title {
    line-height: 22px;
    margin-bottom: 12px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
  }
  .setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    font-size: 14px;
  }
  .btn-group {
    display: flex;
    justify-content: center;
  }
}
</style>
