<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import { ref } from 'vue'
import appData from '@/data.json'
import type { Thread } from '@/interfaces'

const props = defineProps<{
  thread: Thread
}>()
const users = ref(appData.users)

function getUserById(userId: string | undefined) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <v-row class="thread mt-4">
    <v-col cols="5">
      <RouterLink
        :to="{ name: 'threadShow', params: { id: props.thread.id } }"
        class="text-deep-purple-darken-1"
        >{{ props.thread.title }}</RouterLink
      >

      <p class="secondary text-grey">
        <small>{{ props.thread.slug }}</small>
      </p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <span class="text-grey">{{ props.thread.posts.length }} posts</span>
      <h6 class="text-grey">Last post at {{ props.thread.lastPostAt }}</h6>
    </v-col>
    <v-col cols="3" align-self="center">
      <v-avatar
        size="30px"
        :image="getUserById(props.thread.userId)?.avatar"
        class="mr-2"
      ></v-avatar>
      <small class="text-grey">{{ getUserById(props.thread.userId)?.name }}</small>
    </v-col>
  </v-row>
</template>

<style scoped>
.thread {
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
}
</style>
