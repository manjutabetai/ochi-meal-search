<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStoreMeals } from '../stores/meals'
import MealItem from '../components/MealItem.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const storeMeals = useStoreMeals()
const { allMealsByLetter } = storeToRefs(storeMeals)
const route = useRoute()

const keyword = ref('')

onMounted(() => {
  searchByLetter()
})
watch(route, () => {
  searchByLetter()
})
function searchByLetter() {
  keyword.value = route.params.letter
  if (keyword.value) {
    storeMeals.searchByLetter(keyword.value)
  }
}
</script>

<template>
  <div class="flex gap-2 mt-2 justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
    <MealItem
      :meal="meal"
      v-for="meal of allMealsByLetter"
      :key="meal.idMeal"
      class="bg-white shadow rounded-t-xl"
    />
  </div>
</template>
