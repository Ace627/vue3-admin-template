<template>
  <el-drawer v-model="showSetting" size="260px" :with-header="false">
    <slot></slot>
  </el-drawer>
</template>

<script setup lang="ts">
const settingStore = useSetting()
const { showSetting } = storeToRefs(settingStore)
</script>

<style lang="scss" scoped></style>
