import Vue from "vue";
import VueRouter from "vue-router";
import Splash from "../pages/Splash.vue";
import Home from "../pages/Home.vue";
import Menu from "../pages/Menu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Splash
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Menu",
        component: Menu
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
