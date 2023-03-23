<script setup lang="ts">
import ThreadItem from '@/components/ThreadItem.vue'
import type { Thread } from '@/interfaces'

const props = defineProps<{
  threads: Thread[]
}>()
</script>

<template>
  <v-container fluid class="threads">
    <v-row>
      <v-col cols="auto" align-self="center" class="pl-0">
        <span class="">{{ threads.length }} threads</span>
      </v-col>
    </v-row>
    <ThreadItem v-for="thread in props.threads" :key="thread.id" :thread="thread"></ThreadItem>
  </v-container>
</template>

<style scoped></style>
