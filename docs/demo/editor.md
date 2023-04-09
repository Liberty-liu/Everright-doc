---
layout: false
---
<script setup>
import { useData, useRoute, useRouter } from 'vitepress'
import { ref, onMounted, shallowRef, nextTick, h, resolveComponent } from 'vue'
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
const load = async () => {
  const queryString = await import('query-string')
  query = queryString.default.parse(location.search)
  if (query.layoutType) {
    layoutType.value = Number(query.layoutType)
  }
  lang.value = query.lang || 'zh-cn'
  ace = await import('ace-builds')
  const workerJsonUrl = await import('ace-builds/src-noconflict/worker-json?url')
  await import('ace-builds/src-noconflict/theme-chrome')
  await import('ace-builds/src-noconflict/mode-json')
  ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl.default)
}
if (!import.meta.env.SSR) {
  load()
  // lang.value = localStorage.getItem('er-lang') || 'zh-cn'
}
let switchLayoutType = ''
let aboutLayoutType = ''
const erFormEditor = customDefineClientComponent(async () => {
  const { erFormEditor } = await import('everright-formeditor')
  switchLayoutType = await import('./switchLayoutType.vue')
  aboutLayoutType = await import('./aboutLayoutType.vue')
  await import ('everright-formeditor/dist/style.css')
  if (query.isEdit === '1' && query.layoutType) {
    const { data: { data } } = await import (`./example${query.layoutType}.data.js`)
    erData = data
  }
  return erFormEditor
}, [
  { ref: EReditorRef },
  {
    // 'operation-left': () => [h(switchLayoutType.default), h('span', { class: 'layoutType' }, `layoutType: ${layoutType.value}`)]
    'operation-left': () => [h(switchLayoutType.default), h(aboutLayoutType.default, () => h('span', { class: 'layoutType' }, `layoutType: ${layoutType.value}`))]
  }
], () => {
  nextTick(() => {
    EReditorRef.value.setData(erData)
  })
})
const handleListener = async ({ type, data }) => {
  switch (type) {
    case 'lang':
      lang.value = data
      break
    case 'save':
      dialogVisible.value = true
      nextTick(() => {
        if (!aceEditor) {
          aceEditor = ace.edit("aceEditor", {
            mode: 'ace/mode/json',
            theme: 'ace/theme/chrome'
          })
        }
        aceEditor.setReadOnly(true)
        aceEditor.setValue(JSON.stringify(data, '', 2))
      })
      break
  }
}
</script>
<ClientOnly>
  <el-dialog
    v-model="dialogVisible"
    width="60%"
    title="JSON"
    append-to-body
    >
    <div>
      <pre id="aceEditor"></pre>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Close</el-button>
      </span>
    </template>
  </el-dialog>
  <er-form-editor
    :layoutType="layoutType"
    :lang="lang"
    fileUploadURI="https://api.everright.site/api/file/uploads"
    @listener="handleListener"
  />
</ClientOnly>

<style>
#aceEditor {
  height: 500px;
}
.layoutType {
  font-size: 14px;
  padding-left: 10px; 
  color: red;
}
.Everright-formEditor-Main__operation>div:first-child>* {
  display: inline-flex;
}
</style>
