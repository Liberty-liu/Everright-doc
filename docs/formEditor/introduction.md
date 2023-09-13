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
      link: /formEditor/started
    - theme: alt
      text: Documentation
      link: /formEditor/doc
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
