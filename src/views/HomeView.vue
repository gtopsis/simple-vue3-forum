<script setup lang="ts">
import CategoriesListing from '../components/CategoriesListing.vue'
import { useCategoriesStore } from '@/stores/categories'

const categories = useCategoriesStore().categories
const breadcumbItems = ['Home']
</script>

<template>
  <div class="px-2">
    <v-container class="threads-section mt-3 pa-1">
      <v-row class="threads-section-heading" no-gutters>
        <v-col cols="auto">
          <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <CategoriesListing :categories="categories"></CategoriesListing>
    </v-container>
  </div>
</template>

<style scoped>
.threads-section-heading {
  border-bottom: 1px solid var(--vt-c-divider-light-1);
}
</style>
