<script setup>
import { ref, reactive, onUnmounted, inject, watch, nextTick, computed } from 'vue'
import _ from 'lodash-es'
import { useRoute, useRouter, useData, defineClientComponent } from 'vitepress'
const ER = inject('ER')
const {
  site,
  theme,
  lang
} = useData()
const route = useRoute()
const all = ref([])
const fieldId = ref('')
const isRenderConfigPanel = ref(false)
let erComponentsConfig = {}
let erGeneratorData = ''
let erUtils = ''
const findDataByurl = (path) => {
  let result = ''
  const {
    fieldsConfig
  } = erComponentsConfig
  const fileds = [...fieldsConfig[0].list, ...fieldsConfig[1].list]
  const layouts = [...fieldsConfig[2].list]
  switch (path) {
    case 'input':
      result = _.find(fileds, {
        type: 'input',
        options: {
          renderType: 1
        }
      })
      break
    case 'email':
      result = _.find(fileds, {
        type: 'input',
        options: {
          renderType: 2
        }
      })
      break
    case 'idNumber':
      result = _.find(fileds, {
        type: 'input',
        options: {
          renderType: 3
        }
      })
      break
    case 'phone':
      result = _.find(fileds, {
        type: 'input',
        options: {
          renderType: 4
        }
      })
      break
    case 'url':
      result = _.find(fileds, {
        type: 'input',
        options: {
          renderType: 5
        }
      })
      break
    default:
      if (erUtils.checkIsField({
        type: path
      })) {
        result = _.find(fileds, { type: path })
      } else {
        result = _.find(layouts, { type: path.includes('>') ? path.split('>')[0] : path })
      }
  }
  return erGeneratorData(result, true, site.value.lang)
}
const fields = computed(() => {
  const {
    fieldsConfig
  } = erComponentsConfig
  return [...fieldsConfig[0].list, ...fieldsConfig[1].list].map(e => {
    const result = erGeneratorData(e, true, site.value.lang)
    if (/^(radio|cascader|checkbox|select)$/.test(e.type)) {
      result.columns[0].options.data = erUtils.generateOptions(3).map((e, i) => {
        e.label += i + 1
        return e
      })
    }
    return result
  })
})
const store = reactive({
  fields: [],
  layouts: []
})
const field = computed(() => {
  let result = ''
  if (fieldId.value === 'root') {
    result = 'root'
  } else {
    const data = findDataByurl(fieldId.value)
    if (fieldId.value.includes('>')) {
      switch (fieldId.value.split('>')[0]) {
        case 'grid':
        case 'tabs':
        case 'collapse':
          result = data.columns[0].columns[0]
          break
        case 'table':
          result = data.columns[0].rows[0].columns[0]
          break
      }
    } else {
      result = data
    }
  }
  return result
})
const load = async () => {
  const everright =  await import('everright-formeditor')
  erComponentsConfig = everright.erComponentsConfig
  erGeneratorData = everright.erGeneratorData
  erUtils = everright.utils
  // watch(() => _.get(route, 'data.params.type', ''), (newVal) => {
  watch(route, (newVal) => {
    if (!import.meta.env.SSR) {
      if (_.get(newVal, 'data.params.type', false)) {
        fieldId.value = _.get(newVal, 'data.params.type', false)
        isRenderConfigPanel.value = true
        nextTick(() => {
          document.querySelector('.aside-container').style.width = '334px'
        })
      } else {
        document.querySelector('.aside-container') && document.querySelector('.aside-container').removeAttribute('style')
        isRenderConfigPanel.value = false
      }
    }
  }, { immediate: true })
}
if (!import.meta.env.SSR) {
  load()
}
const erFormConfig = defineClientComponent(async () => {
  const {
    erFormConfig
  } = await import('everright-formeditor')
  await import ('everright-formeditor/dist/style.css')
  return erFormConfig
})
const handleListener = async ({ type, data }) => {
  if (type === 'changeParams') {
    ER.field = data
  }
  if (/^logic:(cancel|confirm)$/.test(type)) {
    ER.logic.value = data
  }
}
</script>
<template>
  <div v-if="isRenderConfigPanel">
    <er-form-config
      :lang="site.lang"
      @listener="handleListener"
      :field="field"
      :fields="fields.map(e => e.columns[0])"
      fileUploadURI="https://api.everright.site/api/file/uploads"
      ref="EReditorRef"/>
  </div>
</template>
