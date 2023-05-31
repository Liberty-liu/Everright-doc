---
outline: deep
---
# quick-search

## 1.screenshot example
<el-image loading="lazy" :preview-src-list="['/img/quick-search.png']" src="/img/quick-search.png"/>

<a href="/demo/filter/quick-search.html?lang=en" target="_blank">View demo</a>

## 2.type quick-search code

::: details Click me to view the code
```vue
<script setup>
import { ref } from 'vue'
import { EverrightFilter } from 'everright-filter'
import 'everright-filter/dist/style.css'
const ERfilterRef = ref(null)
const lang = ref('zh-cn')
const handleListener = ({ type, data }) => {
  if (type === 'search') {
    console.log(ERfilterRef.value.getData(false))
  }
}
const getOptions = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        options: [
          {
            label: '客户名称',
            en_label: 'Customer name',
            value: 'input_NYF_NaWIL1ezQeje19fO5',
            operatorKey: 'input',
            renderType: 'TEXT',
            includeOperator: {
              operator: [
                'contains'
              ]
            }
          },
          {
            label: '客户编号',
            en_label: 'Customer ID',
            value: 'input_4FbXNPc1ValSmbVZ4X03i',
            operatorKey: 'input',
            renderType: 'TEXT',
            includeOperator: {
              operator: [
                'contains'
              ]
            }
          },
          {
            label: '富文本编辑器',
            en_label: 'rich text editor',
            value: 'html_doavWMEKsA04CBVc2qkvB',
            operatorKey: 'input',
            renderType: 'TEXT',
            includeOperator: {
              operator: [
                'contains'
              ]
            }
          }
        ],
        operators: {
          input: [
            {
              value: 'contains',
              style: 'noop'
            }
          ]
        }
      }
    })
  })
}
</script>
<template>
  <div>
    <EverrightFilter
      :lang="lang"
      :isShowValidateState="false"
      :getOptions="getOptions"
      type="quick-search"
      @listener="handleListener"
      ref="ERfilterRef"/>
  </div>
</template>
```
:::

## **3.API**

### **Attributes**
| Name        |      Type      |  Description | Accepted Values |  Default |
| :---- | :-- | :---- | :---- | :--------- |
| `httpParams`      | Object | Define filter four interfaces| - | Refer to the demo |
| `type`      | String | Define filter type| - | linear\|matrix\|quick-search\|quick-filter |
| `lang` | String  | i18n | zh-cn\|en | zh-cn |
| `isShowValidateState` | Boolean  | Whether to display the verification | true\|false | true |
| `ruleLimit` | Number  | Define the number of filter conditions | - | -1 |
| `getOptions` | Function  | Define API options data | - | - |
| `getConditions` | Function  | Define API conditions data | - | - |
| `getProps` | Function  | Define API props data | - | - |
| `getPropValues` | Function  | Define API propValues data | - | - |

### **Exposes**

| Name  | Description| Parameters|
| :---- | :-- | :-- |
| getData | Get data, internal verification | true\|false Whether to verify |
| clearData | Clear filter conditions or clear value | - |

### **Event**
| Name  |      Description      |
| :---- | :-- |
| listener | All events inside the filter are sent through this event, distinguished by type |

type:
- **init**

  trigger rendering end
- **search**

  search event

