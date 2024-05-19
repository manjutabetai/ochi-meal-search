<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStoreProducts } from '../stores/products'
import { useStoreCart } from '../stores/cart'
import ShoppingCart from '../components/ShoppingCart.vue'
const { products } = storeToRefs(useStoreProducts())
const { getProducts } = useStoreProducts()
const { addCart } = useStoreCart()

onMounted(() => {
  getProducts()
})
</script>

<template>
  <ul>
    <li v-for="product in products" v-bind:key="product.id">
      {{ product.title }} - ¥{{ product.price.toLocaleString() }}
      <button
        class="bg-blue-500"
        type="button"
        :disabled="!product.inventory"
        @click="addCart(product)"
      >
        add
      </button>
    </li>
  </ul>
  <ShoppingCart />
</template>
