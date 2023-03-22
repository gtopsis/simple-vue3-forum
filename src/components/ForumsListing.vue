<script setup lang="ts">
import ForumItem from '@/components/ForumItem.vue'
import type { Forum } from '@/interfaces'

const props = defineProps<{
  forums: Forum[]
}>()
</script>

<template>
  <v-container fluid class="threads">
    <v-row>
      <v-col cols="auto" align-self="center">
        <span class="threads-counter text-right">{{ props.forums.length }} forums</span>
      </v-col>
    </v-row>

    <ForumItem v-for="forum in props.forums" :key="forum.id" :forum="forum"></ForumItem>
  </v-container>
</template>

<style scoped></style>
