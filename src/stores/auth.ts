import { defineStore } from 'pinia'
import appData from '@/data.json'
import { computed } from 'vue'

export const useAuthStore = defineStore('Auth', () => {
  const authUserId = '7uVPJS9GHoftN58Z2MXCYDqmNAh2'

  const isUserLoggedIn = () => {
    return true
  }

  const getAuthUserId = computed(() => {
    return authUserId
  })

  return { authUserId, isUserLoggedIn, getAuthUserId }
})
