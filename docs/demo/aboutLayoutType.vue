<script>
import { useData, useRoute, useRouter } from 'vitepress'
export default {
  computed: {
    content () {
      const lang = localStorage.getItem('er-lang') || 'zh-cn'
      return `layoutType1: ${lang === 'en' ? 'Layout and field are not separated.' : '布局和字段不分离。'}</br>layoutType2: ${lang === 'en' ? 'Layout and field are separated.' : '布局和字段分离。'}</br>`
    }
  }
}
</script>
<template>
<el-tooltip :content="content" raw-content placement="bottom" effect="light">
  <slot></slot>
</el-tooltip>
</template>
