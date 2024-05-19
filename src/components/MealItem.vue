<script setup>
import { defineProps } from 'vue'
import YoutubeButton from './YoutubeButton.vue'
import { truncateWords } from '../filters'
const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white shadow rounded-lg">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <h3 class="font-bold pl-3">{{ meal.strMeal }}</h3>

    <p class="mb-4">
      {{ truncateWords(meal.strInstructions, 20) }}
    </p>
    <YoutubeButton :meal="meal" />
  </div>
</template>
