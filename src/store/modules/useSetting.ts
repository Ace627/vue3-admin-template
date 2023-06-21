import { defineStore } from 'pinia'

const storageSetting = JSON.parse(localStorage.getItem('LAYOUT_SETTING') || '{}')

export default defineStore('setting', {
  state() {
    return {
      fixedHeader: storageSetting.fixedHeader === undefined ? true : storageSetting.fixedHeader,
      sidebarLogo: storageSetting.sidebarLogo === undefined ? true : storageSetting.sidebarLogo,
      showGreyMode: storageSetting.showGreyMode === undefined ? false : storageSetting.showGreyMode,
      showSetting: false,
    }
  },
})
