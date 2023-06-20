import { defineStore } from 'pinia'

export default defineStore('setting', {
  state() {
    return {
      fixedHeader: true,
    }
  },
})
