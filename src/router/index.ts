import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForumView from '../views/ForumView.vue'
import UserView from '@/views/UserView.vue'
import ThreadView from '@/views/ThreadView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import appData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'userProfile',
      component: UserView
    },
    {
      path: '/forums/:forumId/threads',
      name: 'forumView',
      props: true,
      component: ForumView
    },
    {
      path: '/forums/:forumId/threads/:threadId',
      name: 'threadView',
      props: true,
      component: ThreadView,
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
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundView }
  ]
})

export default router
