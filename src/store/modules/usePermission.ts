import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import constantRoutes from '@/router/constantRoutes'
import dynamicRoutes from '@/router/dynamicRoutes'

export default defineStore('permission', {
  state() {
    return {
      routes: [] as RouteRecordRaw[], // 静态路由 + 筛选后的动态路由
      dynamicRoutes: [] as RouteRecordRaw[], // 筛选后有权限访问的路由
    }
  },

  actions: {
    generateRoutes(roles: string[]) {
      let accessedRoutes: RouteRecordRaw[]
      if (roles.includes('admin')) {
        accessedRoutes = dynamicRoutes || []
      } else {
        accessedRoutes = filterDynamicRoutes(dynamicRoutes, roles)
      }
      this.routes = constantRoutes.concat(accessedRoutes)
      this.dynamicRoutes = accessedRoutes
      return this.routes
    },
  },
})

function hasPermission(roles: string[], route: RouteRecordRaw) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => {
      if (route.meta?.roles !== undefined) {
        return route.meta.roles.includes(role)
      } else {
        return false
      }
    })
  } else {
    return true
  }
}

function filterDynamicRoutes(routes: RouteRecordRaw[], roles: string[]) {
  const list: RouteRecordRaw[] = []
  routes.forEach(route => {
    let tmpRoute = { ...route }
    if (hasPermission(roles, tmpRoute)) {
      if (tmpRoute.children) tmpRoute.children = filterDynamicRoutes(tmpRoute.children, roles)
      list.push(tmpRoute)
    }
  })
  return list
}
