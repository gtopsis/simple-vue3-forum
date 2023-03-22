import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const usePostsStore = defineStore('Posts', () => {
  const posts = ref(appData.posts)

  return { posts }
})
