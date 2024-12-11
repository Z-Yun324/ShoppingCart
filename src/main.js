import PhosphorIcons from "@phosphor-icons/vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./mock";
import router from "./router";

createApp(App).use(PhosphorIcons).use(router).mount("#app");
