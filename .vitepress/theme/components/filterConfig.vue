<script setup>
import { ref, reactive, onUnmounted, inject, watch, nextTick, computed } from 'vue'
import _ from 'lodash-es'
import { useRoute, useRouter, useData, defineClientComponent } from 'vitepress'
import CheckboxComponent from './CheckboxComponent.vue'
const ER = inject('ER')
const {
  site,
  theme,
  lang
} = useData()
const router = useRouter()
router.onBeforeRouteChange = (to) => {
  ER.filterData = {
    isRender: true,
    option: {},
    operators: []
  }
}
const handleChange = (type, val) => {
  switch (type) {
    case 'SELECT':
      if (val) {
        ER.filterData.option.multipleLimit = 2
      } else {
        delete ER.filterData.option.multipleLimit
      }
      break
  }
}
const handleClick = () => {
  ER.filterData.isRender = false
  nextTick(() => {
    ER.filterData.isRender = true
  })
}
const isShowRerenderButton = computed(() => {
  let result = false
  if (/^(SELECT|REGION|CASCADER|TIME|NUMBER)$/.test(ER.filterData.option.renderType)) {
    result = true
  }
  return result
})
</script>
<template>
  <template v-if="ER.filterData.option.renderType === 'CASCADER'">
    <el-form label-position="top" label-width="120px">
      <el-form-item label="multiple">
        <el-switch v-model="ER.filterData.option.multiple"/>
      </el-form-item>
    </el-form>
  </template>
  <template v-if="ER.filterData.option.renderType === 'SELECT'">
    <el-form label-position="top" label-width="120px">
      <el-form-item label="multiple">
        <el-switch v-model="ER.filterData.option.multiple" @change="(val) => handleChange(ER.filterData.option.renderType, val)" />
      </el-form-item>
      <el-form-item label="multipleLimit" v-if="ER.filterData.option.multiple">
        <el-slider :min="1" v-model="ER.filterData.option.multipleLimit" />
      </el-form-item>
    </el-form>
  </template>
  <template v-if="ER.filterData.option.renderType === 'REGION'">
    <el-form label-position="top" label-width="120px">
      <el-form-item label="选择范围">
        <el-radio-group v-model="ER.filterData.option.selectType">
          <el-radio :label="1">Prov</el-radio>
          <el-radio :label="2">City/Prov</el-radio>
          <el-radio :label="3">County/City/Prov</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </template>
  <template v-if="ER.filterData.option.renderType === 'NUMBER'">
    <CheckboxComponent field="precision" :default-val="0" :label="'精度'">
      <div style="padding: 0 10px;">
        <el-slider v-model="ER.filterData.option.precision" />
      </div>
    </CheckboxComponent>
    <CheckboxComponent field="min" :default-val="0" :label="'最小值'">
      <div style="padding: 0 10px;">
        <el-slider v-model="ER.filterData.option.min" />
      </div>
    </CheckboxComponent>
    <CheckboxComponent field="max" :default-val="0" :label="'最大值'">
      <div style="padding: 0 10px;">
        <el-slider v-model="ER.filterData.option.max" />
      </div>
    </CheckboxComponent>
    <CheckboxComponent field="step" :default-val="0" :label="'步进'">
      <div style="padding: 0 10px;">
        <el-slider v-model="ER.filterData.option.step" />
      </div>
    </CheckboxComponent>
  </template>
  <template v-if="ER.filterData.option.renderType === 'TIME'">
    <el-form label-position="top" label-width="120px">
      <el-form-item label="format">
        <el-radio-group v-model="ER.filterData.option.format">
          <el-radio label="HH:mm">HH:mm</el-radio>
          <el-radio label="HH:mm:ss">HH:mm:ss</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </template>
  <el-button v-if="isShowRerenderButton" @click="handleClick" type="primary">Rerender the filter</el-button>
</template>
