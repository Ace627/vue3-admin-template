<template>
  <template v-if="!item.meta?.hidden">
    <!-- 只有一个菜单需要展示的情况 -->
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <Link v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <SvgIcon v-if="theOnlyOneChild.meta.svgIcon" :name="theOnlyOneChild.meta.svgIcon" class="el-icon" />
          <i v-else-if="theOnlyOneChild.meta.iconfont" :class="`iconfont icon-${theOnlyOneChild.meta.iconfont} el-icon`"></i>
          <component v-else-if="theOnlyOneChild.meta.elIcon" :is="theOnlyOneChild.meta.elIcon" class="el-icon"></component>
          <template v-if="theOnlyOneChild.meta.title" #title>
            <span class="title">{{ theOnlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </Link>
    </template>

    <!-- 需要作为折叠菜单展示的情况 -->
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template #title>
        <SvgIcon v-if="item.meta?.svgIcon" :name="item.meta.svgIcon" class="el-icon" />
        <i v-else-if="item.meta?.iconfont" :class="`iconfont icon-${item.meta.iconfont} el-icon`"></i>
        <component v-else-if="item.meta?.elIcon" :is="item.meta.elIcon" class="el-icon"></component>
        <span v-if="item.meta?.title" class="title">{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <SidebarItem v-for="(child, index) in item.children" :key="index" :item="child" :basePath="resolvePath(child.path)" />
      </template>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import path from 'path-browserify'
import { isExternal } from '@/utils/validate'
import type { RouteRecordRaw } from 'vue-router'
import Link from './Link.vue'

const props = defineProps({
  item: { type: Object as PropType<RouteRecordRaw>, required: true },
  basePath: { type: String, required: true },
})

// 是否需要一直展示根路由
const alwaysShowRootMenu = computed(() => props.item.meta?.alwaysShow)

// 需要展示的子菜单数量
const showingChildNumber = computed(() => {
  if (props.item.children) {
    const showingChildren = props.item.children.filter(item => !item.meta?.hidden)
    return showingChildren.length
  }
  return 0
})

// 重组只需要展示的一个菜单
const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) return null
  if (props.item.children) for (const child of props.item.children) if (!child.meta || !child.meta.hidden) return child
  // If there is no children, return itself with path removed,
  // because this.basePath already contains item's path information
  return { ...props.item, path: '' }
})

// 拼接路径
const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) return routePath
  if (isExternal(props.basePath)) return props.basePath
  return path.resolve(props.basePath, routePath)
}
</script>

<style lang="scss" scoped>
.el-menu-item-active {
  font-weight: bold;
  color: #fff;
  background-color: #1890ff !important;
}

/* 侧栏菜单每项高度 */
:deep(.el-sub-menu__title),
.el-menu-item {
  box-sizing: border-box;
  height: 42px;
  line-height: 1;
}

/* 多级菜单下的菜单项单独背景色（区分层级） */
.el-sub-menu .el-menu-item {
  background-color: #2c3b41;
}

/* 菜单项鼠标悬浮样式 */
.el-menu-item:hover {
  font-weight: bold;
  color: #fff;
}

/* 菜单项激活样式 */
.el-menu-item.is-active {
  @extend .el-menu-item-active;
}

.el-icon {
  width: 1em !important;
  min-width: 1em;
  font-size: 18px;
  margin-right: 0;
}

.title {
  margin-left: 0.5em;
}
</style>
