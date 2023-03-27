<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
import { useAuthStore } from '@/stores/auth'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { getUserById } = storeToRefs(useUsersStore())
const loggedInUser = computed(() => getUserById.value(useAuthStore().authUserId))
</script>

<template>
  <v-app>
    <v-app-bar app dark color="#ECF0F1">
      <v-app-bar-title class="pr-2">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        <RouterLink :to="{ name: 'home' }" class="ml-2">
          <span class="page-title text-deep-purple-darken-1">Forum app</span>
        </RouterLink>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-row class="user-profile-status" no-gutters align="center">
          <v-col>
            <v-row no-gutters class="ml-2">
              <v-col cols="12">
                <RouterLink :to="{ name: 'userProfileView' }">
                  <small>{{ loggedInUser?.name }}</small>
                </RouterLink>
              </v-col>
              <v-col cols="12">
                <small>{{ loggedInUser?.username }}</small>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-avatar :image="loggedInUser?.avatar" size="35"></v-avatar>
          </v-col>
        </v-row>
      </template>
    </v-app-bar>
    <v-main class="px-2">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  display: block;
  width: 35px;
}

.page-title {
  margin: 0;
}

.user-profile-status {
  width: 150px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
