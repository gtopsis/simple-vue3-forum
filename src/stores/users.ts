import { reactive } from 'vue'
import { defineStore } from 'pinia'
import appData from '@/data.json'
import type { User } from '@/interfaces'
import { computed } from 'vue'
import { makeFindByIdHelper } from '@/utils/helpers'

export const useUsersStore = defineStore('Users', () => {
  const users: User[] = reactive(<User[]>appData.users)

  const getUserById = computed(() => makeFindByIdHelper(users))

  const saveUser = (userId: string, updatedUser: User) => {
    const index = users.findIndex((u) => u.id === userId)
    if (!index) return false

    users.splice(index, 1, updatedUser)
  }

  return { users, getUserById, saveUser }
})
