// server.js
var express        = require('express');
var app            = express();
var httpServer = require("http").createServer(app);
//var io=require('socket.io')(httpServer);
var config = JSON.parse(require('fs').readFileSync('./test.json', 'utf8'));
var port = 3050;

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req,res){
    res.sendFile(__dirname + '/test.json');
});

app.get('/update', function(req,res){
    config=res;
    res.send(config);
    console.log(req.url);
});

httpServer.listen(port);
// http.createServer(function (req, resp) {
// console.log("GET "+code+" "+http.STATUS_CODES[code]+" "+req.url)
// }).listen(3050,"localhost");
console.log('Server available at http://localhost:' + port);
