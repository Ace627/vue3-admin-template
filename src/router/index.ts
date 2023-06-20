import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import constantRoutes from './constantRoutes'

// 设定当前路由的模式
const IS_HASH_MODE = import.meta.env.VITE_ROUTER_MODE === 'hash'
const RouterMode = IS_HASH_MODE ? createWebHashHistory() : createWebHistory()

/**
 * 创建路由
 */
const router = createRouter({
  history: RouterMode,
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: '/login' })
  location.reload()
}

export default router
