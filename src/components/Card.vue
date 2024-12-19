<template>
  <div
    class="card bg-base-100 w-full sm:w-72 shadow-xl"
    @click="goToItemDetails"
  >
    <figure>
      <img :src="data?.image || defaultImage" :alt="data?.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ data?.name }}
        <div v-if="data?.isNew" class="badge badge-secondary">NEW</div>
      </h2>
      <p>$ {{ data?.price }}</p>
      <div class="card-actions justify-end">
        <div v-for="tag in data?.tags" :key="tag" class="badge badge-outline">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { Item } from "../model/items";

// 明確指定 data 可能為 undefined
const props = defineProps({
  data: {
    type: Object as () => Item | undefined,
    required: true,
  },
});

const router = useRouter();

const goToItemDetails = () => {
  if (props.data) {
    // 使用动态路由传递 item ID
    router.push({ name: "ItemDetails", params: { id: props.data.id } });
  }
};

const defaultImage = "https://via.placeholder.com/150"; // 預設占位符圖片
</script>
