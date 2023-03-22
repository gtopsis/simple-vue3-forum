import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useForumsStore = defineStore('Forums', () => {
  const forums = ref(appData.forums)

  const getForumsByCategoryId = (categoryId: string) => {
    return forums.value.filter((f) => f.categoryId === categoryId)
  }

  const getForumById = (forumId: string) => {
    return forums.value.find((f) => f.id === forumId)
  }

  return { forums, getForumsByCategoryId, getForumById }
})
