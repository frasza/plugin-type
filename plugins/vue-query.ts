import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'

declare module '@tanstack/vue-query' {
  interface Register {
    defaultError: AxiosError
  }
}

export default defineNuxtPlugin({
  name: 'vue-query',
  parallel: true,
  setup(nuxt) {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    })

    const options: VueQueryPluginOptions = { queryClient }

    nuxt.vueApp.use(VueQueryPlugin, {
      ...options,
      enableDevtoolsV6Plugin: true,
    })

    return {
      provide: {
        queryClient,
      },
    }
  },
})
