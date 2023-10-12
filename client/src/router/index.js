import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsPage,
    },
    {
      path: "/products/:productId",
      name: "productsdetails",
      component: ProductDetailPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundPage,
    },
  ],
});

export default router;
