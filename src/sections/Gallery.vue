<script setup>
import { ref, computed } from "vue";
import AbuDabi from "../assets/img/tours/abu-dabi-desert.jpeg";
import Amazon from "../assets/img/tours/amazon-forest.jpeg";
import Avtralia from "../assets/img/tours/avtralia.jpeg";
import Bal from "../assets/img/tours/bal.jpeg";
import Fijiisland from "../assets/img/tours/fijiisland.jpeg";
import Greeceisland from "../assets/img/tours/greeceisland.jpeg";
import Italy from "../assets/img/tours/italy.jpeg";
import Lakebayka from "../assets/img/tours/lakebayka.jpeg";
import Magi from "../assets/img/tours/magi.jpeg";
import Maldiv from "../assets/img/tours/Maldiv-Sohillar.jpeg";
import Misr from "../assets/img/tours/misr.jpeg";
import Morakko from "../assets/img/tours/morakko.jpeg";
import NewYork from "../assets/img/tours/new-york.jpeg";
import Paris from "../assets/img/tours/paris.jpeg";
import Samarkand from "../assets/img/tours/samarkand.jpeg";
import Toshkent from "../assets/img/tours/toshkent.jpeg";
import Xiva from "../assets/img/tours/xiva.jpeg";

const allItems = ref([
  {
    img: AbuDabi,
    title: "Abu-dabi-desert",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Amazon,
    title: "Amazon-forest",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Avtralia,
    title: "Avtralia",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Bal,
    title: "Bal",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Fijiisland,
    title: "Fijiisland",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Greeceisland,
    title: "Greeceisland",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Italy,
    title: "Italy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Lakebayka,
    title: "Lakebayka",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Magi,
    title: "Magi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Maldiv,
    title: "Maldiv",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Misr,
    title: "Misr",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Morakko,
    title: "Morakko",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: NewYork,
    title: "New-york",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Paris,
    title: "Paris",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Samarkand,
    title: "Samarkand",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Toshkent,
    title: "Toshkent",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
  {
    img: Xiva,
    title: "Xiva",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero.",
  },
]);

const visibleCount = ref(4);

const visibleItems = computed(() =>
  allItems.value.slice(0, visibleCount.value)
);

const loadMore = () => {
  visibleCount.value += 4;
};
</script>

<template>
  <section id="gallery" class="py-20 bg-white dark:bg-gray-900 relative">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span
          class="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-3"
          >GALEREYA</span
        >
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Bizning sayohat galereyamiz
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Sayohat galereyamiz orqali dunyo bo'ylab ajoyib manzillarni kashf
          eting
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="(item, index) in visibleItems"
          :key="index"
          class="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative"
          data-aos="zoom-in"
          :data-aos-delay="(index % 4) * 100"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
          >
            <div
              class="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 class="text-white text-lg font-semibold">
                {{ item.title || "Image title" }}
              </h3>
              <p class="text-gray-300 text-sm">
                {{
                  item.desc ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero."
                }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div
        class="text-center mt-12"
        v-if="visibleItems.length < allItems.length"
      >
        <button
          @click="loadMore"
          class="bg-gradient-to-r from-blue-500 to-primary-600 hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:shadow-lg"
        >
          Ko'proq yuklash
        </button>
      </div>
    </div>
  </section>
</template>
