
// Main Entry Point of WGEngine

// Setting
var PORT = process.env.PORT || 8080;

// Create HTTP Web Server
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(Req, res) {
	res.sendFile(__dirname + '/html/index.html');
});

http.listen(PORT, function() {
	console.log('listening on *:3000');
});
