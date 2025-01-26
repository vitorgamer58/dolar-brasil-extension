import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRatesStore = defineStore('rates', () => {
  const rates = ref({})

  function addRate(key, value = {}) {
    rates.value[key] = { ...value, timestamp: new Date() }
  }

  return { rates, addRate }
})
