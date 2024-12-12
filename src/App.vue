<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="z-50"><Navbar /></div>
    <div><router-view /></div>
  </div>
</template>

<style scoped></style>
