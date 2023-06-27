<template>
  <div class="app-content" :style="{ backgroundColor: bgColor }">
    <article>
      <h2 class="title">{{ articleInfo.title }}</h2>
      <h3 class="author">
        <a :href="`https://baike.baidu.com/item/${articleInfo.author}`" target="_blank">{{ articleInfo.author }}</a>
      </h3>
      <!-- 控制面板 -->
      <div class="control-panel">
        <el-button @click="loadArticle" style="width: 80px" type="primary">刷新</el-button>
        <el-select v-model="fontSize" style="width: 80px; margin-left: 6px">
          <el-option label="14px" value="14px" />
          <el-option label="16px" value="16px" />
          <el-option label="18px" value="18px" />
          <el-option label="20px" value="20px" />
          <el-option label="24px" value="24px" />
        </el-select>
        <el-select v-model="bgColor" style="width: 90px; margin-left: 6px">
          <el-option label="银河白" value="#f1f1f1" />
          <el-option label="豆沙绿" value="#c7edcc" />
          <el-option label="杏仁黄" value="#faf9de" />
          <el-option label="秋叶褐" value="#fff2e2" />
          <el-option label="胭脂红" value="#fde6e0" />
          <el-option label="海天蓝" value="#dce2f1" />
        </el-select>
      </div>
      <div v-html="articleInfo.content" class="content" :style="{ fontSize: fontSize }"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const articleInfo = reactive({
  title: '', // 标题
  author: '', // 作者
  content: '', // 正文内容
  wc: 0, // 字数（word count）
})
const fontSize = ref('18px')
const bgColor = ref('#f1f1f1')

async function loadArticle() {
  try {
    const response = await axios.get(`https://interface.meiriyiwen.com/article/random?dev=1`)
    articleInfo.author = response.data.data.author
    articleInfo.title = response.data.data.title
    articleInfo.content = response.data.data.content
    articleInfo.wc = response.data.data.wc
  } catch (error) {
    console.log('error: ', error)
  }
}

loadArticle()
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 10px;
}
.app-content {
  display: grid;
  place-items: center;
  color: #222;
  font-size: 18px;
  article {
    max-width: 750px;

    .title {
      text-align: center;
      letter-spacing: 3px;
      font-size: 18px;
      cursor: pointer;
      font-weight: 500;
    }
    .author {
      margin: 8px 0 10px;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      a {
        color: #07f;
        letter-spacing: 3px;
      }
    }
    .content {
      padding: 10px 0;
      border-top: 1px dashed #ccc;
      border-bottom: 1px dashed #ccc;
    }
  }
}

:deep(p) {
  text-indent: 2em;
  line-height: 1.75;
  &:not(:first-of-type) {
    margin-top: 16px;
  }
}
</style>
