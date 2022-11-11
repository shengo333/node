let express = require('express');

let app = express();

app.get('/', function (req, res){
  res.send('this is home page')
});

app.get('/contact', function (req, res){
  res.send('this is contact page')
});

app.listen(3000);