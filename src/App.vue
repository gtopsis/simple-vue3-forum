<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
</script>

<template>
  <v-app>
    <v-app-bar app dark color="#ECF0F1">
      <v-app-bar-title class="px-2">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        <RouterLink :to="{ name: 'home' }" class="ml-2">
          <span class="page-title text-deep-purple-darken-1">Forum app</span>
        </RouterLink>
      </v-app-bar-title>
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
