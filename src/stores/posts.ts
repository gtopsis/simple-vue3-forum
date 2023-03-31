import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { Post } from '@/interfaces'

import { defineStore } from 'pinia'
import appData from '@/data.json'
import { makeFilterByHelper } from '@/utils/helpers'

export const usePostsStore = defineStore('Posts', () => {
  const posts: Ref<Post[]> = ref(appData.posts)

  const addPost = (post: Pick<Post, 'text' | 'threadId' | 'userId'>) => {
    const completePost = {
      ...post,
      edited: {
        at: 1,
        by: 'string',
        moderated: false
      },
      publishedAt: Math.floor(Date.now() / 1000),
      id: 'string',
      reactions: undefined
    }
    posts.value.push(completePost)
  }

  const getPostsByUserId = computed(() => makeFilterByHelper(posts.value, 'userId'))

  return { posts, addPost, getPostsByUserId }
})
