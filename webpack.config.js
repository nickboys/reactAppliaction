/**
 * Created by JianHuangsh on 2017/12/18.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [__dirname,'./index.js'],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./", //本地服务器所加载的页面所在的目录
        historyApiFallback: false, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //设置为true，当源文件改变时会自动刷新页面
        port: 8080, //设置默认监听端口，如果省略，默认为"8080"
    },
    module: {
        loaders: [
            {
                test:  /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            }
        ],
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};