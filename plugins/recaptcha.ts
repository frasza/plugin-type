import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin({
  name: 'recaptcha',
  parallel: true,
  async setup({ vueApp, $config }) {
    vueApp.use(VueReCaptcha, {
      siteKey: '',
      loaderOptions: {
        autoHideBadge: true,
        explicitRenderParameters: {
          badge: 'bottomright',
        },
      },
    })
  },
})
