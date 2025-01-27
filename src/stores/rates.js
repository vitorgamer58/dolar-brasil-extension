import { defineStore } from 'pinia'

const fiveMinutesInMs = 5 * 60 * 1000

export const useRatesStore = defineStore(
  'rates',
  {
    state: () => ({
      pairs: {}
    }),
    getters: {
      getRate(state) {
        return (key) => {
          const rate = state?.pairs[key]

          if (!rate) return undefined

          if (Date.now() - rate.timestamp > fiveMinutesInMs) {
            return undefined
          }

          return rate
        }
      }
    },
    actions: {
      addRate(key, value = {}) {
        this.pairs[key] = { ...value, timestamp: Date.now() }
      }
    }
  },
  {
    persist: true
  }
)
