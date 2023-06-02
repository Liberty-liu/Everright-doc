---
layout: page
---
<script setup>
import { ref, onMounted, shallowRef, nextTick, h, resolveComponent } from 'vue'
import '../style.scss'
const angle = 20;
const lerp = (start, end, amount) => {
	return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
	const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
	return Math.min(Math.max(newValue, -newMax), newMax);
};

const updateCardRotation = (card) => {
	let currentX = parseFloat(card.style.getPropertyValue('--rotateY').slice(0, -1));
	let currentY = parseFloat(card.style.getPropertyValue('--rotateX').slice(0, -1));
	if (isNaN(currentX)) currentX = 0;
	if (isNaN(currentY)) currentY = 0;
	const x = lerp(currentX, card.dataset.rotateX, 0.05);
	const y = lerp(currentY, card.dataset.rotateY, 0.05);
	card.style.setProperty("--rotateY", x + "deg");
	card.style.setProperty("--rotateX", y + "deg");
};

const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const centerX = (rect.left + rect.right) / 2;
  const centerY = (rect.top + rect.bottom) / 2 + window.scrollY;
  const posX = event.pageX - centerX;
  const posY = event.pageY - centerY;
  const x = remap(posX, rect.width / 2, angle);
  const y = remap(posY, rect.height / 2, angle);
  event.currentTarget.dataset.rotateX = x;
  event.currentTarget.dataset.rotateY = -y;
};

const handleMouseOut = (event) => {
	event.currentTarget.dataset.rotateX = 0;
	event.currentTarget.dataset.rotateY = 0;
};

const initializeCards = () => {
	const cards = document.querySelectorAll(".card");
	cards.forEach((card) => {
		card.addEventListener("mousemove", handleMouseMove);
		card.addEventListener("mouseout", handleMouseOut);
	});
};

const update = () => {
	const cards = document.querySelectorAll(".card");
	cards.forEach(updateCardRotation);
};

onMounted(() => {
	initializeCards();
	setInterval(update, 1000 / 60);
});
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
  <a href="/en/formEditor/introduction.html" class="card border-right-behind border-bottom-behind border-left-behind">
    <div class="shadow"></div>
    <div class="image background"></div>
    <div class="image cutout" style="--url: url('/img/dog-cutout.png')"></div>
    <div class="content">
      <h2>Everright-formEditor</h2>
      <p>Open source javascript low-code editor</p>
    </div>
  </a>
  <a href="/en/filter/introduction.html" class="card border-top-behind border-left-behind">
    <div class="shadow"></div>
    <div class="image background"></div>
    <div class="image cutout" style="--url: url('/img/cat0-cutout.png')"></div>
    <div class="content">
      <h2>Everright-filter</h2>
      <p>A filter that easily generates any type of query statement through the user interface</p>
    </div>
  </a>
</div>

<section  class="module content">

</section>
