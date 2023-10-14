<template>
  <main
    v-if="product"
    class="mt-6 flex items-center justify-center flex-col w-full"
  >
    <div>
      <img :src="product.imageUrl" class="w-[400px]" />
    </div>
    <div class="w-full relative p-3 gap-4 flex flex-col">
      <div
        class="w-full flex items-center justify-between gap-4 border-b border-black pb-2"
      >
        <h3>{{ product.name }}</h3>
        <h3>{{ product.price }}</h3>
      </div>
      <button @click="addToCart" class="add-to-cart" v-if="!itemIsInCart">
        Add to cart
      </button>
      <button
        disabled
        class="bg-gray-400 cursor-not-allowed"
        v-if="itemIsInCart"
      >
        Already Existed in cart
      </button>
      <button class="sign-in" @click="signIn">Sign in to add to cart</button>
      <toast ref="toast"></toast>
    </div>
  </main>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import Toast from "@/components/Toast.vue";
import NotFoundPage from "./NotFoundPage.vue";
import axios from "axios";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {},
      cartItems: [],
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(
        (item) => item.id === this.$route.params.productId
      );
    },
  },
  methods: {
    async addToCart() {
      await axios.post("/api/users/12345/cart", {
        id: this.$route.params.productId,
      });
      this.$refs.toast.showToast("Successfully added item to cart!");
    },
    async signIn() {
      const email = prompt("Please enter your email to sign in:");
      const auth = getAuth();
      const actionCodeSettings = {
        url: `http://localhost:5173/products/${this.$route.params.productId}`,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert("A login link was sent to the email you provided");
      window.localStorage.setItem("emailForSignIn", email);
    },
  },
  components: {
    NotFoundPage,
    Toast,
  },
  async created() {
    const res = await axios.get(
      `/api/products/${this.$route.params.productId}`
    );
    const product = res.data;
    this.product = product;

    const cartResponse = await axios.get("/api/users/12345/cart");
    const cartItems = cartResponse.data;
    this.cartItems = cartItems;
  },
};
</script>
