import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'
import type { Thread } from '@/interfaces'

export const useThreadsStore = defineStore('Threads', () => {
  const threads: Ref<Thread[]> = ref(appData.threads)

  const getThreadById = (threadId: string) => {
    return threads.value.find((u) => u.id === threadId)
  }

  const getThreadsByForumId = (forumId: string) => {
    return threads.value.filter((t) => t.forumId === forumId)
  }

  return { threads, getThreadById, getThreadsByForumId }
})
