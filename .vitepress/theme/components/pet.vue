<template>
  <tagName ref="cardRef" :href="href" :class="classList" :data-rotate-x="rotateX" :data-rotate-y="rotateY">
    <div class="shadow"></div>
    <div class="image background"></div>
<!--    <div class="image cutout" :style="{'&#45;&#45;url': `url('${img}')`}"></div>-->
    <div class="image cutout" :style="{'background': `url('${img}')`}"></div>
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </tagName>
</template>
<script setup>
import { defineProps, onMounted, ref, onBeforeUnmount, resolveComponent, reactive } from 'vue'
const props = defineProps({
  href: {
    type: String
  },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  classList: {
    type: Array
  },
  rotateX: {
    type: Number,
    default: 0
  },
  rotateY: {
    type: Number,
    default: 0
  }
})
const tagName = props.href ? 'a' : 'div'
const cardRef = ref('')
const angle = 20;
let timer = null;

const lerp = (start, end, amount) => (1 - amount) * start + amount * end;

const remap = (value, oldMax, newMax) => {
  const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
  return Math.min(Math.max(newValue, -newMax), newMax);
};

const updateCardRotation = () => {
  const card = cardRef.value;
  let currentX = parseFloat(card.style.getPropertyValue('--rotateY').slice(0, -1)) || 0;
  let currentY = parseFloat(card.style.getPropertyValue('--rotateX').slice(0, -1)) || 0;
  const x = lerp(currentX, card.dataset.rotateX, 0.05);
  const y = lerp(currentY, card.dataset.rotateY, 0.05);
  card.style.setProperty("--rotateY", `${x}deg`);
  card.style.setProperty("--rotateX", `${y}deg`);
};

const handleMouseMove = (event) => {
  const rect = cardRef.value.getBoundingClientRect();
  const centerX = (rect.left + rect.right) / 2;
  const centerY = (rect.top + rect.bottom) / 2 + window.scrollY;
  const posX = event.pageX - centerX;
  const posY = event.pageY - centerY;
  const x = remap(posX, rect.width / 2, angle);
  const y = remap(posY, rect.height / 2, angle);
  cardRef.value.dataset.rotateX = x;
  cardRef.value.dataset.rotateY = -y;
};

const handleMouseOut = () => {
  cardRef.value.dataset.rotateX = 0;
  cardRef.value.dataset.rotateY = 0;
};

const initializeCards = () => {
  cardRef.value.addEventListener("mousemove", handleMouseMove);
  cardRef.value.addEventListener("mouseout", handleMouseOut);
};

const update = () => {
  updateCardRotation();
};

onBeforeUnmount(() => {
  clearInterval(timer);
});

onMounted(() => {
  initializeCards();
  timer = setInterval(update, 1000 / 60);
});

</script>
