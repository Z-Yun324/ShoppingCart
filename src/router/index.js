import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ItemDetails from "../views/ItemDetailsPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import SellerBackend from "../views/SellerBackend.vue";
import SellerHome from "../views/SellerHome.vue";
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
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    props: true,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    props: true,
  },
  {
    path: "/seller-backend",
    name: "SellerBackend",
    component: SellerBackend,
    props: true,
  },
  { path: "/seller-home", component: SellerHome },
  // { path: "/seller-orders", component: OrderManagement },
  // { path: "/seller-performance", component: Performance },
  // { path: "/seller-add-product", component: AddProduct },
  // { path: "/seller-product-management", component: ProductManagement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
