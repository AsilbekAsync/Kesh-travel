import "./main.css";
import "aos/dist/aos.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Ripple from "vue3-whr-ripple-directive";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$brand = "Kesh travel";
app.directive("ripple", Ripple);
app.mount("#app");
