
// Main Entry Point of WGEngine

// Setting
var PORT = process.env.PORT || 8080;

// PostgreSQL
const { Client } = require('pg');
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: true,
});

client.connect();

client.query('SELECT * FROM USER;', function(err, res) {
	if(err) throw err;
	for(let row of res.rows) {
		console.log(JSON.stringify(row));
	}
	client.end();
});

// Create HTTP Web Server
var express	= require('express');
var app 	= express();
var http 	= require('http').Server(app);
var io 		= require('socket.io')(http);


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/html/index.html');
});
app.use('/static', express.static('static'));

io.on('connection', function(socket) {
	console.log('user connected');
	socket.on('CHAT_MESSAGE', function(msg) {
		io.emit('CHAT_MESSAGE', msg);
	});
});

http.listen(PORT, function() {
	console.log('listening on *:3000');
});
