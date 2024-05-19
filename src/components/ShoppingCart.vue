<script setup>
import { storeToRefs } from 'pinia'
import { useStoreCart } from '../stores/cart'

const { items, total } = storeToRefs(useStoreCart())
</script>

<template>
  <h1 class="font-bold p-1">カート</h1>
  <p v-show="!items.length">カートはからです</p>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.title }}- ¥{{ item.price.toLocaleString() }} x
      {{ item.quantity }}
    </li>
  </ul>
  <h3>合計は{{ total.toLocaleString() }}</h3>
</template>
