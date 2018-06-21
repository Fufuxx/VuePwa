var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

const Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.TOKEN_SECRET
});

app = express();

app.use(serveStatic(__dirname + "/dist"));

app.get('/tweets', function(req, res){
  var query = 'catena media';
  client.get('search/tweets', { q : query, count : 100, result_type: 'recent' }, 
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