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
  props: ["user"],
  components: {
    ShoppingCartList,
    Toast,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  watch: {
    async user(newUserValue) {
      console.log("Changed!");
      console.log(newUserValue);
      if (newUserValue) {
        const cartResponse = await axios.get(
          `/api/users/${newUserValue.uid}/cart`
        );
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
      }
    },
  },
  methods: {
    async removeFromCart(productId) {
      const res = await axios.delete(
        `/api/users/${this.user.uid}/cart/${productId}`
      );
      const updatedCart = res.data;
      this.cartItems = updatedCart;
      this.$refs.toast.showToast("Successfully removed item from cart!");
    },
  },
  async created() {
    if (this.user) {
      const res = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = res.data;
      this.cartItems = cartItems;
    }
  },
};
</script>
