import { ref } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'
import type { User } from '@/interfaces'

export const useUsersStore = defineStore('Users', () => {
  const users = ref(appData.users)

  const getUserById = (userId: string) => {
    return users.value.find((u) => u.id === userId)
  }

  const saveUser = (userId: string, data: User) => {
    const user: User | undefined = users.value.find((u) => u.id === userId)
    if (!user) return false

    user.bio = data.bio
    return true
  }
  return { users, getUserById, saveUser }
})
