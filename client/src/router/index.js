import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "../views/ProductsPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import ShoppingCartPage from "../views/ShoppingCartPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: ProductsPage,
    },
    {
      path: "/products/:productId",
      name: "productsdetails",
      component: ProductDetailPage,
    },
    {
      path: "/cart",
      component: ShoppingCartPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundPage,
    },
  ],
});

export default router;
