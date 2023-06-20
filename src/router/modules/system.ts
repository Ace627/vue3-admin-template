import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/system',
    name: 'System',
    component: Layout,
    meta: { title: '系统管理', svgIcon: 'Fold', alwaysShow: true, order: 2 },
    children: [
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/System/Menu/index.vue'),
        meta: { title: '菜单管理', svgIcon: 'Fold' },
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/System/Role/index.vue'),
        meta: { title: '角色管理', svgIcon: 'Fold' },
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/System/User/index.vue'),
        meta: { title: '用户管理', svgIcon: 'Fold' },
      },
    ],
  },
] as RouteRecordRaw[]
