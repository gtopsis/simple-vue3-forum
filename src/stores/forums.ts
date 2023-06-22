import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { Forum } from '@/interfaces'

import { defineStore } from 'pinia'
import appData from '@/data.json'
import { makeFilterByHelper, makeFindByIdHelper } from '@/utils/helpers'

export const useForumsStore = defineStore('Forums', () => {
  const forums: Ref<Forum[]> = ref(<Forum[]>appData.forums)

  const getForumsByCategoryId = computed(() => makeFilterByHelper(forums.value, 'categoryId'))

  const getForumById = computed(() => makeFindByIdHelper(forums.value))

  return { forums, getForumsByCategoryId, getForumById }
})
