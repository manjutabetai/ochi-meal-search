import { defineStore } from 'pinia'
import axiosClient from '../axiosClient'

// defineStore: 第一は識別するためのid
export const useStoreMeals = defineStore('meals', {
  state: () => ({
    meals: [],
    mealsByLetter: [],
    MealsByIngredient: [],
    Ingredient: {},
  }),
  actions: {
    async searchMeals(keyword) {
      try {
        // 分割代入で dataを取得
        const { data } = await axiosClient.get(`search.php?s=${keyword}`)
        this.setMeals(data.meals)
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    },
    async searchByLetter(letter) {
      try {
        const { data } = await axiosClient.get(`search.php?f=${letter}`)
        this.setLetter(data.meals)
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    },
    async searchMealsByIngredient() {
      try {
        const { data } = await axiosClient.get(`list.php?i=list`)
        this.setIng(data.meals)
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    },
    async fileterMealsByIngredient(keyword) {
      try {
        const { data } = await axiosClient.get(`filter.php?i=${keyword}`)
        this.setIng(data.meals)
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    },
    setMeals(meals) {
      this.meals = meals
    },
    setLetter(meals) {
      this.mealsByLetter = meals
    },
    setIng(meals) {
      this.MealsByIngredient = meals
    },
    setIngredient(ingredient) {
      this.Ingredient = ingredient
    },
  },
  getters: {
    allMeals: (state) => state.meals,
    allMealsByLetter: (state) => state.mealsByLetter,
    allMealsByIngredients: (state) => state.MealsByIngredient,
  },
})
