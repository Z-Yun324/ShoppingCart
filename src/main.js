import PhosphorIcons from "@phosphor-icons/vue";
import axios from "axios";
import { createPinia } from "pinia";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import "./index.css";
import "./mock";
import router from "./router";

createApp(App)
  .use(PhosphorIcons)
  .use(router)
  .use(createPinia())
  .use(VueAxios, axios)
  .mount("#app");
