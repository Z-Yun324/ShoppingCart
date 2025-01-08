<template>
  <div class="p-4 gap-4 lg:flex">
    <!-- Sidebar -->
    <SellerSidebar :visible="isSidebarVisible" @navigate="setActiveComponent" />

    <!-- Main Content -->
    <div class="lg:w-full lg:ml-64 px-6 py-8">
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
