---
outline: deep
---

# linear

## 1.screenshot example
<el-image loading="lazy" :preview-src-list="['/img/linear.png']" src="/img/linear.png"/>

<a href="/demo/filter/linear.html?lang=en" target="_blank">View demo</a>

## 2.type linear code

::: details Click me to view the code
::: code-group
```vue [API mode]
<script setup>
import { ref } from 'vue'
import { EverrightFilter } from 'everright-filter'
import 'everright-filter/dist/style.css'
const ERfilterRef = ref(null)
const lang = ref('zh-cn')
const httpParams = {
  options: {
    url: 'https://api.everright.site/api/filter/options',
    get: { // define get
      query: {
        a: 20
      }
    }
  },
  conditions: {
    url: 'https://api.everright.site/api/filter/conditions',
    get: { // define get
      query: {
        a: 20
      }
    }
  },
  props: {
    url: 'https://api.everright.site/api/filter/props',
    get: { // define get
      query: {
        a: 20
      }
    }
  },
  propValues: {
    url: 'https://api.everright.site/api/filter/propValues',
    get: { // define get
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
      type="linear"
      :httpParams="httpParams"
      @listener="handleListener"
      ref="ERfilterRef"/>
  </div>
</template>
```
```vue [Function mode]
<script setup>
import { ref } from 'vue'
import { EverrightFilter } from 'everright-filter'
import 'everright-filter/dist/style.css'
const ERfilterRef = ref(null)
const lang = ref('zh-cn')
const handleListener = ({ type, data }) => {}
const getOptions = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        options: [],
        operators: {}
      }
    })
  })
}
const getConditions = async (params) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        options: [],
        operators: {}
      }
    })
  })
}
const getProps = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
      }
    })
  })
}
const getPropValues = async (params) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
      }
    })
  })
}
</script>
<template>
  <div>
    <EverrightFilter
      :lang="lang"
      @listener="handleListener"
      :getOptions="getOptions"
      :getConditions="getConditions"
      :getProps="getProps"
      :getPropValues="getPropValues"
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
| setData | Set data | - |
| getData | Get data, internal verification | true\|false Whether to verify |
| pushData | add filter | value | 
| clearData | Clear filter conditions or clear value | - | 

### **Event**
| Name  |      Description      |
| :---- | :-- |
| listener | All events inside the filter are sent through this event, distinguished by type |

type:
- **init**

  trigger rendering end
- **triggerChange**

  trigger change
