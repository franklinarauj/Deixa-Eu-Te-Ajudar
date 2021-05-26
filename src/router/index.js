import Vue from "vue";
import VueRouter from "vue-router";
import Splash from "../pages/Splash.vue";
import Home from "../pages/Home.vue";
import MenuHome from "../pages/MenuHome.vue";
import Subject from "../pages/Subject.vue";
import Themes from "../pages/Themes.vue";
import Content from "../pages/Content.vue";
import Menu from "../pages/Menu.vue";
import MenuOpcoes from "../pages/MenuOpcoes.vue"
import Contato from "../pages/Contato.vue"
import NossoObjetivo from "../pages/NossoObjetivo.vue"
import QuemSomos from "../pages/QuemSomos.vue"
import Referencias from "../pages/Referencias.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Splash,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    children: [
      {
        path: "",
        name: "MenuOpcoes",
        component: MenuOpcoes
      },
      {
        path: "contato",
        name: "Contato",
        component: Contato
      },
      {
        path: "nosso_objetivo",
        name: "NossoObjetivo",
        component: NossoObjetivo
      },
      {
        path: "quem_somos",
        name: "QuemSomos",
        component: QuemSomos
      },
      {
        path: "referencias",
        name: "Referencias",
        component: Referencias
      }]
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
