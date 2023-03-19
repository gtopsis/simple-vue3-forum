import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThreadView from '@/views/ThreadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/threads/:id',
      name: 'threadShow',
      props: true,
      component: ThreadView
    }
  ]
})

export default router
