<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 class="font-bold text-center text-2xl mb-5">註冊</h1>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7">
          <label class="font-semibold text-sm text-gray-600 pb-1 block"
            >E-mail</label
          >
          <input
            type="text"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <label class="font-semibold text-sm text-gray-600 pb-1 block"
            >Password</label
          >
          <input
            type="text"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <button
            type="button"
            class="flex items-center justify-center transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold"
          >
            <span class="inline-block mr-2">註冊</span>
            <PhArrowRight :size="20" />
          </button>
        </div>
        <div class="flex py-5 ">
          <div class="flex w-full mx-5  ">
            <div class="text-center w-full sm:text-right whitespace-nowrap">
                <router-link to=/login>
              <button
                class="flex items-center space-x-2 justify-center transition duration-200 py-4 px-5 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset w-full"
              >
              <PhSignIn :size="20" />
                <span class="inline-block ml-1">登入</span>
              </button>
            </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
