import { defineStore } from 'pinia'
import defaultSetting from '@/config/settings'

export type SettingStore = {
  [key in keyof typeof defaultSetting]: boolean
}
export type KeyType = keyof SettingStore

const storageSetting = JSON.parse(localStorage.getItem('LAYOUT_SETTING') || '{}')

function getItemValue(key: KeyType): boolean {
  return storageSetting[key] === undefined ? defaultSetting[key] : storageSetting[key]
}

// 根据默认配置自动生成 setting
const state = {} as SettingStore
for (const key in defaultSetting) state[key as KeyType] = getItemValue(key as KeyType)

export default defineStore('setting', {
  state() {
    return state
  },
})
