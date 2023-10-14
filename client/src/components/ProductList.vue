<template>
  <div
    class="flex md:items-start items-center justify-center md:justify-start flex-wrap gap-4 mt-14"
  >
    <div
      class="flex flex-col items-center gap-4 justify-center p-4 w-[90%] md:w-[32%] relative mb-3 rounded-lg shadow-cardShad"
      v-for="product in products"
      :key="product.id"
    >
      <img
        :src="product.imageName"
        class="w-[200px] aspect-square object-contain"
      />
      <h3 class="">{{ product.name }}</h3>
      <p class="">{{ product.price }}</p>
      <RouterLink :to="'/products/' + product.id" class="w-full">
        <button class="w-full">View Details</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { products } from "@/constant";
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      products,
    };
  },
  async created() {
    const res = await axios.get();
    const products = res.data;
    this.products = products;
  },
};
</script>
