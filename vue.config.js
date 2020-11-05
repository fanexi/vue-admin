// 代码压缩
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const isProduction = process.env.NODE_ENV === "production" ? true : false;
const bundleConfig = require("./dll/bundle-config.json")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  productionSourceMap: false,
  // ...
  css: {
    extract:true,
    sourceMap:false,
    loaderOptions: {
      sass: {
          prependData: `@import "@/assets/css/global.scss";`
      }
  }
  },
  chainWebpack: config => {
    // ============压缩图片 start============
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({ bypassOnDebug: true })
      .end();
    // ============压缩图片 end============
  },
  configureWebpack: config => {
    
    // 生产环境相关配置
    config.plugins.push(
      new HtmlWebpackPlugin({
        // 加载dll文件
        template: './public/index.html',
        vendorJsName: bundleConfig.vendor.js,
      })
    )
    if (isProduction) {
      config.plugins.push(
        new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
          manifest: require("./dll/vendor.dll.manifest.json")
        }),
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true
            }
          },
          sourceMap: false,
          parallel: true,
        })
      );
    }
    // 公共代码抽离
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            test: /node_modules/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: "styles",
            test: /\.(sa|sc|c)ss$/,
            chunks: "all",
            enforce: true
          },
          runtimeChunk: {
            name: "manifest"
          }
        }
      }
    };
  },
  devServer: {
    host: "0.0.0.0",
    port: 9527,
    https: false,
    open: true,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://jego-crm-gateway.base.svc.cluster.local:9006/", // API服务所在IP及端口号
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        pathRewrite: {
          "^/api": "" // 重写路径
        }
      }
    }, // 设置代理
    before: app => { }
  }
};
