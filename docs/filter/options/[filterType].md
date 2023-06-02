<script setup>
import { useData, defineClientComponent } from 'vitepress'
import _ from 'lodash-es'
import { inject, ref, nextTick, reactive } from 'vue'
import { data } from '../../../.vitepress/data/example.data.js'
const { page } = useData()
const host = process.env.NODE_ENV === 'production' ? 'https://api.everright.site' : 'http://localhost:8001'
const ERfilterRef = ref(null)
const ER = inject('ER')
let filterId = ''
const state = reactive({
  option: {},
  operators: [],
  result: {}
})
const findDataByid = (data, id) => {
  const result = {
    option: {},
    operators: []
  }
  data.options.forEach(e => {
    const findData = _.find(e.children, { value: id })
    if(!_.isEmpty(findData)) {
      result.option = findData
      result.operators = data.operators[findData.operatorKey]
    }
  })
  return result
}
const getOptions = async () => new Promise((resolve, reject) => {
  if (_.isEmpty(ER.filterData.option)) {
    const {
      option,
      operators
    } = findDataByid(data, page.value.params.filterType)
    ER.filterData.option = _.cloneDeep(option)
    ER.filterData.operators = _.cloneDeep(operators)
  }
  const result = {
    options: [ER.filterData.option],
    operators:{}
  }
  result.operators = data.operators
  if (!_.isEmpty(_.find(ER.filterData.option.constraint, { type: 'times'}))) {
    ER.filterData.TimesOperators = result.operators.TimesOperators = data.operators.TimesOperators
  } else {
    const timesOperatorsData = document.querySelector('#times-operators-data')
    const Constraint = document.querySelector('#constraint')
    Constraint.style.display = Constraint.nextElementSibling.style.display = timesOperatorsData.style.display = timesOperatorsData.nextElementSibling.style.display = 'none'
  }
  resolve({
    data: _.cloneDeep(result)
  })
})
nextTick(() => {
  if (!import.meta.env.SSR) {
    const datepanel = document.querySelector('#datepanel')
    if (!/Date/.test(page.value.params.filterType)) {
      datepanel.style.display = datepanel.nextElementSibling.style.display = 'none'
    }
  }
})
const httpParams = {
  conditions: {
    url: `${host}/api/filter/conditions`,
    get: {
      query: {
        a: 20
      }
    }
  },
  props: {
    url: `${host}/api/filter/props`,
    get: {
      query: {
        a: 20
      }
    }
  },
  propValues: {
    url: `${host}/api/filter/propValues`,
    get: {
      query: {
        a: 50
      }
    }
  }
}
const EverrightFilter = defineClientComponent(async () => {
  const { EverrightFilter } = await import('everright-filter')
  await import ('everright-filter/dist/style.css')
  return EverrightFilter
}, [
  {
    ref: ERfilterRef
  }
], () => {
  nextTick(() => {
  })
})
const handelClick = () => {
  state.result = ERfilterRef.value.getData()
}

const handleListener = ({ type, data }) => {
  if (type === 'init') {
    ERfilterRef.value.pushData(page.value.params.filterType)
  }
}
</script>

::: tip
操作右侧的配置面板进行定义筛选器，点击按钮即可生效。
:::

<div class="customFilter">
  <EverrightFilter
    v-if="ER.filterData.isRender"
    @listener="handleListener"
    :getOptions="getOptions"
    :httpParams="httpParams"
    :ruleLimit="1"
  />
<el-button @click="handelClick" type="primary">Generate filter statement data</el-button>
</div>

### Trigger data

``` json-vue
  {{ER.filterData.option}}
  ```


### Filter statement data

  ``` json-vue
  {{state.result}}
  ```


### Operator data

::: details Click me to view the code
  ``` json-vue
  {{ER.filterData.operators}}
  ```
:::


### Times operators data

::: details Click me to view the code
  ``` json-vue
  {{ER.filterData.TimesOperators}}
  ```
:::

### Attributes
| 名称  | 说明| 参数|
| :---- | :---- | :-- |
| renderType | 配置UI类型 | CASCADER,SELECT,REGION,TEXT,NUMBER,TIME,DATE,NONE |
| operatorKey | 操作符id，定义操作符数据 | - |
| excludeOperator or includeOperator | 排除或者包含操作符和日期操作符 | <ClientOnly><el-tooltip content="{dateOperator: ['date', 'year', 'month', 'day'], operator: []}" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> |



### Constraint

``` json
{
  "type": "times" // 限制次数
},
{
  "type": "date", // 起止时间
  "datePanel": {
  }
},
{
  "type": "props" // 限制属性
}
```

### datePanel

| 名称  | 说明| 可选值| 默认值|
| :---- | :---- | :-- | :-- |
| manualType | 定义手动相对日期（天or时） |1 = days 2 = hours 3 = can choose the hours or days | 3|
| pickerType | 定义date-picker type 请查看 [element-plus date-picker type](https://element-plus.gitee.io/en-US/component/date-picker.html#attributes) | ['date', 'dates', 'dates', 'datetime', 'daterange'] | date |
| excludeShortcuts | 排除快捷选项 | <ClientOnly><el-tooltip content="{today_today: '今日',today_thisWeek: '本周',today_thisMonth: '本月',today_thisYear: '今年',yesterday_onlineToday: '上线至今',yesterday_yesterday: '昨日',yesterday_lastWeek: '上周',yesterday_lastMonth: '上月',yesterday_lastYear: '去年',}" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> | - |
| excludeManuals | 排除手动相对日期 | <ClientOnly><el-tooltip content="['intervalBefore', 'afterBefore', 'erenowBefore', 'intervalBetween']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> | - |

### Association graph

<el-image style="margin: 16px 0;" loading="lazy" :preview-src-list="['/img/filterAssociated.jpg']" src="/img/filterAssociated.jpg"/>

<style scoped lang="scss">
.customFilter {
 :deep {
    .Everright-filter-Main {
      padding: 0;
    }
    .Everright-filter-FilterItem {
      padding: 0px 0px 10px;
      background: none;
    }
    .Everright-filter-FilterRule {
      border:none;
    }
    .Everright-filter-OperatorComponent__width {
      width: 120px;
    }
    .Everright-filter-TriggerComponent,.Everright-filter-TextType__width,.Everright-filter-SelectType__width,.Everright-filter-RegionType__width {
      width: 200px !important;
    }
    .Everright-filter-NumberType__width {
      width: 150px;
    }
 }
}
</style>
