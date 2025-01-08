<template>
  <div
    class="w-1/2 md:w-1/3 lg:w-64 fixed h-screen lg:block border-r"
    v-show="visible"
  >
    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">MAIN</p>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        @click="$emit('navigate', 'SellerHome')"
      >
        <PhHouse :size="32" />
        <span class="text-gray-700">HOME</span>
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        @click="$emit('navigate', 'SellerOrders')"
      >
        <PhListDashes :size="32" />
        <span class="text-gray-700">訂單管理</span>
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        @click="$emit('navigate', 'SellerPerformance')"
      >
        <PhChartBar :size="32" />
        <span class="text-gray-700">營運表現</span>
      </div>
    </div>

    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">PRODUCTS</p>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        @click=""
      >
        <PhPlusCircle :size="32" />
        <span class="text-gray-700">新增商品</span>
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        @click=""
      >
        <PhNotepad :size="32" />
        <span class="text-gray-700">商品管理</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 接收父組件的 visible 屬性
const props = defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
});
</script>
