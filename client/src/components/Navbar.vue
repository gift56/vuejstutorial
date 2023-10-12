<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="nav-bar">
    <RouterLink to="/products" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" />
      </div>
    </RouterLink>
    <RouterLink to="/cart" class="cart-link">
      <button>Shopping Cart</button>
    </RouterLink>
  </div>
</template>
