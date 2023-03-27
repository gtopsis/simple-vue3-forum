import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Post } from '@/interfaces'

import { defineStore } from 'pinia'
import appData from '@/data.json'

export const usePostsStore = defineStore('Posts', () => {
  const posts: Ref<Post[]> = ref(appData.posts)

  const addPost = (post: Post) => {
    posts.value.push(post)
  }

  const getPostsByUserId = (userId: string) => {
    return posts.value.filter((p) => p.userId === userId)
  }

  return { posts, addPost, getPostsByUserId }
})
