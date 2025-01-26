<script>
import ExchangeClient from '@/clients/exchange'
import ShowTicker from '@/components/ShowTicker.vue'

export default {
  components: {
    ShowTicker
  },
  data() {
    return {
      usdt: {
        tickerName: 'Dólar',
        lastPrice: 0,
        highPrice: 0,
        lowPrice: 0
      }
    }
  },
  methods: {
    async fetchUsdt24h() {
      const exchangeClient = new ExchangeClient()

      const usdt24h = await exchangeClient.get24hSymbol('USDTBRL')

      this.usdt.lastPrice = Number(usdt24h?.lastPrice)
      this.usdt.highPrice = Number(usdt24h?.highPrice)
      this.usdt.lowPrice = Number(usdt24h?.lowPrice)
    }
  },
  mounted() {
    this.fetchUsdt24h()
  }
}
</script>

<template>
  <main>
    <h1>Teste</h1>
    <ShowTicker v-bind="usdt"></ShowTicker>
  </main>
</template>
