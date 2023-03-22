<script setup lang="ts">
import CategoriesListing from '../components/CategoriesListing.vue'
import { useCategoriesStore } from '@/stores/categories'

const categories = useCategoriesStore().categories
const breadcumbItems = ['Home']
</script>

<template>
  <v-container class="mt-3 px-2 py-1">
    <v-row class="threads-section-heading" no-gutters>
      <v-col cols="auto">
        <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>
      </v-col>
    </v-row>

    <CategoriesListing :categories="categories"></CategoriesListing>
  </v-container>
</template>

<style scoped></style>
