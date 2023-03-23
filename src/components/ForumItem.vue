<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import type { Forum } from '@/interfaces'
import { computed } from 'vue'

const props = defineProps<{
  forum: Forum
}>()

const textForNumberOfThreads = computed(() => {
  const numberOfThreads = props.forum?.threads?.length
  return numberOfThreads ? `${numberOfThreads} threads` : 'no threads'
})
</script>

<template>
  <v-row class="thread mt-4">
    <v-col cols="5">
      <RouterLink
        :to="{ name: 'forumView', params: { forumId: props.forum.id } }"
        class="text-brown"
        >{{ props.forum.name }}</RouterLink
      >

      <p>
        <small>{{ props.forum.description }}</small>
      </p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <span class="text-black">{{ textForNumberOfThreads }}</span>
    </v-col>
    <!-- <v-col cols="3" align-self="center">
      <v-avatar
        size="30px"
        :image="getUserById(props.forum.userId)?.avatar"
        class="mr-2"
      ></v-avatar>
      <span class="text-black mr-2">By {{ getUserById(props.forum.)?.name }}</span>
      <BaseDateAgo :timestamp="props.forum.publishedAt"></BaseDateAgo>
    </v-col> -->
  </v-row>
</template>

<style scoped>
.thread {
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
}
</style>
