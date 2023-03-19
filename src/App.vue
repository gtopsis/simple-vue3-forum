<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
</script>

<template>
  <header>
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    </div>
    <RouterLink :to="{ name: 'home' }">
      <span class="page-title">Forum</span>
    </RouterLink>
  </header>

  <div class="container">
    <RouterView />
  </div>
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

.container {
  background-color: #ecf0f1;
}
</style>
