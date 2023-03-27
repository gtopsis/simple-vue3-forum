import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import appData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/me',
    name: 'userProfileView',
    component: () => import('@/views/UserView.vue')
  },
  {
    path: '/forums/:forumId/threads',
    name: 'forumView',
    props: true,
    component: () => import('@/views/ForumView.vue')
  },
  {
    path: '/forums/:forumId/threads/:threadId',
    name: 'threadView',
    props: true,
    component: () => import('@/views/ThreadView.vue'),
    beforeEnter(to, from, next) {
      const threads = appData.threads
      if (threads.find((t) => t.id === to.params.threadId)) {
        return next()
      }
      next({
        name: 'notFound',
        params: {
          pathMatch: to.path.substring(1).split('/')
        },
        // preserve existing query and hash if any
        query: to.query,
        hash: to.hash
      })
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedBehavior) => {
    return {
      top: to.meta.toTop || {}
      // behavior: to.meta.behavior || {}
    }
  }
})

export default router
