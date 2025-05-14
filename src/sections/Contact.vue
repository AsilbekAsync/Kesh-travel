<template>
  <section
    id="contact"
    class="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
  >
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        class="absolute top-20 right-20 w-64 h-64 bg-primary-500 rounded-full opacity-5 animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-64 h-64 bg-gray-500 rounded-full opacity-5 animate-pulse-slow"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <span
          class="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-3"
          >ALOQA</span
        >
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Biz bilan bog'laning
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Savollaringiz bormi yoki keyingi sarguzashtingizni
          rejalashtirmoqchimisiz? Sayohat mutaxassislarimiz bilan bog'laning.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div
          class="bg-primary-500 text-white rounded-2xl p-8 shadow-xl"
          data-aos="fade-right"
        >
          <h3 class="text-2xl font-bold mb-6">Bog'lanish</h3>
          <div class="space-y-6">
            <div
              class="flex items-start"
              v-for="(info, index) in contactInfo"
              :key="index"
            >
              <div class="mr-4 mt-1 bg-white bg-opacity-20 p-3 rounded-full">
                <i :class="info.icon" class="text-xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-1">{{ info.title }}</h4>
                <p v-for="(line, i) in info.details" :key="i">{{ line }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h4 class="text-xl font-semibold mb-4">Bizni kuzating</h4>
            <div class="flex space-x-4">
              <a
                v-for="(link, index) in socialLinks"
                :key="index"
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          data-aos="fade-left"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Xabar yuboring
          </h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="full-name"
                  class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >To'liq ism</label
                >
                <input
                  v-model="form.fullName"
                  type="text"
                  id="full-name"
                  class="input"
                  placeholder="Akmal Rahimov"
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >Elektron pochta</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  class="input"
                  placeholder="akmal@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                for="phone"
                class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >Telefon raqami</label
              >
              <input
                v-model="form.phone"
                type="tel"
                id="phone"
                class="input"
                placeholder="+998 90 123 4567"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >Mavzu</label
              >
              <select
                v-model="form.subject"
                id="subject"
                class="input"
                required
              >
                <option value="" disabled selected>Mavzuni tanlang</option>
                <option value="general">Umumiy so'rov</option>
                <option value="booking">Band qilish ma'lumoti</option>
                <option value="package">Tur paketi</option>
                <option value="support">Mijozlarni qo'llab-quvvatlash</option>
                <option value="feedback">Fikr-mulohaza</option>
                <option value="other">Boshqa</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >Xabar</label
              >
              <textarea
                v-model="form.message"
                id="message"
                rows="5"
                class="input"
                placeholder="Xabaringizni bu yerga yozing..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-primary-500 hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Xabar yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form yuborildi:", form.value);
  // Here you can send form.value via fetch/axios to your backend
  alert("Xabaringiz yuborildi!");
};

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Bizning manzil",
    details: ["123 Sayohat ko'chasi, Toshkent, O'zbekiston"],
  },
  {
    icon: "fas fa-phone-alt",
    title: "Telefon raqami",
    details: ["+998 (90) 123-4567", "+998 (90) 987-6543"],
  },
  {
    icon: "fas fa-envelope",
    title: "Elektron pochta",
    details: ["info@brandsayohat.uz", "qollab-quvvatlash@brandsayohat.uz"],
  },
  {
    icon: "fas fa-clock",
    title: "Ish vaqti",
    details: [
      "Dushanba - Juma: 9:00 - 18:00",
      "Shanba: 10:00 - 16:00",
      "Yakshanba: Yopiq",
    ],
  },
];

const socialLinks = [
  { href: "#", icon: "fab fa-facebook-f" },
  { href: "#", icon: "fab fa-twitter" },
  { href: "#", icon: "fab fa-instagram" },
  { href: "#", icon: "fab fa-telegram" },
];
</script>

<style scoped>
.input {
  @apply w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white;
}
</style>
