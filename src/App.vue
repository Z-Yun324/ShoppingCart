<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <!-- 固定顯示的 NavBar -->
    <Navbar />

    <!-- 路由的內容區域 -->
    <router-view />
  </div>
</template>

<style scoped></style>
