<template>
  <div>
    <div>
      <table class="table w-full">
        <!-- 表格頭 -->
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- 顯示購物車內商品的每一行 -->
          <tr v-for="item in paginatedItems" :key="item.id">
            <td>
              <img
                :src="item.image || defaultImage"
                alt="Product image"
                class="w-16 h-16 object-cover rounded-lg"
              />
            </td>
            <td>{{ item.name }}</td>
            <td>$ {{ item.price }}</td>
            <td>
              <!-- 直接綁定數量 -->
              <input
                type="number"
                v-model.number="item.quantity"
                @change="updateQuantity(item)"
                min="1"
                class="input input-sm input-bordered w-16 text-center"
              />
            </td>
            <td>$ {{ item.price * item.quantity }}</td>
            <td>
              <button
                @click="removeFromCart(item.id)"
                class="btn btn-danger btn-xs"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="cartItems.length > 0" class="text-right">
      <!-- 總金額顯示 -->
      <p class="text-xl font-bold my-4">Total Price: ${{ totalPrice }}</p>
      <!-- 按鈕組 -->
      <div class="flex gap-2 justify-end">
        <button @click="clearCart" class="btn btn-primary">Clear Cart</button>
        <button @click="checkout" class="btn btn-danger">前往結帳</button>
      </div>
    </div>
    <!-- 分頁按鈕 -->
    <div class="flex join justify-center mt-4">
      <button
        class="join-item btn"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        «
      </button>
      <span class="join-item btn">Page {{ currentPage }}</span>
      <button
        class="join-item btn"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        »
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "../stores/cartStore";

// 使用 Pinia store 來管理購物車
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);
const totalPrice = computed(() => cartStore.totalPrice);
const currentPage = computed(() => cartStore.currentPage);
const totalPages = computed(() => cartStore.totalPages);
const paginatedItems = computed(() => cartStore.paginatedItems);
const defaultImage = "https://via.placeholder.com/150"; // 預設圖片

// 移除商品的函式
const removeFromCart = (itemId: number) => {
  console.log("Removing item with ID:", itemId);
  cartStore.removeFromCart(itemId); // 調用 Pinia store 中的移除方法
};

// 清空購物車的函式
const clearCart = () => {
  console.log("Clearing cart...");
  cartStore.clearCart(); // 調用 Pinia store 中的清空方法
};

// 更新商品數量的函式
const updateQuantity = (item: { id: number; quantity: number }) => {
  if (item.quantity <= 0) {
    removeFromCart(item.id); // 如果數量小於等於 0，則移除商品
  } else {
    cartStore.updateQuantity(item.id, item.quantity); // 更新為新數量
  }
};
// 結帳按鈕的邏輯
function checkout() {
  alert(`結帳成功，總金額為 ${totalPrice.value}`);
  // 可以在這裡進一步整合付款邏輯
  // 導航到結帳頁面
}
const changePage = (page: number) => {
  cartStore.changePage(page);
};
</script>
