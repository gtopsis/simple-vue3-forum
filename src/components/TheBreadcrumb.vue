<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useForumsStore } from '@/stores/forums'

const route = useRoute()
const currentRouteName = computed(() => route.name)

let breadcrumbItems: ({ title: string; to: Record<string, string> } | string)[] = []
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
}
</script>

<template>
  <div>
    <v-breadcrumbs :items="breadcrumbItems"></v-breadcrumbs>
  </div>
</template>

<style scoped></style>
