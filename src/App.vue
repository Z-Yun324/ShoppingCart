<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="fixed top-0 left-0 w-full z-50"><Navbar /></div>
    <div class="mt-[4rem]">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
