<script setup lang="ts">
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandTelegram,
} from "@tabler/icons-vue";
import { Plane } from "lucide-vue-next";

const socialLinks = [
  { icon: IconBrandFacebook, url: "#" },
  { icon: IconBrandTwitter, url: "#" },
  { icon: IconBrandInstagram, url: "#" },
  { icon: IconBrandTelegram, url: "#" },
];

const quickLinks = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Biz haqimizda", href: "#about" },
  { label: "Turlar", href: "#tours" },
  { label: "Galereya", href: "#gallery" },
  { label: "Sharhlar", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Aloqa", href: "#contact" },
];

const popularDestinations = [
  "Bali, Indoneziya",
  "Parij, Fransiya",
  "Santorini, Gretsiya",
  "Tokio, Yaponiya",
  "Nyu-York, AQSH",
  "Maldiv orollari",
  "Venetsiya, Italiya",
];
</script>

<template>
  <footer
    id="footer"
    class="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden"
  >
    <!-- Decorative Background Blobs -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        class="absolute top-20 right-20 w-64 h-64 bg-primary-500 rounded-full opacity-5"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-64 h-64 bg-secondary-500 rounded-full opacity-5"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand & Socials -->
        <div data-aos="fade-up" data-aos-delay="100">
          <a href="#" class="inline-block mb-6">
            <div class="flex items-center">
              <span class="bg-gradient-primary text-white p-2 rounded-lg mr-2">
                <Plane class="h-5 w-5 text-primary-500 animate-float" />
              </span>
              <span class="text-2xl font-bold bg-clip-text text-primary-500">
                Kesh travel
              </span>
            </div>
          </a>
          <p class="text-gray-400 mb-6">
            Brand Sayohat Agentligi 2008 yildan beri unutilmas sayohat
            tajribalarini yaratib kelmoqda. Bizning vazifamiz sizga dunyoni
            qulaylik va uslubda kashf etishga yordam berishdir.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.url"
              class="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <component :is="link.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-xl font-bold mb-6">Tezkor havolalar</h4>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Popular Destinations -->
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 class="text-xl font-bold mb-6">Mashhur yo'nalishlar</h4>
          <ul class="space-y-3">
            <li v-for="(place, index) in popularDestinations" :key="index">
              <a
                href="#hot-travels"
                class="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {{ place }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div data-aos="fade-up" data-aos-delay="400">
          <h4 class="text-xl font-bold mb-6">Yangiliklar</h4>
          <p class="text-gray-400 mb-4">
            Eng so'nggi sayohat takliflari va yangilanishlarni olish uchun
            yangiliklarimizga obuna bo'ling.
          </p>
          <form id="newsletter-form" class="mb-4">
            <div class="flex">
              <input
                type="email"
                placeholder="Elektron pochta manzilingiz"
                class="w-full px-4 py-3 rounded-l-lg bg-transparent text-white focus:outline-none border-2 border-r-0 border-gray-500 focus:border-primary-500"
              />
              <button
                type="submit"
                class="bg-gradient-primary hover:opacity-90 px-4 py-3 rounded-r-lg transition"
              >
                <Plane class="w-5 h-5" />
              </button>
            </div>
          </form>
          <p class="text-gray-400 text-sm">
            Biz sizning maxfiyligingizni hurmat qilamiz. Sizning
            ma'lumotlaringiz biz bilan xavfsiz.
          </p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-400 mb-4">
          &copy; 2025 Brand Sayohat. Barcha huquqlar himoyalangan.
        </p>
        <div class="flex justify-center space-x-6 text-sm text-gray-500">
          <a href="#" class="hover:text-gray-400 transition-colors"
            >Maxfiylik siyosati</a
          >
          <a href="#" class="hover:text-gray-400 transition-colors"
            >Foydalanish shartlari</a
          >
          <a href="#" class="hover:text-gray-400 transition-colors"
            >Cookie siyosati</a
          >
        </div>
        <p class="text-gray-600 mt-4 text-sm">
          Dasturchi:
          <a
            href="https://t.me/Async_Boy"
            target="_blank"
            class="text-primary-400 hover:text-primary-300 transition-colors"
          >
            Kamoliddinov Asilbek
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
