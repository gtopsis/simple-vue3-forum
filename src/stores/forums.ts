import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { Forum } from '@/interfaces'

import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useForumsStore = defineStore('Forums', () => {
  const forums: Ref<Forum[]> = ref(appData.forums)

  const getForumsByCategoryId = (categoryId: string) => {
    return forums.value.filter((f) => f.categoryId === categoryId)
  }

  const getForumById = computed(() => {
    return (forumId: string) => forums.value.find((f) => f.id === forumId)
  })

  return { forums, getForumsByCategoryId, getForumById }
})
