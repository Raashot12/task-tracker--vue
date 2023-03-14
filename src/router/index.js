import { createRouter, createWebHistory } from "vue-router"

import About from "../views/About.vue"
import Home from "../views/Home.vue"

const routes = [
  {
    path: '/',
    name: 'HomeComponent',
    component: Home,
  },
  {
    path: "/about",
    name: "AboutComponent",
    component: About,
  },

]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes,
} )
export default router
