<template>
  <div class="navbar flex bg-base-100 shadow-lg">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <PhList :size="32" />
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <router-link to="/">
        <a class="btn btn-ghost text-xl">購物車</a>
      </router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
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
      <div tabindex="0" role="button" class="btn btn-ghost">
        <PhUser :size="32" />
      </div>
      <router-link to="/cart">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <div class="relative">
            <PhShoppingCart :size="32" />
            <div
              v-if="cartCount > 0"
              class="badge badge-secondary absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
            >
              {{ cartCount }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<!--JS/TS-->
<script setup lang="ts">
import { computed, ref } from "vue";
import { useCartStore } from "../stores/cartStore";
const cartStore = useCartStore();
const cartCount = computed(() => cartStore.cartCount);

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
