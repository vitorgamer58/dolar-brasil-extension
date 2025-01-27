import axios from 'axios'

class ExchangeClient {
  constructor() {
    this._axios = axios.create({
      baseURL: 'https://data-api.binance.vision/api/v3'
    })
  }

  async get24hSymbol(symbol) {
    return await this._axios
      .get('/ticker/24hr', {
        params: {
          symbol
        }
      })
      .then(({ data }) => data)
  }
}

export default ExchangeClient
