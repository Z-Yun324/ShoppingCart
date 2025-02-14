<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import SellerNavbar from "./components/SellerNavbar.vue";
const route = useRoute();

// 根據當前路由來判斷是否顯示賣家後台的導航欄
const isSellerRoute = computed(() => route.name === "SellerBackend");
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="fixed top-0 left-0 w-full z-50">
      <!-- 根據路由名稱來顯示不同的導航欄 -->
      <component :is="isSellerRoute ? SellerNavbar : Navbar" />
    </div>
    <div class="mt-[4rem] lg:mt-[5rem]">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
