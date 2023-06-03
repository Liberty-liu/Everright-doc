---
layout: page
---
<script setup>
import { ref, onMounted, shallowRef, nextTick, h, resolveComponent } from 'vue'
import pet from '../../.vitepress/theme/components/pet.vue'
</script>

<section class="module parallax parallax-1">
  <div class="parallax-container">
    <h1>Everright</h1>
    <p>I have a dog named Handsome and he is super cute.</p>
  </div>
</section>

<section class="module content">
  <div class="parallax-container">
    <h2>OSS</h2>
    <p>Hired my partner as an endorsement</p>
  </div>
</section>

<div class="centered">
  <pet
    :classList="['card', 'border-right-behind', 'border-bottom-behind', 'border-left-behind']"
    href="/formEditor/introduction.html"
    img="/img/dog-cutout.png"
    title="Everright-formEditor"
    description="Open source javascript low-code editor"
    :rotateX="10"
    :rotateY="0.8"
  />
  <pet
    :classList="['card', 'border-top-behind', 'border-left-behind']"
    href="/filter/introduction.html"
    img="/img/cat0-cutout.png"
    title="Everright-filter"
    description="A filter that easily generates any type of query statement through the user interface"
    :rotateX="-11.75"
    :rotateY="8.6"
  />
</div>

<section  class="module content">

</section>
