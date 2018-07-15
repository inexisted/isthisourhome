const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    name: 'back',
    mode: 'development',
    target: "node",
    watch: true,
   
    entry: ['webpack/hot/dev-server',
    'webpack-hot-middleware/client',
      './server/server.js']
    ,
    output: {
      path: path.resolve(__dirname, 'server','dist'),
      filename: "bundle-back.js",
      libraryTarget: 'commonjs2',

    },
  
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
  ],  
    devtool: 'sourcemap',
     externals: [nodeExternals({
        whitelist: ['webpack-hot-middleware/client','webpack/hot/dev-server','webpack-dev-server/client?http://localhost:9000','jquery', /^lodash/,'webpack/hot/poll?1000','webpack/hot/signal','webpack/hot/dev-server','webpack-dev-server/client?http://localhost:3000/']}
     )] ,
 
};