import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import Vant from 'vant'
import { reactive } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  setup () {
  },
  enhanceApp(ctx) {
    ctx.app.provide('ER', reactive({
      field: {}
    }))
    ctx.app.use(ElementPlus)
    ctx.app.use(Vant)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }
  },
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}