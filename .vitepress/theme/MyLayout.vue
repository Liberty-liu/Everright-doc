<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, reactive, onUnmounted, inject, watch, nextTick, computed } from 'vue'
import _ from 'lodash-es'
import { useRoute, useRouter, useData, defineClientComponent } from 'vitepress'
import formEditorConfig from './components/formEditorConfig.vue'
import filterConfig from './components/filterConfig.vue'
import formEditorDemo from './components/formEditorDemo.vue'
import filterDemo from './components/filterDemo.vue'
const { Layout } = DefaultTheme
const route = useRoute()
const router = useRouter()
const isRenderFormEditorConfigPanel = ref(false)
const isRenderFilterConfigPanel = ref(false)
const isRenderFormEditorDemo = ref(false)
const isRenderFilterDemo = ref(false)
const formEditorHomeRe = /(en|zh-cn)+(\/module\/formEditor\/introduction.html){1}/
const filterHomeRe = /(en|zh-cn)+(\/module\/filter\/introduction.html){1}/
const ER = inject('ER')
const {
  site,
  theme,
  lang
} = useData()
const renderNavs = (fieldsConfig, erGeneratorData) => {
  let result = []
  const fields = [...fieldsConfig[0].list, ...fieldsConfig[1].list].map(e => {
    let label = ''
    if (e.type === 'input') {
      switch (e.options.renderType) {
        case 0:
          label = 'input'
          break
        case 1:
          label = 'email'
          break
        case 2:
          label = 'email'
          break
        case 3:
          label = 'ID number'
          break
        case 4:
          label = 'phone'
          break
        case 5:
          label = 'URL'
          break
      }
    } else {
      label = e.type
    }
    return label
  })
}
watch(route, (newVal) => {
  isRenderFormEditorDemo.value = formEditorHomeRe.test(newVal.path)
  isRenderFilterDemo.value = filterHomeRe.test(newVal.path)
  isRenderFormEditorConfigPanel.value = !!_.get(route, 'data.params.type', false)
  isRenderFilterConfigPanel.value = !!_.get(route, 'data.params.filterType', false)
}, { immediate: true })
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <div v-if="isRenderFormEditorConfigPanel">
        <div
          style="margin:0 10px;">
          <formEditorConfig/>
        </div>
      </div>
      <div v-if="isRenderFilterConfigPanel">
        <div
          style="margin:100px 0 0;">
          <filterConfig/>
        </div>
      </div>
    </template>
    <template #home-features-before>
      <formEditorDemo v-if="isRenderFormEditorDemo"/>
      <filterDemo v-if="isRenderFilterDemo"/>
    </template>
  </Layout>
</template>
<style lang="scss">
[class^="Everright-formEditor"] h1,
[class^="Everright-formEditor"] h2,
[class^="Everright-formEditor"] h3,
[class^="Everright-formEditor"] h4,
[class^="Everright-formEditor"] h5,
[class^="Everright-formEditor"] h6 {
  font-weight: revert;
  line-height: revert;
  font-size: revert;
}
.Everright-region-Main__postfix,.el-icon {
  box-sizing: content-box;
}
</style>
