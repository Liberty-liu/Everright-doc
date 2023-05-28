---
layout: false
---

<script setup>
import { useData, defineClientComponent } from 'vitepress'
import _ from 'lodash-es'
import { inject, ref, nextTick, reactive } from 'vue'
const { page } = useData()
const lang = ref('zh-cn')
const demo = defineClientComponent(async () => {
  const queryString = await import('query-string')
  const query = queryString.default.parse(location.search)
  lang.value = query.lang || 'zh-cn'
  return import(`./components/${page.value.params.type}.vue`)
})
</script>

<demo :lang="lang"/>
