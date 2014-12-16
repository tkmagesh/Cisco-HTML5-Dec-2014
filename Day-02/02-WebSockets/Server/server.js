var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(connection){
	console.log("A new websocket connection is established");

	var count = 0;
	var timer = setInterval(function(){
		connection.sendText(new Date().toString());
		++count;
		if (count === 10)
			clearInterval(timer);
	}, 5000);
});
server.listen("9090");
console.log("Server listening on port 9090");
