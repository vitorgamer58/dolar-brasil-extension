<script>
export default {
  props: {
    tickerName: String,
    lastPrice: Number,
    highPrice: Number,
    lowPrice: Number,
    priceChange: Number
  }
}
</script>

<template>
  <h2>{{ tickerName }}</h2>
  <p>
    R$
    {{
      lastPrice.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }}
  </p>
  <p>
    Máxima: R$
    {{
      highPrice.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }}
  </p>
  <p>
    Mínima: R$
    {{
      lowPrice.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }}
  </p>
</template>
