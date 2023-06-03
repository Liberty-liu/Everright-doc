import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import Vant from 'vant'
import { reactive, watch } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css'
import './style.scss'
import MyLayout from './MyLayout.vue'
import { useRouter, useData } from 'vitepress'
export default {
  ...DefaultTheme,
  setup () {
    if (!import.meta.env.SSR) {
      const { lang } = useData()
      watch(lang, () => {
        localStorage.setItem('er-lang', lang.value)
      })
      const router = useRouter()
      router.onBeforeRouteChange = (to) => {
        if (typeof _hmt !== 'undefined') {
          _hmt.push(['_trackPageview', to.replace(location.origin, '')])
        }
      }
    }
  },
  enhanceApp(ctx) {
    ctx.app.provide('ER', reactive({
      field: {},
      logic: {},
      filterData: {
        isRender: true,
        option: {},
        operators: [],
        TimesOperators: []
      }
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
