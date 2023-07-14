const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");
module.exports = defineConfig({
  devServer: {
    port: process.env.VUE_APP_PORT,
    proxy: {
      "/api": {
        // 匹配所有以'/api1' 开头的请求路径
        target: "http://124.222.85.215:3006", // 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { "^/api": "/api" },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        utils: "@/utils",
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      //jsonpFunction: `webpackJsonp_${name}` // webpack5废弃jsonpFunction
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
