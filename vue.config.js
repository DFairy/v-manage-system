const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    baseUrl: './',
    chainWebpack(config) {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('common', resolve('src/common'))
        config.plugin('context')
            .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
    },
    /**
     * 打包后没有map
     */
    productionSourceMap: false,
    /**
     * 下面的这段代码是删除console.log插件
     */
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] //移除console
                        }
                    }
                })
            ]
        }
    }
}