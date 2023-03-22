import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useUsersStore = defineStore('Users', () => {
  const users = ref(appData.users)

  return { users }
})
