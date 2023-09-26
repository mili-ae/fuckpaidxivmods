import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BrowseView from '../views/BrowseView.vue';
import SearchView from '../views/SearchView.vue';

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
      component: BrowseView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }
  ]
})

export default router
