<script setup lang="ts">
import ForumItem from '@/components/ForumItem.vue'
import type { Forum } from '@/interfaces'

const props = defineProps<{
  forums: Forum[]
}>()
const forums = props.forums
</script>

<template>
  <v-container fluid class="threads">
    <v-row>
      <v-col cols="auto" class="pa-0 mb-2">
        <span class="">{{ props.forums.length }} forums</span>
      </v-col>
    </v-row>

    <ForumItem
      v-for="(forum, index) in forums"
      :key="forum.id"
      :forum="forum"
      :order="index"
    ></ForumItem>
  </v-container>
</template>

<style scoped></style>
