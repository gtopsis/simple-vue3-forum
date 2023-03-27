import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'
import type { Category } from '@/interfaces'

export const useCategoriesStore = defineStore('Categories', () => {
  const categories: Ref<Category[]> = ref(appData.categories)

  return { categories }
})
