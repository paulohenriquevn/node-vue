import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routers = [
  {
    path: "/",
    name: "listaDeClientes",
    component: () => import("@/pages/ListClient"),
    meta: {}
  }
];

const routersLayout = [
  {
    path: "/",
    name: "home",
    component: () => import("@/layout/Layout"),
    meta: {
      requiresAuth: true
    },
    children: [...routers]
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routersLayout
});

export default router;
