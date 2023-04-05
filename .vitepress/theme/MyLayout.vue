<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, reactive, onUnmounted, inject, watch, nextTick, computed } from 'vue'
import _ from 'lodash-es'
import { useRoute, useRouter, useData, defineClientComponent } from 'vitepress'
const { Layout } = DefaultTheme
const route = useRoute()
const router = useRouter()
const isRender = ref(false)
const fieldId = ref('')
const ER = inject('ER')
const {
  site,
  theme
} = useData()
const all = ref([])
let erComponentsConfig = {}
let erGeneratorData = ''
let erUtils = ''
// const getFieldTypeByUrl = (path) => {
//   let result = path
//   switch (path) {
//     case 'input':
//     case 'email':
//     case 'idNumber':
//     case 'phone':
//     case 'url':
//       result = 'input'
//       break
//   }
//   return result
// }
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
    // console.log(fieldId.value)
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
const renderNavs = (fieldsConfig, erGeneratorData) => {
  // console.log(fieldsConfig)
  let result = []
  // const fields = [...fieldsConfig[0].list, ...fieldsConfig[1].list].map(e => _.lowerCase(erGeneratorData(e, false, 'en').label))
  const fields = [...fieldsConfig[0].list, ...fieldsConfig[1].list].map(e => {
    let label = ''
    if (e.type === 'input') {
      switch (e.options.renderType) {
        case 0:
          label = 'input'
          break
        case 1:
          label = 'email'
          break
        case 2:
          label = 'email'
          break
        case 3:
          label = 'ID number'
          break
        case 4:
          label = 'phone'
          break
        case 5:
          label = 'URL'
          break
      }
    } else {
      label = e.type
    }
    return label
  })
}
const load = async () => {
  const everright =  await import('everright-formeditor')
  erComponentsConfig = everright.erComponentsConfig
  erGeneratorData = everright.erGeneratorData
  erUtils = everright.utils
  watch(() => _.get(route, 'data.params.type', ''), (newVal) => {
    if (!import.meta.env.SSR) {
      if (newVal) {
        fieldId.value = newVal
        nextTick(() => {
          document.querySelector('.aside-container').style.width = '334px'
        })
      } else {
        document.querySelector('.aside-container') && document.querySelector('.aside-container').removeAttribute('style')
      }
    }
    isRender.value = !!newVal
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
}
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <div v-if="isRender">
        <div
          style="margin:0 10px;">
          <er-form-config
            :lang="site.lang"
            @listener="handleListener"
            :field="field"
            ref="EReditorRef"/>
        </div>
      </div>
    </template>
  </Layout>
</template>
