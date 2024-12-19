import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ItemDetails from "../views/ItemDetailsPage.vue";
import ShoppingCartPage from "../views/ShoppingCartPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/item/:id",
    name: "ItemDetails",
    component: ItemDetails,
    props: true,
  },
  {
    path: "/cart",
    name: "ShoppingCartPage",
    component: ShoppingCartPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
