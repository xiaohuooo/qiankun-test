const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api1': { // 匹配所有以'/api1' 开头的请求路径
          target: 'http://localhost:8080/', // 代理目标的基础路径
          changeOrigin: true,
          pathRewrite: {'^/api1':''}
      }
  },
},
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        'utils': '@/utils',
      }
    }
  }
})
