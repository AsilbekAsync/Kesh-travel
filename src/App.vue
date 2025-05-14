<script setup>
import { RouterView } from "vue-router";
import { onMounted, onUnmounted } from "vue";
const sectionIds = [
  "home",
  "about",
  "faq",
  "contact",
  "gallery",
  "testimonials",
  "hot-travels",
  "tours",
  "footer",
];

const updateHashOnScroll = () => {
  let closestSection = null;
  let minDistance = window.innerHeight;

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (distance < minDistance && rect.top < window.innerHeight) {
        closestSection = id;
        minDistance = distance;
      }
    }
  });

  if (closestSection && window.location.hash !== `#${closestSection}`) {
    history.replaceState(null, "", `#${closestSection}`);
  }
};

onMounted(() => {
  setTimeout(() => {
    const hash = window.location.hash;
    console.log(hash);
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        console.log(hash);
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 1000);
  window.addEventListener("scroll", updateHashOnScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateHashOnScroll);
});
</script>

<template>
  <div class="min-h-full min-w-full bg-white"></div>
  <RouterView />
</template>
