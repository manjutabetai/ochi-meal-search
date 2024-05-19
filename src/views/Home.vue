<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStoreMeals } from '../stores/meals'
import axiosClient from '../axiosClient.js'
import MealItem from '../components/MealItem.vue'

const storeMeals = useStoreMeals()
const meals = ref([])

onMounted(() => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get(`random.php`).then(({ data }) => meals.value.push(data.meals[0]))
  }
})
</script>

<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>

  <div v-if="meals.length === 0" class="text-center text-gray-500">No meals available.</div>
  <div v-else>
    <div v-for="meal of meals" :key="meal.id" class="mb-3">
      <MealItem :meal="meal" />
    </div>
  </div>
</template>
