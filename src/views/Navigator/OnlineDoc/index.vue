<template>
  <div class="app-content">
    <div class="nav"></div>
    <div class="list">
      <el-card v-for="(item, index) in list" :key="index">
        <template #header>{{ item.text }}</template>
        <div class="content">
          <a class="item" v-for="(v, i) in item.children" :key="i" :href="v.link" target="_blank">
            <img :src="v.logoURL" alt="logo" draggable="false" />
            <span>{{ v.text }}</span>
          </a>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = [
  {
    text: '常用工具',
    children: [
      {
        text: '字数统计',
        link: 'https://www.eteste.com',
        logoURL: 'https://web-abin.github.io/abinWeb/icons/18.png',
      },
      {
        text: '兼容性查询',
        link: 'https://caniuse.com',
        logoURL: 'https://caniuse.com/img/favicon-128.png',
      },
      {
        text: '草料二维码',
        link: 'https://cli.im',
        logoURL: 'https://static.clewm.net/static/images/favicon.ico',
      },
      {
        text: '互联二维码',
        link: 'https://www.hlcode.cn',
        logoURL: 'https://www.hlcode.cn/favicon.ico',
      },
      {
        text: '正则表达式测试',
        link: 'http://www.jsons.cn/reg',
        logoURL: 'https://web-abin.github.io/abinWeb/icons/15.png',
      },
      {
        text: '正则大全',
        link: 'https://any86.github.io/any-rule',
        logoURL: 'https://any86.github.io/any-rule/icon.png',
      },
    ],
  },
  {
    text: 'UI文档',
    children: [
      {
        text: 'Element UI',
        link: 'https://element.eleme.cn/#/zh-CN/component/installation',
        logoURL: 'https://raw.githubusercontent.com/ElemeFE/element/dev/examples/assets/images/element-logo-small.svg',
      },
      {
        text: 'Element Plus',
        link: 'https://element-plus.org/zh-CN/component/button.html',
        logoURL: 'https://element-plus.org/images/element-plus-logo-small.svg',
      },
      {
        text: 'Element React',
        link: 'https://elemefe.github.io/element-react/#/zh-CN/quick-start',
        logoURL: 'https://raw.githubusercontent.com/ElemeFE/element/dev/examples/assets/images/element-logo-small.svg',
      },
      {
        text: 'Naive UI',
        link: 'https://www.naiveui.com/zh-CN/light',
        logoURL: 'https://www.naiveui.com/assets/naivelogo-93278402.svg',
      },
      {
        text: 'Ant Design Vue',
        link: 'https://1x.antdv.com/docs/vue/introduce-cn',
        logoURL: 'https://qn.antdv.com/favicon.ico',
      },
      {
        text: 'Vant UI',
        link: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
        logoURL: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
      },
      {
        text: 'uView UI',
        link: 'https://www.uviewui.com/components/button.html',
        logoURL: 'https://www.uviewui.com/common/logo.png',
      },
    ],
  },
  {
    text: 'Web 框架',
    children: [
      {
        text: 'Vue2 文档',
        link: 'https://v2.cn.vuejs.org/v2/guide',
        logoURL: 'https://v2.cn.vuejs.org/images/icons/apple-icon-114x114.png',
      },
      {
        text: 'Vue3 文档',
        link: 'https://cn.vuejs.org/guide/introduction.html',
        logoURL: 'https://v2.cn.vuejs.org/images/icons/apple-icon-114x114.png',
      },
      {
        text: 'React 文档',
        link: 'https://react.docschina.org',
        logoURL: 'https://react.docschina.org/favicon.ico',
      },
      {
        text: '乾坤 微前端',
        link: 'https://qiankun.umijs.org/zh/guide',
        logoURL: 'https://gw.alipayobjects.com/mdn/rms_655822/afts/img/A*4sIUQpcos_gAAAAAAAAAAAAAARQnAQ',
      },
      {
        text: 'Electron 文档',
        link: 'https://www.electronjs.org/zh/docs/latest',
        logoURL: 'https://www.electronjs.org/zh/assets/img/favicon.ico',
      },
      {
        text: 'VuePress 文档',
        link: 'https://vuepress.vuejs.org/zh',
        logoURL: 'https://v2.cn.vuejs.org/images/icons/apple-icon-114x114.png',
      },
      {
        text: 'VitePress 文档',
        link: 'https://vitejs.cn/vitepress',
        logoURL: 'https://cn.vitejs.dev/logo.svg',
      },
    ],
  },
  {
    text: '编译构建',
    children: [
      {
        text: 'Webpack 文档',
        link: 'https://webpack.docschina.org',
        logoURL: 'https://webpack.docschina.org/icon_192x192.png',
      },
      {
        text: 'Vite 文档',
        link: 'https://cn.vitejs.dev/guide',
        logoURL: 'https://cn.vitejs.dev/logo.svg',
      },
      {
        text: 'VueCli 文档',
        link: 'https://cli.vuejs.org/zh/guide',
        logoURL: 'https://cli.vuejs.org/favicon.png',
      },
      {
        text: 'Babel 文档',
        link: 'https://babel.docschina.org',
        logoURL: 'https://babel.docschina.org/img/ogImage.png',
      },
      {
        text: 'TypeScript 文档',
        link: 'https://zhongsp.gitbooks.io/typescript-handbook/content',
        logoURL: 'https://docschina.org/static/logo/typescript.svg',
      },
    ],
  },
  {
    text: 'CSS 工具',
    children: [
      {
        text: '贝塞尔曲线1',
        link: 'https://www.bezier-curve.com',
        logoURL: 'https://www.bezier-curve.com/favicon.ico',
      },
      {
        text: '贝塞尔曲线2',
        link: 'https://cubic-bezier.com/#.17,.67,.83,.67',
        logoURL: 'https://www.bezier-curve.com/favicon.ico',
      },
      {
        text: 'CSS渐变色',
        link: 'https://cssgradient.io',
        logoURL: 'https://cssgradient.io/images/favicon-23859487.png',
      },
      {
        text: '在线clip-path',
        link: 'http://tools.jb51.net/code/css3path',
        logoURL: 'https://web-abin.github.io/abinWeb/icons/36.png',
      },
      {
        text: 'box-shadow案例',
        link: 'https://box-shadow.art',
        logoURL: 'https://box-shadow.art/wp-content/uploads/2021/10/logo-icon-150x150.png',
      },
      {
        text: 'border-radius调试',
        link: 'https://wow.techbrood.com/fiddle/40829',
        logoURL: 'https://s.techbrood.com/themes/techbrood/image/favicon.ico',
      },
      {
        text: 'Grid网格布局',
        link: 'https://cssgrid-generator.netlify.app',
        logoURL: 'https://cssgrid-generator.netlify.app/favicon.ico',
      },
      {
        text: 'CSS阴影',
        link: 'https://shadows.brumm.af',
        logoURL: 'https://shadows.brumm.af/favicon.svg',
      },
      {
        text: '过渡动画',
        link: 'https://www.transition.style/#out:square:hesitate',
        logoURL: 'https://www.transition.style/favicon.png',
      },
    ],
  },
]

const list1 = [
  { text: 'Vuex 文档', link: 'https://v3.vuex.vuejs.org/zh' },
  { text: 'Pinia 文档', link: 'https://pinia.vuejs.org/zh/introduction.html' },
  { text: 'uni-app 文档', link: 'https://uniapp.dcloud.net.cn/api' },

  { text: 'Canvas 文档', link: 'https://www.canvasapi.cn' },
  { text: 'VueRouter 文档', link: 'https://router.vuejs.org/zh/guide' },
  { text: 'Electron 文档', link: '' },
  { text: 'Express 文档', link: 'https://www.expressjs.com.cn' },
  { text: 'Nestjs 文档', link: 'https://www.nestjs.com.cn' },
  { text: 'Lodash 文档', link: 'https://www.lodashjs.com' },
  { text: 'jQuery 文档', link: 'http://hemin.cn/jq' },

  { text: 'ECharts 文档', link: 'https://echarts.apache.org/zh/index.html' },
  { text: 'Less 中文文档', link: 'http://lesscss.cn' },
  { text: 'Sass 中文文档', link: 'https://www.sass.hk/docs' },
  { text: 'Stylus 中文文档', link: 'https://www.stylus-lang.cn' },

  { text: 'VuePress 文档', link: '' },
  { text: ' 文档', link: '' },
  { text: '微信小程序', link: 'https://developers.weixin.qq.com/miniprogram/dev/api' },
  { text: '西瓜播放器', link: 'https://v2.h5player.bytedance.com' },
]
</script>

<style lang="scss" scoped>
.app-content {
  display: flex;
  justify-content: center;
  padding: 16px;
}

.el-card {
  &:not(:first-of-type) {
    margin-top: 16px;
  }
}

.mobile .content {
  grid-template-columns: repeat(2, 1fr);
}
.content {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(6, 1fr);
  .item {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 6px;
      font-size: 14px;
    }
  }
}
</style>
