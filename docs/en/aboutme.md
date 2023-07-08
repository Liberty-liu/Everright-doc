---
layout: doc
---

# Hi there, I'm 刘海峰 <sup>Liberty</sup>

- Contact way:

  <a href="mailto:zhuizhuidea@gmail.com">:email: Email</a>

  WeChat:liberty001215

<VPTeamMembers size="small" :members="members" />

<br/>

# Next step

1. The mobile side of the filter is currently being developed, based on vant.
2. Currently, there are many features that have not been added to the Everright-formEditor yet.

| Tables         |
|----------------|
| subform        |
| tree hierarchy |

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


