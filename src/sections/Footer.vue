<script setup lang="ts">
import { PlaneIcon } from "lucide-vue-next";
</script>

<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
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
        <div data-aos="fade-up" data-aos-delay="100">
          <a href="#" class="inline-block mb-6">
            <div class="flex items-center">
              <span class="bg-gradient-primary text-white p-2 rounded-lg mr-2">
                <PlaneIcon class="h-5 w-5 text-primary-500 animate-float" />
              </span>
              <span class="text-2xl font-bold bg-clip-text text-primary-500">
                Kesh travel
              </span>
            </div>
          </a>
          <p class="text-gray-400 mb-6">
            Brand Sayohat A gentligi 2008 yildan beri unutilmas sayohat
            tajribalarini yaratib kelmoqda. Bizning vazifamiz sizga dunyoni
            qulaylik va uslubda kashf etishga yordam berishdir.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <i class="fab fa-telegram"></i>
            </a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-xl font-bold mb-6">Tezkor havolalar</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="#home"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Bosh sahifa</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Biz haqimizda</a
              >
            </li>
            <li>
              <a
                href="#tours"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Turlar</a
              >
            </li>
            <li>
              <a
                href="#gallery"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Galereya</a
              >
            </li>
            <li>
              <a
                href="#testimonials"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Sharhlar</a
              >
            </li>
            <li>
              <a
                href="#faq"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Aloqa</a
              >
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h4 class="text-xl font-bold mb-6">Mashhur yo'nalishlar</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Bali, Indoneziya</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Parij, Fransiya</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Santorini, Gretsiya</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Tokio, Yaponiya</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Nyu-York, AQSH</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Maldiv orollari</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-primary-400 transition-colors"
                >Venetsiya, Italiya</a
              >
            </li>
          </ul>
        </div>

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
                class="w-full px-4 py-3 rounded-l-lg focus:outline-none text-gray-800 border-2 border-r-0 border-primary-500"
              />
              <button
                type="submit"
                class="bg-gradient-primary hover:opacity-90 px-4 py-3 rounded-r-lg transition"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
          <p class="text-gray-400 text-sm">
            Biz sizning maxfiyligingizni hurmat qilamiz. Sizning
            ma'lumotlaringiz biz bilan xavfsiz.
          </p>
        </div>
      </div>

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
            class="text-primary-400 hover:text-primary-300 transition-colors"
            >Kamoliddinov Asilbek</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
