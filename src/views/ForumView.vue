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

const forumsStore = useForumsStore()
const forum = forumsStore.getForumById(props.forumId)

const { getThreadsByForumId } = storeToRefs(useThreadsStore())
const threads = computed(() => getThreadsByForumId.value(forum?.id!))
</script>

<template>
  <v-container class="mt-3 pa-1 mb-4">
    <v-row class="" no-gutters>
      <v-col cols="auto">
        <TheBreadcrumb></TheBreadcrumb>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <ThreadsListing :threads="threads"></ThreadsListing>
  </v-container>
</template>

<style scoped></style>
