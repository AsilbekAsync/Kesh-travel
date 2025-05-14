<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
  >
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        class="absolute top-10 left-10 w-40 h-40 bg-primary-500 rounded-full opacity-10 animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-60 h-60 bg-secondary-500 rounded-full opacity-10 animate-pulse-slow"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div data-aos="fade-right">
          <span
            class="inline-block py-1 uppercase px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-3"
          >
            Biz haqimizda
          </span>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span class="text-primary-500">{{ $brand }}</span> Sayohat Agentligi
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Brand Sayohat 15 yildan ortiq vaqt davomida ajoyib sayohat
            tajribalarini taqdim etib kelmoqda. Bizning vazifamiz mijozlarimizni
            ilhomlantiruvchi, ma'rifiy va o'zgartiruvchi unutilmas sayohatlarni
            yaratishdir.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            100 dan ortiq mamlakatlarni tashrif buyurgan tajribali sayohat
            maslahatchilari jamoasi bilan biz sizning qiziqishlaringiz,
            afzalliklaringiz va byudjetingizga mos keladigan shaxsiy
            yo'nalishlarni ishlab chiqamiz.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Biz sayohat yangi joylarga tashrif buyurishdan ko'proq narsa
            ekanligiga ishonamiz — bu aloqalarni o'rnatish, turli madaniyatlarni
            tushunish va umr bo'yi davom etadigan xotiralarni yaratish haqida.
          </p>

          <!-- Features List -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-start"
            >
              <div
                class="flex-shrink-0 mt-1 bg-primary-100 dark:bg-primary-900 rounded-full p-1"
              >
                <i
                  class="fas fa-check text-primary-600 dark:text-primary-400"
                ></i>
              </div>
              <span class="ml-3 text-gray-700 dark:text-gray-300">
                {{ feature }}
              </span>
            </div>
          </div>

          <a
            href="#!"
            class="inline-flex items-center bg-primary-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:bg-primary-700"
          >
            <ChevronRight class="h-5 w-5 inline me-2" />
            <span> Batafsil ma'lumot </span>
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <!-- Images -->
        <div class="relative" data-aos="fade-left">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div
                v-for="(img, index) in leftImages"
                :key="'left-' + index"
                class="relative rounded-2xl overflow-hidden shadow-lg"
                :class="index === 0 ? 'h-64' : 'h-40'"
              >
                <img
                  :src="img.src"
                  :alt="img.alt"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                ></div>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div
                v-for="(img, index) in rightImages"
                :key="'right-' + index"
                class="relative rounded-2xl overflow-hidden shadow-lg"
                :class="index === 0 ? 'h-40' : 'h-64'"
              >
                <img
                  :src="img.src"
                  :alt="img.alt"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-full opacity-20 z-0"
          ></div>
          <div
            class="absolute -top-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20 z-0"
          ></div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
            :data-aos="'fade-up'"
            :data-aos-delay="(index + 1) * 100"
          >
            <div
              class="text-primary-600 dark:text-primary-400 text-4xl font-bold mb-2"
            >
              {{ stat.value }}
            </div>
            <div class="text-gray-700 dark:text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRight } from "lucide-vue-next";
import Placeholder from "../assets/img/placeholder.jpg";
import Placeholder2 from "../assets/img/placeholder2.jpg";

const features = [
  "Shaxsiylashtirilgan sayohat rejalari",
  "24/7 mijozlarni qo'llab-quvvatlash",
  "Eng yaxshi narx kafolati",
  "Tajribali mahalliy yo'l ko'rsatuvchilar",
];

const stats = [
  { value: "15+", label: "Yillik tajriba" },
  { value: "10k+", label: "Mamnun mijozlar" },
  { value: "100+", label: "Yo'nalishlar" },
  { value: "4.9", label: "O'rtacha reyting" },
];

const leftImages = [
  {
    src: Placeholder,
    alt: "Bizning jamoa",
  },
  {
    src: Placeholder2,
    alt: "Bizning ofis",
  },
];

const rightImages = [
  {
    src: Placeholder2,
    alt: "Sayohat rejalashtirish",
  },
  {
    src: Placeholder,
    alt: "Sarguzasht",
  },
];
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(to right, #3b82f6, #06b6d4);
}
</style>
