import { resolve } from 'path' // path 模块提供了一些工具函数，用于处理文件与目录的路径
import { defineConfig, loadEnv } from 'vite' // 使用 defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
import vue from '@vitejs/plugin-vue' // 提供 Vue 3 单文件组件支持
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite' // 提供对组件自动导入的支持
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 集成对 SVG 图标的支持
import ElementPlus from 'unplugin-element-plus/vite'

/** 路径拼接函数，简化代码 */
const pathResolve = (path: string): string => resolve(process.cwd(), path)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀
  const VITE_ENV = loadEnv(mode, process.cwd(), 'VITE_') as unknown as ImportMetaEnv

  return {
    /** 部署应用包时的基本 URL */
    base: VITE_ENV.VITE_PUBLIC_PATH,
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router', 'pinia'], // 自动导入 vue、vue-router、Pinia 相关函数
        dts: 'types/auto-generate/auto-import.d.ts',
        dirs: ['src/store/modules', 'src/hooks'], // 配置其它需要导入的文件目录
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'types/auto-generate/components.d.ts',
        dirs: ['src/components'],
      }),
      createSvgIconsPlugin({
        iconDirs: [pathResolve('src/assets/icons')], // 指定图标文件夹
        symbolId: 'icon-[dir]-[name]', // 指定symbolId格式
      }),
      ElementPlus({}),
    ],

    server: {
      /** 设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址 */
      host: true,
      /** 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口 */
      port: 5173,
      /** 端口被占用时，是否直接退出 | 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口 */
      strictPort: false,
      /** 是否自动打开浏览器 */
      open: false,
      /** 是否允许跨域 */
      cors: true,
    },

    resolve: {
      alias: {
        /** 设置 `@` 指向 `src` 目录 */
        '@': pathResolve('src'),
        /** 设置 `#` 指向 `types` 目录 */
        '#': pathResolve('types'),
      },
    },

    css: {
      preprocessorOptions: {
        // 定义全局 scss 变量
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },

    build: {
      /** 指定打包文件的输出目录。默认值为 dist ，当 dist 被占用或公司有统一命名规范时，可进行调整 */
      outDir: VITE_ENV.VITE_OUTPUT_DIR,
      /** 指定生成静态资源的存放目录。默认值为 assets ，可根据需要进行调整 */
      assetsDir: 'assets',
      /** 图片转 base64 编码的阈值。为防止过多的 http 请求，Vite 会将小于此阈值的图片转为 base64 格式 */
      assetsInlineLimit: 4096,
      /** 规定触发警告的 chunk 大小。（以 kbs 为单位） */
      chunkSizeWarningLimit: 500,
      /** 启用/禁用 CSS 代码拆分 */
      cssCodeSplit: true,
      /** 构建后是否生成 source map 文件 */
      sourcemap: false,
      /** 是否在构建阶段将 publicDir 目录中的所有文件复制到 outDir 目录中 */
      copyPublicDir: true,
      /** 指定使用哪种混淆器。默认为 esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2% */
      /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
      minify: 'esbuild',
    },

    /** 在打包代码时移除 console、debugger */
    esbuild: {
      drop: ['console', 'debugger'],
    },
  }
})
