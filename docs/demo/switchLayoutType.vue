<script>
import queryString from 'query-string'
import _ from 'lodash-es'
export default {
  methods: {
    handleCommand: (command) => {
      const urlObj = queryString.parseUrl(location.href)
      urlObj.query.lang = urlObj.query.lang || 'zh-cn'
      let url = ''
      switch (command) {
        case 'Editor1':
          urlObj.query.layoutType = 1
          urlObj.query.isEdit = 1
          break
        case 'Editor2':
          urlObj.query.layoutType = 2
          urlObj.query.isEdit = 1
          break
        case 'Preview1':
          urlObj.query.layoutType = 1
          urlObj.url = urlObj.url.replace('editor', 'preview')
          break
        case 'Preview2':
          urlObj.query.layoutType = 2
          urlObj.url = urlObj.url.replace('editor', 'preview')
          break
      }
      window.open(queryString.stringifyUrl(urlObj))
    }
  }
}
</script>
<template>
<div class="switchLayoutType">
  <el-dropdown @command="handleCommand">
    <el-icon>
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"></path></svg>
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="Editor1">Editor layoutType 1</el-dropdown-item>
        <el-dropdown-item command="Editor2">Editor layoutType 2</el-dropdown-item>
        <el-dropdown-item command="Preview1">Preview layoutType 1</el-dropdown-item>
        <el-dropdown-item command="Preview2">Preview layoutType 2</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>
</template>
<style lang="scss">
.switchLayoutType {
  .el-icon {
    cursor: pointer;
  }
  .el-dropdown {
    :focus {outline: 0;}
  }
}
</style>
