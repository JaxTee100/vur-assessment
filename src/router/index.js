import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import DisplayCards from '../views/DisplayCards.vue'
import DisplayCard from '../views/DisplayCard.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
    
  },
  {
    path: '/login',
    name: 'login',
    component: Login
    
  },
  {
    path: '/displaycards',
    name: 'displayCards',
    component: DisplayCards
    
  },
  {
    path: '/displayCards/:id',
    name: 'displayCard',
    component: DisplayCard,
    props: true
    
  },
  //redirect
  {
    path: '/all-cards',
    redirect: '/'
  },
  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
