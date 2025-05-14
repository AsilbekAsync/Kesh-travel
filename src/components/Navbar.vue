<template>
  <nav
    class="fixed w-full top-0 z-40 transition-all duration-300 backdrop-blur-3xl py-2 dark:bg-gray-900 dark:text-white text-gray-800 shadow-sm"
  >
    <div class="px-4 md:px-6">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold flex items-center">
          <span class="dark:text-primary-400 text-primary-500">
            Kesh travel
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-3">
          <a
            v-for="(link, id) in links"
            :key="id"
            :href="link.href"
            class="font-medium transition-colors px-3 py-2 hover:bg-primary-500 dark:hover:text-white hover:text-white rounded-md text-nowrap"
          >
            {{ link.name }}
          </a>

          <!-- <div class="relative lang-dropdown-container ml-2">
            <button
              @click.stop="toggleLangDropdown"
              class="p-2 rounded-md transition-colors flex items-center dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <GlobeIcon class="h-5 w-5 mr-1" />
            </button>

            <div
              v-if="isLangDropdownOpen"
              class="absolute right-0 mt-2 w-36 rounded-md shadow-lg z-10 overflow-hidden"
              :class="isDarkMode ? 'bg-gray-800' : 'bg-white'"
            >
              <div class="py-1">
                <button
                  v-for="(lang, id) in languages"
                  :key="id"
                  @click="selectLanguage(lang)"
                  class="w-full text-left px-4 py-2 text-sm transition-colors"
                  :class="[
                    currentLanguage === lang
                      ? isDarkMode
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-500 text-white'
                      : isDarkMode
                      ? 'hover:bg-gray-700'
                      : 'hover:bg-gray-100',
                  ]"
                >
                  {{ lang }}
                </button>
              </div>
            </div>
          </div>

          <button
            @click="toggleDarkMode"
            class="p-2 rounded-md transition-colors"
            :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'"
            aria-label="Toggle dark mode"
          >
            <MoonIcon v-if="!isDarkMode" class="h-5 w-5" />
            <SunIcon v-else class="h-5 w-5" />
          </button> -->
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-md transition-colors"
          :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'"
          aria-label="Toggle menu"
        >
          <Menu v-if="!isMenuOpen" class="h-6 w-6" />
          <XIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="[
        isMenuOpen ? 'max-h-screen opacity-100 py-3' : 'max-h-0 opacity-0',
        isDarkMode ? 'bg-gray-900' : 'bg-white',
      ]"
    >
      <div class="container mx-auto px-4 space-y-1">
        <a
          v-for="(link, id) in links"
          :key="id"
          :href="link.href"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
          :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </a>

        <!-- Mobile Controls -->
        <div
          class="pt-4 mt-2 border-t flex justify-between items-center"
          :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'"
        >
          <!-- Language Dropdown (Mobile) -->
          <div class="relative">
            <button
              @click.stop="toggleLangDropdown"
              class="flex items-center px-3 py-2 rounded-md transition-colors"
              :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'"
            >
              <GlobeIcon class="h-5 w-5 mr-2" />
              <span>{{ currentLanguage }}</span>
            </button>

            <div v-if="isLangDropdownOpen" class="mt-2 space-y-1 pl-10">
              <button
                v-for="(lang, id) in languages"
                :key="id"
                @click="selectLanguage(lang)"
                class="block w-full text-left py-2 px-3 rounded-md transition-colors"
                :class="[
                  currentLanguage === lang
                    ? isDarkMode
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-500 text-white'
                    : isDarkMode
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100',
                ]"
              >
                {{ lang }}
              </button>
            </div>
          </div>

          <!-- Dark Mode Toggle (Mobile) -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-md transition-colors"
            :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'"
            aria-label="Toggle dark mode"
          >
            <MoonIcon v-if="!isDarkMode" class="h-5 w-5" />
            <SunIcon v-else class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div class="fixed bottom-0 m-5 right-0 z-[500]">
    <button
      class="p-5 rounded-full text-white bg-primary-500"
      @click="toggleDarkMode"
    >
      <MoonIcon v-if="!isDarkMode" />
      <SunIcon v-else />
    </button>
  </div>
</template>
<script setup lang="ts">
import {
  Menu,
  X as XIcon,
  Globe as GlobeIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  Plane as PlaneIcon,
  Palette,
} from "lucide-vue-next";
import { ref, watch } from "vue";

// State management
const isMenuOpen = ref(false);
const isDarkMode = ref(false);
const isLangDropdownOpen = ref(false);

// Navigation links
const links = ref([
  { name: "Bosh sahifa", href: "#home" },
  { name: "Mashhur sayohatlar", href: "#hot-travels" },
  { name: "Biz haqimizda", href: "#about" },
  { name: "Galereya", href: "#gallery" },
  { name: "Turlar", href: "#tours" },
  { name: "Sharhlar", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Aloqa", href: "#contact" },
]);

// Language options
const languages = ref(["O'zbek", "Ruskiy", "English"]);
const currentLanguage = ref("O'zbek");

// Toggle functions
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) isLangDropdownOpen.value = false;
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark");
};

const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value;
};

const selectLanguage = (lang: string) => {
  currentLanguage.value = lang;
  isLangDropdownOpen.value = false;
};

const closeDropdowns = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".lang-dropdown-container")) {
    isLangDropdownOpen.value = false;
  }
};

watch(isLangDropdownOpen, (isOpen) => {
  if (isOpen) {
    setTimeout(() => {
      window.addEventListener("click", closeDropdowns);
    }, 0);
  } else {
    window.removeEventListener("click", closeDropdowns);
  }
});
</script>
