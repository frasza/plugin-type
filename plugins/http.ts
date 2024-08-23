import axios from 'axios'

export default defineNuxtPlugin({
  name: 'http',
  parallel: true,
  setup() {
    const http = axios.create({
      baseURL: '',
      headers: {
        Accept: 'application/json',
      },
    })

    return {
      provide: {
        http,
      },
    }
  },
})
