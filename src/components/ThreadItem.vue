<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import { ref } from 'vue'
import appData from '@/data.json'

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

const { thread } = defineProps<{
  thread: Thread
}>()
const posts = ref(appData.posts)
const users = ref(appData.users)

function getUserById(userId: string | undefined) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <v-row class="thread rounded mt-3 pa-1">
    <v-col>
      <RouterLink :to="{ name: 'threadShow', params: { id: thread.id } }">{{
        thread.title
      }}</RouterLink>
      <h6 class="green">Last post at {{ thread.lastPostAt }}</h6>
    </v-col>
    <v-spacer></v-spacer>
    <v-col>
      <span class="green">{{ thread.posts.length }} posts</span>
    </v-col>
    <v-col>
      <v-avatar size="30px" :image="getUserById(thread.userId)?.avatar" class="mr-2"></v-avatar>
      <small class="green">{{ getUserById(thread.userId)?.name }}</small>
    </v-col>
  </v-row>
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
