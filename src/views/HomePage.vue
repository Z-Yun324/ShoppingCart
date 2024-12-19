<template>
  <div
    class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <Card v-for="item in paginatedItems" :key="item.id" :data="item" />
  </div>
  <!-- 分頁按鈕 -->
  <div class="flex join justify-center my-4">
    <button
      class="join-item btn"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      «
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      class="join-item btn"
      :class="{ 'btn-primary': currentPage === page }"
    >
      {{ page }}
    </button>
    <button
      class="join-item btn"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      »
    </button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import Card from "../components/Card.vue";
import { Item, ItemCategory } from "../model/items";

const items = ref<Item[]>([]); // 用來儲存所有商品
const currentPage = ref(1); // 當前頁碼
const itemsPerPage = 8; // 每頁顯示的商品數量

onMounted(async () => {
  try {
    const response = await axios.get<{ categories: ItemCategory[] }>(
      "/item/categories"
    );
    // 類別下的 items 自動匹配到 Item 類型
    items.value = response.data.categories.flatMap((category) =>
      category.items.map(
        (item) =>
          new Item(
            item.id,
            item.name,
            item.price,
            item.description,
            item.image || "https://via.placeholder.com/150", // 預設圖片
            item.isNew,
            item.tags || [],
            item.quantity
          )
      )
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    error.value = "An error occurred while fetching data.";
  }
});

// 計算總頁數
const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage));

// 當前頁面的商品
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});

// 切換頁面
const changePage = (page: number) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>
