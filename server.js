var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();

app.use(serveStatic(__dirname + "/dist"));

app.get('*', function(req, res){
  res.redirect('/');
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('server started '+ port);