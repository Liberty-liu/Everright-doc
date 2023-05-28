---
outline: deep
---
# erFormConfig

Everright-formEditor内部抛出三个组件分别适应不同的业务场景，erFormConfig属性面板可以单独使用，例如需要直接新增或编辑字段属性时，可以使用erFormConfig属性面板来进行操作。这样可以方便地进行单独的字段属性编辑，而无需进入整个表单编辑器。

- 新增字段场景:
  erGeneratorData(field, true, lang)生成所要创建的数据
- 编辑字段场景:
  传入field

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
    :deep .Everright-formEditor-Config {
      width: 100%;
    }
  }
</style>

  ```
:::

## **API**

### **Attributes**
| 名称        |      类型      |  说明 | 可选值 |  默认值 |  必填 |
| :---- | :-- | :---- | :---- | :--------- | :--------- |
| `lang` | String  | i18n | zh-cn\|en | zh-cn | - |
| `fileUploadURI` | String  | 图片、文件上传接口 | - | - | - |
| `isShowCompleteButton` | Boolean  | 是否在表单配置显示提交按钮配置选项 | true\|false  | true | - |
| `field` | Object  | 配置字段数据 | -  | - | true |
| `fields` | Array  | 逻辑控制器内部的筛选器用到的数据 | -  | - | - |

### **Event**
| 事件名称  |      说明      |
| :---- | :-- |
| listener | 编辑器内部所有事件都通过该事件发送，根据type区分 |

type:
- **changeParams**

  数据变动事件
- **logic:cancel**

  逻辑控制弹框确认事件
- **logic:confirm**

  逻辑控制关闭弹框事件
