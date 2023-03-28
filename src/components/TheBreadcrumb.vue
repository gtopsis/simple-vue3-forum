<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useForumsStore } from '@/stores/forums'
import { useThreadsStore } from '@/stores/threads'
import { storeToRefs } from 'pinia'

const route = useRoute()
const currentRouteName = computed(() => route.name)

let breadcrumbItems: ({ title: string; to: unknown } | string)[] = []
const breadcrumbItemToHome = {
  title: 'Home',
  to: { name: 'home' }
}

if (currentRouteName.value === 'forumView') {
  const forumId = route.params.forumId
  const forumsStore = useForumsStore()
  const forum = forumsStore.getForumById(forumId as string)

  breadcrumbItems = [breadcrumbItemToHome, forum?.name!]
} else if (currentRouteName.value === 'threadView') {
  const forumId = route.params.forumId
  const forumsStore = useForumsStore()
  const forum = forumsStore.getForumById(forumId as string)

  const { getThreadById } = storeToRefs(useThreadsStore())
  const threadId = route.params.threadId
  const thread = computed(() => getThreadById.value(threadId))

  breadcrumbItems = [
    breadcrumbItemToHome,
    {
      title: `${forum?.name}`,
      to: { name: 'forumView', params: { forumId: forum?.id } }
    },
    thread.value?.title!
  ]
}
</script>

<template>
  <div>
    <v-breadcrumbs :items="breadcrumbItems"></v-breadcrumbs>
  </div>
</template>

<style scoped></style>
