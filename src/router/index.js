import Vue from 'vue'
import VueRouter from 'vue-router'
import Splash from '../pages/Splash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
