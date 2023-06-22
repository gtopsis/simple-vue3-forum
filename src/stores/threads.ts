import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'
import type { Thread } from '@/interfaces'
import { makeFilterByHelper, makeFindByIdHelper } from '@/utils/helpers'

export const useThreadsStore = defineStore('Threads', () => {
  const threads: Ref<Thread[]> = ref(<Thread[]>appData.threads)

  const getThreadById = computed(() => makeFindByIdHelper(threads.value))
  const getThreadsByForumId = computed(() => makeFilterByHelper(threads.value, 'forumId'))

  return { threads, getThreadById, getThreadsByForumId }
})
