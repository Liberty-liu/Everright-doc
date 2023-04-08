---
outline: deep
---
# erFormConfig

Everright-formEditor has three internal components that are suitable for different business scenarios. The erFormConfig property panel can be used separately, for example, when it is necessary to directly add or edit field properties, the erFormConfig property panel can be used for operation. This makes it easy to edit individual field properties without entering the entire form editor.

- Add field scene:
  erGeneratorData(field, true, lang)Generate the data to be created.
- Edit field scene:
  Passing in the field

## **Example**

::: details Click me to view the code
  ```html
  <script setup>
  import _ from 'lodash-es'
  import { ref, onMounted, getCurrentInstance, reactive, computed, inject, watch } from 'vue'
  import { erFormConfig, erGeneratorData, erComponentsConfig, utils } from 'everright-formeditor'
  const {
    lang
  } = inject('globalConfig')
  const EReditorRef = ref(null)
  const store = reactive({
    fields: [],
    layouts: []
  })
  const fieldData = ref({})
  const all = ref([])
  watch(lang, (newLang) => {
    all.value = []
    store.layouts = []
    store.fields = [...erComponentsConfig.fieldsConfig[0].list, ...erComponentsConfig.fieldsConfig[1].list].map(e => erGeneratorData(e, true, newLang))
    const layoutNodes = erComponentsConfig.fieldsConfig[2].list.map(e => erGeneratorData(e, true, newLang))
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
  }, { immediate: true })
  // const value0 = ref('root')
  // const value0 = ref(store.layouts[8].id)
  const value0 = ref(store.fields[17].id)
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
  }
</script>
<template>
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
            @listener="handleListener"
            :field="sector"
            ref="EReditorRef"/>
        </div>
      </el-aside>
      <el-main>
        <el-input
          v-model="fieldData"
          :rows="40"
          disabled
          type="textarea"
          placeholder="Please input"
        />
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="scss">
  .customConfig {
    padding: 10px;
    ::v-deep .Everright-formEditor-Config {
      width: 100%;
    }
  }
</style>

  ```
:::

## **API**

### **Attributes**
| Name        |      Type      |  Description | Accepted Values |  Default |  Required |
| :---- | :-- | :---- | :---- | :--------- | :--------- |
| `lang` | String  | i18n | zh-cn\|en | zh-cn | - |
| `fileUploadURI` | String  | Image and file upload URL | - | - | - |
| `isShowCompleteButton` | Boolean  | Whether to display the option to configure the submit button in the form settings | true\|false  | true | - |
| `field` | Object  | Configuration field data | -  | - | true |

### **Event**
| Name  |      Description      |
| :---- | :-- |
| listener | All events within the editor are sent through this event, differentiated by type |

type:
- **changeParams**

  Selection data has changed
