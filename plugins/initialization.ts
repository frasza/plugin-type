export default defineNuxtPlugin({
  name: 'init',
  parallel: true,
  dependsOn: ['http'],
  async setup({ $config }) {},
})
