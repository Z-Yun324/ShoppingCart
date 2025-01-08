<template>
  <div class="navbar flex bg-base-100 shadow-lg">
    <div class="navbar-start">
      <router-link to="/seller-backend">
        <a class="btn btn-ghost text-xl">賣家中心</a>
      </router-link>
    </div>
    <div class="navbar-center hidden lg:flex"></div>
    <div class="navbar-end flex">
      <div
        class="flex items-center space-x-2 mr-2 transition-all duration-300 opacity-0 scale-95"
        :class="{
          'opacity-100 scale-100': showSearch,
          'opacity-0 scale-95': !showSearch,
        }"
        v-show="showSearch"
      >
        <label
          class="input input-bordered flex items-center gap-2 w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="搜尋商品"
            class="grow"
            v-model="searchQuery"
            @keyup.enter="performSearch"
            aria-label="搜尋商品"
            aria-live="polite"
          />
          <PhMagnifyingGlass :size="20" @click="performSearch" />
        </label>
      </div>
      <div
        tabindex="0"
        role="button"
        class="btn btn-ghost p-2 rounded-full hover:bg-base-200 focus:outline-none"
        @click="toggleSearch"
        :aria-expanded="showSearch ? 'true' : 'false'"
        aria-label="切換搜尋框"
      >
        <PhMagnifyingGlass :size="32" />
      </div>

      <router-link to="/">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <PhUser :size="32" /></div
      ></router-link>
    </div>
  </div>
</template>

<!--JS/TS-->
<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "../stores/cartStore";
const cartStore = useCartStore();

const showSearch = ref(false); // 控制搜尋框的顯示與隱藏
const searchQuery = ref(""); // 搜尋框中的內容

// 切換搜尋框顯示
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

// 執行搜尋邏輯
const performSearch = () => {
  if (searchQuery.value.trim()) {
    console.log("搜尋關鍵字:", searchQuery.value);
    // 搜尋邏輯放這裡
    toggleSearch(); // 僅當搜尋成功時關閉框
  } else {
    alert("請輸入搜尋內容！");
  }
};
</script>
