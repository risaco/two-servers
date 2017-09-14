// // Here we require/import the HTTP module
// var http = require("http");

// // Here we define a port to listen to
// var PORT = 8080;

// // Here we create a generic function to handle requests and responses
// function handleRequest(request, response) {
	
//   // The below statement is triggered (client-side) when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// // Here we use the Node HTTP package to create our server.
// // We then pass it the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // Here we start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

//   // The below statement is triggered (server-side) when a user visits the PORT URL
//   console.log("Server listening on: http://localhost:%s", PORT);

// });

var http = require('http');

var goodThings = ["are very nice to look at", "are so smart", "smell so nice", "have beautiful eyes"];
var badThings = ["stink", "need a breathmint", "type like you have hammers for fingers", "should be offended looking in a mirror"];

var count = 0;

var thing = "";

http.createServer(onRequest_a).listen(7000);
http.createServer(onRequest_b).listen(7500);

function onRequest_a (req, res) {

	sayThing(goodThings);

  res.write('You ' + thing + "!\n");


  res.end();
}

function onRequest_b (req, res) {


  sayThing(badThings);

  res.write('You ' + thing + "!\n");
  res.end();
}

function sayThing(arr){

	thing = arr[Math.floor(Math.random() * arr.length)];
}