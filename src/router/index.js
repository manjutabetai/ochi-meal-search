import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealsByIngredietnt from '../views/MealsByIngredients.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import DefaultLayout from '../views/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import Shop from '../views/ProductsList.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/shop',
        name: 'shop',
        component: Shop,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName,
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      },
      {
        path: '/by-ingredients/:name?',
        name: 'byIngredient',
        component: MealsByIngredietnt,
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients,
      },
      {
        path: '/meal/:id?',
        name: 'mealDetails',
        component: MealDetails,
      },
    ],
  },
  {
    path: '/guest',
    name: 'guest',
    component: GuestLayout,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
