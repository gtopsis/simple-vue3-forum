import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useCategoriesStore = defineStore('Categories', () => {
  const categories = ref(appData.categories)

  return { categories }
})
