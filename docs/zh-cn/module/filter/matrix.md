---
outline: deep
---
# matrix

## 1.截图示例
<el-image loading="lazy" :preview-src-list="['/img/matrix.png']" src="/img/matrix.png"/>

## 2.type matrix code

::: details Click me to view the code
```vue
<script setup>
import { ref } from 'vue'
import { EverrightFilter } from 'everright-filter'
import 'everright-filter/dist/style.css'
const ERfilterRef = ref(null)
const lang = ref('zh-cn')
const httpParams = {
  options: {
    url: 'https://api.everright.site/api/filter/options',
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  conditions: {
    url: 'https://api.everright.site/api/filter/conditions',
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  props: {
    url: 'https://api.everright.site/api/filter/props',
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  propValues: {
    url: 'https://api.everright.site/api/filter/propValues',
    get: { // 定义get
      query: {
        a: 50
      }
    }
  }
}
const handleListener = ({ type, data }) => {}
</script>
<template>
  <div>
    <EverrightFilter
      :lang="lang"
      type="matrix"
      :httpParams="httpParams"
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
- **triggerChange**

  触发器变动
