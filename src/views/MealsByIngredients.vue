<script setup>
import { onMounted, ref } from 'vue'
import { useStoreMeals } from '../stores/meals'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'

const storeMeals = useStoreMeals()
const { allMealsByIngredients } = storeToRefs(storeMeals)

const route = useRoute()
const keyword = ref('')
const meals = ref([])

onMounted(() => {
  keyword.value = route.params.name
  console.log(keyword.value)
  if (keyword.value) {
    storeMeals.fileterMealsByIngredient(keyword.value)
  }
})
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ keyword }}</h1>
  </div>
  <div v-for="meal of allMealsByIngredients" :key="meal.idMeal">
    <MealItem :meal="meal" />
  </div>
</template>
