<template>
  <section
    id="faq"
    class="py-20 relative overflow-hidden bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950"
  >
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <span
          class="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-3"
        >
          FAQ
        </span>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Tez-tez so'raladigan savollar
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Sayohat xizmatlarimiz haqidagi umumiy savollarga javoblarni toping
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transition-all"
          :style="{ transitionDelay: `${index * 50}ms` }"
        >
          <button
            class="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            @click="toggle(index)"
          >
            <div class="flex items-start space-x-3">
              <HelpCircle class="w-5 h-5 mt-1 text-primary-500" />
              <span class="font-medium text-gray-900 dark:text-white text-lg">
                {{ faq.question }}
              </span>
            </div>
            <ChevronDown
              class="w-5 h-5 text-primary-500 transform transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
            />
          </button>
          <div
            v-show="openIndex === index"
            class="px-5 pb-5 text-gray-600 dark:text-gray-300"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center" data-aos="fade-up">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Hali ham savollaringiz bormi? Mijozlarni qo'llab-quvvatlash jamoamiz
          bilan bog'laning.
        </p>
        <a
          href="#contact"
          class="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
        >
          Biz bilan bog'laning
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDown, HelpCircle } from "lucide-vue-next";

const openIndex = ref(null);
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const faqs = [
  {
    question: "Brand Sayohat bilan turni qanday band qilaman?",
    answer:
      "Biz bilan turni band qilish juda oson! Siz veb-saytimiz orqali to'g'ridan-to'g'ri o'zingiz xohlagan turni tanlab, 'Hozir band qilish' tugmasini bosish orqali band qilishingiz mumkin...",
  },
  {
    question: "Tur paketlaringizga nimalar kiradi?",
    answer:
      "Bizning tur paketlarimizga odatda turar joy, manzil ichidagi transport, yo'l ko'rsatuvchi bilan ekskursiyalar...",
  },
];
</script>
