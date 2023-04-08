---
layout: home

hero:
  name: "Everright-formEditor"
  text: "Visual low-code editor"
  tagline: "Open source javascript low-code editor"
  image:
    src: /Everright-logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /en/module/formEditor/started
    - theme: alt
      text: Documentation
      link: /en/module/formEditor/doc

features:
  - title: Flexible interaction
    details: Users can easily generate rows and columns and layout them through simple drag-and-drop operations. This feature greatly improves user efficiency, whether in designing forms or creating pages.
  - title: Providing multiple components
    details: The editor, previewer, and configuration panel can all be used separately. The configuration panel can be selectively used according to actual needs, meeting the requirements of different scenarios.
  - title: Support Pc and Mobile
    details: The PC depends on element-plus while the mobile depends on vant. There is a set of adapters to convert parameters into ones that can be recognized by both element-plus and vant.
  - title: Fields and layout separated
    details: There are two built-in modes:Fields and layout not separated、Fields and layout separated.
  - title: i18n
    details: Built-in internationalization (Chinese and English)
  - title: Real-time preview function
    details: On the form editing page, a real-time preview function is provided, allowing users to view the rendering effect of the form at any time, so that they can adjust and optimize the form accordingly.
---


<script setup>
import { useData, useRoute, useRouter } from 'vitepress'
const {
  lang
} = useData()
</script>
