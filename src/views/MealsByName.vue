<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStoreMeals } from '../stores/meals'
import YoutubeButton from '../components/YoutubeButton.vue'
import MealItem from '../components/MealItem.vue'

const storeMeals = useStoreMeals()
const { allMeals } = storeToRefs(storeMeals)

const router = useRoute()
const keyword = ref('')

// home でアルファベットを選択肢:idにparams.nameを持っている状態
// params.nameで検索を自動的にかける
onMounted(() => {
  keyword.value = router.params.name
  if (keyword.value) {
    storeMeals.searchMeals(keyword.value)
  }
})
</script>

<template>
  <!-- インプット -->
  <div class="p-8">
    <input
      type="text"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Search for Meals"
      @input="storeMeals.searchMeals(keyword)"
      v-model="keyword"
    />
  </div>
  <!-- 各データ -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
    <MealItem
      :meal="meal"
      v-for="meal of allMeals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-t-xl"
    />
  </div>
</template>
