<template>
  <div v-if="item" class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <img
        :src="item.image || defaultImage"
        class="max-w-sm rounded-lg shadow-2xl"
        :alt="item.name"
      />
      <div>
        <h1 class="text-5xl font-bold">{{ item.name }}</h1>
        <p class="py-6">{{ item.description }}</p>
        <p class="text-xl">$ {{ item.price }}</p>
        <div v-if="item.isNew" class="badge badge-secondary">NEW</div>
        <div class="mt-4">
          <button class="btn btn-primary" @click="addToCart(item)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="isLoading">
    <p>Loading...</p>
  </div>

  <div v-else>
    <p>Error loading item details.</p>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Item } from "../model/items";
import { useCartStore } from "../stores/cartStore";

const route = useRoute();
const item = ref<Item | null>(null);
const isLoading = ref<boolean>(true); // 用來控制載入狀態
const errorOccurred = ref<boolean>(false); // 用來控制錯誤顯示
const defaultImage = "https://via.placeholder.com/150"; // 預設圖片

const cartStore = useCartStore();

onMounted(async () => {
  const id = Number(route.params.id); // 從路由中獲取商品 id
  if (!id) {
    errorOccurred.value = true; // 如果沒有有效的 id，顯示錯誤訊息
    isLoading.value = false;
    return;
  }

  try {
    item.value = await getItemDetailsById(id); // 用你的方法獲取商品資料
    isLoading.value = false; // 資料加載完成
  } catch (error) {
    console.error("Error fetching item details:", error);
    errorOccurred.value = true; // 發生錯誤，顯示錯誤訊息
    isLoading.value = false;
  }
});

const getItemDetailsById = async (id: number): Promise<Item | null> => {
  try {
    const response = await axios.get(`/api/items/${id}`);
    const data = response.data as Item;

    // 假設返回的資料結構符合 Item 類別
    return new Item(
      data.id,
      data.name,
      data.price,
      data.description,
      data.image || "https://via.placeholder.com/150", // 如果沒圖片使用預設圖片
      data.isNew,
      data.tags || [],
      data.quantity || 1
    );
  } catch (error) {
    console.error("Error fetching item details:", error);
    throw new Error("Failed to fetch item details");
  }
};
// 將商品添加到購物車
// const addToCart = (item: Item) => {
//   cartStore.addToCart(item); // 調用 Pinia Store 中的方法
//   alert(`${item.name} added to cart!`);
// };
const addToCart = (item: Item) => {
  const existingItem = cartStore.cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItem) {
    // 如果購物車中已經有這個商品，增加其數量
    existingItem.quantity += 1;
  } else {
    // 如果購物車中沒有這個商品，將它加入並設置數量為 1
    cartStore.addToCart({ ...item, quantity: 1 });
  }

  alert(`${item.name} added to cart!`);
};
</script>
