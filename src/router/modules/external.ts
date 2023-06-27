import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')
const IFrame = () => import('@/views/iFrame/index.vue')

export default [
  {
    path: '/external',
    name: 'IFrame',
    component: Layout,
    meta: { title: '外链', svgIcon: 'External', alwaysShow: true, order: 3 },
    redirect: '/external/App影院',
    children: [
      {
        path: 'App影院',
        name: 'App影院',
        component: IFrame,
        meta: { title: 'App影院', frameURL: 'https://www.appmovie.cc', svgIcon: 'Movie' },
      },
      {
        path: '思古影视',
        name: '思古影视',
        component: IFrame,
        meta: { title: '思古影视', frameURL: 'https://sigu.cc', svgIcon: 'Movie' },
      },
    ],
  },
] as RouteRecordRaw[]
