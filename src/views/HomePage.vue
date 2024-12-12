<!-- views/HomePage.vue -->
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
import { Item } from "../model/items";

const items = ref<Item[]>([]); // 用來儲存所有商品

onMounted(async () => {
  try {
    const response = await axios.get("/item/categories");
    // 假設每個類別下的items格式正確
    items.value = response.data.categories.flatMap((category: any) =>
      category.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image || "https://via.placeholder.com/150", // 預設圖片
        isNew: item.isNew,
        tags: item.tags || [],
      }))
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});
</script>

<style scoped></style>
