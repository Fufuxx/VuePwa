// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

//Getting static folder
app.use(express.static(__dirname + '/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// app.get('*', function(req, res){
//     res.redirect('/');
// });

// Start the app by listening on the default
// Heroku port
const port = process.env.PORT || 3000;
app.listen(port);