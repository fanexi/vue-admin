module.exports = {
  // ...
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/global.scss";`,
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 9527,
    https: false,
    open: true,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {},
    },
};
