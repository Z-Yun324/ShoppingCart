import PhosphorIcons from "@phosphor-icons/vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./mock";
import router from "./router";

createApp(App).use(PhosphorIcons).use(router).use(createPinia()).mount("#app");
