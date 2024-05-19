<script setup>
import { defineProps } from 'vue'

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 text-white bg-red-500 rounded"
      >youtube</a
    >
  </div>
</template>
