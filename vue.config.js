// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    // ...
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/global.scss";`
            }
        },
      
    },
    chainWebpack: config => {
        // ============压缩图片 start============
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })
            .end();
        // ============压缩图片 end============
    },
    configureWebpack: config => {
        const isProduction =
            process.env.NODE_ENV === 'production' ? true : false;
        if (isProduction) {
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
                'console.log'
            ];
        }

        // 生产环境相关配置
        if (isProduction) {
            // 代码压缩
            // ..................
            // gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css'];
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            );
        }
        // 公共代码抽离
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        test: /node_modules/,
                        name: 'vendor',
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    },
                    common: {
                        chunks: 'all',
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: 'common',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(sa|sc|c)ss$/,
                        chunks: 'all',
                        enforce: true
                    },
                    runtimeChunk: {
                        name: 'manifest'
                    }
                }
            }
        };
    },
    devServer: {
        host: '0.0.0.0',
        port: 9527,
        https: false,
        open: true,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:0798', // API服务所在IP及端口号
                changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
                pathRewrite: {
                    '^/api': '', // 重写路径
                },
            },
        }, // 设置代理
        before: app => {}
    }
};
