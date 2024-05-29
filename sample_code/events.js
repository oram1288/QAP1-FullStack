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
