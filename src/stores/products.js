import { defineStore } from 'pinia'
import shop from '../api/shop.js'

export const useStoreProducts = defineStore('products', {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      console.log('getProduct🚀')
      shop.getProducts((products) => (this.products = products))
    },
    decrementInventory(productId) {
      const product = this.products.find((product) => product.id === productId)
      product.inventory--
    },
  },
})
