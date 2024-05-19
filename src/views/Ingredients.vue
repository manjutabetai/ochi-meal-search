<script setup>
import { onMounted, ref } from 'vue'
import { useStoreMeals } from '../stores/meals'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const storeMeals = useStoreMeals()
const { allMealsByIngredients } = storeToRefs(storeMeals)
const keyword = ref('')
const router = useRouter()
onMounted(() => {
  console.log('onMouted')
  storeMeals.searchMealsByIngredient()
})

function openIngredient(ingredient) {
  storeMeals.setIngredient(ingredient)
  router.push({
    name: 'byIngredient',
    params: { name: ingredient.strIngredient },
  })
}
</script>

<template>
  <h1 class="text-4xl font-bold mb-3">Ingredients</h1>

  <input
    type="text"
    v-model="keyword"
    class="rounded border-2 border-gray-500 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
  />

  <div class="bg-white mb-3 p-3 shadow rounded-lg" v-for="item of allMealsByIngredients">
    <!-- クリックすると -->
    <a href="#" @click.prevent="openIngredient(item)">
      <h3 class="text-2xl font-bold mb-3">
        {{ item.strIngredient }}
      </h3>
      <p>{{ item.strDescription }}</p>
    </a>
  </div>
</template>
