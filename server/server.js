const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/reviews/', function(req,res) {
  var newurl = 'http://localhost:3001/reviews' + req.url;
  request(newurl).pipe(res);
});

app.use('/experience/availableDate/', function(req,res) {
  var newurl = 'http://localhost:3002/experience/availableDate' + req.url;
  request(newurl).pipe(res);
});

app.use('/similar', function(req,res) {
  var newurl = 'http://localhost:3003/similar' + req.url;
  request(newurl).pipe(res);
});

app.use('/images/', function(req,res) {
  var newurl = 'http://localhost:3004/images' + req.url;
  request(newurl).pipe(res);
});

app.use('/img/', function(req,res) {
  var newurl = 'http://localhost:3004/img' + req.url;
  request(newurl).pipe(res);
});

app.use('/details', function(req,res) {
  var newurl = 'http://localhost:3005/details' + req.url;
  request(newurl).pipe(res);
  console.log(newurl);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});