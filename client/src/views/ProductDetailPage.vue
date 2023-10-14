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
      <button @click="addToCart" class="w-full">Add to cart</button>
    </div>
  </main>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import NotFoundPage from "./NotFoundPage.vue";
import axios from "axios";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {},
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
      alert("Successfully added item to cart!");
    },
  },
  components: {
    NotFoundPage,
  },
  async created() {
    const res = await axios.get(
      `/api/products/${this.$route.params.productId}`
    );
    const product = res.data;
    this.product = product;
  },
};
</script>
