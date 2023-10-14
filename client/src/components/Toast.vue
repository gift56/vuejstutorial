<template>
  <div
    v-if="show"
    class="fixed top-4 right-4 bg-green-500 text-white px-4 py-4 rounded-lg shadow-md flex items-center"
  >
    <span>{{ message }}</span>
    <div
      @click="hideToast"
      class="ml-2 focus:outline-none text-base font-semibold"
    >
      &#x2715;
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
    };
  },
  methods: {
    showToast(message, duration = 3000) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.hideToast();
      }, duration);
    },
    hideToast() {
      this.show = false;
      this.message = "";
    },
  },
};
</script>
