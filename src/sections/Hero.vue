<script setup lang="ts">
import Aos from "aos";
import { ChevronDown, ChevronRight } from "lucide-vue-next";
import { onMounted } from "vue";
onMounted(() => {
  Aos.init();
});
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center pt-20"
  >
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img
        src="../assets/img/hero.jpg"
        alt="Sayohat manzili"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
      ></div>
    </div>

    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/40 to-transparent"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/40 to-transparent"
      ></div>
    </div>

    <div class="container mx-auto px-4 z-10 text-center">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg leading-tight"
        >
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-primary-600"
          >
            Kesh travel
          </span>
          bilan dunyoni kashf eting
        </h1>
        <p
          class="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto text-shadow"
        >
          Unutilmas sarguzashtlar va umr bo'yi esda qoladigan xotiralarni
          yarating.
        </p>
        <div class="gap-4 space-x-3">
          <a
            v-ripple="'rgb(255, 255, 255, 0.4)'"
            href="#tours"
            class="bg-primary-500 text-white font-bold py-4 px-8 rounded-md transition duration-300 group"
          >
            Turlarni ko'rish
          </a>
          <a
            v-ripple="'rgb(255, 255, 255, 0.4)'"
            href="#contact"
            class="bg-rose-500 text-white font-bold py-4 px-8 rounded-md transition duration-300"
          >
            Bog'lanish
          </a>
        </div>
      </div>
    </div>
    <!-- 
    <div class="absolute bottom-0 left-0 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="w-full h-auto"
      >
        <path
          fill="indigo"
          fill-opacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div> -->
  </section>
</template>
