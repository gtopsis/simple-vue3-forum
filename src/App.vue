<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
</script>

<template>
  <v-app>
    <v-toolbar app dark height="90px" color="#3c3741">
      <v-toolbar-title>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        <RouterLink :to="{ name: 'home' }">
          <span class="page-title">Forum</span>
        </RouterLink>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <RouterView />
    </v-content>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #3c3741;
  width: 100%;
}

main {
  width: 100%;
}

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
