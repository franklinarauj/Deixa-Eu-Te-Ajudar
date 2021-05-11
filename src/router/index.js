import Vue from "vue";
import VueRouter from "vue-router";
import Splash from "../pages/Splash.vue";
import Home from "../pages/Home.vue";
import MenuHome from "../pages/MenuHome.vue";
import Subject from "../pages/Subject.vue";
import Themes from "../pages/Themes.vue";
import Content from "../pages/Content.vue";

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
        name: "MenuHome",
        component: MenuHome
      },
      {
        path: "/subject",
        name: "Subject",
        component: Subject
      },
      {
        path: "/themes",
        name: "Themes",
        component: Themes
      },
      {
        path: "/content",
        name: "Content",
        component: Content
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
