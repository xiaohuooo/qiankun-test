const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8082,
    proxy: {
      "/api1": {
        // 匹配所有以'/api1' 开头的请求路径
        target: "http://localhost:8080/", // 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { "^/api1": "" },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: name+'name',//指定构建生成的库的名称
      libraryTarget: "umd",//指定构建生成的库的目标格式，这里是 umd
      umdNamedDefine: true,//如果设置为 true，则在加载模块时可以使用命名空间进行引用，否则使用匿名模块。
    },
    resolve: {
      //配置路径别名
      alias: {
        utils: "@/utils",
      },
    },
  },
});
