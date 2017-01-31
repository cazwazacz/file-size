var express = require('express')
var multer  = require('multer')
var bodyParser = require('body-parser')
var upload = multer({ dest: 'uploads/' })


var app = express()
var filesize;


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.get('/filesize', function(req, res){
  res.json({sizeInBytes: filesize})
})
app.post('/', upload.single('upl'), function (req, res) {
  filesize = req.file.size
  res.redirect('/filesize')
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('App listening on port ' + port)
})
