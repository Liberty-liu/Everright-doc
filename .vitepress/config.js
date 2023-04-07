import { defineConfig } from 'vitepress'
import * as erComponentsConfig from 'everright-formeditor/packages/formEditor/componentsConfig.js'
// import { erComponentsConfig } from 'everright-formeditor'
import _ from 'lodash-es'
const renderSidebar = (lang = 'zh-cn') => {
  const isZh = lang === 'zh-cn'
  const fieldsConfig = _.cloneDeep(erComponentsConfig.fieldsConfig)
  const fields = [...fieldsConfig[0].list, ...fieldsConfig[1].list].map(e => {
    let label = ''
    if (e.type === 'input') {
      switch (e.options.renderType) {
        case 1:
          label = 'input'
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
  const layouts = []
  fieldsConfig[2].list.forEach((field) => {
    layouts.push(field.type)
    switch (field.type) {
      case 'grid':
        layouts.push(`${field.type}>col`)
        break
      case 'tabs':
        layouts.push(`${field.type}>tabsCol`)
        break
      case 'collapse':
        layouts.push(`${field.type}>collapseCol`)
        break
      case 'table':
        layouts.push(`${field.type}>td`)
        break
    }
  })
  const bars = [
    {
      text: isZh ? '指南' : 'Guide',
      collapsed: false,
      items: [
        {
          text: isZh ? '关于编辑器' : 'About the Editor',
          link: `/${lang}/module/formEditor/doc`
        },
        {
          text: isZh ? '字段校验' : 'Validate',
          link: `/${lang}/module/formEditor/validate`
        },
        {
          text: isZh ? '国际化' : 'i18n',
          link: `/${lang}/module/formEditor/i18n`
        },
        {
          text: 'erFormEditor',
          link: `/${lang}/module/formEditor/erFormEditor`
        },
        {
          text: 'erFormPreview',
          link: `/${lang}/module/formEditor/erFormPreview`
        },
        {
          text: 'erFormConfig',
          link: `/${lang}/module/formEditor/erFormConfig`
        },
        {
          text: 'erGeneratorData',
          link: `/${lang}/module/formEditor/erGeneratorData`
        }
      ]
    }
  ]
  bars.push({
    text: isZh ? '字段数据结构' : 'Field data',
    collapsed: false,
    items: [
      {
        text: isZh ? '字段' : 'Field',
        items: fields.map((field) => {
          let result = {
            text: field
          }
          if (field === 'ID number') {
            result.link = `/${lang}/module/formEditor/fields/idNumber`
          } else {
            result.link = `/${lang}/module/formEditor/fields/${_.lowerCase(field)}`
          }
          return result
        })
      },
      {
        text: isZh ? '容器' : 'Layout',
        collapsed: false,
        items: layouts.map((field) => {
          return {
            text: field,
            link: `/${lang}/module/formEditor/fields/${field.toLocaleLowerCase()}`
          }
        })
      }
    ]
  })
  bars.push({
    text: '开发',
    items: [
      {
        text: '开发指南',
        link: `/${lang}/module/formEditor/development`
      }
    ]
  })
  const result = {}
  result[`/${lang}/module/formEditor`] = bars
  return result
}
export default defineConfig({
  title: 'Everright',
  srcDir: 'docs',
  base: '/',
  description: 'A VitePress Site',
  // cleanUrls: true,
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      'link',
      { rel: 'icon', href: '/Everright-logo.svg', type: 'image/svg+xml' }
    ]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-cn',
      link: '/zh-cn/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/zh-cn/' },
          {
            text: 'Everright-formEditor',
            items: [
              {
                text: '简介',
                link: 'zh-cn/module/formEditor/introduction'
              },
              {
                text: '文档',
                link: 'zh-cn/module/formEditor/doc'
              }
            ]
          }
        ],
        sidebar: renderSidebar('zh-cn')
      }
    },
    // '/': {
    //   lang: 'zh-cn',
    //   label: '中文'
    // },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Everright-formEditor',
            items: [
              {
                text: 'Introduction',
                link: 'en/module/formEditor/index'
              },
              {
                text: 'Doc',
                link: 'en/module/formEditor/introduction'
              }
            ]
          },
          { text: 'Examples', link: '/markdown-examples' }
        ],
        sidebar: renderSidebar('en')
      }
    }
  },
  themeConfig: {
    logo: '/Everright-logo.svg',
    siteTitle: 'Everright',
    footer: {
      copyright: 'Copyright © 2023-present <a href="https://github.com/Liberty-liu">Liberty</a>'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Liberty-liu/Everright-formEditor' }
    ]
  },
  plugins: [
  ]
})
