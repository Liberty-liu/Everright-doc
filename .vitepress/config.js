import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import * as erComponentsConfig from 'everright-formeditor/packages/formEditor/componentsConfig.js'
import _ from 'lodash-es'
import { data } from './data/example.data.js'
const renderSidebar = (lang = 'zh-cn') => {
  const isZh = lang === 'zh-cn'
  const prefix = isZh ? '' : `/${lang}`
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
  const formEditorNavs = [
    {
      text: isZh ? '指南' : 'Guide',
      collapsed: false,
      items: [
        {
          text: isZh ? '安装' : 'Installation',
          link: `${prefix}/formEditor/started`
        },
        {
          text: isZh ? '关于编辑器' : 'About the Editor',
          link: `${prefix}/formEditor/doc`
        },
        {
          text: isZh ? '表单校验' : 'Form Validation',
          link: `${prefix}/formEditor/validate`
        },
        {
          text: isZh ? '逻辑控制器' : 'Logical controller',
          link: `${prefix}/formEditor/logic`
        },
        {
          text: isZh ? '国际化' : 'i18n',
          link: `${prefix}/formEditor/i18n`
        },
        {
          text: 'erFormEditor',
          link: `${prefix}/formEditor/erFormEditor`
        },
        {
          text: 'erFormPreview',
          link: `${prefix}/formEditor/erFormPreview`
        },
        {
          text: 'erFormConfig',
          link: `${prefix}/formEditor/erFormConfig`
        },
        {
          text: 'erGeneratorData',
          link: `${prefix}/formEditor/erGeneratorData`
        }
      ]
    }
  ]
  formEditorNavs.push({
    text: isZh ? '数据结构' : 'Data structure',
    collapsed: false,
    items: [
      {
        text: isZh ? '表单属性' : 'Form Attribute',
        link: `${prefix}/formEditor/fields/root`
      },
      {
        text: isZh ? '字段' : 'Field',
        items: fields.map((field) => {
          let result = {
            text: field
          }
          if (field === 'ID number') {
            result.link = `${prefix}/formEditor/fields/idNumber`
          } else {
            result.link = `${prefix}/formEditor/fields/${_.lowerCase(field)}`
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
            link: `${prefix}/formEditor/fields/${field.toLocaleLowerCase()}`
          }
        })
      }
    ]
  })
  formEditorNavs.push({
    text: isZh ? '开发' : 'Development',
    items: [
      {
        text: isZh ? '开发指南' : 'Development Guide',
        link: `${prefix}/formEditor/development`
      }
    ]
  })
  const result = {}
  result[`${prefix}/formEditor`] = formEditorNavs
  const filterNavs = [
    {
      text: isZh ? '指南' : 'Guide',
      collapsed: false,
      items: [
        {
          text: isZh ? '关于筛选器' : 'About the Filter',
          link: `${prefix}/filter/doc`
        },
        {
          text: isZh ? '安装' : 'Installation',
          link: `${prefix}/filter/started`
        },
        {
          text: 'linear',
          link: `${prefix}/filter/linear`
        },
        {
          text: 'matrix',
          link: `${prefix}/filter/matrix`
        },
        {
          text: 'quick-search',
          link: `${prefix}/filter/quick-search`
        },
        {
          text: 'quick-filter',
          link: `${prefix}/filter/quick-filter`
        }
      ]
    },
    {
      text: isZh ? '数据结构' : 'Data structure',
      collapsed: false,
      items: [
        {
          text: 'API options',
          collapsed: false,
          items: data.options.map(node => {
            return {
              text: isZh ? node.label : node.en_label,
              collapsed: false,
              items: node.children.map(node => ({
                text: isZh ? node.label : node.en_label,
                link: `${prefix}/filter/options/${node.value}`
              }))
            }
          }).concat({
            text: isZh ? '操作符' : 'operators',
            link: `${prefix}/filter/options/operators`
          })
        },
        {
          text: 'API conditions',
          link: `${prefix}/filter/conditions`
        },
        {
          text: 'API props',
          link: `${prefix}/filter/props`
        },
        {
          text: 'API propValues',
          link: `${prefix}/filter/propValues`
        }
      ]
      // items: [
      //   {
      //     text: 'API options',
      //     items: Object.entries(data).map(([type, value]) => ({ text: value.label, link: `${prefix}/filter/options/${type}` }))
      //   }
      // ]
    }
  ]
  result[`${prefix}/filter`] = filterNavs
  return result
}
const isProd = process.env.NODE_ENV === 'production'
export default defineConfig({
  srcDir: 'docs',
  lang: 'zh-cn',
  base: '/',
  // cleanUrls: true,
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  head: [
    isProd ? [
      'script',
      {},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1bf98ec4314f2c246b41b557796f1be9";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`
    ] : '',
    isProd ? ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-W75QLWQTY4' }] : '',
    isProd ? ['script', {}, `      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-W75QLWQTY4');
      `
    ] : '',
    [
      'link',
      { rel: 'icon', href: '/Everright-logo.svg', type: 'image/svg+xml' }
    ]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  locales: {
    root: {
      title: 'Everright 低代码可视化表单编辑器',
      label: '中文',
      lang: 'zh-cn',
      description: 'Everright-formEditor是一款基于vue、element-plus、vant专业的在线低代码可视化表单编辑器，提供简单易用的界面和丰富的组件库，用户可以通过拖拽、配置等方式快速创建自定义表单，满足各种业务场景需求。同时支持PC和移动端，提供多语言和多平台的支持，让用户轻松完成表单设计。内部抛出三个组件分别适应不同的业务场景。具有完善的文档和使用案例',
      head: [
        [
          'meta',
          { name: 'keywords', content: 'Everright-formEditor,vue表单,可视化设计表单,vue动态表单,低代码表单,表单设计,element form 表单编辑器,vant form 表单编辑器' }
        ]
      ],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Everright-formEditor',
            items: [
              {
                text: '简介',
                link: 'formEditor/introduction'
              },
              {
                text: '文档',
                link: 'formEditor/doc'
              }
            ]
          },
          {
            text: 'Everright-filter',
            items: [
              {
                text: '简介',
                link: 'filter/introduction'
              },
              {
                text: '文档',
                link: 'filter/doc'
              }
            ]
          },
          { text: 'About me', link: 'aboutme' },
        ],
        sidebar: renderSidebar()
      }
    },
    en: {
      title: 'Everright Low-code visual form editor',
      label: 'English',
      lang: 'en',
      // link: '/en/',
      description: 'Everright-formEditor is a professional online low-code visual form editor based on Vue, Element Plus, and Vant.  It provides a simple and easy-to-use interface and a rich component library.  Users can quickly create custom forms through drag and drop, configuration, and other methods to meet various business scenario requirements.  It supports both PC and mobile devices, and provides multi-language and multi-platform support to enable users to easily complete form design.  It also provides three components that can be used for different business scenarios.  It comes with comprehensive documentation and usage examples',
      head: [
        [
          'meta',
          { name: 'keywords', content: 'Everright-formEditor,vue Forms,Visual Design Forms,vue Dynamic Forms,Low-code Forms,form Design,element form Editor,vant form Editor' }
        ]
      ],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Everright-formEditor',
            items: [
              {
                text: 'Introduction',
                link: 'en/formEditor/introduction'
              },
              {
                text: 'Documentation',
                link: 'en/formEditor/doc'
              }
            ]
          },
          {
            text: 'Everright-filter',
            items: [
              {
                text: 'Introduction',
                link: 'en/filter/introduction'
              },
              {
                text: 'Documentation',
                link: 'en/filter/doc'
              }
            ]
          },
          { text: 'About me', link: '/en/aboutme' },
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
      { icon: 'github', link: 'https://github.com/Liberty-liu' }
    ]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPTeamMembersItem\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPTeamMembersItem.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
