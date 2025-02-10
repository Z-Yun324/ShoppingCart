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
import SellerAddProducts from "./SellerAddProducts.vue";
import SellerProductManagement from "./SellerProductManagement.vue";
// 使用 markRaw 包裝所有組件
const componentsMap = {
  SellerHome,
  SellerOrders,
  SellerPerformance,
  SellerAddProducts,
  SellerProductManagement,
};

const activeComponent = ref(componentsMap.SellerHome);

const setActiveComponent = (componentName) => {
  activeComponent.value = componentsMap[componentName];
};

// 控制 Sidebar 顯示/隱藏
const isSidebarVisible = ref(true); // 假設 Sidebar 預設顯示
</script>
