<script>
import { products } from "@/constant";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find((item) => item.id === $route.params.productId),
    };
  },
};
</script>

<template>
  <main class="mt-6"></main>
</template>
