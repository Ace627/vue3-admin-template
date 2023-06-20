import { defineStore } from 'pinia'
const { getToken, removeToken, setToken } = useToken()

export default defineStore('user', {
  state() {
    return {
      token: getToken(), // 用户的唯一身份标识
      username: '',
      avatar: '',
      roles: [] as string[],
    }
  },

  actions: {
    // 登录
    async login() {
      try {
        const token = 'MOCK_LOGIN_TOKEN'
        this.token = token
        setToken(this.token)
      } catch (error) {
        return Promise.reject(error)
      }
    },

    // 获取用户信息
    async getUserInfo() {
      try {
        this.token = 'Mock_User_Login_Token'
        this.roles = ['admin']
        this.username = '当时只道是寻常'
        this.avatar = `https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif`
        setToken(this.token)
      } catch (error) {
        return Promise.reject(error)
      }
    },

    // 退出登录
    async logout() {
      try {
        this.$reset() // 重置 user 仓库的数据
        removeToken()
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },

  getters: {},
})
