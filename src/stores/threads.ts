import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useThreadsStore = defineStore('Threads', () => {
  const threads = ref(appData.threads)

  return { threads }
})
