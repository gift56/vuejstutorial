<script>
import { products } from "@/constant";
import NotFoundPage from "./NotFoundPage.vue";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find((item) => item.id === $route.params.productId),
    };
  },
  components: {
    NotFoundPage,
  },
};
</script>

<template>
  <main class="mt-6"></main>
</template>
