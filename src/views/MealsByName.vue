<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStoreMeals } from '../stores/meals'
import Meals from '../components/Meals.vue'

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
  <div class="px-3">
    <input
      type="text"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Search for Meals"
      @input="storeMeals.searchMeals(keyword)"
      v-model="keyword"
    />
  </div>
  <!-- 各データ -->
  <div class="px-3 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Meals By Name</h1>
  </div>
  <Meals :meals="allMeals" />
</template>
