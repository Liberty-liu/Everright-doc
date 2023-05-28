---
layout: false
---

<script setup>
import { useData, defineClientComponent } from 'vitepress'
import _ from 'lodash-es'
import { ElLoading } from 'element-plus'
import { inject, ref, nextTick, reactive, computed } from 'vue'
const { page } = useData()
const lang = ref('zh-cn')
const loading = ElLoading.service({
  lock: true,
  text: 'Loading'
})
const demo = defineClientComponent(async () => {
  const queryString = await import('query-string')
  const query = queryString.default.parse(location.search)
  lang.value = query.lang || 'zh-cn'
  return import(`./components/${page.value.params.type}.vue`)
}, [], () => {
  nextTick(() => {
    loading.close()
  })
})
const handleClick = () => {
  window.open(`https://github.com/Liberty-liu/Everright-doc/blob/main/docs/demo/filter/components/${page.value.params.type}.vue`)
}
</script>
<ClientOnly>
  <div style="display: flex; justify-content: center;">
    <button @click="handleClick" class="btn-51">Click to view the demo code</button>
  </div>
</ClientOnly>
<demo :lang="lang"/>

<style>
.btn-51 {
margin: 50px;
display: inline;
}
</style>
