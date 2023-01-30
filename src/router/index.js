import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Layout from "@/views/Layout.vue";
import About from "@/views/About.vue";
import Portfolio from "@/views/Portfolio.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
        name: "Home",
      },
      {
        path: "about",
        component: About,
        name: "About",
      },
      {
        path: "portfolio",
        component: Portfolio,
        name: "Portfolio",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
