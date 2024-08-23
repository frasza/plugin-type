// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    strict: true,
    typeCheck: 'build',
    tsConfig: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
  },

  components: [{ path: '~/components/', pathPrefix: false }],

  imports: {
    dirs: ['types', 'stores', 'constants'],
  },

  experimental: {
    typedPages: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  spaLoadingTemplate: false,

  devtools: { enabled: true },

  compatibilityDate: '2024-07-07',
})
