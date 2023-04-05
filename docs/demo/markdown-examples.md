---
layout: false
---
<script setup>
import { defineClientComponent } from 'vitepress'
import { ref, onMounted, nextTick } from 'vue'
const lang = ref('zh-cn')
const content = ref('')
const dialogVisible = ref(false)
let ace = '' 
let aceEditor = '' 
const erFormEditor = defineClientComponent(async () => {
  const { erFormEditor } = await import('everright-formeditor')
  await import ('everright-formeditor/dist/style.css')
  return erFormEditor
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
const load = async () => {
  ace = await import('ace-builds')
  const workerJsonUrl = await import('ace-builds/src-noconflict/worker-json?url')
  await import('ace-builds/src-noconflict/theme-chrome')
  await import('ace-builds/src-noconflict/mode-json')
  ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl.default)
}
if (!import.meta.env.SSR) {
  load()
  // onMounted(async () => {
  //   // dialogVisible.value = true
  //   // setTimeout(() => {
  //   // }, 1000)
  // })
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
</ClientOnly>
<er-form-editor
  :lang="lang"
  @listener="handleListener"
/>

<style>
#aceEditor {
  height: 500px;
}
</style>
