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
const host = process.env.NODE_ENV === 'production' ? 'https://api.everright.site' : 'http://localhost:8001'
const httpParams = {
  conditions: {
    url: `${host}/api/filter/conditions`,
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  props: {
    url: `${host}/api/filter/props`,
    get: { // 定义get
      query: {
        a: 20
      }
    }
  },
  propValues: {
    url: `${host}/api/filter/propValues`,
    get: { // 定义get
      query: {
        a: 50
      }
    }
  }
}
const getOptions = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        "options": [
          {
            "label": "属性",
            "value": "customer",
            "children": [
              {
                "label": "级联(单选)",
                "en_label": 'cascader(multiple = false)',
                "renderType": "CASCADER",
                "operatorKey": "Gender",
                "value": "cascader01"
              },
              {
                "label": "级联(多选禁用子级)",
                "en_label": 'cascader(Multi-select disabled children)',
                "renderType": "CASCADER",
                "operatorKey": "Gender",
                "value": "cascader02",
                "multiple": true
              },
              {
                "label": "下拉(multipleLimit = 2)",
                "en_label": "select (multipleLimit = 2)",
                "renderType": "SELECT",
                "operatorKey": "Gender",
                "value": "Gender",
                "multiple": true,
                "multipleLimit": 2
              },
              {
                "label": "下拉(multiple = false)",
                "en_label": "select(multiple = false)",
                "renderType": "SELECT",
                "operatorKey": "Gender",
                "value": "Gender11111",
                "multiple": false,
                "multipleLimit": 2
              },
              {
                "label": "地区",
                "en_label": "region",
                "renderType": "REGION",
                "operatorKey": "Gender",
                "value": "Region",
                "multiple": false
              },
              {
                "label": "文本",
                "enlabel": "text",
                "renderType": "TEXT",
                "operatorKey": "Text",
                "value": "text"
              },
              {
                "operatorKey": "Number",
                "label": "数字",
                "en_label": "number",
                "value": "rating",
                "renderType": "NUMBER"
              },
              {
                "operatorKey": "Number",
                "label": "数字区间",
                "en_label": "number range",
                "value": "rating1",
                "renderType": "NUMBER",
                "includeOperator": {
                  "operator": [
                    "between"
                  ]
                },
                "datePanel": {
                  "manualType": 3
                }
              },
              {
                "operatorKey": "Time",
                "label": "时间(时分)",
                "en_label": "Time (hour and minute)",
                "value": "time0",
                "renderType": "TIME",
                "format": "HH:mm"
              },
              {
                "operatorKey": "Time",
                "label": "时间(时分秒)",
                "en_label": "time (hour minute second)",
                "value": "time1",
                "renderType": "TIME",
                "format": "HH:mm:ss"
              },
              {
                "operatorKey": "Date",
                "label": "日期(默认全部功能)",
                "en_label": "date (default all functions)",
                "value": "Date0",
                "renderType": "DATE"
              },
              {
                "operatorKey": "Date",
                "label": "日期(天manualType = 1)",
                "en_label": "date(day manualType = 1)",
                "value": "Date1",
                "renderType": "DATE",
                "datePanel": {
                  "manualType": 1
                }
              },
              {
                "operatorKey": "Date",
                "label": "日期(时manualType = 2)",
                "en_label": "date(hour manualType = 2)",
                "value": "Date2",
                "renderType": "DATE",
                "datePanel": {
                  "manualType": 2
                }
              },
              {
                "operatorKey": "Date",
                "label": "日期(时manualType = 3)",
                "en_label": "date(manualType = 3)",
                "value": "Date3",
                "renderType": "DATE",
                "datePanel": {
                  "manualType": 3
                }
              },
              {
                "operatorKey": "Date",
                "label": "日期(Exclude equal and date operators (date))",
                "en_label": "date(Exclude equal and date operators (date))",
                "value": "Date4",
                "renderType": "DATE",
                "excludeOperator": {
                  "dateOperator": [
                    "date"
                  ],
                  "operator": [
                    "equal"
                  ]
                },
                "datePanel": {
                  "manualType": 3
                }
              },
              {
                "operatorKey": "Date",
                "label": "日期区间",
                "en_label": "date range",
                "value": "Date5",
                "renderType": "DATE",
                "includeOperator": {
                  "dateOperator": [
                    "date"
                  ],
                  "operator": [
                    "between"
                  ]
                },
                "datePanel": {
                  "manualType": 3
                }
              },
              {
                "operatorKey": "Date",
                "label": "年区间",
                "en_label": "Year range",
                "value": "Date6",
                "renderType": "DATE",
                "includeOperator": {
                  "dateOperator": [
                    "year"
                  ],
                  "operator": [
                    "between"
                  ]
                },
                "datePanel": {
                  "manualType": 3
                }
              },
              {
                "operatorKey": "Date",
                "label": "月",
                "en_label": "month",
                "value": "Date7",
                "renderType": "DATE",
                "includeOperator": {
                  "dateOperator": [
                    "month"
                  ],
                  "operator": [
                    "equal"
                  ]
                },
                "datePanel": {
                  "manualType": 3
                }
              },
              {
                "operatorKey": "Date",
                "label": "月区间",
                "en_label": "month range",
                "value": "Date8",
                "renderType": "DATE",
                "includeOperator": {
                  "dateOperator": [
                    "month"
                  ],
                  "operator": [
                    "between"
                  ]
                },
                "datePanel": {
                  "manualType": 3
                }
              },
              {
                "operatorKey": "Date",
                "label": "日期(dates)",
                "en_label": "date (dates)",
                "value": "Date9",
                "renderType": "DATE",
                "datePanel": {
                  "excludeShortcuts": -1,
                  "excludeManuals": -1,
                  "pickerType": "dates"
                }
              },
              {
                "operatorKey": "Date",
                "label": "日期(datetime)",
                "en_label": "date(datetime)",
                "value": "Date10",
                "renderType": "DATE",
                "includeOperator": {
                  "dateOperator": ["date"]
                },
                "datePanel": {
                  "excludeShortcuts": -1,
                  "excludeManuals": -1,
                  "pickerType": "datetime"
                }
              }
            ]
          }
        ],
        "operators": {
          "Gender": [
            {
              "label": "等于",
              "value": "equal",
              "style": "noop"
            },
            {
              "label": "等于其中之一",
              "value": "one_of",
              "style": "tags"
            },
            {
              "label": "不等于",
              "value": "not_equal",
              "style": "noop"
            },
            {
              "label": "包含",
              "value": "contains",
              "style": "noop"
            },
            {
              "label": "不包含",
              "value": "not_contain",
              "style": "noop"
            },
            {
              "label": "为空",
              "value": "empty",
              "style": "none"
            },
            {
              "label": "不为空",
              "value": "not_empty",
              "style": "none"
            }
          ],
          "Text": [
            {
              "label": "等于",
              "value": "equal",
              "style": "noop"
            },
            {
              "label": "等于其中之一",
              "value": "one_of",
              "style": "tags"
            },
            {
              "label": "不等于",
              "value": "not_equal",
              "style": "noop"
            },
            {
              "label": "包含",
              "value": "contains",
              "style": "noop"
            },
            {
              "label": "不包含",
              "value": "not_contain",
              "style": "noop"
            },
            {
              "label": "为空",
              "value": "empty",
              "style": "none"
            },
            {
              "label": "不为空",
              "value": "not_empty",
              "style": "none"
            }
          ],
          "Number": [
            {
              "label": "等于",
              "value": "equal",
              "style": "noop"
            },
            {
              "label": "不等于",
              "value": "not_equal",
              "style": "noop"
            },
            {
              "label": "大于",
              "value": "greater_than",
              "style": "noop"
            },
            {
              "label": "大于等于",
              "value": "greater_than_equal",
              "style": "noop"
            },
            {
              "label": "小于",
              "value": "less_than",
              "style": "noop"
            },
            {
              "label": "小于等于",
              "value": "less_than_equal",
              "style": "noop"
            },
            {
              "label": "区间",
              "value": "between",
              "style": "range"
            },
            {
              "label": "为空",
              "value": "empty",
              "style": "none"
            },
            {
              "label": "不为空",
              "value": "not_empty",
              "style": "none"
            }
          ],
          "Time": [
            {
              "label": "等于",
              "value": "equal",
              "style": "noop"
            },
            {
              "label": "不等于",
              "value": "not_equal",
              "style": "noop"
            },
            {
              "label": "大于",
              "value": "greater_than",
              "style": "noop"
            },
            {
              "label": "大于等于",
              "value": "greater_than_equal",
              "style": "noop"
            },
            {
              "label": "小于",
              "value": "less_than",
              "style": "noop"
            },
            {
              "label": "小于等于",
              "value": "less_than_equal",
              "style": "noop"
            },
            {
              "label": "区间",
              "value": "between",
              "style": "range"
            },
            {
              "label": "为空",
              "value": "empty",
              "style": "none"
            },
            {
              "label": "不为空",
              "value": "not_empty",
              "style": "none"
            }
          ],
          "Date": [
            {
              "label": "等于",
              "value": "equal",
              "style": "noop"
            },
            {
              "label": "不等于",
              "value": "not_equal",
              "style": "noop"
            },
            {
              "label": "大于",
              "value": "greater_than",
              "style": "noop"
            },
            {
              "label": "大于等于",
              "value": "greater_than_equal",
              "style": "noop"
            },
            {
              "label": "小于",
              "value": "less_than",
              "style": "noop"
            },
            {
              "label": "小于等于",
              "value": "less_than_equal",
              "style": "noop"
            },
            {
              "label": "区间",
              "value": "between",
              "style": "range"
            },
            {
              "label": "为空",
              "value": "empty",
              "style": "none"
            },
            {
              "label": "不为空",
              "value": "not_empty",
              "style": "none"
            }
          ],
          "TimesOperators": [
            {
              "label": "至少一次",
              "value": "at_least_once",
              "style": "none"
            },
            {
              "label": "无此行为",
              "value": "no_actions",
              "style": "none"
            },
            {
              "label": "等于",
              "value": "equal",
              "style": "noop"
            },
            {
              "label": "少于",
              "value": "less_than",
              "style": "noop"
            },
            {
              "label": "多于",
              "value": "greater_than",
              "style": "noop"
            },
            {
              "label": "多于或等于",
              "value": "greater_than_equal",
              "style": "noop"
            },
            {
              "label": "介于",
              "value": "between",
              "style": "range"
            }
          ]
        }
      }
    })
  })
}
const handleEvent = (type) => {
  switch (type) {
    case 1:
      unref(ERfilterRef).setData({
          "filters": [
            {
              "conditions": [
                {
                  "operator": "equal",
                  "property": "cascader01",
                  "value": "any"
                },
                {
                  "operator": "equal",
                  "property": "cascader02",
                  "value": [
                    "name"
                  ]
                },
                {
                  "operator": "equal",
                  "property": "Gender",
                  "value": [
                    "0"
                  ]
                },
                {
                  "operator": "equal",
                  "property": "Gender11111",
                  "value": "1"
                },
                {
                  "operator": "equal",
                  "property": "Region",
                  "value": [
                    "310000"
                  ]
                },
                {
                  "operator": "equal",
                  "property": "text",
                  "value": "阿萨德开发计划"
                },
                {
                  "operator": "equal",
                  "property": "rating",
                  "value": 123123
                },
                {
                  "operator": "between",
                  "property": "rating1",
                  "value": [
                    1,
                    3000
                  ]
                },
                {
                  "operator": "equal",
                  "property": "time0",
                  "value": "12:40"
                },
                {
                  "operator": "equal",
                  "property": "time1",
                  "value": "12:40:02"
                },
                {
                  "operator": "equal",
                  "property": "Date0",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "dynamic",
                    "dateFrom": "- 1 weeks",
                    "dateTo": "- 1 weeks"
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date1",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "dynamic",
                    "dateFrom": "+ 0 days",
                    "dateTo": "+ 20 days"
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date2",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "static",
                    "value": "1679500800"
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date3",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "dynamic",
                    "dateFrom": "- 20 days",
                    "dateTo": "- 1 days"
                  }
                },
                {
                  "operator": "not_equal",
                  "property": "Date4",
                  "dateOperator": "year",
                  "value": 2023
                },
                {
                  "operator": "between",
                  "property": "Date5",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "static",
                    "value": [
                      "1678291200",
                      "1679673600"
                    ]
                  }
                },
                {
                  "operator": "between",
                  "property": "Date6",
                  "dateOperator": "year",
                  "value": [
                    2019,
                    2023
                  ]
                },
                {
                  "operator": "equal",
                  "property": "Date7",
                  "dateOperator": "month",
                  "value": 2
                },
                {
                  "operator": "between",
                  "property": "Date8",
                  "dateOperator": "month",
                  "value": [
                    4,
                    11
                  ]
                },
                {
                  "operator": "equal",
                  "property": "Date9",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "static",
                    "value": [
                      "1683475200",
                      "1684166400"
                    ]
                  }
                },
                {
                  "operator": "equal",
                  "property": "Date10",
                  "dateOperator": "date",
                  "value": {
                    "dateType": "static",
                    "value": "1685635200"
                  }
                }
              ],
              "logicalOperator": "and"
            }
          ],
          "logicalOperator": "and"
        }
      )
      break
    case 3:
      state.value0 = unref(ERfilterRef).getData()
      break
    case 5:
      unref(ERfilterRef).clearData('values')
      break
  }
}
const handleListener = ({ type, data }) => {
  if (type === 'init') {
    handleEvent(1)
  }
}
</script>
<template>
  <div>
    <EverrightFilter
      :lang="props.lang"
      :httpParams="httpParams"
      type="quick-filter"
      :isShowValidateState="false"
      :getOptions="getOptions"
      @listener="handleListener"
      ref="ERfilterRef"/>
    <el-button @click="() => handleEvent(1)" type="primary">Set Data</el-button>
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
