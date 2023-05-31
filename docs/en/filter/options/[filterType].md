<script setup>
import { useData, defineClientComponent } from 'vitepress'
import _ from 'lodash-es'
import { inject, ref, nextTick, reactive } from 'vue'
import { data } from '../../../../.vitepress/data/example.data.js'
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
Operate the configuration panel on the right to define the filter, and click the button to take effect.
:::

<div class="customFilter">
  <EverrightFilter
    lang="en"
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
| Name  | Description| Parameters|
| :---- | :---- | :-- |
| renderType | Configure the UI type | CASCADER,SELECT,REGION,TEXT,NUMBER,TIME,DATE,NONE |
| operatorKey | operator id, defines operator data | - |
| excludeOperator or includeOperator | Exclude or include operators and date operators | <ClientOnly><el-tooltip content="{dateOperator: ['date', 'year', 'month', 'day'], operator: []}" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> |



### Constraint

``` json
{
  "type": "times" // Limit Times
},
{
  "type": "date", // Duration
  "datePanel": { 
  }
},
{
  "type": "props" // Limit Attributes
}
```

### datePanel

| Name  | Description| Accepted Values| Default|
| :---- | :---- | :-- | :-- |
| manualType | Define a manual relative date (day or hour) |1 = days 2 = hours 3 = can choose the hours or days | 3|
| pickerType | Define date-picker type please check [element-plus date-picker type](https://element-plus.gitee.io/en-US/component/date-picker.html#attributes) | ['date', 'dates', 'dates', 'datetime', 'daterange'] | date |
| excludeShortcuts | Exclude shortcut options | <ClientOnly><el-tooltip content="{today_today: 'Today',today_thisWeek: 'This Week',today_thisMonth: 'This Month',today_thisYear: 'This Year',yesterday_onlineToday: 'Released So Far',yesterday_yesterday: 'Yesterday',yesterday_lastWeek: 'Last Week',yesterday_lastMonth: 'Last Month',yesterday_lastYear: 'Last Year',}" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> | - |
| excludeManuals | Exclude manual relative dates | <ClientOnly><el-tooltip content="['intervalBefore', 'afterBefore', 'erenowBefore', 'intervalBetween']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> | - |

### Association graph

<el-image style="margin: 16px 0;" loading="lazy" :preview-src-list="['/img/filterAssociated.png']" src="/img/filterAssociated.png"/>

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
