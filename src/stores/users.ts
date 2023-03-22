import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useUsersStore = defineStore('Users', () => {
  const users = ref(appData.users)

  const getUserById = (userId: string) => {
    return users.value.find((u) => u.id === userId)
  }
  return { users, getUserById }
})
