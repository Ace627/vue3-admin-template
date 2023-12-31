import { createApp } from 'vue'
import './styles/index.scss'
import router from './router'
import store from './store' // 状态管理
import App from './App.vue' // 全局唯一根组件

import 'virtual:svg-icons-register'
import './config/permission' // 权限控制

const app = createApp(App)

// 批量注册全局组件（暂改为插件自动版 | 因为插件版支持语法提示）
// import AutoRegisterGlobalComponents from '@/components'
// app.use(AutoRegisterGlobalComponents)

// 注册 Element Plus 所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) app.component(key, component)

app.use(router)
app.use(store)
app.mount('#app')
