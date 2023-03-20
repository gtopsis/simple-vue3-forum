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
const users = ref(appData.users)

function getUserById(userId: string | undefined) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <v-row class="thread mt-4">
    <v-col>
      <RouterLink :to="{ name: 'threadShow', params: { id: thread.id } }">{{
        thread.title
      }}</RouterLink>

      <p class="secondary text-grey">
        <small>{{ thread.slug }}</small>
      </p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col>
      <span class="text-grey">{{ thread.posts.length }} posts</span>
      <h6 class="text-grey">Last post at {{ thread.lastPostAt }}</h6>
    </v-col>
    <v-col>
      <v-avatar size="30px" :image="getUserById(thread.userId)?.avatar" class="mr-2"></v-avatar>
      <small class="text-grey">{{ getUserById(thread.userId)?.name }}</small>
    </v-col>
  </v-row>
</template>

<style scoped>
.thread {
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
}
</style>
