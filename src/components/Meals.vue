<script setup>
import MealItem from './MealItem.vue'

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
    <MealItem
      :meal="meal"
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-t-xl"
    />
  </div>
  <div v-if="!meals.length" class="text-center text-gray-500">No meals available.</div>
</template>
