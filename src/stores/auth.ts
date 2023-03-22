import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useAuthStore = defineStore('Auth', () => {
  const authUserId = 'NnooaWj4KHVxbhKwO1pEdfaQDsD2'

  const isUserLoggedIn = () => {
    return true
  }

  const getLoggedInUser = () => {
    return appData.users.find((u) => u.id === authUserId)
  }

  return { authUserId, isUserLoggedIn, getLoggedInUser }
})
