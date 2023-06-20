import { defineStore } from 'pinia'

const OPENED_CACHE_KEY = 'SIDEBAR_OPENED_STATUS'

export default defineStore('app', {
  state() {
    return {
      sidebar: {
        opened: localStorage.getItem(OPENED_CACHE_KEY) ? Boolean(Number(localStorage.getItem(OPENED_CACHE_KEY))) : true,
        withoutAnimation: false,
      },
      device: 'desktop',
    }
  },

  actions: {
    // 面包屑开关菜单栏的回调
    toggleSidebar() {
      this.sidebar.withoutAnimation = false
      this.sidebar.opened = !this.sidebar.opened
      localStorage.setItem(OPENED_CACHE_KEY, this.sidebar.opened ? '1' : '0')
    },

    // 关闭侧边栏（主要用于移动端状态下）
    closeSidebar(withoutAnimation: boolean) {
      localStorage.setItem(OPENED_CACHE_KEY, '0')
      this.sidebar.opened = false
      this.sidebar.withoutAnimation = withoutAnimation
    },
  },
})
