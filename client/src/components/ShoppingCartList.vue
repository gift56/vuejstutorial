<template>
  <div
    class="flex items-center py-5 border-b border-[#ddd]"
    v-for="product in products"
    :key="product.id"
  >
    <img class="flex-1 h-[100px] max-w-[100px]" :src="product.imageName" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <button>Remove from Cart</button>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: ["products"],
};
</script>
