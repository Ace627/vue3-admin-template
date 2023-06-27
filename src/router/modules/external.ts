import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')
const IFrame = () => import('@/views/iFrame/index.vue')

// 创建外链的方法
function createLink(path: string, title: string, elIcon = 'Promotion'): RouteRecordRaw {
  return { path, name: title, component: () => {}, meta: { title, elIcon } }
}

export default [
  {
    path: '/external',
    name: 'IFrame',
    component: Layout,
    meta: { title: '外链', svgIcon: 'External', alwaysShow: true, order: 3 },
    children: [
      {
        path: 'App影院',
        name: 'App影院',
        component: IFrame,
        meta: { title: 'App影院', frameURL: 'https://www.appmovie.cc', svgIcon: 'Movie' },
      },
    ],
  },
] as RouteRecordRaw[]
