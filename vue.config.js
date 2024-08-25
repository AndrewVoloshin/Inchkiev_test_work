const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/index.scss"; @import "@/assets/styles/mixins.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/Inchkiev_test_work/' : '/'
}
