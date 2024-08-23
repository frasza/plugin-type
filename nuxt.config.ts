// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@primevue/nuxt-module',
  ],

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

  eslint: {
    config: {
      standalone: false,
    },
  },

  i18n: {
    vueI18n: '@/i18n.config.ts',
    locales: ['en'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },

  components: [{ path: '~/components/', pathPrefix: false }],

  imports: {
    dirs: ['types', 'stores', 'constants'],
    presets: [
      {
        from: '@tanstack/vue-query',
        imports: ['useQuery', 'useInfiniteQuery', 'useMutation'],
      },
      {
        from: 'primevue/usetoast',
        imports: ['useToast'],
      },
    ],
  },

  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { as: 'Theme', from: '/theme' },
    autoImport: true,
  },

  experimental: {
    typedPages: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  hooks: {
    'prerender:routes': function ({ routes }) {
      routes.clear()
    },
  },

  spaLoadingTemplate: false,

  devtools: { enabled: true },

  compatibilityDate: '2024-07-07',
})
