<script setup lang="ts">
import appData from '@/data.json'
import { ref } from 'vue'
import type { RouterLink } from 'vue-router'

const categories = ref(appData.categories)
const users = ref(appData.users)
const posts = ref(appData.posts)
const threads = ref(appData.threads)
</script>

<template>
  <div class="threads">
    <div class="thread mt-3 pa-1" v-for="thread in threads" :key="thread.id">
      <RouterLink :to="{ name: 'threadShow', params: { id: thread.id } }">{{
        thread.title
      }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.thread {
  border: 1px solid white;
  border-radius: 5px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
