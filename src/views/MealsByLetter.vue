<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStoreMeals } from '../stores/meals'
import Meals from '../components/Meals.vue'

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
  <!-- アルファベットをfelxで並列に配置 -->
  <div class="flex gap-2 mt-2 justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="allMealsByLetter" />
</template>
