<script setup lang="ts">
import CategoriesListing from '../components/CategoriesListing.vue'
import { useCategoriesStore } from '@/stores/categories'
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'

const categories = useCategoriesStore().categories
</script>

<template>
  <v-container class="mt-3 px-2 py-1">
    <v-row class="threads-section-heading" no-gutters>
      <v-col cols="auto" class="pl-0">
        <TheBreadcrumb></TheBreadcrumb>
      </v-col>
    </v-row>

    <CategoriesListing :categories="categories"></CategoriesListing>
  </v-container>
</template>

<style scoped></style>
