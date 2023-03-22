<script setup lang="ts">
import CategoriesListing from '../components/CategoriesListing.vue'
import { useCategoriesStore } from '@/stores/categories'

const categories = useCategoriesStore().categories
const breadcumbItems = ['Home']
</script>

<template>
  <v-container class="threads-section mt-3 px-2 py-1">
    <v-row class="threads-section-heading" no-gutters>
      <v-col cols="auto">
        <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <CategoriesListing :categories="categories"></CategoriesListing>
  </v-container>
</template>

<style scoped>
.threads-section-heading {
  border-bottom: 1px solid var(--vt-c-divider-light-1);
}
</style>
