var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

const webpack = require('webpack');
const path = require('path');
module.exports = {
    name: 'front',
    mode: 'development',
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:9000', // WebpackDevServer host and port

        './client/index.js'],
    output: {
        filename: 'bundle-front.js',
        path: path.resolve( __dirname ,'./client/dist/'),
      

    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.html$/,
            loader: "raw-loader"
         }]
    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app',
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin(),
        new WriteFilePlugin()
    ],   
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve( __dirname , './client/dist'),
        //publicPath: path.resolve( __dirname , './client/dist'),
        hot: true,
        inline: true,
        port: 9000,
        proxy: {
            '/api': 'http://localhost:3000/'
          }

      }

};