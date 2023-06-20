<template>
  <div class="app-content">
    <a class="item" v-for="(item, index) in list" :key="index" :href="item.link" target="_blank">{{ item.text }}</a>
  </div>
</template>

<script setup lang="ts">
const list = [
  { text: 'Element UI', link: 'https://element.eleme.cn/#/zh-CN/component/installation' },
  { text: 'Element Plus', link: 'https://element-plus.org/zh-CN/component/button.html' },
  { text: 'Naive UI', link: 'https://www.naiveui.com/zh-CN/light' },
  { text: 'Ant Design Vue', link: 'https://1x.antdv.com/docs/vue/introduce-cn' },
  { text: 'Vant UI', link: 'https://vant-contrib.gitee.io/vant/#/zh-CN' },
  { text: 'uView UI', link: 'https://www.uviewui.com/components/button.html' },
  { text: 'Vue2 文档', link: 'https://v2.cn.vuejs.org/v2/guide' },
  { text: 'Vue3 文档', link: 'https://cn.vuejs.org/guide/introduction.html' },
  { text: 'Vuex 文档', link: 'https://v3.vuex.vuejs.org/zh' },
  { text: 'Pinia 文档', link: 'https://pinia.vuejs.org/zh/introduction.html' },
  { text: 'uni-app 文档', link: 'https://uniapp.dcloud.net.cn/api' },
  { text: 'Vite 文档', link: 'https://cn.vitejs.dev/guide' },
  { text: 'VueCli 文档', link: 'https://cli.vuejs.org/zh/guide' },
  { text: 'Canvas 文档', link: 'https://www.canvasapi.cn' },
  { text: 'VueRouter 文档', link: 'https://router.vuejs.org/zh/guide' },
  { text: 'Electron 文档', link: 'https://www.electronjs.org/zh/docs/latest' },
  { text: 'Express 文档', link: 'https://www.expressjs.com.cn' },
  { text: 'Nestjs 文档', link: 'https://www.nestjs.com.cn' },
  { text: 'Lodash 文档', link: 'https://www.lodashjs.com' },
  { text: 'jQuery 文档', link: 'http://hemin.cn/jq' },

  { text: 'ECharts 文档', link: 'https://echarts.apache.org/zh/index.html' },
  { text: 'Less 中文文档', link: 'http://lesscss.cn' },
  { text: 'Sass 中文文档', link: 'https://www.sass.hk/docs' },
  { text: 'Stylus 中文文档', link: 'https://www.stylus-lang.cn' },

  { text: 'VuePress 文档', link: 'https://vuepress.vuejs.org/zh' },
  { text: 'VitePress 文档', link: 'https://vitejs.cn/vitepress' },
  { text: '微信小程序', link: 'https://developers.weixin.qq.com/miniprogram/dev/api' },
  { text: '西瓜播放器', link: 'https://v2.h5player.bytedance.com' },
]
</script>

<style lang="scss" scoped>
.app-content {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  font-size: 18px;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 4px;
    white-space: nowrap;
    color: #fff;
    border-radius: 4px;
    background-color: rgba($color: #2c3b41, $alpha: 0.6);
    transition: all 0.28s;
    text-shadow: 1px 1px 0 #1ba784, -1px -1px 0 #1ba784;
    &:hover {
      cursor: pointer;
      background-color: #1890ff;
      text-shadow: none;
      font-size: 16px;
      border-radius: 10px 0 10px 0;
    }
  }
}

.mobile .app-content {
  grid-template-columns: repeat(2, 1fr);
}
</style>
