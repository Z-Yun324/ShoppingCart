import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // 你未來可以在這裡新增其他頁面，例如 About
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/views/AboutPage.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
