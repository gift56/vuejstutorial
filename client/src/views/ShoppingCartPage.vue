<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems" />
    <button class="mt-5 w-full">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    You current have no items in your cart!
  </div>
</template>

<script>
import ShoppingCartList from "@/components/ShoppingCartList.vue";
import axios from "axios";

export default {
  name: "ShoppingCartPage",
  components:{
    ShoppingCartList,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  async created() {
    const res = await axios.get("/api/users/12345/cart");
    const cartItems = res.data;
    this.cartItems = cartItems;
  },
};
</script>
