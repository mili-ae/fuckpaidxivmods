import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import BrowseView from '../views/BrowseView.vue';
// import SearchView from '../views/SearchView.vue';
// import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('../views/BrowseView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
