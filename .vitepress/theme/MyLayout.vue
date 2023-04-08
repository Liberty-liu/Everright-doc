<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, reactive, onUnmounted, inject, watch, nextTick, computed } from 'vue'
import _ from 'lodash-es'
import { useRoute, useRouter, useData, defineClientComponent } from 'vitepress'
const { Layout } = DefaultTheme
const route = useRoute()
const router = useRouter()
const isRenderConfigPanel = ref(false)
const isRenderDemo = ref(false)
const fieldId = ref('')
const ER = inject('ER')
const {
  site,
  theme,
  lang
} = useData()
const all = ref([])
let erComponentsConfig = {}
let erGeneratorData = ''
let erUtils = ''
const formEditorHomeRe = /(en|zh-cn)+(\/module\/formEditor\/introduction.html){1}/
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
  let result = []
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
watch(route, (newVal) => {
  isRenderDemo.value = formEditorHomeRe.test(newVal.path)
}, { immediate: true })
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
      <div v-if="isRenderConfigPanel">
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
    <template #home-features-before>
      <div :class="['demo', lang === 'en' && 'demo_en']" v-if="isRenderDemo">
        <ul class="container">
          <li class="item">
            <el-card shadow="never">
              <el-image :preview-src-list="['/img/demo0.png']" style="width: 100%; height: 260px;" src="/img/demo0.png"/>
              <h3>Editor</h3>
              <p>
                layoutType1<br>
                {{lang === 'en' ? 'Fields and layout not separated' : '字段与布局不分离'}}
              </p>
              <a href="/demo/editor.html?layoutType=1&isEdit=1" target="_blank">Demo</a>
            </el-card>
          </li>
          <li class="item">
            <el-card shadow="never">
              <el-image :preview-src-list="['/img/demo0.png']" style="width: 100%; height: 260px;" src="/img/demo0.png"/>
              <h3>Editor</h3>
              <p>
                layoutType2<br>
                {{lang === 'en' ? 'Fields and layout separated' : '字段与布局分离'}}
              </p>
              <a href="/demo/editor.html?layoutType=2&isEdit=1" target="_blank">Demo</a>
            </el-card>
          </li>
          <li class="item">
            <el-card shadow="never">
              <el-image :preview-src-list="['/img/demo1.png']" style="width: 100%; height: 260px;" src="/img/demo1.png"/>
              <h3>Preview</h3>
              <p>
                layoutType1<br>
                {{lang === 'en' ? 'Fields and layout not separated' : '字段与布局不分离'}}
              </p>
              <a href="/demo/preview.html?layoutType=1" target="_blank">Demo</a>
            </el-card>
          </li>
          <li class="item">
            <el-card shadow="never">
              <el-image fit="contain" :preview-src-list="['/img/configPanel.png']" style="width: 100%; height: 260px;" src="/img/configPanel.png"/>
              <h3>Config panel</h3>
              <p>
                {{lang === 'en' ? 'Various properties for displaying and editing form fields are provided, including basic information, types, layouts, and so on.' : '用于展示和编辑表单字段的各种属性，包括基础信息、类型、布局等等。'}}
              </p>
              <a href="/demo/formEditorConfig.html" target="_blank">Demo</a>
            </el-card>
          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>
<style lang="scss" scoped>
.demo {
  &.demo_en {
    ::v-deep .el-card {
      height: 500px !important;
    }
  }
  position: relative;
  padding: 0 24px;
  .container {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    margin: 0 auto 40px;
    max-width: 1152px;
  }
  .item {
    padding: 8px;
    width: 100%;
    ::v-deep .el-card {
      height: 460px;
      border: 1px solid #dcdfe6;
      border-radius: 5px;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      transition: all .3s ease-in-out;
      bottom: 0;
      &:hover {
        bottom: 6px;
        box-shadow: 0 12px 32px 4px #edeff53d, 0 8px 20px #edeff57a;
      }
      h3 {
        text-align: center;
        font-size: 18px;
        font-weight: 400;
      }
      p {
        margin: 16px 0;
        font-size: 14px;
        color: #99a9bf;
        padding: 0 25px;
        line-height: 20px;
      }
      a {
        height: 53px;
        line-height: 52px;
        font-size: 14px;
        color: var(--vp-c-text-1);
        text-align: center;
        border: 0;
        border-top: 1px solid #dcdfe6;
        padding: 0;
        cursor: pointer;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--bg-color);
        border-radius: 0 0 5px 5px;
        transition: all .3s;
        text-decoration: none;
        display: block;
        &:hover {
          color: #fff;
          background: var(--vp-button-brand-bg);
        }
      }
    }
  }
  @media (min-width: 640px) {
    .demo {
      padding: 0 48px;
    }
  }

  @media (min-width: 960px) {
    .demo {
      padding: 0 64px;
    }
  }
  @media (min-width: 640px) {
    .item {
      width: calc(100% / 2);
    }
  }

  @media (min-width: 768px) {
    .item {
      width: calc(100% / 2);
    }

    //.item.grid-3,
    //.item.grid-6 {
    //  width: calc(100% / 3);
    //}
  }

  @media (min-width: 960px) {
    .item {
      width: calc(100% / 4);
    }
  }
}
</style>
