import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/system',
    name: 'System',
    component: Layout,
    meta: { title: '系统管理', elIcon: 'Setting', alwaysShow: true, order: 3 },
    redirect: '/system/user-manage',
    children: [
      {
        path: 'user-manage',
        name: 'UserManage',
        component: () => import('@/views/System/UserManage/index.vue'),
        meta: { title: '用户管理', elIcon: 'User' },
      },
      {
        path: 'role-manage',
        name: 'RoleManage',
        component: () => import('@/views/System/RoleManage/index.vue'),
        meta: { title: '角色管理', svgIcon: 'RoleManage' },
      },
      {
        path: 'depart-manage',
        name: 'DepartManage',
        component: () => import('@/views/System/DepartManage/index.vue'),
        meta: { title: '部门管理', svgIcon: 'DepartManage' },
      },
      {
        path: 'menu-manage',
        name: 'MenuManage',
        component: () => import('@/views/System/MenuManage/index.vue'),
        meta: { title: '菜单管理', elIcon: 'Menu' },
      },
      {
        path: 'notice-manage',
        name: 'NoticeManage',
        component: () => import('@/views/System/NoticeManage/index.vue'),
        meta: { title: '通知公告', elIcon: 'Bell' },
      },
    ],
  },
] as RouteRecordRaw[]
