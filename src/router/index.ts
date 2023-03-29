import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { storeToRefs } from 'pinia'
import { useThreadsStore } from '@/stores/threads'
import { computed } from 'vue'

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
      const { getThreadById } = storeToRefs(useThreadsStore())
      const thread = computed(() => getThreadById.value(to.params.threadId))

      if (thread.value) {
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
  routes
})

export default router
