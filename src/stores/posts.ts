import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'
import type { Post } from '@/interfaces'

export const usePostsStore = defineStore('Posts', () => {
  const posts = ref(appData.posts)

  const addPost = (post: Post) => {
    posts.value.push(post)
  }

  return { posts, addPost }
})
