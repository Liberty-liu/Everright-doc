<script>
import queryString from 'query-string'
import _ from 'lodash-es'
export default {
  methods: {
    handleCommand: (command) => {
      const urlObj = queryString.parseUrl(location.href)
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
      <Switch />
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
