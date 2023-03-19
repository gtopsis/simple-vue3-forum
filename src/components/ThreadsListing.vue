<script setup lang="ts">
import ThreadItem from '@/components/ThreadItem.vue'

interface Thread {
  contributors: string[]
  firstPostId: string
  forumId: string
  lastPostAt: number
  lastPostId: string
  posts: string[]
  publishedAt: number
  slug: string
  title: string
  userId: string
  id: string
}

const { threads } = defineProps<{
  threads: Thread[]
}>()
</script>

<template>
  <v-container fluid class="threads">
    <ThreadItem v-for="thread in threads" :key="thread.id" :thread="thread"></ThreadItem>
  </v-container>
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
