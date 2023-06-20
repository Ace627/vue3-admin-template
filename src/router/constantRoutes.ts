import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: { title: '登录', hidden: true },
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: { title: '首页', svgIcon: 'Fold' },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/ErrorPage/404.vue'),
    meta: { hidden: true, title: 'Not Found' },
    alias: '/:pathMatch(.*)*',
  },
] as Array<RouteRecordRaw>
