import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ToDos from "@/components/ToDos.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ToDos",
    component: ToDos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
