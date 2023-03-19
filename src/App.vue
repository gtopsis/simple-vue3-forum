<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
</script>

<template>
  <v-container class="pa-0" style="width: 100%">
    <header>
      <div>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      </div>
      <RouterLink :to="{ name: 'home' }">
        <span class="page-title">Forum</span>
      </RouterLink>
    </header>
    <main class="pa-0">
      <RouterView />
    </main>
  </v-container>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 60px;
  background-color: #3c3741;
  padding: 10px;
  width: 100%;
  height: 50px;
}

main {
  width: 100%;
}

.logo {
  display: block;
  width: 40px;
  margin: 0 1rem;
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
