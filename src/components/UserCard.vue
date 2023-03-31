<script lang="ts" setup>
import type { User } from '@/interfaces'
import { ref, computed } from 'vue'
import { useUsersStore } from '@/stores/users'

const props = defineProps<{ user: User }>()
const userStore = useUsersStore()

const isEditProfileMode = ref(false)
let copiedUserProfile = { ...props.user }

const userBio = computed(() => {
  return props.user.bio ?? 'No bio specified yet'
})

const isUserOnline = computed(() => {
  return props.user.lastVisitAt - Date.now() < 10000
})

const toggleEditProfileMode = () => {
  isEditProfileMode.value = !isEditProfileMode.value
}
const saveUserProfile = () => {
  userStore.saveUser(copiedUserProfile.id, copiedUserProfile)
  isEditProfileMode.value = false
}
</script>
<template>
  <v-card loading color="white" class="pa-3">
    <v-card-title>
      <v-row justify="center">
        <v-col cols="auto">
          <v-avatar :image="user.avatar" size="60"></v-avatar>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-subtitle>
      <v-row justify="center">
        <v-col cols="auto">
          <h3 class="text-black">
            {{ user.name }}
            <small class="pl-1 text-green" v-if="isUserOnline">Online</small>
          </h3>
        </v-col>
      </v-row>
    </v-card-subtitle>

    <v-card-text>
      <v-row v-if="!isEditProfileMode">
        <v-col cols="12">
          <small class="text-center"> {{ userBio }} </small>
        </v-col>

        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="auto">
              <a :href="user.twitter" tag="button">Twitter</a>
            </v-col>
            <v-col cols="auto">
              <a :href="user.website" tag="button">Website</a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="12">
          <v-textarea v-model="copiedUserProfile.bio" rows="3" max-rows="6"></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="auto" v-if="!isEditProfileMode">
          <v-btn variant="outlined" @click="toggleEditProfileMode">Edit profile</v-btn>
        </v-col>
        <v-col cols="auto" v-else>
          <v-btn @click="toggleEditProfileMode">Cancel</v-btn>
          <v-btn @click="saveUserProfile">Save profile</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
