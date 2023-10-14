<template>
  <div class="border border-[#ddd] h-[75px] flex items-center justify-between gap-8">
    <RouterLink to="/" class="products-link">
      <div class="w-[120px] aspect-square">
        <img src="@/assets/logo-hexagon.svg" />
      </div>
    </RouterLink>
    <div class="w-full flex items-center justify-end mr-4 gap-6">
      <button @click="signOut" class="bg-red-500" v-if="user">Sign Out</button>
      <RouterLink to="/cart" class="">
        <button>Shopping Cart</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
export default {
  props: ["user"],
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth);
    },
  },
};
</script>
