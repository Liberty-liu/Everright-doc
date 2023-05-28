<script setup>
import { ref, reactive, unref, defineProps } from 'vue'
import { EverrightFilter } from 'everright-filter'
import 'everright-filter/dist/style.css'
const props = defineProps({
  lang: {
    type: String,
    default: 'zh-cn'
  }
})
const ERfilterRef = ref(null)
const state = reactive({
  value0: {}
})
const httpParams = {
  options: {
    url: 'http://localhost:8001/api/filter/options',
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  conditions: {
    url: 'http://localhost:8001/api/filter/conditions',
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  props: {
    url: 'http://localhost:8001/api/filter/props',
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  propValues: {
    url: 'http://localhost:8001/api/filter/propValues',
    get: { // 定义get
      query: {
        a: 50
      }
    }
  }
}
const handleListener = ({ type, data }) => {
  if (type === 'init') {
    handleEvent(1)
  }
}
const handleEvent = (type) => {
  switch (type) {
    case 1:
      unref(ERfilterRef).setData({
          "filters": [
            {
              "conditions": [
                {
                  "operator": "one_of",
                  "property": "region",
                  "value": [
                    "110101",
                    "110111"
                  ]
                },
                {
                  "operator": "equal",
                  "property": "text",
                  "value": "123"
                },
                {
                  "operator": "equal",
                  "property": "rating",
                  "value": 123
                },
                {
                  "operator": "equal",
                  "property": "time0",
                  "value": "16:30"
                },
                {
                  "operator": "equal",
                  "property": "time1",
                  "value": "16:30:49"
                },
                {
                  "operator": "equal",
                  "property": "Date0",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "dynamic",
                    "dateFrom": "- 0 days",
                    "dateTo": "- 0 days"
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date1",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "dynamic",
                    "dateFrom": "- 0 weeks",
                    "dateTo": "- 0 weeks"
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date2",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "dynamic",
                    "dateFrom": "- 0 months",
                    "dateTo": "- 0 months"
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date3",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "dynamic",
                    "dateFrom": "- 0 years",
                    "dateTo": "- 0 years"
                  }
                },
                {
                  "operator": "not_equal",
                  "property": "Date4",
                  "dateOperator": "day",
                  "value": 31
                },
                {
                  "operator": "equal",
                  "property": "Date5",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "static",
                    "value": "1680537600"
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date6",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "static",
                    "value": [
                      "1683475200",
                      "1683648000"
                    ]
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date7",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "static",
                    "value": "1683616414"
                  }
                }
              ],
              "logicalOperator": "or"
            },
            {
              "conditions": [
                {
                  "property": "Gende111r",
                  "constraint": {
                    "date": {
                      "dateType": "dynamic",
                      "dateFrom": "- 1 years",
                      "dateTo": "- 1 years"
                    },
                    "times": {
                      "operator": "between",
                      "value": [
                        12,
                        22
                      ]
                    },
                    "props": [
                      {
                        "operator": "equal",
                        "property": "Gender",
                        "value": "1"
                      },
                      {
                        "operator": "between",
                        "property": "rating",
                        "value": [
                          10,
                          99
                        ]
                      }
                    ]
                  }
                },
                {
                  "property": "Gende111r0",
                  "constraint": {
                    "date": {
                      "dateType": "static",
                      "value": [
                        "1679328000",
                        "1679587200"
                      ]
                    }
                  }
                }
              ],
              "logicalOperator": "or"
            },
            {
              "conditions": [
                {
                  "operator": "equal",
                  "property": "cascader01",
                  "value": "name#####any"
                },
                {
                  "operator": "one_of",
                  "property": "cascader01",
                  "value": [
                    "name"
                  ]
                },
                {
                  "operator": "equal",
                  "property": "cascader02",
                  "value": [
                    "name#####153218"
                  ]
                }
              ],
              "logicalOperator": "and"
            }
          ],
          "logicalOperator": "and"
        }

      )
      break
    case 2:
      unref(ERfilterRef).clearData()
      break
    case 3:
      state.value0 = unref(ERfilterRef).getData()
      break
    case 4:
      unref(ERfilterRef).pushData('Gender11111')
      break
    case 5:
      unref(ERfilterRef).clearData('values')
      break
    case 6:
      break
  }
}
</script>
<template>
  <div>
    <EverrightFilter
      :lang="props.lang"
      type="matrix"
      :httpParams="httpParams"
      @listener="handleListener"
      ref="ERfilterRef"/>
    <el-button @click="() => handleEvent(1)" type="primary">Set Data</el-button>
    <el-button @click="() => handleEvent(2)" type="primary">Reset Data</el-button>
    <el-button @click="() => handleEvent(5)" type="primary">Clear Data</el-button>
    <el-button @click="() => handleEvent(3)" type="primary">Get Data</el-button>
    <el-input
      type="textarea"
      readonly
      :rows="15"
      :model-value="JSON.stringify(state.value0, '', 2)"
    />
  </div>
</template>
