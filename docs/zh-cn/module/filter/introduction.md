---
layout: home

hero:
  name: "Everright-filter"
  text: "强大的高级筛选器"
  tagline: "数据筛选和过滤是一个常见且重要的任务。Everright-filter提供直观友好的用户界面和丰富的筛选条件，使得筛选和过滤数据变得轻而易举。"
  image:
    src: /Everright-logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /zh-cn/module/filter/started
    - theme: alt
      text: Documentation
      link: /zh-cn/module/filter/doc

features:
  - title: 多类型筛选
    details: 支持多种数据类型的筛选，包括字符串、数字、下拉、级联、地区、日期和时间。无论你需要对不同类型的数据进行筛选，都能满足你的需求。
  - title: 丰富的操作符
    details: 提供了丰富的操作符，如等于、不等于、大于、小于、区间等，让你能够根据具体条件灵活地定义筛选规则。
  - title: 灵活的日期筛选
    details: 提供了极大的灵活性。它支持对日期、年、月和日进行筛选。还支持相对时间和绝对时间的选择，如今日、本周、本月、今年、过去N天/小时、未来N天/小时等。这使得日期筛选更加灵活，能够满足各种时间维度的需求。
  - title: 灵活的筛选组合
    details: 支持条件的分组设置，可以通过使用逻辑运算符（AND/OR）组合多个条件，实现复杂的数据筛选逻辑。可以更精确地筛选出符合多个条件的数据，满足高级数据分析和挖掘的需求。
  - title: 行为数据筛选
    details: 针对行为数据，支持设置起止时间、限制次数和限制属性。你可以精确地筛选出特定时间段内发生的行为，并根据次数和属性条件进行进一步过滤。
  - title: 可嵌入到不同UI界面
    details: 每个筛选类型单独抽离出来使用，可以轻松嵌入到不同的UI界面中。无论是搜索框、筛选面板还是表格的表头，everright-filter都能提供一致的功能和数据结构，无需为不同界面单独开发筛选功能，节省了开发资源和时间。
  - title: 实时配置数据结构
    details: 开发人员可以根据文档UI界面轻松配置所需功能的数据结构，节省了繁琐的手动编码和调试过程。
  - title: 多语言支持
    details: 内置了国际化（中文和英文）
---

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
</script>
