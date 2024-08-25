import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/by-name',
      name: 'byname',
      component: MealsByName
    },
    {
      path: '/by-letter',
      name: 'byletter',
      component: MealsByLetter
    },
    {
      path: '/ingredients',
      name: 'ingredient',
      component: MealsByIngredient
    },
  ]
})

export default router
