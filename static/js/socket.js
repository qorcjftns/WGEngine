
// WARNING: This is a client-side js file

$(function() {
	var socket = io();
	$('form').submit(function() {
		socket.emit('CHAT_MESSAGE', $('#message-controller').val());
		return false;
	});
	socket.on('CHAT_MESSAGE', function(msg) {
		$('#message-log').append($('<li>').text(msg));
	});

});
