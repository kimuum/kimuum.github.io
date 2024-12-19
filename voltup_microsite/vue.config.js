const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/':{
  //       "target":'https://script.google.com',
  //       "pathRewrite":{'^/':''},
  //       "changeOrigin":true,
  //       "secure":false
  //     }
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        Scss: path.join(__dirname, 'src/assets/scss'),
        Image: path.join(__dirname, 'src/assets/images')
      }
    }
  },
  css: {
    sourceMap:true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~Scss/abstracts/_variables.scss";
          @import "~Scss/abstracts/_mixins.scss";
          @import "~Scss/abstracts/_functions.scss";
          `
      }
    }
  }
})
