require('marko/express');
require('marko/node-require');

var express = require('express');
var compression = require('compression');
var isProduction = process.env.NODE_ENV === 'production';

require('lasso').configure({
  plugins: ['lasso-marko'],
  outputDir: __dirname + '/static',
  bundlingEnabled: isProduction,
  minify: isProduction,
  fingerprintsEnabled: isProduction
})

var app = express();
var port = process.env.PORT || 3000;

app.use(compression());
app.use(require('lasso/middleware').serveStatic());
app.get('/', require('./src'));
app.listen(port,function(){
  console.log('listen on port %d', port)
})
