<script setup>
import Navbar from '../components/NavBar.vue'
</script>

<template>
  <div class="bg-gray-300 p-2">
    <navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>
