const events = require("events");

// Custom event emitter
const eventEmitter = new events.EventEmitter();

// Event handler
eventEmitter.on("customEvent", (message) => {
  console.log(`Event received: ${message}`);
});

// Emit a custom event
eventEmitter.emit(
  "customEvent",
  "Hello, this is a custom event made for QAP1 FullStack!"
);

// EVENTS:
// Every action on a computer is an event. Like when a connection is made or a
// file is opened. Node.js has a built-in module, called "Events", where you
// can create, fire, and listen for your own events. To include the built-in
// events module use have to use the require() method. You can assign event
// handlers to your own events with the eventEmitter object by using the emit() method.
