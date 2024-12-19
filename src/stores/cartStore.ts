import { defineStore } from "pinia";
import { Item } from "../model/items";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as Item[],
    currentPage: 1, // 當前頁碼
    itemsPerPage: 5, // 每頁商品數量
    // items: [] as Array<{ id: string, name: string, quantity: number, price: number }>,
  }),

  actions: {
    // 將商品加入購物車
    addToCart(item: Item) {
      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
    },

    // 從購物車中移除某個商品
    removeFromCart(itemId: number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },

    // 清空購物車
    clearCart() {
      this.$patch({ cartItems: [] }); // 使用 $patch 來更新狀態
    },

    // 更新商品數量
    updateQuantity(itemId: number, newQuantity: number) {
      const item = this.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity = newQuantity; // 直接設置數量
        console.log(`Updated item ${itemId} quantity: ${item.quantity}`);
      }
    },

    changePage(page: number) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },

  getters: {
    // 計算總價格，作為 getter 來自動更新
    totalPrice: (state) => {
      return state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    // 計算總頁數
    totalPages(state) {
      return Math.ceil(state.cartItems.length / state.itemsPerPage);
    },
    // 計算購物車商品的數量
    cartCount: (state) => {
      return state.cartItems.reduce((count, item) => count + item.quantity, 0);
    },
    // 計算當前頁面的商品
    paginatedItems(state) {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.cartItems.slice(start, end);
    },
  },
});
