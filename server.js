const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const request = require('request');

const Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.TOKEN_SECRET
});

app = express();

app.use(serveStatic(__dirname + "/dist"));

// This gives me the ability to call req.body at any point in order to get the content of the body of any request
app.use(function(req, res, next){
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});

app.get('/tweets', function(req, res, next){
  let query = req.query.search+' -Filter:links';
  console.log('Query -- '+query);
  client.get('search/tweets', { q : query, count : 50, result_type: 'recent' }, 
      function(error, tweets, response) {
          if(error){
              console.log(error);
              res.json({ error: true, data: error });
          }
          else{
              res.json({ error: false, tweets: tweets });
          }
  });
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('server started '+ port);