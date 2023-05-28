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
                  "operator": "contains",
                  "property": "text",
                  "value": "123"
                },
                {
                  "operator": "equal",
                  "property": "cascader01",
                  "value": "any"
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
      type="linear"
      :httpParams="httpParams"
      @listener="handleListener"
      ref="ERfilterRef"/>
    <el-button @click="() => handleEvent(1)" type="primary">Set Data</el-button>
    <el-button @click="() => handleEvent(2)" type="primary">Reset Data</el-button>
    <el-button @click="() => handleEvent(5)" type="primary">Clear Data</el-button>
    <el-button @click="() => handleEvent(3)" type="primary">Get Data</el-button>
    <el-button @click="() => handleEvent(4)" type="primary">手动添加一条</el-button>
    <el-input
      type="textarea"
      readonly
      :rows="15"
      placeholder="请输入内容"
      :model-value="JSON.stringify(state.value0, '', 2)"
    />
  </div>
</template>
