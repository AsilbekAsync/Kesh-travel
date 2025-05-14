<template>
  <section
    id="hot-travels"
    class="py-20 bg-gray-100 dark:bg-gray-900 relative min-h-full"
  >
    <div class="absolute top-0 right-0 -mt-12 opacity-10 dark:opacity-5">
      <PlaneIcon
        class="w-12 h-12 text-primary-600 dark:text-primary-400 transform rotate-45 me-16"
      />
    </div>
    <div class="container mx-auto px-4 max-sm:px-2">
      <div class="text-center mb-16" data-aos="fade-up">
        <span
          class="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-3"
        >
          ENG MASHHUR
        </span>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Mashhur sayohat yo'nalishlari
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Eng mashhur sayohat paketlari va yo'nalishlarini kashf eting.
          Joyingizni band qilish uchun hoziroq buyurtma bering!
        </p>
      </div>

      <div class="mx-8">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 p-4 max-sm:p-1"
        >
          <div
            v-for="(travel, index) in filteprimaryTravels"
            :key="index"
            class="w-full"
            :data-aos="'fade-up'"
            :data-aos-delay="50 * (index + 1)"
          >
            <div
              class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-md transition duration-300 h-full"
            >
              <div class="relative">
                <img
                  :src="travel.image"
                  :alt="travel.title"
                  class="w-full h-56 object-cover"
                />
                <div
                  v-if="travel.badge"
                  class="absolute top-4 right-4 py-1 px-3 text-xs font-bold rounded-full"
                  :class="travel.badgeClass"
                >
                  {{ travel.badge }}
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-center mb-3">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ travel.title }}
                  </h3>
                  <div class="flex items-center">
                    <span
                      class="text-primary-600 dark:text-primary-400 font-bold text-lg"
                      >{{ travel.price }}</span
                    >
                    <span
                      v-if="travel.originalPrice"
                      class="text-gray-500 dark:text-gray-400 text-sm line-through ml-2"
                    >
                      {{ travel.originalPrice }}
                    </span>
                  </div>
                </div>
                <div
                  class="flex items-center text-gray-600 dark:text-gray-300 mb-3"
                >
                  <Calendar
                    class="w-5 h-5 text-primary-500 dark:text-primary-400 me-2"
                  />
                  <span>{{ travel.duration }}</span>
                </div>
                <div
                  class="flex items-center text-gray-600 dark:text-gray-300 mb-3"
                >
                  <StarIcon
                    class="h-5 w-5 text-yellow-500 dark:text-yellow-400 me-2"
                  />
                  <span>{{ travel.rating }}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  {{
                    travel.description ||
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, repudiandae. Iste rerum expedita pariatur quos
                  necessitatibus corrupti enim alias repellat non?`
                  }}
                </p>
                <a
                  v-ripple="'rgb(255, 255, 255, 0.4)'"
                  href="#!"
                  class="block text-center bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 text-white font-medium py-2 px-4 rounded transition"
                >
                  Hozir band qilish
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 flex justify-center">
          <button
            @click="loadMore"
            v-if="currentIndex < 4"
            class="bg-gradient-to-r from-blue-500 to-primary-600 hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:shadow-lg"
          >
            Ko'proq turlar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PlaneIcon, StarIcon, Calendar } from "lucide-vue-next";
import { computed, ref } from "vue";
import AbuDabi from "../assets/img/tours/abu-dabi-desert.jpeg";
import Paris from "../assets/img/tours/paris.jpeg";
import Maldiv from "../assets/img/tours/maldiv.jpeg";
import NewYork from "../assets/img/tours/new-york.jpeg";
import LakeBayka from "../assets/img/tours/lakebayka.jpeg";
import Misr from "../assets/img/tours/misr.jpeg";
import Amazonka from "../assets/img/tours/amazon-forest.jpeg";
import Italiya from "../assets/img/tours/italy.jpeg";
import Xiva from "../assets/img/tours/xiva.jpeg";
import Samarqand from "../assets/img/tours/samarkand.jpeg";

const travels = [
  {
    title: "Abu Dabi",
    price: "$899",
    originalPrice: "$1050",
    duration: "7 kun / 6 kecha",
    rating: "4.8 (120 sharh)",
    description: "",
    image: AbuDabi,
    badge: "-15%",
    badgeClass:
      "bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400",
  },
  {
    title: "Parij romantikasi",
    price: "$1,299",
    duration: "5 kun / 4 kecha",
    rating: "4.7 (98 sharh)",
    description: undefined,
    image: Paris,
  },
  {
    title: "Maldiv hashamati",
    price: "$2,499",
    duration: "8 kun / 7 kecha",
    rating: "4.9 (156 sharh)",
    description: undefined,
    image: Maldiv,
    badge: "YANGI",
    badgeClass: "bg-primary-500 text-white",
  },
  {
    title: "Nyu-York shahri",
    price: "$1,199",
    duration: "6 kun / 5 kecha",
    rating: "4.6 (87 sharh)",
    description: undefined,
    image: NewYork,
  },
  {
    title: "Lakebayka",
    price: "$1,599",
    duration: "7 kun / 6 kecha",
    rating: "4.8 (134 sharh)",
    description: undefined,
    image: LakeBayka,
  },
  {
    title: "Misr",
    price: "$1,399",
    originalPrice: "$1750",
    duration: "6 kun / 5 kecha",
    rating: "4.9 (145 sharh)",
    description: undefined,
    image: Misr,
    badge: "-20%",
    badgeClass:
      "bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400",
  },
  {
    title: "Amazonka",
    price: "$999",
    duration: "5 kun / 4 kecha",
    rating: "4.7 (110 sharh)",
    description: undefined,
    image: Amazonka,
    badge: "-10%",
    badgeClass: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900",
  },
  {
    title: "Roma tarixiy sayohati",
    price: "$1,099",
    duration: "5 kun / 4 kecha",
    rating: "4.6 (102 sharh)",
    description: undefined,
    image: Italiya,
  },
  {
    title: "Xivaga sayohat",
    price: "$899",
    originalPrice: "$1050",
    duration: "6 kun / 5 kecha",
    rating: "4.7 (91 sharh)",
    description: undefined,
    image: Xiva,
    badge: "-15%",
    badgeClass: "bg-green-100 text-green-800 dark:bg-green-900",
  },
  {
    title: "Samarqand",
    price: "$1,499",
    duration: "7 kun / 6 kecha",
    rating: "4.9 (130 sharh)",
    description: undefined,
    image: Samarqand,
    badge: "LIMITED",
    badgeClass: "bg-indigo-600 text-white",
  },
];

const currentIndex = ref(4);

const loadMore = () => {
  if (currentIndex.value < 4) {
    currentIndex.value += 4;
  }
};

const filteprimaryTravels = computed(() => {
  return travels.slice(0, currentIndex.value);
});
</script>
