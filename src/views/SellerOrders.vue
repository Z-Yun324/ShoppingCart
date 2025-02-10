<template>
  <div class="w-full h-screen">
    <div role="tablist" class="tabs tabs-lifted w-full">
      <!-- Tab 1 -->
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="全部"
        v-model="selectedTab"
        :value="1"
      />
      <div
        v-show="selectedTab === 1"
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Tab1 />
      </div>

      <!-- Tab 2 -->
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="待確認"
        v-model="selectedTab"
        :value="2"
      />
      <div
        v-show="selectedTab === 2"
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Tab2 />
      </div>

      <!-- Tab 3 -->
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="待出貨"
        v-model="selectedTab"
        :value="3"
      />
      <div
        v-show="selectedTab === 3"
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Tab3 />
      </div>

      <!-- Tab 4 -->
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="運送中"
        v-model="selectedTab"
        :value="4"
      />
      <div
        v-show="selectedTab === 4"
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Tab4 />
      </div>

      <!-- Tab 5 -->
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="已完成"
        v-model="selectedTab"
        :value="5"
      />
      <div
        v-show="selectedTab === 5"
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Tab5 />
      </div>

      <!-- Tab 6 -->
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="取消"
        v-model="selectedTab"
        :value="6"
      />
      <div
        v-show="selectedTab === 6"
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Tab6 />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tab1 from "../components/Tab1All.vue";
import Tab2 from "../components/Tab2Confirmed.vue";
import Tab3 from "../components/Tab3Shipment.vue";
import Tab4 from "../components/Tab4Shipping.vue";
import Tab5 from "../components/Tab5Completed.vue";
import Tab6 from "../components/Tab6Cancel.vue";
const selectedTab = ref(1); // 預設選中 Tab 1
</script>
