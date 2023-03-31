<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useForumsStore } from '@/stores/forums'
import { useThreadsStore } from '@/stores/threads'
import { storeToRefs } from 'pinia'

const route = useRoute()
const currentRouteName = computed(() => route.name)

let breadcrumbItems: ({ title: string; to: unknown } | string)[] = []

if (currentRouteName.value === 'home') {
  breadcrumbItems.push('Home')
}
if (currentRouteName.value === 'forumView') {
  const forumId = route.params.forumId
  const { getForumById } = storeToRefs(useForumsStore())
  const forum = computed(() => getForumById.value(forumId))

  breadcrumbItems.push(
    {
      title: 'Home',
      to: { name: 'home' }
    },
    forum.value?.name!
  )
} else if (currentRouteName.value === 'threadView') {
  const forumId = route.params.forumId
  const { getForumById } = storeToRefs(useForumsStore())
  const forum = computed(() => getForumById.value(forumId))

  const threadId = route.params.threadId
  const { getThreadById } = storeToRefs(useThreadsStore())
  const thread = computed(() => getThreadById.value(threadId))

  breadcrumbItems.push(
    {
      title: 'Home',
      to: { name: 'home' }
    },
    {
      title: `${forum.value?.name}`,
      to: { name: 'forumView', params: { forumId: forum.value?.id } }
    },
    thread.value?.title!
  )
}
</script>

<template>
  <div>
    <v-breadcrumbs :items="breadcrumbItems" color="white"></v-breadcrumbs>
  </div>
</template>

<style scoped>
.v-breadcrumbs-item {
  color: white !important;
}
</style>
