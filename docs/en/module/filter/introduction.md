---
layout: home

hero:
  name: "Everright-filter"
  text: "Powerful advanced filter"
  tagline: "Data screening and filtering is a common and important task. Everright-filter provides an intuitive and friendly user interface and rich filter conditions, making it easy to filter and filter data."
  image:
    src: /Everright-logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /en/module/filter/started
    - theme: alt
      text: Documentation
      link: /en/module/filter/doc
    - theme: alt
      text: View on GitHub
      link: https://github.com/Liberty-liu/Everright-filter

features:
  - title: Multi-type filter
    details: Supports filtering of multiple data types, including string, number, dropdown, cascade, region, date and time. Whether you need to filter different types of data, it can meet your needs.
  - title: rich operator
    details: Provides a wealth of operators, such as equal to, not equal to, greater than, less than, interval, etc., allowing you to flexibly define filtering rules based on specific conditions.
  - title: Flexible date filtering
    details: Provides great flexibility. It supports filtering on date, year, month and day. It also supports the selection of relative time and absolute time, such as today, this week, this month, this year, past N days/hours, future N days/hours, etc. This makes date filtering more flexible and can meet the needs of various time dimensions.
  - title: Flexible Screening Portfolio
    details: Support conditional grouping settings, you can use logical operators (AND/OR) to combine multiple conditions to implement complex data filtering logic. Data that meets multiple conditions can be filtered out more precisely to meet the needs of advanced data analysis and mining.

  - title: Behavioral Data Screening
    details: For behavioral data, it supports setting start and end time, limit times and limit attributes. You can precisely filter out actions that occurred within a specific time period, and further filter based on frequency and attribute conditions.
  - title: Can be embedded into different UI interfaces
    details: Each filter type is extracted and used separately, and can be easily embedded into different UI interfaces. Whether it is a search box, a filter panel or a table header, everright-filter can provide consistent functions and data structures, eliminating the need to develop separate filter functions for different interfaces, saving development resources and time.
  - title: Real-time configuration data structure
    details: Developers can easily configure the data structure of the required functions according to the document UI interface, saving the tedious manual coding and debugging process.
  - title: i18n
    details: Built-in internationalization (Chinese and English)
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
