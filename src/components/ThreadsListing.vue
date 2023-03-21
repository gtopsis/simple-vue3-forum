<script setup lang="ts">
import ThreadItem from '@/components/ThreadItem.vue'
import type { Thread } from '@/interfaces'

const props = defineProps<{
  threads: Thread[]
}>()
</script>

<template>
  <v-container fluid class="threads">
    <ThreadItem v-for="thread in props.threads" :key="thread.id" :thread="thread"></ThreadItem>
  </v-container>
</template>

<style scoped></style>
