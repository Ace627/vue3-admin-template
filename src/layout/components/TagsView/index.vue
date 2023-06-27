<template>
  <el-scrollbar class="tags-scrollbar">
    <div class="tags-view-container">
      <el-tag
        :size="tagSize"
        v-for="(item, index) in tagList"
        :key="index"
        :closable="item.title !== '首页'"
        :effect="route.meta.title === item.title ? 'dark' : 'plain'"
        @click="clickTag(item)"
        @close="closeTag(item, index)"
      >
        {{ item.title }}
      </el-tag>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
const appStore = useApp()
const route = useRoute()
const router = useRouter()

const tagList = ref([{ title: '首页', path: '/' }])
const tagSize = computed(() => (appStore.device === 'mobile' ? 'small' : 'default'))

function clickTag(item: any) {
  router.push({ path: item.path })
}
function closeTag(item: any, index: number) {
  if (index > 0) {
    const target = tagList.value.at(index - 1)
    tagList.value.splice(index, 1)
    if (route.meta.title === item.title) {
      router.push({ path: target!.path })
    }
  } else {
  }
}

watch(
  () => route.path,
  () => {
    const path = route.path
    const title = route.meta.title
    const isHas = tagList.value.find(item => item.title === title) // 去重
    if (title && !isHas) {
      tagList.value.push({ title, path })
    }
  },
  {
    immediate: true,
  },
)
</script>

<style lang="scss" scoped>
.tags-scrollbar {
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.tags-view-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: $tags-view-height;
}

.el-tag {
  flex-shrink: 0;
  margin: 0 6px;
}
</style>
