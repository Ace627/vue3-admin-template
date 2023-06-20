<template>
  <el-breadcrumb class="app-breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
      <span v-if="item.redirect === 'noRedirect' || index === breadcrumbList.length - 1" class="no-redirect">
        {{ item.meta?.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)">
        {{ item.meta?.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import type { RouteLocationMatched } from 'vue-router'

const route = useRoute()
const router = useRouter()
const breadcrumbList = ref<RouteLocationMatched[]>([])

const getBreadcrumbList = () => {
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  const first = matched[0]
  if (first.path !== '/dashboard') {
    matched = ([{ path: '/dashboard', meta: { title: '首页', elIcon: 'Odometer' } }] as RouteLocationMatched[]).concat(matched)
  }
  breadcrumbList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}

const handleLink = (item: RouteLocationMatched) => {
  const { redirect } = item
  if (item.path === '/dashboard') return router.push({ path: item.path })
  const path = redirect ? route.matched[0].path + (redirect as string) : route.matched[0].children[0].path
  router.push({ path })
}

watch(
  () => route.path,
  newPath => {
    if (newPath.startsWith('/redirect/')) return
    getBreadcrumbList()
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  .no-redirect {
    color: #97a8be;
    cursor: default;
  }
}
</style>
