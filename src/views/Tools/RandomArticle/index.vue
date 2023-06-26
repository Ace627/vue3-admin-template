<template>
  <div class="app-content">
    <article>
      <h2 @click="loadArticle" class="title">{{ articleInfo.title }}</h2>
      <h3 class="author">
        <a :href="`https://baike.baidu.com/item/${articleInfo.author}`" target="_blank">{{ articleInfo.author }}</a>
      </h3>
      <div v-html="articleInfo.content" class="content"></div>
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
    }
    .author {
      margin: 8px 0 10px;
      text-align: center;
      font-size: 14px;
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
