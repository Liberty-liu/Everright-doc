---
layout: page
---
<script setup>
import { ref, onMounted, shallowRef, nextTick, h, resolveComponent } from 'vue'
import pet from '../.vitepress/theme/components/pet.vue'

</script>

<section class="module parallax parallax-1">
  <div class="parallax-container">
    <h1>Everright</h1>
    <p>我的狗子名字叫帅哥，看他帅吗，嘿哈.</p>
  </div>
</section>

<section class="module content">
  <div class="parallax-container">
    <h2>OSS</h2>
    <p>聘请了我的合伙人来做代言</p>
  </div>
</section>

<div class="centered">
  <pet
    :classList="['card', 'border-right-behind', 'border-bottom-behind', 'border-left-behind']"
    href="/formEditor/introduction.html"
    img="/img/dog-cutout.png"
    title="Everright-formEditor"
    description="开源的低代码表单编辑器"
    :rotateX="10"
    :rotateY="0.8"
  />
  <pet
    :classList="['card', 'border-top-behind', 'border-left-behind']"
    href="/filter/introduction.html"
    img="/img/cat0-cutout.png"
    title="Everright-filter"
    description="一个通过用户界面轻松生成任何类型的查询语句的筛选器"
    :rotateX="-11.75"
    :rotateY="8.6"
  />
</div>

<section  class="module content">

</section>
