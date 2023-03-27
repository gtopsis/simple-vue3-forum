<script setup lang="ts">
import ThreadItem from '@/components/ThreadItem.vue'
import type { Thread } from '@/interfaces'

const props = defineProps<{
  threads: Thread[]
}>()
</script>

<template>
  <v-container fluid class="px-0">
    <v-row>
      <v-col cols="auto" align-self="center">
        <span class="">{{ threads.length }} threads</span>
      </v-col>
    </v-row>

    <ThreadItem
      v-for="thread in props.threads"
      :key="thread.id"
      class="mx-0"
      :thread="thread"
    ></ThreadItem>
  </v-container>
</template>

<style scoped></style>
