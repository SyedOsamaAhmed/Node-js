const EventEmitter = require('events');

const customEvent = new EventEmitter();//instance for event class

// these events can be called as many times for different logics. order matters.
customEvent.on('response',(name,age)=>{
  console.log(`data recieved: ${name} age:${age}`)
})


customEvent.emit('response','Osama',23);