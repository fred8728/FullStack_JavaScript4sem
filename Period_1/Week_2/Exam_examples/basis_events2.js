//Custom event example from here https://www.dev2qa.com/node-js-event-loop-and-custom-event-example/

const EventEmitter = require("events"); 

// Create event emitter object.
const emitter = new EventEmitter(); //object of eventmitter

// Create connect event process function.
var connect_handler = function connected() {
  console.log("Connect success.");

// Trigger receive_data event
emitter.emit("receive_data");
};

// Bind custom event connect with connect_handler process function.
emitter.on("connect", connect_handler);

// Create receive data event process function.
var data_handler = function() {
  console.log("Data received.");
};

// Bind custom event receive_data with data_receive_handler function.
emitter.on("receive_data", data_handler);

// Trigger connect event.
emitter.emit("connect");

console.log("Code exit");
