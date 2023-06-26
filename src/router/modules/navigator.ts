import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/navigator',
    name: 'Navigator',
    component: Layout,
    meta: { title: '前端网站', svgIcon: 'Internet', alwaysShow: true, order: 2 },
    redirect: '/dev-doc',
    children: [
      {
        path: 'dev-doc',
        name: 'DevDoc',
        component: () => import('@/views/Navigator/OnlineDoc/index.vue'),
        meta: { title: '开发文档', svgIcon: 'Document' },
      },
    ],
  },
] as RouteRecordRaw[]
