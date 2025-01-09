<template>
  <div class="flex flex-col w-full gap-4">
    <div class="flex bg-[#f0f0f0] rounded-lg p-4 shadow">
      <div class="flex flex-col w-full">
        <!-- 標題 -->
        <div class="text-2xl font-bold mb-4">待辦清單</div>

        <!-- 待辦事項容器 -->
        <div class="grid grid-cols-3 gap-4">
          <!-- 待處理訂單 -->
          <div class="flex flex-col items-center justify-center w-full p-4">
            <div
              class="flex-grow flex items-center justify-center text-2xl font-semibold text-blue-400"
            >
              01
            </div>
            <div class="mt-2 text-gray-700">待處理訂單</div>
          </div>

          <!-- 第二個區塊 -->
          <div
            class="flex flex-col items-center justify-between w-full bg-[#f0f0f0] p-4"
          >
            <div
              class="flex-grow flex items-center justify-center text-2xl font-semibold text-blue-400"
            >
              02
            </div>
            <div class="text-gray-700">已完成訂單</div>
          </div>

          <!-- 第三個區塊 -->
          <div
            class="flex flex-col items-center justify-center w-full bg-[#f0f0f0] p-4"
          >
            <div
              class="flex-grow flex items-center justify-center text-2xl font-semibold text-blue-400"
            >
              03
            </div>
            <div class="mt-2 text-gray-700">退貨/取消</div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex bg-[#f0f0f0] rounded-lg p-4 shadow">
      <div class="flex flex-col w-full">
        <!-- 標題 -->
        <div class="text-2xl font-bold mb-4">數據中心</div>

        <!-- 待辦事項容器 -->
        <div class="grid grid-cols-3 gap-4">
          <!-- 待處理訂單 -->
          <div class="flex flex-col items-center justify-center w-full p-4">
            <div
              class="flex-grow flex items-center justify-center text-2xl font-semibold text-blue-400"
            >
              01
            </div>
            <div class="mt-2 text-gray-700">已售出</div>
          </div>

          <!-- 第二個區塊 -->
          <div
            class="flex flex-col items-center justify-between w-full bg-[#f0f0f0] p-4"
          >
            <div
              class="flex-grow flex items-center justify-center text-2xl font-semibold text-blue-400"
            >
              02
            </div>
            <div class="text-gray-700">頁面瀏覽數</div>
          </div>

          <!-- 第三個區塊 -->
          <div
            class="flex flex-col items-center justify-center w-full bg-[#f0f0f0] p-4"
          >
            <div
              class="flex-grow flex items-center justify-center text-2xl font-semibold text-blue-400"
            >
              03
            </div>
            <div class="mt-2 text-gray-700">最高銷量</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
