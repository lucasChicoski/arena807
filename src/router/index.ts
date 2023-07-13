import { createRouter, createWebHistory } from 'vue-router'
import LandPage from "../views/LandPage.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandPage
    },

  ]
})

export default router
