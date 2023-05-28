---
outline: deep
---
# quick-filter

## 1.截图示例
<el-image loading="lazy" :preview-src-list="['/img/quick-filter.png']" src="/img/quick-filter.png"/>

## 2.type quick-filter code

::: details Click me to view the code
```vue
<script setup>
import { ref } from 'vue'
import { EverrightFilter } from 'everright-filter'
import 'everright-filter/dist/style.css'
const ERfilterRef = ref(null)
const lang = ref('en')
const handleListener = ({ type, data }) => {
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
      :getOptions="getOptions"
      type="quick-filter"
      @listener="handleListener"
      ref="ERfilterRef"/>
  </div>
</template>

```
:::

## **3.API**

### **Attributes**
| 名称        |      类型      |  说明 | 可选值 |  默认值 |
| :---- | :-- | :---- | :---- | :--------- |
| `httpParams`      | Object | 定义筛选器四个接口| - | 参照demo |
| `type`      | String | 定义筛选器类型| - | linear\|matrix\|quick-search\|quick-filter |
| `lang` | String  | i18n | zh-cn\|en | zh-cn |
| `isShowValidateState` | Boolean  | 是否显示校验 | true\|false | true |
| `ruleLimit` | Number  | 定义筛选条件个数 | - | -1 |
| `getOptions` | Function  | 定义API options数据 | - | - |
| `getConditions` | Function  | 定义API conditions数据 | - | - |
| `getProps` | Function  | 定义API props数据 | - | - |
| `getPropValues` | Function  | 定义API propValues数据 | - | - |

### **Exposes**

| 名称  | 说明| 参数|
| :---- | :-- | :-- |
| setData | 设置数据 | - |
| getData | 获取数据，内部会校验 | true\|false 是否校验 |
| clearData | 清空筛选条件或者清空value | - |

### **Event**
| 事件名称  |      说明      |
| :---- | :-- |
| listener | 筛选器内部所有事件都通过该事件发送，根据type区分 |

type:
- **init**

  触发器渲染结束

