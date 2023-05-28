---
layout: false
---
<script setup>
import { ElMessage, ElLoading } from 'element-plus'
import { ref, onMounted, shallowRef, nextTick, h, reactive, computed } from 'vue'
import _ from 'lodash-es'
const lang = ref('zh-cn')
let aceEditor = '' 
const EReditorRef = ref(null)
const fieldData = ref({})
const logicData = ref('{}')
const store = reactive({
  fields: [],
  layouts: []
})
const loading = ElLoading.service({
  lock: true,
  text: 'Loading'
})
const all = ref([])
const value0 = ref('root')
let erGeneratorData = {}
let erComponentsConfig = {}
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
  const query = queryString.default.parse(location.search)
  lang.value = query.lang || 'zh-cn'
}
if (!import.meta.env.SSR) {
  load()
  // lang.value = localStorage.getItem('er-lang') || 'zh-cn'
}
const erFormConfig = customDefineClientComponent(async () => {
  const ER = await import('everright-formeditor')
  await import ('everright-formeditor/dist/style.css')
  erComponentsConfig = ER.erComponentsConfig
  erGeneratorData = ER.erGeneratorData
  store.fields = [...erComponentsConfig.fieldsConfig[0].list, ...erComponentsConfig.fieldsConfig[1].list].map(e => erGeneratorData(e, true, lang.value))
  const layoutNodes = erComponentsConfig.fieldsConfig[2].list.map(e => erGeneratorData(e, true, lang.value))
  layoutNodes.forEach((node, index) => {
    store.layouts.push(node)
    switch (node.columns[0].type) {
      case 'grid':
      case 'tabs':
      case 'collapse':
        node.columns[0].columns[0].label = `${node.columns[0].label} > ${node.columns[0].columns[0].type}`
        store.layouts.push(node.columns[0].columns[0])
        break
      case 'table':
        node.columns[0].rows[0].columns[0].label = `${node.columns[0].label} > ${node.columns[0].rows[0].columns[0].type}`
        store.layouts.push(node.columns[0].rows[0].columns[0])
        break
    }
  })
  all.value = [...store.fields, ...store.layouts]
  return ER.erFormConfig
}, [
  { ref: EReditorRef }
], () => {
  nextTick(() => {
    loading.close()
    // EReditorRef.value.setData(erData)
  })
})
const sector = computed(() => {
  let result = ''
  if (value0.value === 'root') {
    result = 'root'
  } else {
    result = _.find(all.value, { id: value0.value })
  }
  return result
})
const handleListener = async ({ type, data }) => {
  if (type === 'changeParams') {
    fieldData.value = JSON.stringify(data, '', 2)
  }
  if (/^logic:(cancel|confirm)$/.test(type)) {
    logicData.value = JSON.stringify(data, '', 2)
  }
}
</script>
<ClientOnly>
  <el-container>
    <el-header height="auto">
      <div>
        <h1>Form Attribute</h1>
        <el-radio-group v-model="value0" size="large">
          <el-radio-button label="root">Form Attribute</el-radio-button>
        </el-radio-group>
        <h1>Fields</h1>
        <el-radio-group v-model="value0" size="large">
          <el-radio-button v-for="item in store.fields" :key="item.columns[0].id" :label="item.id">{{item.columns[0].label}}</el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <h1>Layout</h1>
        <el-radio-group v-model="value0" size="large">
          <el-radio-button v-for="item in store.layouts" :key="item.id" :label="item.id">
            {{item.label ? (item.label || item.type) : (item.columns[0].label || item.columns[0].type)}}
          </el-radio-button>
        </el-radio-group>
      </div>
    </el-header>
    <el-container>
      <el-aside width="340px">
        <div class="customConfig">
          <er-form-config
            :lang="lang"
            fileUploadURI="https://api.everright.site/api/file/uploads"
            @listener="handleListener"
            :field="sector"
            :fields="store.fields.map(e => e.columns[0])"
            ref="EReditorRef"/>
        </div>
      </el-aside>
      <el-main>
        <el-input
          v-model="fieldData"
          :rows="value0 === 'root' ? 20 : 40"
          disabled
          type="textarea"
          placeholder="Please input"
        />
        <el-input
          v-if="value0 === 'root'"
          v-model="logicData"
          :rows="value0 === 'root' ? 20 : 40"
          disabled
          type="textarea"
          placeholder="Please input"
        />
      </el-main>
    </el-container>
  </el-container>
</ClientOnly>

<style scoped lang="scss">
.customConfig {
  padding: 10px;
  :deep .Everright-formEditor-Config {
    width: 100%;
  }
}
h1 {
    font-weight:bold;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
}
</style>
