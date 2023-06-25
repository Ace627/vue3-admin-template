import 'vue-router'

// VueRouter 中 Meta 字段的类型声明

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    hidden?: boolean // 默认 false，设置 true 的时候该路由不会在侧边栏出现
    order?: number // 设置该路由在侧边栏的排序
    title?: string // 设置该路由在侧边栏和面包屑中展示的名字
    icon?: string // 设置该路由的图标
    svgIcon?: string
    elIcon?: string
    frameURL?: string // 内嵌页面 iframe 的 src 地址
    alwaysShow?: boolean // 是否一直显示根路由
    breadcrumb?: boolean // 默认 true，如果设置为 false，则不会在面包屑中显示
    roles?: string[] // 设置该路由进入的权限，支持多个权限叠加
    /**
     * 示例: activeMenu: "/xxx/xxx"，
     * 当设置了该属性进入路由时，则会高亮 activeMenu 属性对应的侧边栏。
     * 该属性适合使用在有 hidden: true 属性的路由上
     */
    activeMenu?: string
    /**
     * 是否缓存该路由页面
     * 默认为 false，为 true 时代表需要缓存，此时该路由和该页面都需要设置一致的 Name
     */
    keepAlive?: boolean
  }
}
