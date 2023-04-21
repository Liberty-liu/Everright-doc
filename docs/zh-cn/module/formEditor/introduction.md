---
layout: home

hero:
  name: "Everright-formEditor"
  text: "低代码可视化编辑器"
  tagline: "开源的JavaScript低代码编辑器"
  image:
    src: /Everright-logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /zh-cn/module/formEditor/started
    - theme: alt
      text: Documentation
      link: /zh-cn/module/formEditor/doc

features:
  - title: 灵活的拖放功能
    details: 可以让用户轻松地生成行和列，并通过简单的拖放操作对它们进行布局和调整。无论是在设计表单还是创建页面，这个功能极大地提高用户的工作效率
  - title: 提供多种组件
    details: 编辑器、预览器和配置面板都可以单独使用，可以根据实际需求选择性单独使用配置面板，满足不同场景下的需求
  - title: 跨平台适配
    details: 依赖于element-plus和vant框架进行开发。内部提供了适配器进行参数转码，以达到最佳的体现。
  - title: 字段与布局分离
    details: 内置两种模式：字段与布局不分离、字段与布局分离。
  - title: 多语言支持
    details: 内置了国际化（中文和英文）
  - title: 实时预览功能
    details: 在表单编辑页面，提供实时预览功能，随时查看表单的渲染效果，以便对表单进行调整和优化
---

<VPTeamPage class="recommendBlog">
  <VPTeamPageSection>
    <template #title>推荐优质公众号</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<script setup>
import { useData, useRoute, useRouter } from 'vitepress'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
// import db from '/theme/VPTeamMembers.vue'
const {
  lang
} = useData()
const members = [
  {
    avatar: '/img/promotion/wechat/491681738656_.pic.jpg',
    name: '若川视野',
    desc: '公众号「若川视野」作者，组织了<a target="_blank" href="https://juejin.cn/post/7079706017579139102">源码共读活动</a>，帮助了几千人学习源码。写有<a target="_blank" href="https://juejin.cn/column/6960551178908205093">《学习源码整体架构系列》</a> 30余篇。',
    links: [
      {
        icon: 'github',
        link: 'https://github.com/lxchuan12'
      }
    ]
  },
  {
    avatar: '/img/promotion/wechat/321682043130_.pic.jpg',
    name: '前端早读课',
    desc: '关注前端，产品体验设计，更关注前端同行的成长。 每天清晨五点早读，七万+同行相伴成长。',
  },
  {
    avatar: '/img/promotion/wechat/161682054821_.pic.jpg',
    name: '前端迷',
    desc: '『前端迷』公众号是一个公益性的前端技术分享社区，不定期为前端开发者带来面试经验，源码解析以及技术分享，欢迎大家订阅。',
    links: [
      { icon: 'github', link: 'https://github.com/fxxqq' }
    ]
  }
]
</script>

<style lang="scss" scoped>
.recommendBlog {
  margin-top: 60px;
  ::v-deep{
    .avatar {
      width: 80px !important;
      height: 80px !important;
    }
    .avatar-img {
      border-radius:0
    }
  }
}
</style>
