<script setup lang="ts">
import ForumsListing from '@/components/ForumsListing.vue'
import type { Category } from '@/interfaces'
import { useForumsStore } from '@/stores/forums'

const props = defineProps<{
  categories: Category[]
}>()
const forums = useForumsStore().forums

const getCategoryForums = (categoryId: string) => {
  return forums.filter((f) => f.categoryId === categoryId)
}
</script>

<template>
  <v-container fluid class="">
    <v-row>
      <v-col v-for="category in props.categories" :key="category.id" cols="12">
        <h2>{{ category.name }}</h2>
        <ForumsListing :forums="getCategoryForums(category.id)"></ForumsListing>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
