<template>
  <section
    id="testimonials"
    class="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
  >
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        class="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full opacity-5 animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-64 h-64 bg-secondary-500 rounded-full opacity-5 animate-pulse-slow"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <span
          class="inline-block uppercase py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-3"
        >
          Mijozlar fikri
        </span>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Mijozlarimiz nima deyishadi
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Sayohat xizmatlarimizdan foydalangan mamnun mijozlarimizning
          sharhlarini o'qing
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg relative pattern"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="flex items-center mb-6">
            <img
              :src="testimonial.image"
              alt="Mijoz"
              class="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-500"
            />
            <div>
              <h4 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ testimonial.name }}
              </h4>
              <div class="flex text-yellow-500 mt-1">
                <Star
                  fill="#eab308"
                  v-for="i in Math.floor(testimonial.rating)"
                  :key="i"
                  class="w-5 h-5"
                />
                <StarHalf
                  fill="#eab308"
                  v-if="testimonial.rating % 1 !== 0"
                  class="w-5 h-5"
                />
              </div>
            </div>
          </div>
          <p
            class="text-gray-600 dark:text-gray-300 text-lg italic relative z-10"
          >
            {{ testimonial.text }}
          </p>
          <div class="mt-4 text-gray-500 dark:text-gray-400">
            {{ testimonial.location }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Star, StarHalf } from "lucide-vue-next";
import Farida from "../assets/img/people/Farida.jpg";
import Javlon from "../assets/img/people/Javlon.jpg";
import Muhammad from "../assets/img/people/Muhammad.jpg";

const testimonials = [
  {
    name: "Farida Karimova",
    location: "Toshkent, O'zbekiston",
    rating: 5,
    image: Farida,
    text: `Baliga sayohatimiz mutlaqo ajoyib edi! Kesh travel Sayohat Agentligi parvozlardan tortib turar joy va faoliyatlargacha hamma narsani o'z zimmasiga oldi. Mahalliy yo'l ko'rsatuvchilar bilimdon va do'stona edi. Ular bilan keyingi sarguzashtimizni band qilishni intiqlik bilan kutamiz!`,
  },
  {
    name: "Akmal Rahimov",
    location: "Samarqand, O'zbekiston",
    rating: 4.5,
    image: Muhammad,
    text: `Men oldin ko'p agentliklar bilan sayohat qilganman, lekin Kesh travel Sayohat o'zining ajoyib xizmati va tafsilotlarga e'tibori bilan ajralib turadi. Oilaviy Yaponiya sayohatimiz muammosiz o'tdi va ular taklif qilgan mahalliy yo'l ko'rsatuvchilar bilimdon va do'stona edi. Juda tavsiya qilaman!`,
  },
  {
    name: "Javlon Azizov",
    location: "Buxoro, O'zbekiston",
    rating: 5,
    image: Javlon,
    text: `Kesh travel Sayohat turmush o'rtog'im uchun to'y yildonumiga ajoyib sayohat rejalashtirdi va u kutganimizdan ham yaxshiroq bo'ldi! Ularning jamoasi javob beruvchi, ijodkor va byudjetim doirasida ishladi. Santorinida ular tashkil qilgan shaxsiy quyosh botishi kechki ovqati sayohatimizning eng yorqin lahzasi edi!`,
  },
];
</script>
