const eventEmitter = require("events");
const customEmitter = new eventEmitter();

/**
 * first we import events from Node js and then instantiate thee class and use methods
 * same event can be listened to multiple times
 * event order matters
 */
customEmitter.on("response", (name, id) =>
  console.log(`data recieved: Name: ${name} id: ${id}`)
);

customEmitter.emit("response", "Osama", 26);
