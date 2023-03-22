import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useThreadsStore = defineStore('Threads', () => {
  const threads = ref(appData.threads)

  const getThreadById = (threadId: string) => {
    return threads.value.find((u) => u.id === threadId)
  }

  const getThreadsByForumId = (forumId: string) => {
    return threads.value.filter((t) => t.forumId === forumId)
  }

  return { threads, getThreadById, getThreadsByForumId }
})
