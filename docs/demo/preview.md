---
layout: false
head:
- - meta
  - name: viewport
    content: width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover
---
<script setup>
import { ElMessage } from 'element-plus'
import { useData, useRoute, useRouter } from 'vitepress'
import { ref, onMounted, shallowRef, nextTick, h } from 'vue'
const lang = ref('zh-cn')
const content = ref('')
const dialogVisible = ref(false)
const layoutType = ref(1)
let ace = '' 
let aceEditor = '' 
const EReditorRef = ref(null)
let erData = {}
let query = {}
const customDefineClientComponent = (loader, handle = [], fn) => {
  return {
    setup() {
      const comp = shallowRef()
      onMounted(async () => {
        let res = await loader()
        if (res && (res.__esModule || res[Symbol.toStringTag] === 'Module')) {
          res = res.default
        }
        comp.value = res
        fn && fn()
      })
      return () => (comp.value ? h(comp.value, ...handle) : null)
    }
  }
}
const erFormPreview = customDefineClientComponent(async () => {
  const queryString = await import('query-string')
  query = queryString.default.parse(location.search)
  if (query.layoutType) {
    layoutType.value = Number(query.layoutType)
  }
  lang.value = query.lang || 'zh-cn'
  const { erFormPreview } = await import('everright-formeditor')
  await import ('everright-formeditor/dist/style.css')
  if (query.layoutType) {
    const { data: { data } } = await import (`./example${query.layoutType}.data.js`)
    erData = data
  }
  return erFormPreview
}, [
  { ref: EReditorRef }
], () => {
  nextTick(() => {
    EReditorRef.value.setData(erData)
  })
})
const handleListener = async ({ type, data }) => {
  switch (type) {
    case 'submit':
      ElMessage({
        message: h('pre', JSON.stringify(data, '', 2))
      })
      break
  }
}
</script>
<er-form-preview
  :layoutType="layoutType"
  :lang="lang"
  @listener="handleListener"
  fileUploadURI="https://api.everright.site/api/file/uploads"
/>
