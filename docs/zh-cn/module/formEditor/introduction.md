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
    - theme: alt
      text: View on GitHub
      link: https://github.com/Liberty-liu/Everright-formEditor

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
  - title: 逻辑控制器
    details: 可以让用户通过GUI界面配置字段显示隐藏、必填、只读。当字段结构发生变动，为了保证逻辑控制的准确性，自动删除相应的逻辑规则
  - title: 对开发友好
    details: 提供实时预览内部数据结构、开发环境具有后端服务（SQLite）
---

<VPTeamPage class="recommendBlog">
  <VPTeamPageSection>
    <template #title>推荐优质博主</template>
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
  },
  {
    avatar: '/img/promotion/wechat/181682329576_.pic.jpg',
    name: 'GitHub黑板报',
    desc: '专注于分享 GitHub 上知名的 Python、Java、Web、AI、数据分析等多个领域的优质学习资源、开源项目及开发者工具，为程序员提供优质的开源项目。'
  },
  {
    avatar: '/img/promotion/wechat/131682256691_.pic.jpg',
    name: '前端下午茶',
    desc: '一个专业又有意思的前端公众号，囊括 Vue、React、GraphQL、浏览器原理、Node、工程化等各方面多维度精选干货好文，非常适合前端开发者巩固基础、拓展视野。',
    links: [
      { icon: 'github', link: 'https://github.com/SHERlocked93/blog' }
    ]
  },
  {
    avatar: '/img/promotion/tiktok/691683369864_.pic.jpg',
    name: 'AI探长',
    type: 'tiktok',
    desc: '华为云最有价值专家 MVP; 微软认证人工智能专家MPP; 人民有点出版社科技书籍金牌领读人;<br> <strong>专注学习资源介绍、行业热点追踪、学习经验分享;</strong>'
  }
]
</script>

<style lang="scss" scoped>
.recommendBlog {
  margin-top: 60px;
  :deep{
    .avatar-img {
      border-radius:0
    }
  }
}
</style>
