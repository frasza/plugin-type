import axios from 'axios'
import { stringify } from 'qs'

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

    http.interceptors.request.use(
      (config) => {
        config.paramsSerializer = {
          serialize: (params) =>
            stringify(params, {
              arrayFormat: 'brackets',
              encode: false,
              skipNulls: true,
              filter: (_, value) => value || undefined,
            }),
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    http.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        return Promise.reject(error)
      },
    )

    return {
      provide: {
        http,
      },
    }
  },
})
