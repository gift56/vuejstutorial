<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList
      @remove-from-cart="removeFromCart($event)"
      :products="cartItems"
    />
    <button class="mt-5 w-full">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    You current have no items in your cart!
  </div>
  <toast ref="toast"></toast>
</template>

<script>
import Toast from "@/components/Toast.vue";
import ShoppingCartList from "@/components/ShoppingCartList.vue";
import axios from "axios";

export default {
  name: "ShoppingCartPage",
  components: {
    ShoppingCartList,
    Toast
  },
  data() {
    return {
      cartItems: [],
    };
  },

  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/12345/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
      this.$refs.toast.showToast("Successfully removed item from cart!");
    },
  },
  async created() {
    const res = await axios.get("/api/users/12345/cart");
    const cartItems = res.data;
    this.cartItems = cartItems;
  },
};
</script>
