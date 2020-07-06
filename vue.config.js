module.exports = {
    // ...
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/global.scss";`
            }
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 9527,
        https: false,
        open: true,
        hotOnly: false,
        // proxy: {
        //     '/api': {
        //         target: '', // API服务所在IP及端口号
        //         changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        //         pathRewrite: {
        //             '^/api': '/api', // 重写路径
        //         },
        //     },
        // }, // 设置代理
        before: app => {}
    }
};
