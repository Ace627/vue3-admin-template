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
        path: 'appmovie',
        name: 'App影院',
        component: IFrame,
        meta: { title: 'App影院', frameURL: 'https://www.appmovie.cc', svgIcon: 'Movie' },
      },
      {
        path: 'sigu',
        name: '思古影视',
        component: IFrame,
        meta: { title: '思古影视', frameURL: 'https://sigu.cc', svgIcon: 'Movie' },
      },
      {
        path: 'hanjupeng',
        name: '韩剧棚',
        component: IFrame,
        meta: { title: '韩剧棚', frameURL: 'http://www.hanjupeng.com', svgIcon: 'Movie' },
      },
    ],
  },
] as RouteRecordRaw[]
