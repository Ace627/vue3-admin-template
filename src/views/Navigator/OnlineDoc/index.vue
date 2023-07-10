<template>
  <div class="app-content">
    <div class="nav">
      <p v-for="(item, index) in list" :key="index" @click="clickNav(index)" :class="{ active: activeIndex === index }">{{ item.text }}</p>
    </div>
    <div class="list">
      <el-card v-for="(item, index) in list" :key="index" class="nav-card">
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
    text: '数据可视化',
    children: [
      {
        text: 'ECharts 文档',
        link: 'https://echarts.apache.org/zh/index.html',
        logoURL: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1',
      },
      {
        text: 'Threejs 文档',
        link: 'https://threejs.docschina.org/#manual/introduction/Creating-a-scene',
        logoURL: 'https://docschina.org/static/logo/threejs.png',
      },
      {
        text: '西瓜播放器',
        link: 'https://h5player.bytedance.com',
        logoURL: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/favicon.ico',
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

const activeIndex = ref(0)
function clickNav(index: number) {
  const list = document.querySelectorAll('.nav-card')
  activeIndex.value = index
  list[index].scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.app-content {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  .nav {
    position: fixed;
    left: calc(200px + 80px);
    transition: left 0.28s;
    color: #3d4b66;
    p {
      display: block;
      width: 90px;
      line-height: 30px;
      margin: 16px 0;
      font-size: 14px;
      font-weight: bold;
      padding: 4px 6px;
      transition: all 0.16s;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0px 5px 20px 5px #0f15331a, -2px -2px 4px 0px #ffffffe5, -1px 1px 1px 0px #ffffffcc inset;
      &:hover,
      &.active {
        cursor: pointer;
        color: #fff;
        background-image: linear-gradient(220.55deg, #867ee6 15.27%, #4a86ff 49.16%), linear-gradient(0deg, #f5f6f7, #f5f6f7);
      }
    }
  }
  .list {
    width: 80%;
    height: calc(100vh - 120px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 1px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
    }
    .el-card {
      &:not(:first-of-type) {
        margin-top: 16px;
      }
    }
    .content {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
      .item {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
        span {
          font-size: 15px;
          margin-left: 6px;
        }
      }
    }
  }
}

.hide-sidebar {
  .nav {
    left: calc(#{$hide-sidebar-width} + 90px);
  }
}

.mobile {
  .nav {
    display: none;
  }
  .list {
    width: 100%;
    height: auto;
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
