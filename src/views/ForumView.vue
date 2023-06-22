<script setup lang="ts">
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import ThreadsListing from '@/components/ThreadsListing.vue'
import { useForumsStore } from '@/stores/forums'
import { useThreadsStore } from '@/stores/threads'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const props = defineProps<{
  forumId: string
}>()

const { getForumById } = storeToRefs(useForumsStore())
const forum = computed(() => getForumById.value(props.forumId))

const { getThreadsByForumId } = storeToRefs(useThreadsStore())
const threads = computed(() => (!forum.value ? [] : getThreadsByForumId.value(forum.value?.id!)))
</script>

<template>
  <v-container class="mt-3 pa-1 mb-4">
    <v-row no-gutters>
      <v-col cols="auto">
        <TheBreadcrumb></TheBreadcrumb>
      </v-col>
    </v-row>

    <v-row class="mb-2" justify="space-between" no-gutters>
      <v-col cols="12">
        <h2 class="text-white">{{ forum?.name }}</h2>
      </v-col>
      <v-col cols="12">
        <small class="text-white">{{ forum.description }}</small>
      </v-col>
    </v-row>

    <ThreadsListing :threads="threads"></ThreadsListing>
  </v-container>
</template>

<style scoped></style>
