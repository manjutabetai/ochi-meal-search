<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import axiosClient from '../axiosClient'
import YoutubeButton from '../components/YoutubeButton.vue'

const meal = ref([])
const route = useRoute()

onMounted(async () => {
  try {
    // 分割代入で dataを取得
    const { data } = await axiosClient.get(`lookup.php?i=${route.params.id}`)
    meal.value = data.meals[0] || {}
  } catch (error) {
    console.error('Error fetching meals:', error)
  }
})
</script>
素材のidを受け取って表示される 素材で絞り込んだ料理を並べる -> byNameをつかう

<template>
  <div class="max-w-screen-md mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5 text text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full" />
    <!-- カテゴリー -->
    <div class="grid grid-cols-3 sm:grid-cols-3 text-lg py-2">
      <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area </strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="mx-3 mb-5">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <h2 class="text-2xl font-semibold mb-3">ingredients</h2>
        <ul>
          <!-- indexを作成　> データが存在すれば表示 -->
          <template v-for="(el, index) of new Array(20)">
            <!-- javascriptでプロパティにアクセスするために２つの方法がある -->
            <!-- []を使うのはブラケット表記という -->
            <!-- ${index + 1} のように動的に参照するためにはブラケット表記を使用する-->
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }} : {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`] && meal[`strMeasure${index + 1}`] != ' '">
              {{ index + 1 }} : {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-3 flex items-center space-x-2">
        <YoutubeButton :meal="meal" />
        <a
          :href="meal.strSource"
          class="px-3 py-1 border border-transparent bg-lime-300 border-green-500 rounded hover:text-white hover:bg-green-500 transition-colors"
          >Orijinal</a
        >
      </div>
    </div>
  </div>
</template>
