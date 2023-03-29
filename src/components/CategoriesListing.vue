<script setup lang="ts">
import ForumsListing from '@/components/ForumsListing.vue'
import type { Category } from '@/interfaces'
import { useForumsStore } from '@/stores/forums'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  categories: Category[]
}>()

const getCategoryForums = (categoryId: string) => {
  const { getForumsByCategoryId } = storeToRefs(useForumsStore())

  return getForumsByCategoryId.value(categoryId)
}
</script>

<template>
  <v-container class="px-0" fluid>
    <v-row>
      <v-col v-for="category in props.categories" :key="category.id" cols="12">
        <h2 class="text-white">{{ category.name }}</h2>
        <ForumsListing :forums="getCategoryForums(category.id)"></ForumsListing>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
