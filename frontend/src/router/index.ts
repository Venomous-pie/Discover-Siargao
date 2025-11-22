import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import About from '../views/About.vue'
import Attractions from '../views/Attractions.vue'
import Activities from '../views/Activities.vue'
import CultureAndPeople from '../views/CultureAndPeople.vue'
import FoodAndDining from '../views/FoodAndDining.vue'
import MapAndDirection from '../views/MapAndDirection.vue'
import ContactUs from '../views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/attractions',
      name: 'Attractions',
      component: Attractions
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/culture',
      name: 'CultureAndPeople',
      component: CultureAndPeople
    },
    {
      path: '/food-and-dining',
      name: 'FoodAndDining',
      component: FoodAndDining
    },
    {
      path: '/map-and-direction',
      name: 'MapAndDirection',
      component: MapAndDirection
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    }
  ],
  scrollBehavior() {
    // Always scroll to top
    return { left: 0, top: 0 };
  }
})

export default router
