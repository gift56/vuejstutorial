<template>
  <Navbar />
  <div class="m-auto max-w-[800px] min-h-screen">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
