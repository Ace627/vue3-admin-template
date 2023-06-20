import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('./modules/**/*.ts', { eager: true })
const routeModuleList: RouteRecordRaw[] = []

// 加入到路由集合中
Object.keys(modules).forEach((key: string) => {
  const module = (modules as Record<string, any>)[key].default || {}
  const moduleList = Array.isArray(module) ? [...module] : [module]
  routeModuleList.push(...moduleList)
})

// 根据 order 排序 | 升序
routeModuleList.sort((a: RouteRecordRaw, b: RouteRecordRaw) => (a.meta?.order as number) - (b.meta?.order as number))

export default routeModuleList
