<template>
  <Navbar />
  <div class="m-auto max-w-[800px] min-h-screen">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
};
</script>
