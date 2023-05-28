<script>
import { computed, inject } from 'vue'
import _ from 'lodash-es'
export default {
  name: 'ConfigCheckboxComponent',
  inheritAttrs: false,
  customOptions: {}
}
</script>
<script setup>
const emit = defineEmits(['change'])
const props = defineProps({
  field: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  defaultVal: {
    type: [Number, String]
  }
})
const ER = inject('ER')
const isEmpty = (v) => (v === '' || v === null || v === undefined || v === false || (Array.isArray(v) && !v.length))
const isShow = computed({
  get () {
    return !isEmpty(ER.filterData.option[props.field])
    // return !!_.get(ER, `filterData.option.${props.field}`, undefined)
  },
  set (val) {
    emit('change', !!val)
    if (val) {
      ER.filterData.option[props.field] = props.defaultVal
    } else {
      delete ER.filterData.option[props.field]
    }
  }
})
</script>
<template>
  <div :class="[]">
    <el-checkbox v-model="isShow" @change="(newValue) => $emit('change', newValue)" :label="label" ></el-checkbox>
    <template v-if="$slots.default">
      <div v-if="isShow"><slot></slot></div>
    </template>
  </div>
</template>
<style lang="scss" scoped></style>
