import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/monitor',
    name: 'Monitor',
    component: Layout,
    meta: { title: '系统监控', elIcon: 'Monitor', alwaysShow: true, order: 4 },
    redirect: '/monitor/online-user',
    children: [
      {
        path: 'online-user',
        name: 'OnlineUser',
        component: () => import('@/views/Monitor/OnlineUser/index.vue'),
        meta: { title: '在线用户', svgIcon: 'OnlineUser' },
      },
    ],
  },
] as RouteRecordRaw[]
