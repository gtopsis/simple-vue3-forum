<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import { ref } from 'vue'
import appData from '@/data.json'
import type { Forum } from '@/interfaces'
import BaseDateAgo from './BaseDateAgo.vue'

const props = defineProps<{
  forum: Forum
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
        :to="{ name: 'forumView', params: { forumId: props.forum.id } }"
        class="text-brown"
        >{{ props.forum.name }}</RouterLink
      >

      <p class="secondary text-black">
        <small>{{ props.forum.slug }}</small>
      </p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <span class="text-black">{{ props.forum?.threads?.length || 0 }} threads</span>
      <!-- <h6 class="text-black">Last post at {{ props.forum. }}</h6> -->
    </v-col>
    <v-col cols="3" align-self="center">
      <!-- <v-avatar
        size="30px"
        :image="getUserById(props.forum.userId)?.avatar"
        class="mr-2"
      ></v-avatar> -->
      <!-- <span class="text-black mr-2">By {{ getUserById(props.forum.userId)?.name }}</span> -->
      <!-- <BaseDateAgo :timestamp="props.forum.publishedAt"></BaseDateAgo> -->
    </v-col>
  </v-row>
</template>

<style scoped>
.thread {
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
}
</style>
