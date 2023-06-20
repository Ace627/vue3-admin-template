// src/config/permission.ts
import router from '@/router'
import NProgress from 'nprogress'
import { ElMessage } from 'element-plus'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

NProgress.configure({ showSpinner: false }) // 去除进度条加载时右侧的小圆圈
const whiteList = ['/login'] // 免登录白名单
const { getToken, removeToken, setToken } = useToken()

/* 暂时不需要登录页 */
setToken('mock_token')

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  NProgress.start()
  const userStore = useUser()
  const permissionStore = usePermission()
  // 判断该用户是否登录
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/', replace: true }) // 如果已经登录，并准备进入 Login 页面，则重定向到主页
    } else {
      // 检查用户是否已获得其权限角色
      if (userStore.roles.length === 0) {
        try {
          await userStore.getUserInfo()
          const roles = userStore.roles
          // 根据角色生成可访问的 Routes（可访问路由 = 常驻路由 + 有访问权限的动态路由）
          permissionStore.generateRoutes(roles)
          // 将'有访问权限的动态路由' 添加到 Router 中
          permissionStore.dynamicRoutes.forEach(route => router.addRoute(route))
          // 确保添加路由已完成
          // 设置 replace: true, 因此导航将不会留下历史记录
          next({ ...to, replace: true })
        } catch (error: any) {
          // 过程中发生任何错误，都直接重置 Token，并重定向到登录页面
          ElMessage.error(error.message || '路由守卫过程发生错误')
          removeToken()
          next(`/login?redirect=${to.fullPath}`)
        }
      } else {
        next()
      }
    }
  } else {
    // 如果没有 Token，但在免登录的白名单中，则直接进入；否则将被重定向到登录页面
    whiteList.includes(to.path) ? next() : next(`/login?redirect=${to.fullPath}`)
  }
})

router.afterEach(to => {
  useTitle(to.meta?.title)
  NProgress.done()
})
