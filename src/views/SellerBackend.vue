<template>
  <div class="flex w-full h-full gap-4 p-4">
    <!-- Sidebar -->
    <SellerSidebar :visible="isSidebarVisible" @navigate="setActiveComponent" />

    <!-- Main Content -->
    <div class="flex w-full h-full">
      <!-- 動態顯示內容 -->
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SellerSidebar from "../components/SellerSidebar.vue";
import SellerHome from "../views/SellerHome.vue";
import SellerOrders from "../views/SellerOrders.vue";
import SellerPerformance from "../views/SellerPerformance.vue";
const componentsMap = {
  SellerHome,
  SellerOrders,
  SellerPerformance,
};

const activeComponent = ref(componentsMap.SellerHome);

const setActiveComponent = (componentName) => {
  activeComponent.value = componentsMap[componentName];
};
</script>
