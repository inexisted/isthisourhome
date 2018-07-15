"use strict"

const express = require('express');
const path = require('path');

const app = express();


var webpack = require('webpack');
var webpackConfig = require('../webpack-back.config');
var compiler = webpack(webpackConfig);
 
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.path
}));

app.use(require("webpack-hot-middleware")(compiler));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require('./routes')(app);

app.use(express.static(path.resolve('./client/dist')));

app.get('/',function(req,res){

    res.sendFile(path.resolve('./client/dist','index.html'))
    //console.log(path.join(__dirname,'../client/dist','index.html'));
})


app.listen(3000,function(){

    console.log("appddd xsssxxffxffxxxfffxxzzzzxxxff");
})

app.get('/about', function(req, res) {
    res.send("<h1>I am a header.</h1>");
  });

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

console.log("1aafaffffl");
if (module.hot) {
    module.hot.accept()

   }