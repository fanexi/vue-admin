const path = require("path");
const webpack = require("webpack");
const AssetsPlugin = require("assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dllPath = path.resolve(__dirname, "dll");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    vendor: [
      "vue/dist/vue.esm.js",
      "vuex",
      "element-ui",
      "vue-router",
      "axios",
      "js-cookie",
      "vue-lazyload",
      "echarts"
    ]
  },
  output: {
    filename: "[name]-[hash:6].dll.js", // 生成vue.dll.js
    path: dllPath,
    library: "[name]_[hash:6]"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 加载dll文件
      template: './public/index.html',
    }),
    new webpack.DllPlugin({
      name: "[name]_[hash:6]",
      // manifest.json 描述动态链接库包含了哪些内容
      path: path.join(dllPath, "[name].dll.manifest.json")
    }),
    new AssetsPlugin({
      filename: "bundle-config.json",
      path: dllPath
    }),
  ]
};