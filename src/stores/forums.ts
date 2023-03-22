import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useForumsStore = defineStore('Forums', () => {
  const forums = ref(appData.forums)

  return { forums }
})
