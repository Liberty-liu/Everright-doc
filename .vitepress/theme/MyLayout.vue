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
const formEditorHomeRe = /(\/formEditor\/introduction.html){1}/
const filterHomeRe = /(\/filter\/introduction.html){1}/
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
.btn-51,
.btn-51 *,
.btn-51 :after,
.btn-51 :before,
.btn-51:after,
.btn-51:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-51 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
  Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
}
.btn-51:disabled {
  cursor: default;
}
.btn-51:-moz-focusring {
  outline: auto;
}
.btn-51 svg {
  display: block;
  vertical-align: middle;
}
.btn-51 [hidden] {
  display: none;
}
.btn-51 {
  --progress: 15px;
  background: #fff;
  bottom: var(--progress);
  box-sizing: border-box;
  color: #000;
  display: block;
  font-weight: 900;
  -webkit-mask-image: none;
  padding: 1.2rem 3rem;
  perspective: 800px;
  position: relative;
  text-transform: uppercase;
  transform: rotateX(55deg) rotate(25deg);
  transform-style: preserve-3d;
  transition: bottom 0.2s;
}
.btn-51:after,
.btn-51:before {
  content: "";
  display: block;
  position: absolute;
  transform-origin: 0 0;
}
.btn-51:before {
  background: #eee;
  height: var(--progress);
  left: 0;
  top: 100%;
  transform: rotateX(-90deg);
  transition: height 0.2s;
  width: 100%;
}
.btn-51:after {
  background: #ccc;
  height: 100%;
  left: 100%;
  top: 0;
  transform: rotateY(90deg);
  transition: width 0.2s;
  width: var(--progress);
}
.btn-51:active {
  --progress: 0px;
}

</style>
