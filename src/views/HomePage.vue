<template>
  <div
    class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <Card v-for="item in items" :key="item.id" :data="item" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";
import { Item, ItemCategory } from "../model/items";

const items = ref<Item[]>([]); // 用來儲存所有商品

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
</script>
