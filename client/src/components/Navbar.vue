<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="border border-[#ddd] h-[75px] flex items-center justify-between">
    <RouterLink to="/products" class="products-link">
      <div class="w-[120px] aspect-square">
        <img src="@/assets/logo-hexagon.svg" />
      </div>
    </RouterLink>
    <div class="w-full flex items-center justify-end mr-4">
      <RouterLink to="/cart" class="">
        <button>Shopping Cart</button>
      </RouterLink>
    </div>
  </div>
</template>
