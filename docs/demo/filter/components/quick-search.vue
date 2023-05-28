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
const handleEvent = (type) => {
  switch (type) {
    case 3:
      state.value0 = unref(ERfilterRef).getData()
      break
    case 5:
      unref(ERfilterRef).clearData('values')
      break
  }
}
const handleListener = ({ type, data }) => {
  if (type === 'search') {
    handleEvent(3)
  }
}
</script>
<template>
  <div>
    <EverrightFilter
      :lang="props.lang"
      type="quick-search"
      :isShowValidateState="false"
      :getOptions="getOptions"
      @listener="handleListener"
      ref="ERfilterRef"/>
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
