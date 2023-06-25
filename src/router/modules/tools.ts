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
    redirect: '/chromium-core-check',
    children: [
      {
        path: 'chromium-core-check',
        name: 'ChromiumCoreCheck',
        component: IFrame,
        meta: { title: '浏览器内核检测', frameURL: 'https://liulanmi.com/labs/core.html', svgIcon: 'Sport' },
      },
      {
        path: 'wifi-qrcode',
        name: 'WiFiQrcode',
        component: () => import('@/views/Tools/WiFiQrcode/index.vue'),
        meta: { title: 'WiFi 二维码', svgIcon: 'WiFi' },
      },
    ],
  },
] as RouteRecordRaw[]
