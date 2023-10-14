<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { Toaster } from "react-hot-toast";
</script>

<template>
  <Navbar />
  <div class="m-auto max-w-[800px] min-h-screen">
    <RouterView />
  </div>
  <Toaster />
</template>
