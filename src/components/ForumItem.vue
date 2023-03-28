<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import type { Forum } from '@/interfaces'
import { computed } from 'vue'

const props = defineProps<{
  forum: Forum
  order: number
}>()

const textForNumberOfThreads = computed(() => {
  const numberOfThreads = props.forum?.threads?.length
  return numberOfThreads ? `${numberOfThreads} threads` : 'no threads'
})
</script>

<template>
  <v-row class="forum" :class="order % 2 ? 'bg-grey-light' : 'bg-grey-dark'">
    <v-col cols="5">
      <RouterLink
        :to="{ name: 'forumView', params: { forumId: props.forum.id } }"
        class="text-deep-purple-darken-1"
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
  </v-row>
</template>

<style scoped>
.bg-grey-light {
  background-color: #d9d8d8;
}
.bg-grey-dark {
  background-color: #b8b8b8;
}
</style>
