<template>
  <header class="bg-white mb-2 shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center px-4 h-full ransition-colors duration-500 hover:bg-yellow-300"
      >Home</router-link
    >
    <div class="flex items-center">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors duration-500 hover:bg-yellow-300"
        >byName</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors duration-500 hover:bg-yellow-300"
        >byLetter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors duration-500 hover:bg-yellow-300"
        >byIngredients</router-link
      >
    </div>
  </header>
</template>
