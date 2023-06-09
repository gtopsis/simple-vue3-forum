<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import type { Thread } from '@/interfaces'
import BaseDateAgo from '@/components/BaseDateAgo.vue'
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  thread: Thread
}>()

const contributorsText = computed(() => {
  const numberOfContributors = props.thread?.contributors?.length || 0
  return numberOfContributors !== 1
    ? `${numberOfContributors} contributors`
    : `${numberOfContributors} contributor`
})

const { getUserById } = storeToRefs(useUsersStore())
const user = computed(() => getUserById.value(props.thread.userId))
</script>

<template>
  <v-row class="forum mt-4" align="center">
    <v-col cols="5">
      <RouterLink
        :to="{ name: 'threadView', params: { threadId: thread.id } }"
        class="text-deep-purple-darken-1"
        >{{ thread.title }}</RouterLink
      >

      <p class="secondary text-black">
        <small>{{ contributorsText }} </small>
      </p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <span class="text-black">{{ thread.posts.length }} posts</span>
      <h6 class="text-black">
        Last post
        <BaseDateAgo :timestamp="thread.lastPostAt"></BaseDateAgo>
      </h6>
    </v-col>
    <v-col cols="auto" class="pr-0">
      <v-avatar size="30px" :image="user?.avatar" class="mr-2"></v-avatar>
    </v-col>
    <v-col sm="4" md="3" lg="2" class="pl-0">
      <v-row no-gutters>
        <v-col cols="12">
          <small class="text-black mr-2">By {{ user?.name }}</small>
        </v-col>
        <v-col cols="12">
          <small class="text-grey-darken-2">
            Opened
            <BaseDateAgo :timestamp="thread.publishedAt"></BaseDateAgo>
          </small>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.forum {
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
  background-color: #fff;
}
</style>
