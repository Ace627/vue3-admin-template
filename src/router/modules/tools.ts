import type { RouteRecordRaw } from 'vue-router'

/* Base Layout */
const Layout = () => import('@/layout/index.vue')
const IFrame = () => import('@/views/iFrame/index.vue')

export default [
  {
    path: '/tools',
    name: 'Tools',
    component: Layout,
    meta: { title: '实用工具', svgIcon: 'Tools', alwaysShow: true, order: 2 },
    redirect: '/wifi-qrcode',
    children: [
      {
        path: 'wifi-qrcode',
        name: 'WiFiQrcode',
        component: () => import('@/views/Tools/WiFiQrcode/index.vue'),
        meta: { title: 'WiFi 二维码', svgIcon: 'WiFi' },
      },
      {
        path: 'random-article',
        name: 'RandomArticle',
        component: () => import('@/views/Tools/RandomArticle/index.vue'),
        meta: { title: '随机一文', svgIcon: 'Document' },
      },
    ],
  },
] as RouteRecordRaw[]
