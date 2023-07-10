---
layout: doc
lastUpdated: false
---

# Hi there, I'm 刘海峰 <sup>Liberty</sup>

- 联系方式:

  <a href="mailto:zhuizhuidea@gmail.com">:email: Email</a>

  WeChat:liberty001215

<VPTeamMembers size="small" :members="members" />

<br/>

# Next step

1. 目前正在开发筛选器的移动端，基于vant
2. 目前Everright-formEditor还有很多功能没有加入...

| Tables |
|--------|
| 子表单    |
| 树形层级   |

<script setup>
import {
  VPTeamMembers
} from 'vitepress/theme'
const members = [
  {
    avatar: 'https://github.com/Liberty-liu.png',
    name: 'Liberty',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Liberty-liu' }
    ],
    sponsor: 'https://afdian.net/a/Liberty-liu',
    desc: `
    `
  }
]
</script>
