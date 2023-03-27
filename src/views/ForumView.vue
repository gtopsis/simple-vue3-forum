<script setup lang="ts">
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

const breadcumbItems = [
  {
    title: 'Home',
    to: { name: 'home' }
  },
  forum?.name
]
</script>

<template>
  <v-container class="mt-3 pa- mb-4">
    <v-row class="" no-gutters>
      <v-col cols="auto">
        <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <ThreadsListing :threads="threads"></ThreadsListing>
  </v-container>
</template>

<style scoped></style>
