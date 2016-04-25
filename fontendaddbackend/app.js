var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
    res.sendfile('index.html');
});
app.post('/e', function (req, res) {
  console.log(req.body);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
