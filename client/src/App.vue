<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="m-auto max-w-[800px] min-h-screen">
    <RouterView />
  </div>
</template>
