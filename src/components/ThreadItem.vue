<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import type { Thread } from '@/interfaces'
import BaseDateAgo from './BaseDateAgo.vue'
import { useUsersStore } from '@/stores/users'

const props = defineProps<{
  thread: Thread
}>()
const users = useUsersStore().users

function getUserById(userId: string | undefined) {
  return users.find((u) => u.id === userId)
}
</script>

<template>
  <v-row class="forum mt-4">
    <v-col cols="5">
      <RouterLink
        :to="{ name: 'threadView', params: { threadId: props.thread.id } }"
        class="text-deep-purple-darken-1"
        >{{ props.thread.title }}</RouterLink
      >

      <p class="secondary text-black">
        <small>{{ props.thread.slug }}</small>
      </p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <span class="text-black">{{ props.thread.posts.length }} posts</span>
      <h6 class="text-black">Last post at {{ props.thread.lastPostAt }}</h6>
    </v-col>
    <v-col cols="3" align-self="center">
      <v-avatar
        size="30px"
        :image="getUserById(props.thread.userId)?.avatar"
        class="mr-2"
      ></v-avatar>
      <span class="text-black mr-2">By {{ getUserById(props.thread.userId)?.name }}</span>
      <BaseDateAgo :timestamp="props.thread.publishedAt"></BaseDateAgo>
    </v-col>
  </v-row>
</template>

<style scoped>
.forum {
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
}
</style>
