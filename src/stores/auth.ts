import { defineStore } from 'pinia'
import appData from '@/data.json'

export const useAuthStore = defineStore('Auth', () => {
  const authUserId = '7uVPJS9GHoftN58Z2MXCYDqmNAh2'

  const isUserLoggedIn = () => {
    return true
  }

  const getLoggedInUser = () => {
    return appData.users.find((u) => u.id === authUserId)
  }

  return { authUserId, isUserLoggedIn, getLoggedInUser }
})
