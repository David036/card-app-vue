import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/carditem/:id",
      name: "carditem",
      component: () => import("@/components/card/CardItem.vue"),
    },
  ],
});

export default router;
