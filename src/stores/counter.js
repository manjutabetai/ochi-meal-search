import { defineStore } from 'pinia'

export const useStoreCounter = defineStore('counter', {
  state: () => ({
    count: 1,
    count2: 2,
    usesr: {
      name: 'ochi',
    },
  }),
  actions: {
    increment() {
      this.count++
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
